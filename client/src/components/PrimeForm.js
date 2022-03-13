import { useState } from "react";

const PrimeForm = (props) => {
  const [input, setInput] = useState('');

  const submitPrime = (event) => {
    event.preventDefault();
    console.log('User input: ', input);
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