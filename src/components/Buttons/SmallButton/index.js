import React from 'react';
import './SmallButton.css';

const SmallButton = ({ text, onClick, disabled, variant = 'standart' }) => {
  return (
    <div
      className={`small-button ${variant} ${disabled && 'disabled'} `}
      onClick={onClick}
    >
      <span className={`small-button-text ${variant} ${disabled && 'disabled'}`}>{text}</span>
    </div>
  );
};

export default SmallButton;
