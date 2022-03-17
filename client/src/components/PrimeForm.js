import React, { useState } from 'react';
import primeService from '../services/primeService';
import actions from '../actions';
import { selectedStyle, buttonStyle, inputStyle, submitStyle } from './styles';

const PrimeForm = () => {
  const [input, setInput] = useState('');
  const [action, setAction] = useState('');
  const [result, setResult] = useState('');
  const [checkprimeSelected, setCheckprimeSelected] = useState(false);
  const [sumandcheckSelected, setSumandcheckSelected] = useState(false);

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
    setCheckprimeSelected(false);
    setSumandcheckSelected(false);
  };

  const selectAction = (actionOption, event) => {
    event.preventDefault();
    setAction(actionOption);

    if (actionOption === actions.CHECKPRIME) {
      setCheckprimeSelected(true);
      setSumandcheckSelected(false);
    } else {
      setCheckprimeSelected(false);
      setSumandcheckSelected(true);
    }

    setResult('');
  };

  return (
    <div>
      <form onSubmit={submitPrime}>
        <div>
          <button onClick={e => selectAction(actions.CHECKPRIME, e)}
            style={checkprimeSelected ? selectedStyle : buttonStyle}>Checkprime</button>
          <button onClick={e => selectAction(actions.SUMANDCHECK, e)}
            style={sumandcheckSelected ? selectedStyle : buttonStyle}>Sumandcheck</button>
        </div>
        <br />
        {action === '' ?
          <p>Select action above</p>
          : <div>
            {action === actions.CHECKPRIME ?
              <input id='check' type='number' value={input} onInput={e => setInput(e.target.value)}
                placeholder='Enter an integer' style={inputStyle} />
              : <input id='sum' value={input} onInput={e => setInput(e.target.value)}
                placeholder='Enter a list of integers, e.g. 1,2,3' style={inputStyle} />}
            <button type="submit" style={submitStyle}>Submit</button>
          </div>
        }
      </form>

      <div>
        <h3>{result}</h3>
      </div>

    </div >
  );
};

export default PrimeForm;