'use strict';

const Mustache = require('mustache');
const utils = require('./lib/utils');
const fs = require('node:fs');

const MUSTACHE_TEMPLATE = './README.mustache';
const maintainers = JSON.parse(fs.readFileSync('maintainers.json'));

if (process.argv.indexOf('--update-readme') > -1) {
    console.log('Updating README.md');

    const githubToken = process.env.GITHUB_TOKEN;

    Promise.all([utils.collectCommunityRepos(), utils.getBetaRepository()])
        .then(async values => {
            const [adapterList, betaRepo] = values;

            console.log('Fetching issue/PR stats from GitHub...');
            const repoStats = await utils.getRepoStats(adapterList, githubToken);

            const templateData = {
                generatedAt: new Date().toISOString(),
                adapters: [],
                adaptersUnlisted: [],
            };

            for (const adapter of adapterList) {
                console.log (`    processing adapter ${adapter.name}`);
                const adapterName = adapter.name.replace('ioBroker.', '').toLowerCase();

                let maint = '-';
                if (maintainers?.[adapter.name] === '!') {
                    maint = `![Need Maintanance](https://img.shields.io/badge/needs-MAINTENANCE-red)`;
                } else if (maintainers[adapter.name] === 'DEPRECATED') {
                    maint = `![DEPRECATED](https://img.shields.io/badge/DEPRECATED-black)`;
                } else if (maintainers?.[adapter.name]) {
                    maint = maintainers[adapter.name].map(m => `[${m}](https://github.com/${m}/)`).join(', ');
                }

                const stats = repoStats[adapter.name] ?? { issues: 0, prs: 0, dependabotPRs: 0, testConclusion: null };
                const nonBotPRs = stats.prs - stats.dependabotPRs;
                const prDisplay = nonBotPRs > 0 ? `${stats.prs} (${nonBotPRs})` : String(stats.prs);
                const testStatus = stats.testConclusion === 'SUCCESS' ? '✅'
                    : stats.testConclusion === 'FAILURE' ? '❌'
                    : stats.testConclusion === 'TIMED_OUT' ? '⏱️'
                    : '⚪';

                if (betaRepo?.[adapterName]) {
                    const adapterData = betaRepo[adapterName];
                    // installations: prefer 'stat' field; fall back to other known field names
                    const installs = adapterData?.stat ?? adapterData?.installs ?? adapterData?.downloads ?? '';

                    templateData.adapters.push({
                        name: adapter.name,
                        title: String(adapterData?.titleLang?.en ?? adapterData?.title).trim(),
                        icon: adapterData.extIcon,
                        url: adapter.html_url,
                        adapterName: adapterName,
                        maintainer: maint,
                        version: {
                            beta: adapterData.version ?? '??',
                            betaAge: Math.ceil(Math.abs(Date.now() - new Date(adapterData.versionDate).getTime()) / (1000 * 60 * 60 * 24)),
                            stable: adapterData?.stable ?? '??',
                        },
                        installations: installs,
                        openIssues: stats.issues,
                        openPRs: prDisplay,
                        testStatus: testStatus,
                    });
                } else {
                    templateData.adaptersUnlisted.push({
                        name: adapter.name,
                        url: adapter.html_url,
                        adapterName: adapterName,
                        maintainer: maint,
                        openIssues: stats.issues,
                        openPRs: prDisplay,
                        testStatus: testStatus,
                    });
                }
            }

            if (templateData.adapters.length > 0) {
                try {
                    // Update README
                    const template = fs.readFileSync(MUSTACHE_TEMPLATE);
                    const output = Mustache.render(template.toString(), templateData);
                    fs.writeFileSync('README.md', output);

                    console.log('generated README...');
                } catch (err) {
                    console.error(`Unable to render mustache file "${MUSTACHE_TEMPLATE}": ${err}`);
                }

                console.log('done.');
            }
        });
} else if (process.argv.indexOf('--check-npm-permissions') > -1) {
    utils.collectRepos()
        .then(adapterList => {
            // TODO
        });
}