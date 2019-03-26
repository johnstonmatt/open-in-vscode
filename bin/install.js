#!/usr/bin/env node

const cp = require('ncp');
const homedir = require('os').homedir();
const fs = require('fs');
const pathToServices = !!process.env.pathToServices ||`${homedir}/Library/Services`;
const filename = 'Open in VSCode.workflow';
const dest = `${pathToServices}/${filename}`;

if(!fs.existsSync(dest)){
    fs.mkdirSync(dest);
}

cp(`./${filename}`, dest, (err) => {
    if(err) {
        console.error(err);
        process.exit(1);
    }
    process.exit(0);
});
