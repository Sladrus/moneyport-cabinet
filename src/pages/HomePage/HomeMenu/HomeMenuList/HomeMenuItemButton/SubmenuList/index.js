import React, { useState } from 'react';

import './SubmenuList.css';
import { useNavigate } from 'react-router-dom';

const SubmenuList = ({
  menuId,
  submenuList,
  setSelectedItem,
  selectedSubItem,
  setSelectedSubItem,
}) => {
  const navigate = useNavigate();

  const navigateToPage = (id, path) => {
    setSelectedSubItem(id);
    setSelectedItem(menuId)
    navigate(path);
  };

  return (
    <div className="submenu-list">
      {submenuList.map(({ id, title, path }) => {
        return (
          <div
            key={id}
            onClick={() => navigateToPage(id, path)}
            className={`submenu-list-item ${
              selectedSubItem === id ? 'selected' : ''
            }`}
          >
            <span>{title}</span>
          </div>
        );
      })}
    </div>
  );
};

export default SubmenuList;
