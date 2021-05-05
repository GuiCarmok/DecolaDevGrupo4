const express = require('express');
const app = express();

const pet = ['cachorro', 'gato', 'papagaio'];

app.get('/pets', (req, res) => {
  return res.json(pet);
});

app.post('/pets', (req, res) => {
  return res.json([
    'Cachorro-post',
    'Gato-post',
  ]);
});

app.put('/pets/:id', (req, res) => {
  return res.json([
    'Cachorro-put',
    'Gato-put',
  ])
});

app.delete('/pets/:id', (req, res) => {
  return res.json([
    'Cachorro-delete',
    'Gato-delete',
  ])
});

app.listen(3000)
