import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/context';
import { AUTH_ROUTE, REG_ROUTE } from '../utils/consts';

const NotAuthRoute = ({ children }) => {
  const location = useLocation();
  console.log(location);

  if (location.pathname === AUTH_ROUTE) {
    return;
  }

  if (location.pathname === REG_ROUTE) {
    return;
  }
  console.log('Clear');
  return children;
};

export default NotAuthRoute;
