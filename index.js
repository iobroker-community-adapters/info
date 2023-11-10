'use strict';

const Mustache = require('mustache');
const utils = require('./lib/utils');
const fs = require('node:fs');

const MUSTACHE_TEMPLATE = './README.mustache';
const maintainers = JSON.parse(fs.readFileSync('maintainers.json'));

if (process.argv.indexOf('--update-readme') > -1) {
    console.log('Updating README.md');

    utils.collectRepos()
        .then(adapterList => {
            let templateData = {
                generatedAt: new Date().toISOString(),
                adapters: [],
            };

            for (const adapter of adapterList) {
                console.log (`    processing adapter ${adapter.name}`);
                const adapterName = adapter.name.replace('ioBroker.', '').toLowerCase();
                const packageName = adapter.name.toLowerCase();

                let maint = '-';
                if (maintainers?.[adapter.name] === '!') {
                    maint = `![Need Maintanance](https://img.shields.io/badge/needs-MAINTENANCE-red)`;
                } else if (maintainers[adapter.name] === 'DEPRECATED') {
                    maint = `![DEPRECATED](https://img.shields.io/badge/DEPRECATED-black)`;
                } else if (maintainers?.[adapter.name]) {
                    maint = maintainers[adapter.name].map(m => `[${m}](https://github.com/${m}/)`).join(', ');
                }

                templateData.adapters.push({
                    name: adapter.name,
                    url: adapter.html_url,
                    adapterName: adapterName,
                    packageName: packageName,
                    maintainer: maint,
                });
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