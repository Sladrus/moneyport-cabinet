import React from "react";
import { ReactComponent as EmptyBalancesIcon } from "../../../assets/icons/menu/empty-balances.svg";
import "./EmptyBalances.css";

const EmptyBalances = () => {
  return (
    <div className="empty-balances">
      <EmptyBalancesIcon className="empty-balances-icon" />
      <span className="empty-balances-title">Еще нет активных балансов</span>
    </div>
  );
};

export default EmptyBalances;
