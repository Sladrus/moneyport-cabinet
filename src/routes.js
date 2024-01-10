import AuthPage from './pages/AuthPage';
import CashWithdrawPage from './pages/CashWithdrawPage';
import CompanyTransfersPage from './pages/CompanyTransfersPage';
import ExchangePage from './pages/ExchangePage';
import HomePage from './pages/HomePage';
import HistoryPage from './pages/HistoryPage';
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
  HISTORY_ROUTE,
  BALANCES_ROUTE,
  TRANSFERS_ROUTE,
  RECOVERY_ROUTE,
  RESET_ROUTE,
  QUESTIONS_ROUTE,
} from './utils/consts';
import BalancesPage from './pages/BalancesPage';
import TransfersPage from './pages/TransfersPage';
import RecoveryPage from './pages/RecoveryPage';
import ResetPasswordPage from './pages/ResetPasswordPage';
import QuestionsPage from './pages/QuestionsPage';

export const authRoutes = [
  {
    title: 'Главная',
    path: HOME_ROUTE,
    Component: HomePage,
    type: 'auth',
  },
  {
    title: 'Переводы физлицу',
    path: PHYS_TRANS_ROUTE,
    Component: PhysicalTransfersPage,
    type: 'auth',
  },
  {
    title: 'Переводы юрлицу',
    path: COMPANY_TRANS_ROUTE,
    Component: CompanyTransfersPage,
    type: 'auth',
  },
  {
    title: 'Прием из-за рубежа',
    path: RECEPTION_ROUTE,
    Component: ReceptionFromAbroadPage,
    type: 'auth',
  },
  {
    title: 'Переводы',
    path: TRANSFERS_ROUTE,
    Component: TransfersPage,
    type: 'auth',
  },
  {
    title: 'Обмен криптовалют',
    path: EXCHANGE_ROUTE,
    Component: ExchangePage,
    type: 'auth',
  },
  {
    title: 'Выдача наличных',
    path: CASH_ROUTE,
    Component: CashWithdrawPage,
    type: 'auth',
  },
  {
    title: 'История операций',
    path: HISTORY_ROUTE,
    Component: HistoryPage,
    type: 'auth',
  },
  {
    title: 'Мои счета',
    path: BALANCES_ROUTE,
    Component: BalancesPage,
    type: 'auth',
  },
  {
    title: 'Частые вопросы',
    path: QUESTIONS_ROUTE,
    Component: QuestionsPage,
    type: 'auth',
  },
];

export const publicRoutes = [
  {
    title: 'Авторизация',
    path: AUTH_ROUTE,
    Component: AuthPage,
    type: 'public',
  },
  {
    title: 'Регистрация',
    path: REG_ROUTE,
    Component: RegPage,
    type: 'public',
  },
  {
    title: 'Восстановлние пароля',
    path: RECOVERY_ROUTE,
    Component: RecoveryPage,
    type: 'public',
  },
  {
    title: 'Восстановлние пароля',
    path: RESET_ROUTE,
    Component: ResetPasswordPage,
    type: 'public',
  },
];
