import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { RouteContext } from '../context/context';
import { menuItems } from '../utils/menuItems';

const RouteProvider = ({ children }) => {
  const location = useLocation();

  const [selectedMenuItem, setSelectedMenuItem] = useState(1);
  const [selectedSubItem, setSelectedSubItem] = useState();

  useEffect(() => {
    const route = menuItems.find((item) => item?.path === location?.pathname);
    console.log(route);
    if (route) setSelectedMenuItem(route.id);
  }, [location.pathname]);

  const value = {
    selectedMenuItem,
    setSelectedMenuItem,
    selectedSubItem,
    setSelectedSubItem,
    location,
  };

  return (
    <RouteContext.Provider value={value}>{children}</RouteContext.Provider>
  );
};

export default RouteProvider;
