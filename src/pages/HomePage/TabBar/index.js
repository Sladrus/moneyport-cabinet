import React from 'react';

import { ReactComponent as HomeMenuIcon } from '../../../assets/icons/menu/home.svg';
import { ReactComponent as TransfersIcon } from '../../../assets/icons/menu/transfer.svg';
import { ReactComponent as ExchangeIcon } from '../../../assets/icons/menu/exchange.svg';
import { ReactComponent as OrderIcon } from '../../../assets/icons/menu/order.svg';
import { ReactComponent as CommissionIcon } from '../../../assets/icons/menu/commission.svg';

import './TabBar.css';
import TabBarItem from './TabBarItem';

const items = [
  {
    id: 1,
    title: 'Главная',
    Icon: <HomeMenuIcon className="tab-bar-item-icon" />,
  },
  {
    id: 2,
    title: 'Переводы',
    Icon: <TransfersIcon className="tab-bar-item-icon" />,
  },
  {
    id: 3,
    title: 'Комиссии',
    Icon: <CommissionIcon className="tab-bar-item-icon" />,
  },
  {
    id: 4,
    title: 'Заявки',
    Icon: <OrderIcon className="tab-bar-item-icon" />,
  },
  {
    id: 5,
    title: 'Обмен',
    Icon: <ExchangeIcon className="tab-bar-item-icon" />,
  },
];

const TabBar = () => {
  return (
    <div className="tab-bar">
      {items.map(({ id, title, Icon }) => {
        return <TabBarItem key={id} title={title} icon={Icon} />;
      })}
    </div>
  );
};

export default TabBar;
