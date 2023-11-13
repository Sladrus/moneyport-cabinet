import AuthPage from './pages/AuthPage';
import CashWithdrawPage from './pages/CashWithdrawPage';
import CompanyTransfersPage from './pages/CompanyTransfersPage';
import ExchangePage from './pages/ExchangePage';
import HomePage from './pages/HomePage';
import PhysicalTransfersPage from './pages/PhysicalTransfersPage';
import ReceptionFromAbroadPage from './pages/ReceptionFromAbroadPage';
import RegPage from './pages/RegPage';

import {
  AUTH_ROUTE,
  HOME_ROUTE,
  PHYS_TRANS_ROUTE,
  COMPANY_TRANS_ROUTE,
  RECEPTION_ROUTE,
  EXCHANGE_ROUTE,
  REG_ROUTE,
  CASH_ROUTE,
} from './utils/consts';

export const authRoutes = [
  {
    title: 'Главная',
    path: HOME_ROUTE,
    Component: HomePage,
    nestedRoutes: [],
  },
  {
    title: 'Переводы физ. лицу',
    path: PHYS_TRANS_ROUTE,
    Component: PhysicalTransfersPage,
  },
  {
    title: 'Переводы юр. лицу',
    path: COMPANY_TRANS_ROUTE,
    Component: CompanyTransfersPage,
  },
  {
    title: 'Прием из-за рубежа',
    path: RECEPTION_ROUTE,
    Component: ReceptionFromAbroadPage,
  },
  {
    title: 'Обмен криптовалют',
    path: EXCHANGE_ROUTE,
    Component: ExchangePage,
  },
  {
    title: 'Выдача наличных',
    path: CASH_ROUTE,
    Component: CashWithdrawPage,
  },
];

export const publicRoutes = [
  {
    title: 'Авторизация',
    path: AUTH_ROUTE,
    Component: AuthPage,
  },
  {
    title: 'Регистрация',
    path: REG_ROUTE,
    Component: RegPage,
  },
];
