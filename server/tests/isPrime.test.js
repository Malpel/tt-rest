const isPrime = require('../utils').isPrime;

test('is a prime', () => {
  const result = isPrime();
  expect(result).toBe(true);
});