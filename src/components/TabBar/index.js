import React, { useContext, useState } from 'react';
import TabBarItem from './TabBarItem';

import { useNavigate } from 'react-router-dom';
import { RouteContext } from '../../context/context';
import { menuItems } from '../../utils/menuItems';

import './TabBar.css';

const TabBar = () => {
  const { setSelectedMenuItem, selectedMenuItem } = useContext(RouteContext);
  const navigate = useNavigate();

  const navigateToPage = (id, path) => {
    setSelectedMenuItem(id);
    navigate(path);
  };
  console.log(menuItems);

  return (
    <div className="tab-bar">
      {menuItems.map(({ id, title, Icon, path }) => {
        return (
          <TabBarItem
            id={id}
            onClick={navigateToPage}
            selectedItem={selectedMenuItem}
            key={id}
            title={title}
            icon={Icon}
            path={path}
          />
        );
      })}
    </div>
  );
};

export default TabBar;
