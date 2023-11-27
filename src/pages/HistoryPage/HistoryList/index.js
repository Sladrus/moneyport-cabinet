import React, { useContext, useEffect, useState } from 'react';

import './HistoryList.css';
import { DataContext } from '../../../context/context';
import HistoryItem from '../../../components/History/HistoryItem';
import Skeleton from 'react-loading-skeleton';
import EmptyHistory from '../../../components/History/EmptyHistory';

const HistoryList = () => {
  const { history, historyLoading, getHistory } = useContext(DataContext);

  const [page, setPage] = useState(1);

  const [limit, setLimit] = useState(15);

  useEffect(() => {
    setPage(1);
    setLimit(15);
    getHistory({ page, limit });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className={`history-page-list`}>
        {historyLoading ? (
          // <div className="skeleton">
          <Skeleton inline count={15} height={72} borderRadius={16} />
        ) : // </div>
        history ? (
          history?.data?.map(
            ({ id, title, val, icon, symbol, type, create_date }) => {
              return (
                <HistoryItem
                  key={id}
                  title={title}
                  amount={val}
                  icon={icon}
                  code={symbol}
                  type={type}
                  date={create_date}
                />
              );
            }
          )
        ) : (
          <EmptyHistory />
        )}
      </div>
      {/* {history && (
        <div className="history-page-content-button">
          <LargeButton text={'Показать еще'} variant="outlined" />
        </div>
      )} */}
    </>
  );
};

export default HistoryList;
