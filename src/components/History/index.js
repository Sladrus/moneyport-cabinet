import React, { useState } from 'react';

import './History.css';
import { ReactComponent as RubIcon } from '../../assets/icons/currency/RUB.svg';
import { ReactComponent as UsdIcon } from '../../assets/icons/currency/USD.svg';
import { ReactComponent as EurIcon } from '../../assets/icons/currency/EUR.svg';
import { ReactComponent as UsdtIcon } from '../../assets/icons/currency/USDT.svg';
import { ReactComponent as AedIcon } from '../../assets/icons/currency/AED.svg';
import { ReactComponent as GbrIcon } from '../../assets/icons/currency/GBR.svg';
import { ReactComponent as TryIcon } from '../../assets/icons/currency/TRY.svg';

import { ReactComponent as ArrowUpIcon } from '../../assets/icons/arrows/arrow-up.svg';
import { ReactComponent as ArrowDownIcon } from '../../assets/icons/arrows/arrow-down.svg';

import HistoryItem from './HistoryItem';
import LargeTextButton from '../Buttons/LargeTextButton';

const history = [
  {
    id: 1,
    title: 'Рубли',
    code: 'RUB',
    balanceId: 'R39023',
    amount: 10000,
    icon: <RubIcon className="history-item-currency" />,
    type: 'in',
    date: new Date(),
  },
  {
    id: 2,
    title: 'Доллары',
    code: 'USD',
    balanceId: 'R39023',
    amount: 10000,
    icon: <UsdIcon className="history-item-currency" />,
    type: 'in',
    date: new Date(),
  },
  {
    id: 3,
    title: 'Евро',
    code: 'EUR',
    balanceId: 'R39023',
    amount: 10000,
    icon: <EurIcon className="history-item-currency" />,
    type: 'out',
    date: new Date(),
  },
  {
    id: 4,
    title: 'Tether',
    code: 'USDT',
    balanceId: 'R39023',
    amount: 10000,
    icon: <UsdtIcon className="history-item-currency" />,
    type: 'out',
    date: new Date(),
  },
  {
    id: 5,
    title: 'Дирхамы',
    code: 'AED',
    balanceId: 'R39023',
    amount: 10000,
    icon: <AedIcon className="history-item-currency" />,
    type: 'in',
    date: new Date(),
  },
];

const History = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="history">
      <div className="history-title">
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span>История операций</span>
          <LargeTextButton value={'Все'} />
        </div>
        <div onClick={() => setOpen(!open)}>
          {open ? (
            <ArrowUpIcon className="history-title-arrow" />
          ) : (
            <ArrowDownIcon className="history-title-arrow" />
          )}
        </div>
      </div>
      {open && (
        <div className="history-list">
          {history.map(({ id, title, amount, icon, code, type, date }) => {
            return (
              <HistoryItem
                key={id}
                title={title}
                amount={amount}
                icon={icon}
                code={code}
                type={type}
                date={date}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default History;
