import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { RouteContext } from '../context/context';

const RouteProvider = ({ children }) => {
  const location = useLocation();

  const [selectedMenuItem, setSelectedMenuItem] = useState(1);
  const [selectedSubItem, setSelectedSubItem] = useState();

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
