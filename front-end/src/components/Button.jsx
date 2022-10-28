import React from 'react';
import PropTypes from 'prop-types';

function Button({ buttonText, type, name, disabled, onClick, testId }) {
  return (
    <button
      type={ type === 'button' ? 'button' : 'submit' }
      name={ name }
      disabled={ disabled }
      onClick={ onClick }
      data-testid={ testId }
    >
      { buttonText }
    </button>
  );
}

Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  testId: PropTypes.string.isRequired,
};

Button.defaultProps = {
  disabled: false,
  onClick: () => {},
};

export default Button;
