import React, { useState } from 'react';

import './SendTypeButton.css';

const SendTypeButton = ({ icon, title, subtitle, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`send-type-button ${
        isHovered ? 'send-type-button-hover' : ''
      }`}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="send-type-button-logo">{icon}</div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'start',
          alignItems: 'flex-start',
          gap: '4px',
          flex: '1 0 0',
        }}
      >
        <div className="send-type-button-title">{title}</div>
        <div className="send-type-button-subtitle">{subtitle}</div>
      </div>
    </div>
  );
};

export default SendTypeButton;
