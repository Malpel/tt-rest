const parseInteger = require('../utils').parseInteger;

test('parseNumber correctly parses integer', () => {
  const result = parseInteger('5');
  expect(result).toEqual(5);
});

test('parseNumber recognizes non-number string', () => {
  const result = parseInteger('1@4');
  expect(result).toEqual(-1);
});
