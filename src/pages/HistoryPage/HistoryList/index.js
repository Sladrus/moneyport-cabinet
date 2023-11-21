import React, { useContext, useEffect } from 'react';

import './HistoryList.css';
import { DataContext } from '../../../context/context';
import HistoryItem from '../../../components/History/HistoryItem';
import Skeleton from 'react-loading-skeleton';
import EmptyHistory from '../../../components/History/EmptyHistory';
import LargeButton from '../../../components/Buttons/LargeButton';

const HistoryList = () => {
  const { history, historyLoading, getHistory } = useContext(DataContext);

  useEffect(() => {
    getHistory();
  }, []);

  return (
    <>
      <div className={`history-page-list`}>
        {historyLoading ? (
          <Skeleton
            style={{ marginBottom: '16px' }}
            count={10}
            height={76}
            borderRadius={16}
          />
        ) : history ? (
          history.map(({ id, title, val, icon, symbol, type, create_date }) => {
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
          })
        ) : (
          <EmptyHistory />
        )}
      </div>
      {history && (
        <div className="history-page-content-button">
          <LargeButton text={'Показать еще'} variant="outlined" />
        </div>
      )}
    </>
  );
};

export default HistoryList;
