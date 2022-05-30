const path = require('path');
const express = require('express');
const app = express();

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});

const aVariable = path.join(__dirname, 'public');
console.log(__dirname);
console.log(aVariable);

const anotherVariable = express.static(aVariable);
console.log(anotherVariable);
app.use(anotherVariable);
