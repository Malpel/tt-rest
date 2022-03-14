require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const primeRouter = require('./routes/prime');

const unknownEndpoint = (req, res) => {
  res.status(404).send({ error: 'unknown endpoint' });
};

app.get('/', (req, res) => {
  res.json({ 'success': 'Hello, World!' });
});

app.use(cors({ origin: true }));
app.use('/api/primes', primeRouter);
app.use(unknownEndpoint);

module.exports = app;