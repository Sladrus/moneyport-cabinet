import React from 'react';
import './LargeTextButton.css';

const LargeTextButton = ({ value, onClick, icon }) => {
  return (
    <div className="large-text-button" onClick={onClick}>
      {icon}
      <span>{value}</span>
    </div>
  );
};

export default LargeTextButton;
