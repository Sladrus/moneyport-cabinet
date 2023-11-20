import React from 'react';
import { ReactComponent as EmptyHistoryIcon } from '../../../assets/icons/menu/empty-history.svg';
import './EmptyHistory.css';

const EmptyHistory = () => {
  return (
    <div className="empty-history">
      <EmptyHistoryIcon className="empty-history-icon" />
      <span className="empty-history-title">
        Еще не было операций по счетам
      </span>
    </div>
  );
};

export default EmptyHistory;
