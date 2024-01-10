import React, { useContext } from 'react';
import TabBarItem from './TabBarItem';

import { useNavigate } from 'react-router-dom';
import { RouteContext } from '../../context/context';
import { mobileMenuItems } from '../../utils/menuItems';

import './TabBar.css';
import { sendMetric } from '../../utils/sendMetric';

const TabBar = () => {
  const {
    setSelectedMenuItem,
    setSelectedSubItem,
    selectedMenuItem,
    location,
  } = useContext(RouteContext);
  const navigate = useNavigate();

  const navigateToPage = (id, path, type) => {
    sendMetric('reachGoal', type);
    setSelectedSubItem({ id: 1, title: 'Перевод физлицу' });
    setSelectedMenuItem(id);
    navigate({ pathname: path, search: location.search });
  };

  return (
    <div className="tab-bar">
      {mobileMenuItems.map(({ id, title, Icon, path, type }) => {
        return (
          <TabBarItem
            id={id}
            onClick={navigateToPage}
            selectedItem={selectedMenuItem}
            key={id}
            title={title}
            icon={Icon}
            path={path}
            type={type}
          />
        );
      })}
    </div>
  );
};

export default TabBar;
