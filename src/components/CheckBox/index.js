import React from 'react';

import './CheckBox.css';

const CheckBox = ({ label, value, onChange }) => {
  return (
    <div className="checkbox">
      <input type="checkbox" checked={value} onChange={onChange} />
    </div>
  );
};

export default CheckBox;
