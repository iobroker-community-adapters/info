'use strict';

const Mustache = require('mustache');
const utils = require('./lib/utils');
const fs = require('node:fs');

const MUSTACHE_TEMPLATE = './README.mustache';
const maintainers = JSON.parse(fs.readFileSync('maintainers.json'));

if (process.argv.indexOf('--update-readme') > -1) {
    console.log('Updating README.md');

    Promise.all([utils.collectCommunityRepos(), utils.getBetaRepository()])
        .then(values => {
            const [adapterList, betaRepo] = values;

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

                if (betaRepo?.[adapterName]) {
                    const adapterData = betaRepo[adapterName];

                    templateData.adapters.push({
                        name: adapter.name,
                        title: String(adapterData?.titleLang?.en ?? adapterData?.title).trim(),
                        icon: adapterData.extIcon,
                        url: adapter.html_url,
                        adapterName: adapterName,
                        maintainer: maint,
                        version: {
                            beta: adapterData.version ?? '??',
                            stable: adapterData?.stable ?? '??',
                        },
                        installations: adapterData?.stat,
                    });
                } else {
                    templateData.adaptersUnlisted.push({
                        name: adapter.name,
                        url: adapter.html_url,
                        adapterName: adapterName,
                        maintainer: maint,
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