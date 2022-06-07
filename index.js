'use strict';

const axios = require('axios').default;
const mdTable = require('markdown-table');
const fs = require('fs');

let maintainers = JSON.parse(fs.readFileSync('maintainers.json'));

let adapterList = [];

async function collectRepos(adapterList, page) {
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
}

collectRepos(adapterList, 1)
    .then(adapterList => {
        let outPutTable = [];

        outPutTable.push(['Adapter', 'Beta', 'Stable', 'Installed', 'Maintainer']);

        for (const a in adapterList) {
            const adapter = adapterList[a];

            const adapterName = adapter.name.replace('ioBroker.', '').toLowerCase();
            const packageName = adapter.name.toLowerCase();

            outPutTable.push([
                `[${adapter.name}](${adapter.html_url})`,
                `![Beta](https://img.shields.io/npm/v/${packageName}.svg?color=red&label=beta)`,
                `![Stable](http://iobroker.live/badges/${adapterName}-stable.svg)`,
                `![Installed](http://iobroker.live/badges/${adapterName}-installed.svg)`,
                maintainers?.[adapter.name] ? maintainers[adapter.name].map(m => `[${m}](https://github.com/${m}/)`).join(', ') : `-`
            ]);
        }

        console.log(mdTable(outPutTable));
    });
