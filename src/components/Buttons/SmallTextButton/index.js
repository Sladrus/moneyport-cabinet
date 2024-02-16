import React from 'react';
import './SmallTextButton.css';

const SmallTextButton = ({ value, onClick, icon }) => {
  return (
    <div className="small-text-button" onClick={onClick}>
      {icon}
      <span>{value}</span>
    </div>
  );
};

export default SmallTextButton;
