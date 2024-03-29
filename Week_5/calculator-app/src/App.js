import { useState } from 'react';
import './App.css';

const App = () => {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const ops = ['/', '*', '+', '-', '.'];

  const updateCalc = value => {
    if (
      ops.includes(value) && calc === '' ||
      ops.includes(value) && ops.includes(calc.slice(-1))
    ) return;

    setCalc(calc + value);

    if (!ops.includes(value)) {
      setResult(eval(calc).toString());
    }
  }

  const createDigits = () => {
    const digits = [];
    for (let i =1; i < 10; i++) {
      digits.push (
        <button onClick={() => updateCalc(i.toString())} key={i}>{i}</button>
      )
    }
    return digits;
  }

  const calculate = () => {
    setCalc(eval(calc).toString()); // switch eval to evalurate with math labarary
  }

  const deleateLast = () => {
    if (calc == '') {
      return;
    }
    const value = calc.slice(0, -1);
    setCalc(value);
  }
// Down here where stuff goes to show on the page. 
  return (
    <div className="App">
      <h1 id='head'>Calculator App</h1>
      <div className="calculator">
        <div className="display">
          {result ? <span>({result})</span> : ''} &nbsp; { calc || "0" }
        </div>
        <div className="operators">
          <button onClick={() => updateCalc('/')}>/</button>
          <button onClick={() => updateCalc('*')}>*</button>
          <button onClick={() => updateCalc('+')}>+</button>
          <button onClick={() => updateCalc('-')}>-</button>
          <button onClick={deleateLast}>DEL</button>
        </div>
        <div className="digits">
          { createDigits() } 
          <button onClick={() => updateCalc('0')}>0</button>
          <button onClick={() => updateCalc('.')}>.</button>
          <button onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
