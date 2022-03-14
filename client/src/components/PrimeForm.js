import React, { useState } from 'react';
import primeService from '../services/primeService';

const PrimeForm = () => {
  const [input, setInput] = useState('');

  const submitPrime = async (event) => {
    event.preventDefault();
    console.log('User input: ', input);

    try {
      const res = await primeService.getCheckprime(input);
      console.log(res);
    }
    catch (error) {
      console.log(error);
    }

    setInput('');
  };

  return (
    <div>
      <form onSubmit={submitPrime}>
        <input value={input} onInput={e => setInput(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PrimeForm;