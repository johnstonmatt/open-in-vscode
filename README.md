
# Open in VSCode
only on mac right now, sorry :(
## installation
1) clone this repo
2) download this [zip](https://serveon.site/open-in-vscode-workflow.zip)
3) ensure `code`, the command to open VSCode is on $PATH
4) run `npm install`
5) run `npm start`

`npm start` will extract the workflow source from the zip and move it to `/Users/${username}/Library/Services`. Finally it will delete the archive at `/Users/${username}/Downloads`, or the path provided (see below)

### Download location not default?
if your default download location is not $HOME/Downloads you should pass pathToZip into the process.env of `npm start`.
Because this script will only execute once, you can just prefix package.json.scripts.start's value with `pathToZip="/path/to/open-in-vscode.zip"`

## usage
ctrl-click and select Open in VSCode