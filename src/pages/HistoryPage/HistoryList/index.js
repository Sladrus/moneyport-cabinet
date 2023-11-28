import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';

import './HistoryList.css';
import { DataContext } from '../../../context/context';
import HistoryItem from '../../../components/History/HistoryItem';
import Skeleton from 'react-loading-skeleton';
import EmptyHistory from '../../../components/History/EmptyHistory';
import Spinner from '../../../components/Spinner';

const HistoryList = () => {
  const { history, setHistoryLoading, setHistory, historyLoading, getHistory } =
    useContext(DataContext);

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(20);
  const loader = useRef(null);

  useEffect(() => {
    setHistory(null);
    setHistoryLoading(true);
  }, []);

  useEffect(() => {
    if (historyLoading) {
      getHistory({ page, limit }).then((data) => {
        setPage((prev) => prev + 1);
      });
    }
  }, [historyLoading]);

  useEffect(() => {
    const elements = document.getElementsByClassName('wrapper-scroll');

    Array.from(elements).forEach((element) => {
      element.addEventListener('scroll', scrollHandler);
    });

    return function () {
      Array.from(elements).forEach((element) => {
        element.removeEventListener('scroll', scrollHandler);
      });
    };
  }, []);

  const scrollHandler = (e) => {
    const target = e.target;

    if (!target) return;
    if (target.scrollHeight - (target.scrollTop + window.innerHeight) < 100) {
      // if (history?.last_page === page) return;
      setHistoryLoading(true);
    }
  };

  return (
    <>
      <div className={`history-page-list`}>
        {historyLoading && !history?.data && (
          <Skeleton inline count={15} height={72} borderRadius={16} />
        )}
        {history?.data?.length ? (
          <>
            {history?.data?.map(
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
            )}
            {historyLoading && page <= history?.last_page && <Spinner />}
          </>
        ) : (
          !historyLoading && <EmptyHistory />
        )}
      </div>
    </>
  );
};

export default HistoryList;
