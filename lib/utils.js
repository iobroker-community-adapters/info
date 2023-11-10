'use strict';

const axios = require('axios').default;

async function getBetaRepository() {
    const repoResponse = await axios.get('http://download.iobroker.net/sources-dist-latest.json', { responseType: 'json', timeout: 5000 });
    if (repoResponse.status === 200) {
        return repoResponse.data;
    }

    return null;
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
};

module.exports = {
    getBetaRepository: getBetaRepository,
    collectCommunityRepos: collectCommunityRepos,
};
