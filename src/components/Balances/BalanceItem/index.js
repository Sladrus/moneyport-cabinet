import React from "react";

import { formatCurrency } from "../../../utils/formatCurrency";
import { getCurrencyTitle } from "../../../utils/getCurrencyTitle";
import "./BalanceItem.css";

const BalanceItem = ({ open, currency, sum }) => {
  const tmpCurrency = getCurrencyTitle(currency?.code);
  return (
    <div className={`balance-item ${open ? "expanded" : "closed"}`}>
      <div className="balance-item-left">
        <div className="balance-item-logo">{tmpCurrency?.icon}</div>
        <div className="balance-item-code">
          <span className="balance-item-code-title">
            {currency?.name} ({currency?.code})
          </span>
        </div>
      </div>
      <div className="balance-item-right">
        <div className="balance-item-amount">
          {formatCurrency(Number(sum), currency?.code)} {currency?.symbol}
        </div>
      </div>
    </div>
  );
};

export default BalanceItem;
