const express = require('express');

const expAppObj = express();

expAppObj.use((req, res) => {
  res.send('a string');
});

expAppObj.listen(3000, () => {
});
