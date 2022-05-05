const dataJSONObject = require('./data.json');
const fs = require('fs');

const operation = process.argv[2];
const notes = dataJSONObject.notes;
const nextID = dataJSONObject.nextId;
const input = process.argv[3];
const updateOperationInput = process.argv[4];

if (operation === 'read') {
  for (const property in notes) {
    console.log(`${property}: ${notes[property]}`);
  }
} else if (operation === 'create') {
  notes[`${nextID}`] = input;
  dataJSONObject.nextId = nextID + 1;
  console.log(dataJSONObject);
  fs.writeFile('./data.json', JSON.stringify(dataJSONObject, null, 2), err => {
    if (err) throw err;
    console.log('New note has been created and saved!');
  });
} else if (operation === 'update') {
  dataJSONObject.notes[input] = updateOperationInput;
  console.log(dataJSONObject);
  console.log(`Note ${input} updated!`);
} else if (operation === 'delete') {
  delete dataJSONObject.notes[input];
  console.log(dataJSONObject);
  fs.writeFile('./data.json', JSON.stringify(dataJSONObject, null, 2), err => {
    if (err) throw err;
    console.log(`Note ${input} deleted!`);
  });
} else {
  console.log('\nInvalid command.\n\nPlease enter node app.js followed by: read, create, update, or delete\n');
}
