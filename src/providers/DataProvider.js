import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { DataContext } from '../context/context';
import DataApi from '../http/DataApi';

const DataProvider = ({ children }) => {
  const [chat, setChat] = useState(null);
  const [chatLoading, setChatLoading] = useState(false);

  const [shortBalances, setShortBalances] = useState(null);
  const [shortBalancesLoading, setShortBalancesLoading] = useState(false);

  const [balances, setBalances] = useState(null);
  const [balancesLoading, setBalancesLoading] = useState(false);

  const [history, setHistory] = useState(null);
  const [historyLoading, setHistoryLoading] = useState(false);

  useEffect(() => {}, []);

  const getBalances = async ({ type, limit, page }) => {
    setBalancesLoading(true);
    // setBalances(null);
    const data = await DataApi.getBalances({ type, limit, page });

    if (!data) return setBalancesLoading(false);
    const { balances, pagination } = data;
    setBalances({ balances, pagination });
    setBalancesLoading(false);
  };

  const getShortBalances = async ({ type = 'short' }) => {
    setShortBalancesLoading(true);
    const data = await DataApi.getBalances({ type });

    if (!data) return setShortBalancesLoading(false);
    const { balances, pagination } = data;
    setShortBalances({ balances, pagination });
    setShortBalancesLoading(false);
  };

  const getHistory = async ({ page, limit }) => {
    setHistoryLoading(true);
    setHistory(null);
    const data = await DataApi.getHistory({ page, limit });
    if (!data) return setHistoryLoading(false);
    const { history, pagination } = data;
    console.log(data);
    setHistory(data);
    setHistoryLoading(false);
  };

  const getChat = async () => {
    if (chat) return;
    setChatLoading(true);
    const data = await DataApi.getChat();
    if (!data) return setChatLoading(false);

    setChat(data);
    setChatLoading(false);
  };

  const value = {
    balancesLoading,
    balances,
    getBalances,
    shortBalancesLoading,
    shortBalances,
    getShortBalances,
    historyLoading,
    history,
    getHistory,
    chatLoading,
    chat,
    getChat,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export default DataProvider;
