import React from 'react';
import './LargeTextButton.css';

const LargeTextButton = ({ value, onClick }) => {
  return (
    <div className="large-text-button" onClick={onClick}>
      <span>{value}</span>
    </div>
  );
};

export default LargeTextButton;
