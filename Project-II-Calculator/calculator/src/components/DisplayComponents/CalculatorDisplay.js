import React from 'react';
import PropTypes from 'prop-types';

const CalculatorDisplay = ({ value }) => <div className="calculator-display">{value}</div>;

CalculatorDisplay.propTypes = {
  value: PropTypes.node.isRequired,
};

export default CalculatorDisplay;
