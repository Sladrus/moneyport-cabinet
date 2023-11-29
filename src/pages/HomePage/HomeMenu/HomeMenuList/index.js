import React, { useContext } from 'react';

import HomeMenuItemButton from './HomeMenuItemButton';

import './HomeMenuList.css';
import { useNavigate } from 'react-router-dom';
import { RouteContext } from '../../../../context/context';
import { menuItems } from '../../../../utils/menuItems';
import { sendMetric } from '../../../../utils/sendMetric';

const HomeMenuList = ({ open }) => {
  const { setSelectedMenuItem, location } = useContext(RouteContext);
  const navigate = useNavigate();

  const navigateToPage = (id, path, type) => {
    if (type) sendMetric('reachGoal', type);
    setSelectedMenuItem(id);
    navigate({ pathname: path, search: location.search });
  };

  return (
    <div className={`home-menu-list ${open ? 'open' : ''}`}>
      {menuItems.map(
        ({ id, title, path, Icon, submenu, submenuList, type }) => {
          return (
            <HomeMenuItemButton
              key={id}
              path={path}
              onClick={() => navigateToPage(id, path, type)}
              open={open}
              id={id}
              title={title}
              icon={Icon}
              submenu={submenu}
              submenuList={submenu && submenuList}
              type={type}
            />
          );
        }
      )}
    </div>
  );
};

export default HomeMenuList;
