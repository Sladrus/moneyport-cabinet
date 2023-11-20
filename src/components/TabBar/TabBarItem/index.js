import React from 'react';

import './TabBarItem.css';

const TabBarItem = ({ id, icon, title, path, onClick, selectedItem }) => {
  return (
    <div
      onClick={() => onClick(id, path)}
      className={`tab-bar-item ${selectedItem === id ? 'selected' : ''}`}
    >
      {icon}
      <div className="tab-bar-item-title">
        <span>{title}</span>
      </div>
    </div>
  );
};

export default TabBarItem;
