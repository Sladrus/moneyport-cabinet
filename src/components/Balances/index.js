import React, { useContext, useEffect, useState } from "react";

import BalanceItem from "./BalanceItem";
import "./Balances.css";

import { useNavigate } from "react-router-dom";
import { ReactComponent as ArrowDownIcon } from "../../assets/icons/arrows/arrow-down.svg";
import {
  ApiContext,
  AuthContext,
  DataContext,
  RouteContext,
} from "../../context/context";
import { BALANCES_ROUTE } from "../../utils/consts";
import LargeTextButton from "../Buttons/LargeTextButton";
import EmptyBalances from "../History/EmptyBalances";
import Spinner from "../Spinner";

const Balances = () => {
  const [open, setOpen] = useState(true);
  const { getBalances, getBalancesLoading } = useContext(ApiContext);
  const { balances } = useContext(DataContext);
  const { setSelectedMenuItem, location } = useContext(RouteContext);
  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  // useEffect(() => {
  //   getShortBalances({ type: 'short' });
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  useEffect(() => {
    getBalances({ variables: { user_id: Number(user?.id) } });
    // getBalances({ limit, page });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = () => {
    setSelectedMenuItem(2);
    navigate({ pathname: BALANCES_ROUTE, search: location.search });
  };

  return (
    <div className={`balances ${open ? "expanded" : "closed"}`}>
      <div className="balances-title">
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <span>Мои счета</span>
          <LargeTextButton value={"Все"} onClick={handleClick} />
        </div>
        <div
          style={{ display: "flex", alignItems: "center" }}
          onClick={() => setOpen(!open)}
        >
          <ArrowDownIcon
            className={`balances-title-arrow ${open ? "expanded" : "closed"}`}
          />
        </div>
      </div>
      <div className={`balances-list`}>
        {getBalancesLoading && !balances?.length ? (
          <Spinner />
        ) : balances?.length ? (
          balances?.map((balance, index) => {
            if (index >= 3) return;
            return <BalanceItem open={open} key={index} {...balance} />;
          })
        ) : (
          !getBalancesLoading && <EmptyBalances />
        )}
      </div>
    </div>
  );
};

export default Balances;
