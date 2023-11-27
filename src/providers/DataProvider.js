import React, { useEffect, useState } from 'react';
import { DataContext } from '../context/context';
import DataApi from '../http/DataApi';

const DataProvider = ({ children }) => {
  const [chat, setChat] = useState(null);
  const [chatLoading, setChatLoading] = useState(false);

  const [shortBalances, setShortBalances] = useState(null);
  const [shortBalancesLoading, setShortBalancesLoading] = useState(false);

  const [balances, setBalances] = useState(null);
  const [balancesLoading, setBalancesLoading] = useState(false);

  const [shortHistory, setShortHistory] = useState(null);
  const [shortHistoryLoading, setShortHistoryLoading] = useState(false);

  const [history, setHistory] = useState(null);
  const [historyLoading, setHistoryLoading] = useState(false);

  useEffect(() => {}, []);

  const getBalances = async ({ type, limit, page }) => {
    setBalancesLoading(true);
    const data = await DataApi.getBalances({ type, limit, page });
    if (!data) return setBalancesLoading(false);
    setBalances(data);
    setBalancesLoading(false);
  };

  const getShortBalances = async ({ type = 'short' }) => {
    setShortBalancesLoading(true);
    const data = await DataApi.getBalances({ type });
    if (!data) return setShortBalancesLoading(false);
    setShortBalances(data);
    setShortBalancesLoading(false);
  };

  const getHistory = async ({ page, limit }) => {
    setHistoryLoading(true);
    const data = await DataApi.getHistory({ page, limit });
    if (!data) return setHistoryLoading(false);
    // console.log(data);
    if (history) {
      setHistory({ ...history, data: [...history.data, ...data.data] });
    } else {
      setHistory(data);
    }
    setHistoryLoading(false);
    return data;
  };

  const getShortHistory = async ({ page = 1, limit = 10 }) => {
    setShortHistoryLoading(true);
    // setHistory(null);
    const data = await DataApi.getHistory({ page, limit });
    if (!data) return setShortHistoryLoading(false);
    setShortHistory(data);
    setShortHistoryLoading(false);
    // return data;
  };

  const getChat = async () => {
    if (chat) return;
    setChatLoading(true);
    const data = await DataApi.getChat();
    if (!data) return setChatLoading(false);

    setChat(data);
    setChatLoading(false);
  };

  const clearData = async () => {
    setHistory(null);
    setShortBalances(null);
    setBalances(null);
    setChat(null);
  };

  const value = {
    balancesLoading,
    balances,
    getBalances,
    shortBalancesLoading,
    shortBalances,
    getShortBalances,
    historyLoading,
    setHistoryLoading,
    history,
    getHistory,
    shortHistory,
    shortHistoryLoading,
    setHistory,
    getShortHistory,
    chatLoading,
    chat,
    getChat,
    clearData,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export default DataProvider;
