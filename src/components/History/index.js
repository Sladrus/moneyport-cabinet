import React, { useContext, useEffect, useState } from "react";

import "./History.css";

import { ReactComponent as ArrowDownIcon } from "../../assets/icons/arrows/arrow-down.svg";

import { useLocation, useNavigate } from "react-router-dom";
import {
  ApiContext,
  AuthContext,
  DataContext,
  RouteContext,
} from "../../context/context";
import { HISTORY_ROUTE } from "../../utils/consts";
import LargeTextButton from "../Buttons/LargeTextButton";
import Spinner from "../Spinner";
import EmptyHistory from "./EmptyHistory";
import HistoryItem from "./HistoryItem";

const History = () => {
  const [open, setOpen] = useState(true);
  const { history } = useContext(DataContext);
  const { user } = useContext(AuthContext);

  const { getPayments, getPaymentsLoading } = useContext(ApiContext);
  const { setSelectedMenuItem } = useContext(RouteContext);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!history?.length > 0)
      getPayments({
        variables: {
          user_id: Number(user?.id),
        },
      });
  }, []);

  const handleClick = () => {
    setSelectedMenuItem(5);
    navigate({ pathname: HISTORY_ROUTE, search: location.search });
  };

  return (
    <div className={`history ${open ? "expanded" : "closed"}`}>
      <div className="history-title">
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <span>История операций</span>
          <LargeTextButton value={"Все"} onClick={handleClick} />
        </div>
        <div
          style={{ display: "flex", alignItems: "center" }}
          onClick={() => setOpen(!open)}
        >
          <ArrowDownIcon
            className={`history-title-arrow ${open ? "expanded" : "closed"}`}
          />
        </div>
      </div>
      <div className={`history-list ${open ? "expanded" : "closed"}`}>
        {getPaymentsLoading && !history?.length ? (
          <div className="skeleton">
            {/* <Skeleton inline count={5} height={68} borderRadius={16} /> */}
            <Spinner />
          </div>
        ) : history?.length ? (
          history?.map((item, index) => {
            if (index >= 3) return;
            return <HistoryItem key={index} {...item} />;
          })
        ) : (
          <EmptyHistory />
        )}
      </div>
    </div>
  );
};

export default History;
