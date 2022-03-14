import axios from 'axios';
const baseUrl = 'http://localhost:3001/api/primes';

const getCheckprime = async (prime) => {
  console.log('prime: ', prime);
  const res = await axios.get(`${baseUrl}?action=checkprime&integer=${prime}`);
  return res.data;
};

const getSumandcheck = async ({ action, prime }) => {
  const res = await axios.get(`${baseUrl}?action=${action}&integers=${prime}`);
  return res.data;
};

export default {
  getCheckprime,
  getSumandcheck
};