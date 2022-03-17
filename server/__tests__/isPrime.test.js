const isPrime = require('../utils').isPrime;

test('2 is a prime', () => {
  const result = isPrime(2);
  expect(result).toBe(true);
});

test('4 is not a prime', () => {
  expect(isPrime(4)).toBe(false);
});

test('1 is not a prime', () => {
  expect(isPrime(1)).toBe(false);
});

test('0 is not a prime', () => {
  expect(isPrime(0)).toBe(false);
});

test('5555 is not a prime', () => {
  expect(isPrime(5555)).toBe(false);
});

test('59 is a prime', () => {
  expect(isPrime(59)).toBe(true);
});

test('7321 is a prime', () => {
  expect(isPrime(1777)).toBe(true);
});