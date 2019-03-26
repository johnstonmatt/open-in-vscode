#!/usr/bin/env node

const homedir = require('os').homedir();
const fse = require('fs-extra');
const pathToServices = !!process.env.pathToServices ||`${homedir}/Library/Services`;
const packageName = 'Open in VSCode.workflow';
const dest = `${pathToServices}/${packageName}`;

fse.ensureDirSync(dest);

fse.copySync(`../${packageName}`, dest, (err) => {
    if(err) {
        console.error(err);
        process.exit(1);
    }
    process.exit(0);
});
