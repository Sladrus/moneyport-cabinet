import React from 'react';
import { formatCurrency } from '../../../utils/formatCurrency';

import './HistoryItem.css';

const HistoryItem = ({ title, amount, icon, code, type, date }) => {
  return (
    <div className="history-item">
      <div className="history-item-left">
        <div className="history-item-logo">{icon}</div>
        <div className="history-item-code">
          <span className="history-item-code-title">
            {title} ({code})
          </span>
          <span className="history-item-code-subtitle">312412412</span>
        </div>
      </div>
      <div className="history-item-right">
        <div className={`history-item-amount ${type}`}>
          {formatCurrency(amount, code)}
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            gap: '6px',
          }}
        >
          <span className="history-item-type">{type}</span>
          <span className="history-item-date">{date.getTime()}</span>
        </div>
      </div>
    </div>
  );
};

export default HistoryItem;
