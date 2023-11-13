import React from 'react';

import './BalanceItem.css';
import { formatCurrency } from '../../../utils/formatCurrency';
import { ReactComponent as DotsIcon } from '../../../assets/icons/menu/menu-dots.svg';

const BalanceItem = ({ title, amount, icon, code }) => {
  return (
    <div className="balance-item">
      <div className="balance-item-left">
        <div className="balance-item-logo">{icon}</div>
        <div className="balance-item-code">
          <span className="balance-item-code-title">
            {title} ({code})
          </span>
          <span className="balance-item-code-subtitle">312412412</span>
        </div>
      </div>
      <div className="balance-item-right">
        <div className="balance-item-amount">
          {formatCurrency(amount, code)}
        </div>
        {/* <div className="balance-item-menu">
          <DotsIcon className="balance-item-menu-icon" />
        </div> */}
      </div>
    </div>
  );
};

export default BalanceItem;
