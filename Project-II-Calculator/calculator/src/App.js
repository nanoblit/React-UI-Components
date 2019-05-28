import React, { useState } from 'react';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';

const App = () => {
  const [total, setTotal] = useState('0');

  const changeTotal = (symbol) => {
    if (symbol === 'clear') setTotal('0');
    else setTotal(`${total}${symbol}`);
  };

  const redStyle = {
    color: 'white',
    backgroundColor: 'red',
  };

  return (
    <div>
      <CalculatorDisplay value={total} />
      <div className="row">
        <NumberButton onClick={changeTotal} symbol="clear" action />
        <NumberButton onClick={changeTotal} symbol="/" style={redStyle} />
      </div>
      <div className="row">
        {[7, 8, 9].map(val => (
          <NumberButton onClick={changeTotal} symbol={val} />
        ))}
        <NumberButton onClick={changeTotal} symbol="X" style={redStyle} />
      </div>
      <div className="row">
        {[4, 5, 6].map(val => (
          <NumberButton onClick={changeTotal} symbol={val} />
        ))}
        <NumberButton onClick={changeTotal} symbol="-" style={redStyle} />
      </div>
      <div className="row">
        {[1, 2, 3].map(val => (
          <NumberButton onClick={changeTotal} symbol={val} />
        ))}
        <NumberButton onClick={changeTotal} symbol="+" style={redStyle} />
      </div>
      <div className="row">
        <NumberButton onClick={changeTotal} symbol="0" action />
        <NumberButton onClick={changeTotal} symbol="=" style={redStyle} />
      </div>
    </div>
  );
};

export default App;
