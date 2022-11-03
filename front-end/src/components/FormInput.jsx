import React from 'react';
import PropTypes from 'prop-types';

function FormInput({ label, name, type, value, onChange, testId }) {
  return (
    <label htmlFor={ name }>
      { label }
      <input
        type={ type }
        name={ name }
        value={ value }
        onChange={ onChange }
        data-testid={ testId }
      />
    </label>
  );
}

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  testId: PropTypes.string.isRequired,
};

export default FormInput;
