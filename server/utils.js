
const parseAndSum = (intString) => {
  const integers = intString.split(',').map(i => parseInt(i));
  const sum = integers.reduce((prev, current) => prev + current, 0);
  return sum;
};

const isPrime = () => {
  return true;
};

module.exports = {
  parseAndSum,
  isPrime
};