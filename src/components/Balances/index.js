import React, { useContext, useEffect, useState } from 'react';

import './Balances.css';
import BalanceItem from './BalanceItem';

import { ReactComponent as ArrowDownIcon } from '../../assets/icons/arrows/arrow-down.svg';
import { DataContext, RouteContext } from '../../context/context';
import Skeleton from 'react-loading-skeleton';
import LargeTextButton from '../Buttons/LargeTextButton';
import { useNavigate } from 'react-router-dom';
import { BALANCES_ROUTE } from '../../utils/consts';

const Balances = () => {
  const [open, setOpen] = useState(true);
  const { shortBalances, shortBalancesLoading, getShortBalances } =
    useContext(DataContext);
  const { setSelectedMenuItem, location } = useContext(RouteContext);
  const navigate = useNavigate();

  useEffect(() => {
    getShortBalances({ type: 'short' });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = () => {
    setSelectedMenuItem(2);
    navigate({ pathname: BALANCES_ROUTE, search: location.search });
  };

  return (
    <div className={`balances ${open ? 'expanded' : 'closed'}`}>
      <div className="balances-title">
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span>Мои счета</span>
          <LargeTextButton value={'Все'} onClick={handleClick} />
        </div>
        <div
          style={{ display: 'flex', alignItems: 'center' }}
          onClick={() => setOpen(!open)}
        >
          <ArrowDownIcon
            className={`balances-title-arrow ${open ? 'expanded' : 'closed'}`}
          />
        </div>
      </div>
      <div className="skeleton">
        {shortBalancesLoading ? (
          <Skeleton inline count={3} height={68} borderRadius={16} />
        ) : (
          shortBalances?.data?.map(
            ({ id, title, amount, code, sign }, index) => {
              return (
                <BalanceItem
                  key={index}
                  title={title}
                  amount={amount}
                  sign={sign}
                  code={code}
                />
              );
            }
          )
        )}
      </div>
    </div>
  );
};

export default Balances;
