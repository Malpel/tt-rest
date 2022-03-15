import React, { useState } from 'react';
import primeService from '../services/primeService';
import actions from '../actions';
import './PrimeForm.css';

const PrimeForm = () => {
  const [input, setInput] = useState('');
  const [action, setAction] = useState('');
  const [result, setResult] = useState('');

  const submitPrime = async (event) => {
    event.preventDefault();
    console.log('User input: ', input);

    try {
      const res = await primeService.getPrimes(action, input);
      console.log('Result: ', res);
      setResult(res);
    }
    catch (error) {
      console.log(error);
    }
    setAction('');
    setInput('');
  };

  const selectAction = (action, event) => {
    event.preventDefault();
    setAction(action);
    setResult('');
  };

  return (
    <div>
      <form onSubmit={submitPrime}>
        <button onClick={e => selectAction(actions.CHECKPRIME, e)}>Checkprime</button>
        <button onClick={e => selectAction(actions.SUMANDCHECK, e)}>Sumandcheck</button>
        {action === '' ?
          <p>Select action above</p>
          : <div>
            {action === actions.CHECKPRIME ?
              <input type='number' value={input} onInput={e => setInput(e.target.value)} />
              : <input value={input} onInput={e => setInput(e.target.value)} />}
            <button type="submit">Submit</button>
          </div>
        }
      </form>

      <div>
        <h3>{result}</h3>
      </div>

    </div>
  );
};

export default PrimeForm;