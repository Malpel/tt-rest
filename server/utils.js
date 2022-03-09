
const parseAndSum = (intString) => {
  const integers = intString.split(',').map(i => parseInt(i));
  return integers.reduce((prev, current) => prev + current, 0);
};

const isPrime = (int) => {
  if (int <=3 ) {
    return int > 1;
  }

  if (int % 2 === 0 || int % 3 === 0) {
    return false;
  }

  for (let i = 5; Math.pow(i, 2) <= int; i+=6) {
    if ( int % i === 0 ||  int % (i + 2) === 0) {
      return false;
    }
  }

  return true;
};

module.exports = {
  parseAndSum,
  isPrime
};