import React, { useContext, useState } from 'react';

import HomeMenuItemButton from './HomeMenuItemButton';

import './HomeMenuList.css';
import { useNavigate } from 'react-router-dom';
import { RouteContext } from '../../../../context/context';
import { menuItems } from '../../../../utils/menuItems';

const HomeMenuList = ({ open }) => {
  const { setSelectedMenuItem, } = useContext(RouteContext);
  const navigate = useNavigate();

  const navigateToPage = (id, path) => {
    setSelectedMenuItem(id);
    navigate(path);
  };

  return (
    <div className={`home-menu-list ${open ? 'open' : ''}`}>
      {menuItems.map(({ id, title, path, Icon, submenu, submenuList }) => {
        return (
          <HomeMenuItemButton
            key={id}
            path={path}
            onClick={() => navigateToPage(id, path)}
            open={open}
            id={id}
            title={title}
            icon={Icon}
            submenu={submenu}
            submenuList={submenu && submenuList}
          />
        );
      })}
    </div>
  );
};

export default HomeMenuList;
