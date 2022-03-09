const router = require('express').Router();
const { parseAndSum, isPrime } = require('../utils');

router.get('/', (req, res) => {
  const action = req.query.action;
  let result = {};

  if (action === 'sumandcheck') {
    const intString = req.query.integers;

    if (!intString) return res.status(400).send({ error: 'malformed request' });

    const sum = parseAndSum(intString);
    result.result = sum;
    result.isPrime = isPrime(sum);
  } else if (action === 'checkprime') {
    const int = req.query.integer;

    if (!int) return res.status(400).send({ error: 'malformed request' });

    result.isPrime = isPrime(int);
  } else {
    return res.status(400).send({ error: 'unknown action' });
  }

  res.json(result);
});

module.exports = router;