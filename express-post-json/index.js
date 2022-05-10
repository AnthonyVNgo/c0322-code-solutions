const express = require('express');
const app = express();
let nextId = 1;
const grades = {};

app.use(express.json());

app.listen(3000, () => {
});

app.get('/api/grades', (req, res) => {
  const gradesArray = [];
  for (const id in grades) {
    gradesArray.push(grades[id]);
  }
  res.json(gradesArray);
});

app.post('/api/grades', (req, res) => {
  req.body.id = nextId;
  grades[nextId] = req.body;
  nextId++;
});
