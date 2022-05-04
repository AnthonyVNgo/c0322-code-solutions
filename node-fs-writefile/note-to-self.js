const filesystemModule = require('fs');

const input = process.argv[2];

filesystemModule.writeFile('note.txt', `${input}\n`, () => {
});
