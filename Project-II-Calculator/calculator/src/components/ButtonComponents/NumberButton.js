import React from 'react';
import PropTypes from 'prop-types';

const NumberButton = ({
  symbol, style, onClick, action,
}) => {
  const setActionClass = () => (action ? 'action-button' : '');

  return (
    <div
      onClick={() => onClick(symbol)}
      className={`number-button ${setActionClass()}`}
      style={style}
    >
      {symbol}
    </div>
  );
};

NumberButton.propTypes = {
  symbol: PropTypes.node.isRequired,
  style: PropTypes.object,
  onClick: PropTypes.func.isRequired,
  action: PropTypes.bool,
};

NumberButton.defaultProps = {
  style: {
    color: 'black',
    backgroundColor: 'white',
  },
  action: false,
};

export default NumberButton;
