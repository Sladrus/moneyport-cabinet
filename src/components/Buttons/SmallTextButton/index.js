import React from 'react';
import './SmallTextButton.css';

const SmallTextButton = ({ value, onClick }) => {
  return (
    <div className="small-text-button" onClick={onClick}>
      {value}
    </div>
  );
};

export default SmallTextButton;
