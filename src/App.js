import './App.css';
import React, { useState } from 'react';


function App() {
  const [calc, setCalc] = useState('');
  const [result, setResult] = useState('');
  const ops = ['/', '*', '+', '-', '.'];
  const updateCalc = val => {
    if (ops.includes(val) && calc === '' || ops.includes(val) && ops.includes(calc.slice(-1))) {
      return;
    }
    setCalc(calc + val);
    if (!ops.includes(val)) {
      setResult(eval(calc + val).toString())
    }
  }

  const createDigits = (e) => {
    const digits = [];

    for (let i = 1; i < 10; i++) {
      digits.push(
        <button onClick={() => updateCalc(i.toString())}
          key={i}>{i}
        </button>
      )

    }
    return digits
  }

  const calculate = (e) => {
    setCalc(eval(calc).toString());
  }

  const deleteLast = (e) => {
    if (calc == '') {
      return;
    }
    const value = calc.slice(0, -1)
    setCalc(value)
  }



  return (
    <div className="App">
     <div className='title'><h1>Calculator Project!</h1></div>
      <div className="calculator">
      
        <div className="display">
          <div className='display-result'>{result ? <span>({result})</span> : ''} <i>{calc || '0'}</i></div>

          <div className="operators">
            <button onClick={() => updateCalc('/')}>/</button>
            <button onClick={() => updateCalc('*')}>*</button>
            <button onClick={() => updateCalc('+')}>+</button>
            <button onClick={() => updateCalc('-')}>-</button>
            <button onClick={deleteLast}>DEL</button>
          </div>


          <div className="digits">
            {createDigits()}
            <button onClick={() => updateCalc('0')}>0</button>
            <button onClick={() => updateCalc('.')}>.</button>
            <button onClick={calculate}>=</button>

          </div>
        </div>

      </div>

    </div>
  );
}

export default App;
