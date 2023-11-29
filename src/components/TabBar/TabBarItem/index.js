import React from 'react';

import './TabBarItem.css';

const TabBarItem = ({ id, icon, title, path, onClick, selectedItem, type }) => {
  return (
    <div
      onClick={() => onClick(id, path, type)}
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
