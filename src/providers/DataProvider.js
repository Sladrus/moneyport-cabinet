import React, { useState } from "react";
import { DataContext } from "../context/context";
import DataApi from "../http/DataApi";

const DataProvider = ({ children }) => {
  const [chat, setChat] = useState(null);
  const [order, setOrder] = useState(null);

  const [chatLoading, setChatLoading] = useState(false);

  const [shortBalances, setShortBalances] = useState(null);
  const [shortBalancesLoading, setShortBalancesLoading] = useState(false);

  const [balances, setBalances] = useState([]);
  const [balancesPagination, setBalancesPagination] = useState(null);
  const [balancesLoading, setBalancesLoading] = useState(false);

  const [shortHistory, setShortHistory] = useState(null);
  const [shortHistoryLoading, setShortHistoryLoading] = useState(false);

  const [history, setHistory] = useState([]);
  const [historyPagination, setHistoryPagination] = useState(null);

  const [historyLoading, setHistoryLoading] = useState(false);

  const [counterparties, setCounterparties] = useState(null);
  const [counterpartiesLoading, setCounterpartiesLoading] = useState(false);

  const handleGetBalances = async (data, pagination) => {
    setBalances(data);
    setBalancesPagination(pagination);
    // setBalancesLoading(true);
    // const data = await DataApi.getBalances({ type, limit, page });
    // if (!data) return setBalancesLoading(false);
    // setBalances(data);
    // setBalancesLoading(false);
  };

  const getShortBalances = async ({ type = "short" }) => {
    setShortBalancesLoading(true);
    const data = await DataApi.getBalances({ type });
    if (!data) return setShortBalancesLoading(false);
    setShortBalances(data);
    setShortBalancesLoading(false);
  };

  const handleGetPayments = async (data, pagination) => {
    // setHistoryLoading(true);
    // const data = await DataApi.getHistory({ page, limit });
    // if (!data) return setHistoryLoading(false);
    // if (history && page !== 1) {
    //   setHistory({ ...history, data: [...history.data, ...data.data] });
    // } else {

    setHistory((prev) => [...prev, ...data]);
    setHistoryPagination(pagination);

    // }
    // setHistoryLoading(false);
    // return data;
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

  const handleGetChat = (data) => {
    setChat(data);
  };

  const setChatOrder = async (order) => {
    setChatLoading(true);
    const data = await DataApi.setChatOrder(order);
    setChatLoading(false);
  };

  const clearData = async () => {
    setHistory(null);
    setShortBalances(null);
    setBalances(null);
    setChat(null);
  };

  const getFile = async (name) => {
    return await DataApi.getFile(name);
  };

  const getCounterparties = async () => {
    setCounterpartiesLoading(true);
    const data = await DataApi.getCounterparties();
    setCounterparties(data);
    setCounterpartiesLoading(false);
  };

  const createCounterparties = async (body) => {
    setCounterpartiesLoading(true);
    const data = await DataApi.createCounterparties(body);
    if (data?.errors || data?.error) {
      setCounterpartiesLoading(false);
      return {
        result: false,
        errors: data?.errors || { error: [data?.error] },
      };
    }
    setCounterpartiesLoading(false);
    return { result: true, errors: null };
  };

  const editCounterparties = async (body) => {
    setCounterpartiesLoading(true);
    const data = await DataApi.editCounterparties(body);
    if (data?.errors || data?.error) {
      setCounterpartiesLoading(false);
      return {
        result: false,
        errors: data?.errors || { error: [data?.error] },
      };
    }
    setCounterpartiesLoading(false);
    return { result: true, errors: null };
  };

  const value = {
    balancesLoading,
    balances,
    handleGetBalances,
    shortBalancesLoading,
    shortBalances,
    getShortBalances,
    historyLoading,
    setHistoryLoading,
    history,
    historyPagination,
    handleGetPayments,
    shortHistory,
    shortHistoryLoading,
    setHistory,
    getShortHistory,
    chatLoading,
    chat,
    handleGetChat,
    clearData,
    order,
    setOrder,
    setChatOrder,
    getFile,
    getCounterparties,
    counterparties,
    counterpartiesLoading,
    setCounterpartiesLoading,
    createCounterparties,
    editCounterparties,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export default DataProvider;
