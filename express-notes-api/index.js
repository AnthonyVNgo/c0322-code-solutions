const express = require('express');
const app = express();
let nextId = 5;
app.use(express.json());

// const jsonFile = require('./data.json');

const notes =
{
  1: {
    content: 'The event loop is how a JavaScript runtime pushes asynchronous callbacks onto the stack once the stack is cleared.',
    id: 1
  },
  2: {
    content: 'Prototypal inheritance is how JavaScript objects delegate behavior.',
    id: 2
  },
  3: {
    content: 'In JavaScript, the value of `this` is determined when a function is called; not when it is defined.',
    id: 3
  },
  4: {
    content: 'A closure is formed when a function retains access to variables in its lexical scope.',
    id: 4
  }
};

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
    res.status(400).json({ error: `cannot find note with id ${id}` });
  }
});

app.post('/api/notes', (req, res) => {
  if (('content' in req.body) === false) {
    res.status(400).json({ error: 'content property is a required field' });
  } else if ('content' in req.body) {
    req.body.id = nextId;
    notes[nextId] = req.body;
    res.status(201).json(req.body);
    nextId++;
  } else {
    res.status(500).json({ error: 'an unexpected error occurred' });
  }
});

app.delete('/api/notes/:id', (req, res) => {
  const id = req.params.id;

  if (id < 0) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (id in notes) {
    delete notes[req.params.id];
    res.sendStatus(204);
  }

});
