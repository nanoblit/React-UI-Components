import React from 'react';
import PropTypes from 'prop-types';

const NumberButton = ({ symbol, style, onClick }) => {
  const clickListener = () => {
    onClick(symbol);
  };

  return (
    <div onClick={clickListener} className="number-button" style={style}>
      {symbol}
    </div>
  );
};

NumberButton.propTypes = {
  symbol: PropTypes.node.isRequired,
  style: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default NumberButton;
