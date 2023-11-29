import React, { useContext } from 'react';

import './SubmenuList.css';
import { RouteContext } from '../../../../../../context/context';
import { useNavigate } from 'react-router-dom';
import { sendMetric } from '../../../../../../utils/sendMetric';

const SubmenuList = ({ path, menuId, submenuOpen, submenuList }) => {
  const { setSelectedMenuItem, setSelectedSubItem, selectedSubItem, location } =
    useContext(RouteContext);

  const navigate = useNavigate();

  const navigateToPage = (id, title, type) => {
    if (type) sendMetric('reachGoal', type);
    setSelectedSubItem({ id, title });
    setSelectedMenuItem(menuId);
    navigate({ pathname: path, search: location.search });
  };

  return (
    <div className={`submenu-list ${submenuOpen ? 'expanded' : 'closed'}`}>
      <div className={`submenu-list-content`}>
        {submenuList?.map(({ id, title, type }) => {
          return (
            <div
              key={id}
              onClick={() => navigateToPage(id, title, type)}
              className={`submenu-list-item ${
                selectedSubItem?.id === id ? 'selected' : ''
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
