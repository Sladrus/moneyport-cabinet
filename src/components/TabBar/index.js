import React, { useContext } from 'react';
import TabBarItem from './TabBarItem';

import { useNavigate } from 'react-router-dom';
import { RouteContext } from '../../context/context';
import { mobileMenuItems } from '../../utils/menuItems';

import './TabBar.css';

const TabBar = () => {
  const { setSelectedMenuItem, selectedMenuItem, location } =
    useContext(RouteContext);
  const navigate = useNavigate();

  const navigateToPage = (id, path) => {
    setSelectedMenuItem(id);
    navigate({ pathname: path, search: location.search });
  };

  return (
    <div className="tab-bar">
      {mobileMenuItems.map(({ id, title, Icon, path }) => {
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
