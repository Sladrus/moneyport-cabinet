import React from 'react';

import './HomeContent.css';
import SendTypeButton from '../../../components/Buttons/SendTypeButton';
import { ReactComponent as BillListIcon } from '../../../assets/icons/sendtypes/bull-list.svg';
import { ReactComponent as MoneyBagIcon } from '../../../assets/icons/sendtypes/moneybag.svg';
import { ReactComponent as WalletIcon } from '../../../assets/icons/sendtypes/wallet.svg';
import { ReactComponent as BitcoinIcon } from '../../../assets/icons/sendtypes/bitcoin.svg';
import { ReactComponent as UserIcon } from '../../../assets/icons/sendtypes/user.svg';

import Balances from '../../../components/Balances';
import History from '../../../components/History';
import {
  CASH_ROUTE,
  COMPANY_TRANS_ROUTE,
  EXCHANGE_ROUTE,
  PHYS_TRANS_ROUTE,
} from '../../../utils/consts';
import { useNavigate } from 'react-router-dom';

const items = [
  {
    id: 1,
    title: 'Перевод юр. лицу',
    subtitle: 'SWIFT, SEPA',
    Icon: <BillListIcon className="send-type-button-icon" />,
    path: COMPANY_TRANS_ROUTE,
  },
  {
    id: 2,
    title: 'Прием из-за рубежа',
    subtitle: 'Возврат валютной выручки в Россию',
    Icon: <MoneyBagIcon className="send-type-button-icon" />,
    path: COMPANY_TRANS_ROUTE,
  },
  {
    id: 3,
    title: 'Выдача наличных',
    subtitle: 'В 35 городах мира',
    Icon: <WalletIcon className="send-type-button-icon" />,
    path: CASH_ROUTE,
  },
  {
    id: 4,
    title: 'Обмен криптовалют',
    subtitle: 'USDT, BTC, ETF и другие',
    Icon: <BitcoinIcon className="send-type-button-icon" />,
    path: EXCHANGE_ROUTE,
  },
  {
    id: 5,
    title: 'Перевод физ. лицу',
    subtitle: 'PayPal, Zelle, Wise, Revolut, Сбербанк, Тинькофф',
    Icon: <UserIcon className="send-type-button-icon" />,
    path: PHYS_TRANS_ROUTE,
  },
];

const HomeContent = () => {
  const navigate = useNavigate();

  return (
    <div className="home-page-content">
      <div className="home-page-content-title">
        <span className="home-page-content-hello">Приветствуем, Диана</span>
        <span className="home-page-content-head">Главная</span>
      </div>
      <div className="home-page-content-send-list">
        {items.map(({ id, title, subtitle, Icon, path }) => {
          return (
            <SendTypeButton
              key={id}
              title={title}
              subtitle={subtitle}
              icon={Icon}
              onClick={() => navigate(path)}
            />
          );
        })}
      </div>
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '32px',
        }}
      >
        <Balances />
        <History />
      </div>
    </div>
  );
};

export default HomeContent;
