const express = require('express');
const app = express();
const { parseAndSum, isPrime } = require('./utils');

const PORT = 3001;

app.get('/', (req, res) => {
  res.json({ 'success': 'Hello, World!' });
});

app.get('/api/', (req, res) => {
  const action = req.query.action;
  let result = {};

  if (action === 'sumandcheck') {
    const sum = parseAndSum(req.query.integers);
    result.result = sum;
    result.isPrime = isPrime();
  } else {
    result.isPrime = isPrime();
  }

  res.json(result);
});

const unknownEndpoint = (req, res) => {
  res.status(404).send({ error: 'unknown endpoint' });
};

app.use(unknownEndpoint);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});