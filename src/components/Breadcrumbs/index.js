import React, { useContext } from 'react';
import { ReactComponent as HomeIcon } from '../../assets/icons/menu/home.svg';
import { useLocation, useNavigate } from 'react-router-dom';
import { authRoutes } from '../../routes';

import './Breadcrumbs.css';
import { HOME_ROUTE } from '../../utils/consts';
import { RouteContext } from '../../context/context';

const Breadcrumbs = ({ path }) => {
  const { setSelectedMenuItem } = useContext(RouteContext);

  const location = useLocation();
  const navigate = useNavigate();

  const route = authRoutes.find((route) => route.path === location.pathname);

  const handleClick = () => {
    setSelectedMenuItem(1);
    navigate(HOME_ROUTE);
  };

  return (
    <div className="breadcrumbs">
      <div className="breadcrumbs-path">
        <HomeIcon className="breadcrumbs-home" onClick={handleClick} />
        <span className="breadcrumbs-slash">/</span>
        <span>{route?.title}</span>
      </div>
      <span className="breadcrumbs-title">{route?.title}</span>
    </div>
  );
};

export default Breadcrumbs;
