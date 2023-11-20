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
import { DataContext } from '../../context/context';
import Skeleton from 'react-loading-skeleton';

// const balances = [
//   {
//     id: 1,
//     title: 'Рубли',
//     code: 'RUB',
//     balanceId: 'R39023',
//     amount: 10000,
//     icon: <RubIcon className="balance-item-currency" />,
//   },
//   {
//     id: 2,
//     title: 'Доллары',
//     code: 'USD',
//     balanceId: 'R39023',
//     amount: 10000,
//     icon: <UsdIcon className="balance-item-currency" />,
//   },
//   {
//     id: 3,
//     title: 'Евро',
//     code: 'EUR',
//     balanceId: 'R39023',
//     amount: 10000,
//     icon: <EurIcon className="balance-item-currency" />,
//   },
//   {
//     id: 4,
//     title: 'Tether',
//     code: 'USDT',
//     balanceId: 'R39023',
//     amount: 10000,
//     icon: <UsdtIcon className="balance-item-currency" />,
//   },
//   {
//     id: 5,
//     title: 'Дирхамы',
//     code: 'AED',
//     balanceId: 'R39023',
//     amount: 10000,
//     icon: <AedIcon className="balance-item-currency" />,
//   },
// ];

const Balances = () => {
  const [open, setOpen] = useState(true);
  const { balances, balancesLoading, getBalances } = useContext(DataContext);

  useEffect(() => {
    getBalances();
  }, []);
  // console.log(balances);
  return (
    <div className={`balances ${open ? 'expanded' : 'closed'}`}>
      <div className="balances-title">
        <span>Мои счета</span>
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
        balances?.map(({ id, title, amount, icon, code, sign }, index) => {
          return (
            <BalanceItem
              key={index}
              title={title}
              amount={amount}
              sign={sign}
              // icon={icon}
              code={code}
            />
          );
        })
      )}
    </div>
  );
};

export default Balances;
