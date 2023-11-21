import React, { useContext, useEffect, useState } from 'react';

import './Balances.css';
import BalanceItem from './BalanceItem';
import { ReactComponent as RubIcon } from '../../assets/icons/currency/RUB.svg';
import { ReactComponent as UsdIcon } from '../../assets/icons/currency/USD.svg';
import { ReactComponent as EurIcon } from '../../assets/icons/currency/EUR.svg';
import { ReactComponent as UsdtIcon } from '../../assets/icons/currency/USDT.svg';
import { ReactComponent as AedIcon } from '../../assets/icons/currency/AED.svg';
import { ReactComponent as GbrIcon } from '../../assets/icons/currency/GBR.svg';
import { ReactComponent as TryIcon } from '../../assets/icons/currency/TRY.svg';

import { ReactComponent as ArrowUpIcon } from '../../assets/icons/arrows/arrow-up.svg';
import { ReactComponent as ArrowDownIcon } from '../../assets/icons/arrows/arrow-down.svg';
import { DataContext, RouteContext } from '../../context/context';
import Skeleton from 'react-loading-skeleton';
import LargeTextButton from '../Buttons/LargeTextButton';
import { useNavigate } from 'react-router-dom';
import { BALANCES_ROUTE } from '../../utils/consts';

const Balances = () => {
  const [open, setOpen] = useState(true);
  const { balances, balancesLoading, getBalances } = useContext(DataContext);
  const { setSelectedMenuItem } = useContext(RouteContext);

  const navigate = useNavigate();

  useEffect(() => {
    getBalances();
  }, []);

  const handleClick = () => {
    setSelectedMenuItem(2);
    navigate(BALANCES_ROUTE);
  };

  return (
    <div className={`balances ${open ? 'expanded' : 'closed'}`}>
      <div className="balances-title">
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span>Мои счета</span>
          <LargeTextButton value={'Все'} onClick={handleClick} />
        </div>
        <div onClick={() => setOpen(!open)}>
          <ArrowDownIcon
            className={`balances-title-arrow ${open ? 'expanded' : 'closed'}`}
          />
        </div>
      </div>
      {balancesLoading ? (
        <Skeleton
          style={{ marginBottom: '16px' }}
          count={3}
          height={76}
          borderRadius={16}
        />
      ) : (
        balances?.map(({ id, title, amount, code, sign }, index) => {
          return (
            <BalanceItem
              key={index}
              title={title}
              amount={amount}
              sign={sign}
              code={code}
            />
          );
        })
      )}
    </div>
  );
};

export default Balances;
