import React from 'react';
import PropTypes from 'prop-types';

const ActionButton = ({ symbol }) => <div className="action-button">{symbol}</div>;

ActionButton.propTypes = {
  symbol: PropTypes.node.isRequired,
};

export default ActionButton;
