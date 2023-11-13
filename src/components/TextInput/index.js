import React from 'react';
import './TextInput.css';

const TextInput = ({ value, onChange, placeholder, type, disabled }) => {
  return (
    <div className="input-body">
      <input
        type={type}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
      <label className={value && 'filled'}>{placeholder}</label>
    </div>
  );
};

export default TextInput;
