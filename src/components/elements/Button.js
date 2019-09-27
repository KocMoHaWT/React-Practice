import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ action, text }) => {
  return (
    <button type="button" onClick={action}>{text}</button>
  );
};

Button.propTypes = {
  action: PropTypes.func,
  text: PropTypes.string
};

Button.defaultProps = {
  action: PropTypes.func,
  text: PropTypes.string
};

export default Button;
