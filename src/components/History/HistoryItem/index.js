import React from 'react';
import { formatCurrency } from '../../../utils/formatCurrency';

import './HistoryItem.css';
import { getCurrencyTitle } from '../../../utils/getCurrencyTitle';
import { getType } from '../../../utils/getType';

const HistoryItem = ({ amount, code, type, date }) => {
  const currency = getCurrencyTitle(code);

  amount =
    type === 'in'
      ? Number(amount) >= 0
        ? amount
        : Number(amount) * -1
      : Number(amount) * -1;
  return (
    <div className="history-item">
      <div className="history-item-left">
        <div className="history-item-logo">{currency?.icon}</div>
        <div className="history-item-code">
          <span className="history-item-code-title">
            {currency?.title} ({code})
          </span>
          <span className="history-item-code-subtitle"></span>
        </div>
      </div>
      <div className="history-item-right">
        <div className={`history-item-amount ${type}`}>
          <div>
            {Number(amount) >= 0
              ? '+' + formatCurrency(Number(amount), code)
              : formatCurrency(Number(amount), code)}
          </div>
          <b>{code}</b>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            gap: '6px',
          }}
        >
          <span className="history-item-type">{getType(type)}</span>
          <span className="history-item-date">{date}</span>
        </div>
      </div>
    </div>
  );
};

export default HistoryItem;
