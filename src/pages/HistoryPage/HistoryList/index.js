import React, { useContext, useEffect } from "react";

import EmptyHistory from "../../../components/History/EmptyHistory";
import HistoryItem from "../../../components/History/HistoryItem";
import Spinner from "../../../components/Spinner";
import { ApiContext, AuthContext, DataContext } from "../../../context/context";
import "./HistoryList.css";

const HistoryList = () => {
  const { history, historyPagination } = useContext(DataContext);
  const { getPayments, getPaymentsLoading } = useContext(ApiContext);
  const { user } = useContext(AuthContext);

  // const historyListRef = useRef(null);

  useEffect(() => {
    if (!history?.length > 0)
      getPayments({
        variables: {
          user_id: Number(user?.id),
        },
      });
  }, []);

  // const handleScroll = (e) => {
  //   const bottom =
  //     e.target.scrollHeight - e.target.scrollTop <=
  //     e.target.clientHeight + e.target.clientHeight / 3;
  //   console.log(bottom, historyPagination, getPaymentsLoading);
  //   if (bottom && historyPagination?.next_cursor && !getPaymentsLoading) {
  //     console.log("load");
  //     // setIsLoadingMore(true);
  //     // getPayments({
  //     //   variables: {
  //     //     next_cursor: pagination?.next_cursor || "",
  //     //     input: { ...chatsFilters, statuses: [id] },
  //     //   },
  //     // });
  //   }
  // };

  return (
    <>
      <div
        className={`history-page-list`}
        // ref={historyListRef}
        // onScroll={handleScroll}
      >
        {getPaymentsLoading && !history?.length ? (
          <Spinner />
        ) : history?.length > 0 ? (
          <>
            {history?.map((item, index) => {
              return <HistoryItem key={item?.id} {...item} />;
            })}
            {getPaymentsLoading && <Spinner />}
          </>
        ) : (
          !getPaymentsLoading && <EmptyHistory />
        )}
      </div>
    </>
  );
};

export default HistoryList;
