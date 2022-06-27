'use strict';

const mdTable = require('markdown-table');
const utils = require('./lib/utils');
const fs = require('fs');

let maintainers = JSON.parse(fs.readFileSync('maintainers.json'));

let adapterList = [];

utils.collectRepos(adapterList)
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
