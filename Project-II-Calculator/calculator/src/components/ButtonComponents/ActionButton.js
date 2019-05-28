import React from 'react';
import PropTypes from 'prop-types';

const ActionButton = ({ symbol, onClick }) => {
  const clickListener = () => {
    onClick(symbol);
  };

  return (
    <div onClick={clickListener} className="action-button">
      {symbol}
    </div>
  );
};

ActionButton.propTypes = {
  symbol: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ActionButton;
