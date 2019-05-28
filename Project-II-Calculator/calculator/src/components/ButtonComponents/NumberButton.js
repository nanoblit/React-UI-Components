import React from 'react';
import PropTypes from 'prop-types';

const NumberButton = ({ symbol, style }) => (
  <div className="number-button" style={style}>
    {symbol}
  </div>
);

NumberButton.propTypes = {
  symbol: PropTypes.node.isRequired,
  style: PropTypes.object.isRequired,
};

export default NumberButton;
