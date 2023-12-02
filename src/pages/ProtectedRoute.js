import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/context';
import { AUTH_ROUTE } from '../utils/consts';

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  const location = useLocation();

  // if (!user) {
  //   return <Navigate to={AUTH_ROUTE} replace state={{ from: location }} />; //поменять
  // }
  return children;
};

export default ProtectedRoute;
