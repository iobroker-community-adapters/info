'use strict';

const axios = require('axios').default;

async function getBetaRepository() {
    const repoResponse = await axios.get('https://download.iobroker.net/sources-dist-latest.json', { responseType: 'json', timeout: 5000 });
    if (repoResponse.status === 200) {
        return repoResponse.data;
    }

    return null;
}

async function getInstallStats() {
    try {
        const response = await axios.get('https://www.iobroker.net/data/statistics.json', { responseType: 'json', timeout: 10000 });
        if (response.status === 200) {
            return response.data?.adapters ?? {};
        }
    } catch (err) {
        console.warn(`Failed to fetch install stats: ${err.message}`);
    }
    return {};
}

async function collectCommunityRepos(adapterList, page) {
    if (!adapterList) {
        adapterList = [];
    }

    if (!page) {
        page = 1;
    }

    const repoResponse = await axios.get(`https://api.github.com/users/iobroker-community-adapters/repos?sort=full_name&per_page=100&page=${page}`, { responseType: 'json', timeout: 5000 });

    if (repoResponse.status === 200 && repoResponse.data.length > 0) {
        const repoJSON = repoResponse.data;

        for (const i in repoJSON) {
            const adapter = repoJSON[i];

            if (adapter.name.startsWith('ioBroker.') && !adapter.archived /*&& adapter.size > 0*/) {
                adapterList.push(adapter);
            }
        }

        return (await collectCommunityRepos(adapterList, ++page));
    } else {
        return adapterList;
    }
}

async function getRepoStats(adapterList, token) {
    const headers = { 'Content-Type': 'application/json' };
    if (token) {
        headers['Authorization'] = `token ${token}`;
    }

    const stats = {};
    const batchSize = 50;
    const restHeaders = token ? { Authorization: `token ${token}` } : {};

    // Batch GraphQL queries to get open issue + PR counts
    for (let i = 0; i < adapterList.length; i += batchSize) {
        const batch = adapterList.slice(i, i + batchSize);
        const query = `{
            ${batch.map((r, j) => `
                r${j}: repository(owner: "iobroker-community-adapters", name: "${r.name}") {
                    openIssues: issues(states: OPEN) { totalCount }
                    openPRs: pullRequests(states: OPEN) { totalCount }
                }
            `).join('\n')}
        }`;

        try {
            const response = await axios.post(
                'https://api.github.com/graphql',
                { query },
                { headers, timeout: 30000 }
            );

            if (response.data?.errors) {
                console.warn('GraphQL errors:', JSON.stringify(response.data.errors));
            }

            batch.forEach((repo, j) => {
                const data = response.data?.data?.[`r${j}`];
                stats[repo.name] = {
                    issues: data?.openIssues?.totalCount ?? 0,
                    prs: data?.openPRs?.totalCount ?? 0,
                    dependabotPRs: 0,
                    testConclusion: null,
                };
            });
        } catch (err) {
            console.warn(`GraphQL batch ${i / batchSize + 1} failed: ${err.message}`);
            batch.forEach(repo => {
                stats[repo.name] = { issues: 0, prs: 0, dependabotPRs: 0, testConclusion: null };
            });
        }
    }

    // Fetch latest test-and-release workflow run conclusion per repo.
    // Uses the REST runs endpoint so it finds the most recent run regardless
    // of which commit triggered it (checkSuites on HEAD misses runs that were
    // triggered on a PR branch commit rather than the merge commit).
    const concurrency = 10;
    for (let i = 0; i < adapterList.length; i += concurrency) {
        const batch = adapterList.slice(i, i + concurrency);
        await Promise.all(batch.map(async repo => {
            try {
                const url = `https://api.github.com/repos/iobroker-community-adapters/${repo.name}/actions/workflows/test-and-release.yml/runs?per_page=1&status=completed`;
                const response = await axios.get(url, { headers: restHeaders, timeout: 10000 });
                const conclusion = response.data?.workflow_runs?.[0]?.conclusion ?? null;
                if (stats[repo.name]) {
                    stats[repo.name].testConclusion = conclusion;
                }
            } catch (err) {
                console.warn(`Workflow status fetch failed for ${repo.name}: ${err.message}`);
            }
        }));
    }

    // One paginated search to count all dependabot PRs across the org
    let page = 1;
    while (true) {
        try {
            const response = await axios.get(
                `https://api.github.com/search/issues?q=is:pr+is:open+org:iobroker-community-adapters+author:app/dependabot&per_page=100&page=${page}`,
                { headers: token ? { Authorization: `token ${token}` } : {}, timeout: 15000 }
            );

            for (const item of (response.data?.items ?? [])) {
                const repoName = item.repository_url?.split('/').pop();
                if (repoName && stats[repoName]) {
                    stats[repoName].dependabotPRs++;
                }
            }

            if ((response.data?.items?.length ?? 0) < 100) break;
            page++;
        } catch (err) {
            console.warn(`Dependabot search page ${page} failed: ${err.message}`);
            break;
        }
    }

    return stats;
}

module.exports = {
    getBetaRepository: getBetaRepository,
    collectCommunityRepos: collectCommunityRepos,
    getRepoStats: getRepoStats,
    getInstallStats: getInstallStats,
};
