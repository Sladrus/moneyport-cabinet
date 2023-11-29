import React from 'react';

import './BalanceItem.css';
import { formatCurrency } from '../../../utils/formatCurrency';
import { getCurrencyTitle } from '../../../utils/getCurrencyTitle';

const BalanceItem = ({ open, title, amount, icon, code, sign }) => {
  const currency = getCurrencyTitle(code);
  return (
    <div className={`balance-item ${open ? 'expanded' : 'closed'}`}>
      <div className="balance-item-left">
        <div className="balance-item-logo">{currency?.icon}</div>
        <div className="balance-item-code">
          <span className="balance-item-code-title">
            {title} ({code})
          </span>
          {/* <span className="balance-item-code-subtitle">312412412</span> */}
        </div>
      </div>
      <div className="balance-item-right">
        <div className="balance-item-amount">
          {formatCurrency(amount, code)} {sign}
        </div>
        {/* <div className="balance-item-menu">
          <DotsIcon className="balance-item-menu-icon" />
        </div> */}
      </div>
    </div>
  );
};

export default BalanceItem;
