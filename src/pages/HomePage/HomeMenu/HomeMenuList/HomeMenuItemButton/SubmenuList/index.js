import React, { useContext } from 'react';

import './SubmenuList.css';
import { RouteContext } from '../../../../../../context/context';

const SubmenuList = ({ menuId, submenuOpen, submenuList }) => {
  const { setSelectedMenuItem, setSelectedSubItem, selectedSubItem } =
    useContext(RouteContext);

  const navigateToPage = (id, path) => {
    setSelectedSubItem(id);
    setSelectedMenuItem(menuId);
  };

  return (
    <div className={`submenu-list ${submenuOpen ? 'expanded' : 'closed'}`}>
      <div className={`submenu-list-content`}>
        {submenuList?.map(({ id, title, path }) => {
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
    </div>
  );
};

export default SubmenuList;
