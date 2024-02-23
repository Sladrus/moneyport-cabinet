import PropTypes from 'prop-types';
import React from 'react';

import './RadioButtons.css';

const RadioButtons = ({ options, selectedOption, onOptionChange }) => {
  const handleChange = (event) => {
    const selectedValue = event.target.value;
    onOptionChange(selectedValue);
  };

  return (
    <div className="radio">
      {options.map((option) => (
        <label className="label" key={option.value}>
          <input
            type="radio"
            value={option.value}
            checked={selectedOption === option.value}
            onChange={handleChange}
          />
          <span className="text-wrapper">{option.label}</span>
        </label>
      ))}
    </div>
  );
};

export default RadioButtons;
