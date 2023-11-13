import React, { useState } from 'react';

import HomeMenuItemButton from './HomeMenuItemButton';

import './HomeMenuList.css';
import { ReactComponent as HomeMenuIcon } from '../../../../assets/icons/menu/home.svg';
import { ReactComponent as BalancesIcon } from '../../../../assets/icons/menu/balances.svg';
import { ReactComponent as TransfersIcon } from '../../../../assets/icons/menu/transfer.svg';
import { ReactComponent as ExchangeIcon } from '../../../../assets/icons/menu/exchange.svg';
import { ReactComponent as OrderIcon } from '../../../../assets/icons/menu/order.svg';
import { ReactComponent as HistoryIcon } from '../../../../assets/icons/menu/history.svg';
import { ReactComponent as CourseIcon } from '../../../../assets/icons/menu/course.svg';
import { ReactComponent as CommissionIcon } from '../../../../assets/icons/menu/commission.svg';
import {
  CASH_ROUTE,
  COMPANY_TRANS_ROUTE,
  EXCHANGE_ROUTE,
  HOME_ROUTE,
  PHYS_TRANS_ROUTE,
  RECEPTION_ROUTE,
} from '../../../../utils/consts';
import { useNavigate } from 'react-router-dom';

const items = [
  {
    id: 1,
    title: 'Главная',
    Icon: <HomeMenuIcon className="home-menu-item-icon" />,
    path: HOME_ROUTE,
    submenu: false,
  },
  {
    id: 2,
    title: 'Мои счета',
    Icon: <BalancesIcon className="home-menu-item-icon" />,
    path: HOME_ROUTE,
    submenu: false,
  },
  {
    id: 3,
    title: 'Переводы',
    Icon: <TransfersIcon className="home-menu-item-icon" />,
    submenu: true,
    submenuList: [
      { id: 1, title: 'Переводы физ. лицу', path: PHYS_TRANS_ROUTE },
      { id: 2, title: 'Переводы юр. лицу', path: COMPANY_TRANS_ROUTE },
      { id: 3, title: 'Прием из-за рубежа', path: RECEPTION_ROUTE },
      { id: 4, title: 'Обмен криптовалют', path: EXCHANGE_ROUTE },
      { id: 5, title: 'Выдача наличных', path: CASH_ROUTE },
    ],
  },
  // {
  //   id: 4,
  //   title: 'Обмен валют',
  //   path: HOME_ROUTE,
  //   Icon: <ExchangeIcon className="home-menu-item-icon" />,
  //   submenu: false,
  // },
  // {
  //   id: 5,
  //   title: 'Мои заявки',
  //   path: HOME_ROUTE,
  //   Icon: <OrderIcon className="home-menu-item-icon" />,
  //   submenu: false,
  // },
  {
    id: 6,
    title: 'История операций',
    path: HOME_ROUTE,
    Icon: <HistoryIcon className="home-menu-item-icon" />,
    submenu: false,
  },
  // {
  //   id: 7,
  //   title: 'Курсы валют',
  //   path: HOME_ROUTE,
  //   Icon: <CourseIcon className="home-menu-item-icon" />,
  //   submenu: false,
  // },
  // {
  //   id: 8,
  //   title: 'Комиссии',
  //   path: HOME_ROUTE,
  //   Icon: <CommissionIcon className="home-menu-item-icon" />,
  //   submenu: false,
  // },
];

const HomeMenuList = ({ open }) => {
  const [selectedItem, setSelectedItem] = useState(1);
  const [selectedSubItem, setSelectedSubItem] = useState(null);

  const navigate = useNavigate();

  const navigateToPage = (id, path) => {
    setSelectedItem(id);
    setSelectedSubItem(null);
    navigate(path);
  };

  return (
    <div className={`home-menu-list ${open ? 'open' : ''}`}>
      {items.map(({ id, title, path, Icon, submenu, submenuList }) => {
        return (
          <HomeMenuItemButton
            key={id}
            onClick={() => navigateToPage(id, path)}
            open={open}
            id={id}
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
            selectedSubItem={selectedSubItem}
            setSelectedSubItem={setSelectedSubItem}
            title={title}
            icon={Icon}
            submenu={submenu}
            submenuList={submenu && submenuList}
          />
        );
      })}
    </div>
  );
};

export default HomeMenuList;
