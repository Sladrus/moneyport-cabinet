import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { RouteContext } from '../context/context';

const RouteProvider = ({ children }) => {
  //   const navigate = useNavigate();
  const location = useLocation();

  const [selectedMenuItem, setSelectedMenuItem] = useState(1);
  const [selectedSubItem, setSelectedSubItem] = useState(1);

  const value = {
    selectedMenuItem,
    setSelectedMenuItem,
    selectedSubItem,
    setSelectedSubItem,
  };

  return (
    <RouteContext.Provider value={value}>{children}</RouteContext.Provider>
  );
};

export default RouteProvider;
