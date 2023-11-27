import React from 'react';

import './Spinner.css';

const Spinner = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '73px',
      }}
    >
      <div className="spinner-component" />
    </div>
  );
};

export default Spinner;
