import axios from 'axios';
import actions from '../actions';
const baseUrl = 'http://localhost:3001/api/primes';

const getPrimes = async (action, prime) => {
  const config = { params: { action } };
  action === actions.CHECKPRIME ? config.params.integer = prime : config.params.integers = prime;
  
  const res = await axios.get(`${baseUrl}`, config);
  return JSON.stringify(res.data);
};

export default {
  getPrimes,
};