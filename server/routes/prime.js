const router = require('express').Router();
const { parseAndSum, isPrime, parseInteger, actions } = require('../utils');

router.get('/', (req, res) => {
  const action = req.query.action;
  let result = {};

  if (action === actions.SUMANDCHECK) {
    const intString = req.query.integers;

    if (!intString) return res.status(400).send({ error: 'malformed request' });

    const sum = parseAndSum(intString);

    if (sum === -1) return res.status(400).send({ error: 'malformed request' });

    result.sum = sum;
    result.isPrime = isPrime(sum);
  } else if (action === actions.CHECKPRIME) {
    const int = parseInteger(req.query.integer);

    if (int === -1) return res.status(400).send({ error: 'malformed request' });

    result.integer = int;
    result.isPrime = isPrime(int);
  } else {
    return res.status(400).send({ error: 'unknown action' });
  }

  res.json(result);
});

module.exports = router;