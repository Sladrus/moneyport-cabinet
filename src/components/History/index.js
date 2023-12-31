import React, { useContext, useEffect, useState } from 'react';

import './History.css';

import { ReactComponent as ArrowDownIcon } from '../../assets/icons/arrows/arrow-down.svg';

import HistoryItem from './HistoryItem';
import LargeTextButton from '../Buttons/LargeTextButton';
import { AuthContext, DataContext, RouteContext } from '../../context/context';
import Skeleton from 'react-loading-skeleton';
import EmptyHistory from './EmptyHistory';
import { useLocation, useNavigate } from 'react-router-dom';
import { HISTORY_ROUTE } from '../../utils/consts';
import Spinner from '../Spinner';

// const history = [
//   {
//     id: 1,
//     title: 'Рубли',
//     code: 'RUB',
//     balanceId: 'R39023',
//     amount: 10000,
//     icon: <RubIcon className="history-item-currency" />,
//     type: 'in',
//     date: new Date(),
//   },
//   {
//     id: 2,
//     title: 'Доллары',
//     code: 'USD',
//     balanceId: 'R39023',
//     amount: 10000,
//     icon: <UsdIcon className="history-item-currency" />,
//     type: 'in',
//     date: new Date(),
//   },
//   {
//     id: 3,
//     title: 'Евро',
//     code: 'EUR',
//     balanceId: 'R39023',
//     amount: 10000,
//     icon: <EurIcon className="history-item-currency" />,
//     type: 'out',
//     date: new Date(),
//   },
//   {
//     id: 4,
//     title: 'Tether',
//     code: 'USDT',
//     balanceId: 'R39023',
//     amount: 10000,
//     icon: <UsdtIcon className="history-item-currency" />,
//     type: 'out',
//     date: new Date(),
//   },
//   {
//     id: 5,
//     title: 'Дирхамы',
//     code: 'AED',
//     balanceId: 'R39023',
//     amount: 10000,
//     icon: <AedIcon className="history-item-currency" />,
//     type: 'in',
//     date: new Date(),
//   },
// ];

const History = () => {
  const [open, setOpen] = useState(true);
  const { loading } = useContext(AuthContext);

  const { shortHistory, shortHistoryLoading, getShortHistory } =
    useContext(DataContext);
  const { setSelectedMenuItem } = useContext(RouteContext);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    getShortHistory({ page: 1, limit: 10 });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = () => {
    setSelectedMenuItem(5);
    navigate({ pathname: HISTORY_ROUTE, search: location.search });
  };

  return (
    <div className={`history ${open ? 'expanded' : 'closed'}`}>
      <div className="history-title">
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span>История операций</span>
          <LargeTextButton value={'Все'} onClick={handleClick} />
        </div>
        <div
          style={{ display: 'flex', alignItems: 'center' }}
          onClick={() => setOpen(!open)}
        >
          <ArrowDownIcon
            className={`history-title-arrow ${open ? 'expanded' : 'closed'}`}
          />
        </div>
      </div>
      <div className={`history-list ${open ? 'expanded' : 'closed'}`}>
        {shortHistoryLoading && !shortHistory?.data?.length ? (
          <div className="skeleton">
            {/* <Skeleton inline count={5} height={68} borderRadius={16} /> */}
            <Spinner />
          </div>
        ) : shortHistory?.data?.length ? (
          shortHistory?.data?.map(
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
    </div>
  );
};

export default History;
