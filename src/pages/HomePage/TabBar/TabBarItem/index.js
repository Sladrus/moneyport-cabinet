import React from 'react';

import './TabBarItem.css';

const TabBarItem = ({ icon, title }) => {
  return (
    <div className="tab-bar-item">
      {icon}
      <span className="tab-bar-item-title">{title}</span>
    </div>
  );
};

export default TabBarItem;
