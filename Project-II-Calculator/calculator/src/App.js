import React from 'react';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';

const App = () => {
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
      <CalculatorDisplay value={0} />
      <div className="row">
        <ActionButton symbol="clear" />
        <NumberButton symbol="/" style={redStyle} />
      </div>
      <div className="row">
        <NumberButton symbol="7" style={defaultStyle} />
        <NumberButton symbol="8" style={defaultStyle} />
        <NumberButton symbol="9" style={defaultStyle} />
        <NumberButton symbol="X" style={redStyle} />
      </div>
      <div className="row">
        <NumberButton symbol="4" style={defaultStyle} />
        <NumberButton symbol="5" style={defaultStyle} />
        <NumberButton symbol="6" style={defaultStyle} />
        <NumberButton symbol="-" style={redStyle} />
      </div>
      <div className="row">
        <NumberButton symbol="1" style={defaultStyle} />
        <NumberButton symbol="2" style={defaultStyle} />
        <NumberButton symbol="3" style={defaultStyle} />
        <NumberButton symbol="+" style={redStyle} />
      </div>
      <div className="row">
        <ActionButton symbol="0" />
        <NumberButton symbol="=" style={redStyle} />
      </div>
    </div>
  );
};

export default App;
