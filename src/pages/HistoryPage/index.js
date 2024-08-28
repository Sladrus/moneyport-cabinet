import React, { useContext, useEffect } from "react";

import Breadcrumbs from "../../components/Breadcrumbs";
import LargeButton from "../../components/Buttons/LargeButton";
import { ApiContext, AuthContext, DataContext } from "../../context/context";
import HistoryList from "./HistoryList";
import "./HistoryPage.css";

const HistoryPage = () => {
  const { getPayments, getPaymentsLoading } = useContext(ApiContext);
  const { history, historyPagination } = useContext(DataContext);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (!history?.length > 0)
      getPayments({
        variables: {
          // user_id: Number(user?.id),
        },
      });
  }, []);

  const handleClickLoadMore = (e) => {
    e?.preventDefault();
    if (historyPagination?.next_cursor)
      getPayments({
        variables: {
          // user_id: Number(user?.id),
          next_cursor: historyPagination?.next_cursor,
        },
      });
  };

  console.log(historyPagination);

  return (
    <div className="history-page">
      <Breadcrumbs />
      <div className="history-page-content">
        <HistoryList />
        {historyPagination?.next_cursor && (
          <div className="history-page-content-button">
            <LargeButton
              onClick={handleClickLoadMore}
              disabled={getPaymentsLoading}
              text={"Показать еще"}
              variant="outlined"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default HistoryPage;
