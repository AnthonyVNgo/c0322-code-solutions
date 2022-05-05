const filesystemModule = require('fs');

const randomNumber = Math.random().toString();

filesystemModule.writeFile('random.txt', `${randomNumber}\n`, () => {
});
