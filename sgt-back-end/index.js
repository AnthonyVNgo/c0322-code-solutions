const express = require('express');
const app = express();
const pg = require('pg');
app.use(express.json());

// only create ONE pool for your whole server
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.listen(3000, () => {
  // console.log('Express server listening on port 3000');
});

app.get('/api/grades', (req, res) => {
  const sql = `
    select *
    from "grades"
    `;

  db.query(sql)
    .then(result => {
      res.status(200).json(result.rows);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'a happy accident occurred'
      });
    });
});

app.post('/api/grades', (req, res) => {
  const { name, course } = req.body;
  const score = Number(req.body.score);
  if (!Number.isInteger(score) || score < 0 || score > 100) {
    res.status(400).json({
      error: 'score must be an integer between 0 and 100'
    });
    return;
  }

  if (!name || !course) {
    res.status(400).json({
      error: 'name, course, and score are required fields'
    });
    return;
  }

  const sql = `
    insert into "grades" ("name", "course", "score")
    values($1, $2, $3)
    returning *;
  `;

  const params = [name, course, score];

  db.query(sql, params)
    .then(result => {
      const [newGrade] = result.rows;
      res.status(201).json(newGrade);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'a happy accident occurred'
      });
    });
});

app.put('/api/grades/:gradeId', (req, res) => {
  const id = Number(req.params.gradeId);
  if (!Number.isInteger(id) || id < 1) {
    res.status(400).json({
      error: 'grade must be a positive integer'
    });
  }
  const { name, course } = req.body;
  const score = Number(req.body.score);
  if (!Number.isInteger(score) || score < 0 || score > 100) {
    res.status(400).json({
      error: 'score must be an integer between 0 and 100'
    });
  }
  if (!name || !course) {
    res.status(400).json({
      error: 'name, course, and score are required fields'
    });
  }
  const sql = `
    update "grades"
      set "name" = $1,
          "course = $2,
          "score" = $3
    where "gradeId" = $4
    returning *
  `;

  const params = [name, course, score, id];
  db.query(sql, params)
    .then(result => {
      const [updatedGrade] = result.rows;
      if (!updatedGrade) {
        res.status(404).json({
          error: `cannot find grade with gradeId ${id}`
        });
      } else {
        res.json(updatedGrade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'a happy accident occurred'
      });
    });
});

app.delete('/api/grades/:gradeId', (req, res) => {
  const id = Number(req.params.gradeId);

  if (!Number.isInteger(id) || id < 1) {
    res.status(400).json({
      error: 'grade must be a positive integer'
    });
    return;
  }

  const sql = `
    delete from "grades"
    where "gradeId" = $1
    returning *
  `;

  const params = [id];
  db.query(sql, params)
    .then(result => {
      const [deletedGrade] = result.rows;
      if (!deletedGrade) {
        res.status(404).json({
          error: `cannot find grade with gradeId ${id}`
        });
      } else {
        res.sendStatus(204);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'a happy accident occurred'
      });
    });
});
