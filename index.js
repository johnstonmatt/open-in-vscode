const mv = require('mv');
const homedir = require('os').homedir();
const pathToServices = !!process.env.pathToServices ||`${homedir}/Library/Services`;

mv('./Open in VSCode.workflow', pathToServices, (err) => {
    if(err) {
        console.error(err);
        process.exit(1);
    }
    process.exit(0);
});
