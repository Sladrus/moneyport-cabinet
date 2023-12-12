import React, { useContext, useState } from 'react';

import './TransfersContent.css';
import { DataContext } from '../../../context/context';

const TransfersContent = ({ tabs, activeTab }) => {
  const { order, chat, chatLoading, getChat } = useContext(DataContext);

  return (
    <div className="transfers-content">
      {tabs.map(({ id, Component, PreOrderComponent }) => {
        if (activeTab?.id === id)
          return order?.id === id ? (
            <Component key={id} />
          ) : (
            <PreOrderComponent key={id} />
          );
        return '';
      })}
    </div>
  );
};

export default TransfersContent;
