const cp = require('ncp');
const homedir = require('os').homedir();
const pathToServices = !!process.env.pathToServices ||`${homedir}/Library/Services`;
const filename = 'Open in VSCode.workflow';

cp(`./${filename}`, `${pathToServices}/${filename}`, (err) => {
    if(err) {
        console.error(err);
        process.exit(1);
    }
    process.exit(0);
});
