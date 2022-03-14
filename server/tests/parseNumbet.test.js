const parseNumber = require('../utils').parseNumber;

test('parseNumber correctly parses 5', () => {
  const result = parseNumber('5');
  expect(result).toEqual(5);
});

test('parseNumber recognizes non-number string', () => {
  const result = parseNumber('1@4');
  expect(result).toEqual(-1);
});
