import CashWithdrawPage from '../pages/CashWithdrawPage';
import CompanyTransfersPage from '../pages/CompanyTransfersPage';
import PhysicalTransfersPage from '../pages/PhysicalTransfersPage';
import ReceptionFromAbroadPage from '../pages/ReceptionFromAbroadPage';
import {
  BALANCES_ROUTE,
  CASH_ROUTE,
  COMPANY_TRANS_ROUTE,
  EXCHANGE_ROUTE,
  HISTORY_ROUTE,
  HOME_ROUTE,
  PHYS_TRANS_ROUTE,
  RECEPTION_ROUTE,
  TRANSFERS_ROUTE,
} from './consts';
import { ReactComponent as HomeMenuIcon } from '../assets/icons/menu/home.svg';
import { ReactComponent as TransfersIcon } from '../assets/icons/menu/transfer.svg';
import { ReactComponent as BalancesIcon } from '../assets/icons/menu/balances.svg';
import { ReactComponent as HistoryIcon } from '../assets/icons/menu/history.svg';
import { ReactComponent as ExchangeIcon } from '../assets/icons/menu/exchange.svg';

export const menuItems = [
  {
    id: 1,
    title: 'Главная',
    Icon: <HomeMenuIcon className="home-menu-item-icon" />,
    path: HOME_ROUTE,
    submenu: false,
    type: '',
  },
  {
    id: 2,
    title: 'Мои счета',
    Icon: <BalancesIcon className="home-menu-item-icon" />,
    path: BALANCES_ROUTE,
    submenu: false,
    type: '',
  },
  {
    id: 3,
    title: 'Переводы',
    Icon: <TransfersIcon className="home-menu-item-icon" />,
    path: TRANSFERS_ROUTE,
    submenu: true,
    type: '',
    submenuList: [
      {
        id: 1,
        title: 'Переводы физлицу',
        Component: PhysicalTransfersPage,
        path: PHYS_TRANS_ROUTE,
        type: 'click_perevod_fiz',
      },
      {
        id: 2,
        title: 'Переводы юрлицу',
        Component: CompanyTransfersPage,
        path: COMPANY_TRANS_ROUTE,
        type: 'click_perevod_ur',
      },
      {
        id: 3,
        title: 'Прием из-за рубежа',
        Component: ReceptionFromAbroadPage,
        path: RECEPTION_ROUTE,
        type: 'click_perevod_priem_from_abroad',
      },
      {
        id: 4,
        title: 'Выдача наличных',
        Component: CashWithdrawPage,
        path: CASH_ROUTE,
        type: 'click_perevod_cash',
      },
    ],
  },
  {
    id: 4,
    title: 'Обмен криптовалют',
    path: EXCHANGE_ROUTE,
    Icon: <ExchangeIcon className="home-menu-item-icon" />,
    submenu: false,
    type: 'click_cryptoexchange',
  },
  {
    id: 5,
    title: 'История операций',
    path: HISTORY_ROUTE,
    Icon: <HistoryIcon className="home-menu-item-icon" />,
    submenu: false,
    type: '',
  },
];

export const mobileMenuItems = [
  {
    id: 1,
    title: 'Главная',
    Icon: <HomeMenuIcon className="home-menu-item-icon" />,
    path: HOME_ROUTE,
    submenu: false,
    type: '',
  },
  {
    id: 2,
    title: 'Счета',
    Icon: <BalancesIcon className="home-menu-item-icon" />,
    path: BALANCES_ROUTE,
    submenu: false,
    type: '',
  },
  {
    id: 3,
    title: 'Переводы',
    Icon: <TransfersIcon className="home-menu-item-icon" />,
    path: TRANSFERS_ROUTE,
    submenu: true,
    type: '',
    submenuList: [
      {
        id: 1,
        title: 'Переводы физлицу',
        Component: PhysicalTransfersPage,
        path: PHYS_TRANS_ROUTE,
        type: 'click_perevod_fiz',
      },
      {
        id: 2,
        title: 'Переводы юрлицу',
        Component: CompanyTransfersPage,
        path: COMPANY_TRANS_ROUTE,
        type: 'click_perevod_ur',
      },
      {
        id: 3,
        title: 'Прием из-за рубежа',
        Component: ReceptionFromAbroadPage,
        path: RECEPTION_ROUTE,
        type: 'click_perevod_priem_from_abroad',
      },
      {
        id: 4,
        title: 'Выдача наличных',
        Component: CashWithdrawPage,
        path: CASH_ROUTE,
        type: 'click_perevod_cash',
      },
    ],
  },
  {
    id: 4,
    title: 'Обмен',
    path: EXCHANGE_ROUTE,
    Icon: <ExchangeIcon className="home-menu-item-icon" />,
    submenu: false,
    type: 'click_cryptoexchange',
  },
  {
    id: 5,
    title: 'Операции',
    path: HISTORY_ROUTE,
    Icon: <HistoryIcon className="home-menu-item-icon" />,
    submenu: false,
    type: '',
  },
];
