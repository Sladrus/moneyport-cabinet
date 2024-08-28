import React from "react";
import { formatCurrency } from "../../../utils/formatCurrency";

import { formatDate } from "../../../utils/formatDate";
import { getCurrencyTitle } from "../../../utils/getCurrencyTitle";
import "./HistoryItem.css";

const HistoryItem = ({ sum, currency, type, created_at }) => {
  const tmpCurrency = getCurrencyTitle(currency?.code);

  sum = Number(sum);
  return (
    <div className="history-item">
      <div className="history-item-logo">{tmpCurrency?.icon}</div>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div className="history-item-top">
          <div className="history-item-code">
            <span className="history-item-code-title">
              {currency?.name} ({currency?.code})
            </span>
          </div>
        </div>
        <div className="history-item-bottom">
          {/* <span className="history-item-code-subtitle">00000</span> */}
          <div
            className={`history-item-amount ${Number(sum) > 0 ? "out" : "in"}`}
          >
            <div>
              {Number(sum) >= 0
                ? "+" + formatCurrency(Number(sum), currency?.code)
                : formatCurrency(Number(sum), currency?.code)}
            </div>
            <b>{currency?.code}</b>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <span className="history-item-type">
              {Number(sum) > 0 ? "Пополнение" : "Вывод"}
            </span>
            <span className="history-item-date">{formatDate(created_at)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryItem;
