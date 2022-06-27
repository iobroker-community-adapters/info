'use strict';

const axios = require('axios').default;

async function collectRepos(adapterList, page) {
    if (!page) {
        page = 1;
    }

    const repoResponse = await axios.get(`https://api.github.com/users/iobroker-community-adapters/repos?sort=full_name&per_page=100&page=${page}`);

    if (repoResponse.status === 200 && repoResponse.data.length > 0) {
        const repoJSON = repoResponse.data;

        for (const i in repoJSON) {
            const adapter = repoJSON[i];

            if (adapter.name.startsWith('ioBroker.') && !adapter.archived && adapter.size > 0) {
                adapterList.push(adapter);
            }
        }

        return adapterList.concat(await collectRepos(adapterList, ++page));
    } else {
        return [];
    }
};

module.exports.collectRepos = collectRepos;