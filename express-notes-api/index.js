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
  // console.log(dataJson.nextId);
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
  // console.log('bang');
  if ('content' in req.body) {
    const input = req.body;
    const id = dataJson.nextId;
    notes[id] = input;
    notes[id].id = id;
    dataJson.nextId = id + 1;
    res.status(201).json(req.body);
    fs.writeFile('./data.json', JSON.stringify(dataJson, null, 2), err => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred' });
      } else {
        // console.log('New note has been created and saved!');
      }
    });
  } else if (('content' in req.body) === false) {
    res.status(400).json({ error: 'content property is a required field' });
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
      // console.log(`Note ${req.params.id} deleted (Forever)!`);
    });

    res.sendStatus(204);
  }
});

// app.put('/api/notes/:id', (req, res) => {
//   const id = req.params.id;

//   if (id < 0 || req.body.id < 0 || id !== req.body.id) {
//     res.status(400).json({ error: 'both id parameter and req.body.id must be the same positive integer' });
//   } else if (('content' in req.body) === false) {
//     res.status(400).json({ error: 'content property is a required field' });
//   } else if ((id in notes) === false) {

//   } else if ('id' in req.body && 'content' in req.body && id in notes) {
//     notes[id].content = req.body.content;
//     fs.writeFile('./data.json', JSON.stringify(dataJson, null, 2), err => {
//       if (err) {
//         console.error(err);
//         res.status(500).json({ error: 'An unexpected error occurred' });
//       } else {
//         // console.log('New note has been created and saved!');
//       }
//     });
//   }
// });
