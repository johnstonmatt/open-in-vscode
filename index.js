import extract from 'extract-zip';
const homedir = require('os').homedir();
const pathToZip = !!process.env.pathToZip || `${homedir}/Downloads/open-in-vscode.zip`;
const pathToServices = !!process.env.pathToServices ||`${homedir}/Library/Services`;

extract(pathToZip, { dir: pathToServices }, function (err) {
    if (err) throw err
});
