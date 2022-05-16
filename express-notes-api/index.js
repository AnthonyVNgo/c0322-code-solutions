const express = require('express');
const app = express();

app.use(express.json());
const fs = require('fs');
const dataJson = require('./data.json');
const notes = dataJson.notes;

app.listen(3000, () => {
  // console.log('Express server listening on port 3000');
});

app.get('/api/notes', (req, res) => {
  const notesArray = [];
  for (const id in notes) {
    notesArray.push(notes[id]);
  }
  res.status(200).json(notesArray);
});

app.get('/api/notes/:id', (req, res) => {
  const id = req.params.id;

  if (id < 0) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (id in notes) {
    res.status(200).json(notes[id]);
  } else {
    res.status(404).json({ error: `cannot find note with id ${id}` });
  }
});

app.post('/api/notes', (req, res) => {
  if (('content' in req.body) === false) {
    res.status(400).json({ error: 'content property is a required field' });
  } else if ('content' in req.body) {
    const input = req.body;
    const id = dataJson.nextId;
    notes[id] = input;
    notes[id].id = id;
    dataJson.nextId = id + 1;
    fs.writeFile('./data.json', JSON.stringify(dataJson, null, 2), err => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred' });
      } else {
        res.status(201).json(req.body);
      }
    });
  }
});

app.delete('/api/notes/:id', (req, res) => {
  const id = req.params.id;

  if (id < 0) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (id in notes) {
    delete notes[req.params.id];
    fs.writeFile('./data.json', JSON.stringify(dataJson, null, 2), err => {
      if (err) throw err;
    });

    res.sendStatus(204);
  }
});

app.delete('/api/notes/:id', (req, res) => {
  const id = req.params.id;

  if (id < 0) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (id in notes) {
    delete notes[req.params.id];
    fs.writeFile('./data.json', JSON.stringify(dataJson, null, 2), err => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred' });
      } else {
        res.status(204);
      }
    });
  }
});

app.put('/api/notes/:id', (req, res) => {
  const id = req.params.id;

  if (id < 0 || ('content' in req.body === false)) {
    res.status(400).json({ error: 'make sure id is a positive integer and to include the content property in the req.body' });
  } else if (id in notes === false) {
    res.status(404).json({ error: 'make sure to use a valid id' });
  } else if ('content' in req.body && id in notes) {
    notes[id].content = req.body.content;
    fs.writeFile('./data.json', JSON.stringify(dataJson, null, 2), err => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred' });
      } else {
        res.status(200).json(notes[id]);
      }
    });
  }
});
