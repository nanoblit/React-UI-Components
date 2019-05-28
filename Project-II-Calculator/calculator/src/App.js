import React, { useState } from 'react';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';

const App = () => {
  const [total, setTotal] = useState('0');

  const changeTotal = (symbol) => {
    if (symbol === 'clear') setTotal('0');
    else setTotal(`${total}${symbol}`);
  };

  const defaultStyle = {
    color: 'black',
    backgroundColor: 'white',
  };

  const redStyle = {
    color: 'white',
    backgroundColor: 'red',
  };

  return (
    <div>
      <CalculatorDisplay value={total} />
      <div className="row">
        <ActionButton onClick={changeTotal} symbol="clear" />
        <NumberButton onClick={changeTotal} symbol="/" style={redStyle} />
      </div>
      <div className="row">
        <NumberButton onClick={changeTotal} symbol="7" style={defaultStyle} />
        <NumberButton onClick={changeTotal} symbol="8" style={defaultStyle} />
        <NumberButton onClick={changeTotal} symbol="9" style={defaultStyle} />
        <NumberButton onClick={changeTotal} symbol="X" style={redStyle} />
      </div>
      <div className="row">
        <NumberButton onClick={changeTotal} symbol="4" style={defaultStyle} />
        <NumberButton onClick={changeTotal} symbol="5" style={defaultStyle} />
        <NumberButton onClick={changeTotal} symbol="6" style={defaultStyle} />
        <NumberButton onClick={changeTotal} symbol="-" style={redStyle} />
      </div>
      <div className="row">
        <NumberButton onClick={changeTotal} symbol="1" style={defaultStyle} />
        <NumberButton onClick={changeTotal} symbol="2" style={defaultStyle} />
        <NumberButton onClick={changeTotal} symbol="3" style={defaultStyle} />
        <NumberButton onClick={changeTotal} symbol="+" style={redStyle} />
      </div>
      <div className="row">
        <ActionButton onClick={changeTotal} symbol="0" />
        <NumberButton onClick={changeTotal} symbol="=" style={redStyle} />
      </div>
    </div>
  );
};

export default App;
