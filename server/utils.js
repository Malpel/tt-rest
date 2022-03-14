
const parseAndSum = (intString) => {
  const integersArr = intString.split(',');
  const integers = [];

  for (const i in integersArr) {
    const int = parseNumber(integersArr[i]);

    if (int === -1) return -1;

    integers.push(int);
  }

  console.log(integers);

  return integers.reduce((prev, current) => prev + current, 0);
};

const parseNumber = (int) => {
  const intRegex = /^[0-9]+$/;
  if (int.match(intRegex)) return parseInt(int);
  return -1;
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
  isPrime,
  parseNumber
};