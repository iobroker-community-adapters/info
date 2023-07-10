'use strict';

const mdTable = require('markdown-table');
const utils = require('./lib/utils');
const fs = require('fs');

let maintainers = JSON.parse(fs.readFileSync('maintainers.json'));

if (process.argv.indexOf('--update-readme') > -1) {
    console.log('Updating README.md');

    utils.collectRepos()
        .then(adapterList => {
            let outPutTable = [];

            outPutTable.push(['Adapter', 'Beta', 'Stable', 'Installed', 'Teststatus', 'Maintainer']);

            for (const a in adapterList) {
                const adapter = adapterList[a];
                console.log ('    processing adapter '+adapter.name+' ('+a+')');
                const adapterName = adapter.name.replace('ioBroker.', '').toLowerCase();
                const packageName = adapter.name.toLowerCase();

                let maint = '-';
                if ( maintainers?.[adapter.name] === '!' )
                    maint = `![Need Maintanance](https://img.shields.io/badge/needs-MAINTENANCE-red)`;
                else if ( maintainers[adapter.name]=='DEPRECATED' )
                    maint = `![DEPRECATED](https://img.shields.io/badge/DEPRECATED-black)`;
                else if ( maintainers?.[adapter.name] )
                    maint = maintainers[adapter.name].map(m => `[${m}](https://github.com/${m}/)`).join(', ');

                outPutTable.push([
                    `[${adapter.name}](${adapter.html_url})`,
                    `![Beta](https://img.shields.io/npm/v/${packageName}.svg?color=red&label=beta)`,
                    `![Stable](http://iobroker.live/badges/${adapterName}-stable.svg)`,
                    `![Installed](http://iobroker.live/badges/${adapterName}-installed.svg)`,
                    `![Test&Release](https://github.com/iobroker-community-adapters/iobroker.${adapterName}/workflows/Test%20and%20Release/badge.svg)`,
                    `${maint}`
                ]);
            }

            if (outPutTable.length > 0) {
                // Update README
                let readmeFileContents = String(fs.readFileSync('README.md'));

                // Remove old markdown table and append new table
                readmeFileContents = readmeFileContents.substring(0, readmeFileContents.indexOf('| Adapter'));
                readmeFileContents += mdTable(outPutTable);

                fs.writeFileSync('README.md', readmeFileContents);

                console.log('done.');
            }
        });
} else if (process.argv.indexOf('--check-npm-permissions') > -1) {
    utils.collectRepos()
        .then(adapterList => {
            // TODO
        });
}