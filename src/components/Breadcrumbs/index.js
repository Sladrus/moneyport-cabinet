import React from 'react';
import { ReactComponent as HomeIcon } from '../../assets/icons/menu/home.svg';
import { useLocation, useNavigate } from 'react-router-dom';
import { authRoutes } from '../../routes';

import './Breadcrumbs.css';
import { HOME_ROUTE } from '../../utils/consts';

const Breadcrumbs = ({ path }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const route = authRoutes.find((route) => route.path === location.pathname);

  return (
    <div className="breadcrumbs">
      <div className="breadcrumbs-path">
        <HomeIcon
          className="breadcrumbs-home"
          onClick={() => navigate(HOME_ROUTE)}
        />
        <span className="breadcrumbs-slash">/</span>
        <span>{route.title}</span>
      </div>
      <span className="breadcrumbs-title">{route.title}</span>
    </div>
  );
};

export default Breadcrumbs;
