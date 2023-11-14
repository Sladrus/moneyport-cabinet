import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { DataContext } from '../context/context';
import DataApi from '../http/DataApi';

const DataProvider = ({ children }) => {
  //   const navigate = useNavigate();
  const location = useLocation();

  const [balances, setBalances] = useState(null);
  const [balancesLoading, setBalancesLoading] = useState(false);

  const [history, setHistory] = useState(null);
  const [historyLoading, setHistoryLoading] = useState(false);

  const getBalances = async () => {
    setBalancesLoading(true);
    const data = await DataApi.getBalances();
    if (!data) return setBalancesLoading(false);

    setBalances(data);
    setBalancesLoading(false);
    // navigate(HOME_ROUTE);
  };

  const getHistory = async () => {
    setHistoryLoading(true);
    const data = await DataApi.getHistory();
    if (!data) return setHistoryLoading(false);

    setHistory(data);
    setHistoryLoading(false);
    // navigate(HOME_ROUTE);
  };

  const value = {
    balancesLoading,
    balances,
    getBalances,
    historyLoading,
    history,
    getHistory,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export default DataProvider;
