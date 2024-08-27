import AuthPage from "./pages/AuthPage";
import CashWithdrawPage from "./pages/CashWithdrawPage";
import CompanyTransfersPage from "./pages/CompanyTransfersPage";
import ExchangePage from "./pages/ExchangePage";
import HistoryPage from "./pages/HistoryPage";
import HomePage from "./pages/HomePage";
import PhysicalTransfersPage from "./pages/PhysicalTransfersPage";
import ReceptionFromAbroadPage from "./pages/ReceptionFromAbroadPage";
import RegPage from "./pages/RegPage";

import AddСounterpartiesPage from "./pages/AddСounterpartiesPage";
import BalancesPage from "./pages/BalancesPage";
import LinkChatPage from "./pages/LinkChatPage";
import QuestionsPage from "./pages/QuestionsPage";
import RecoveryPage from "./pages/RecoveryPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import ShowCounterpartyPage from "./pages/ShowCounterpartyPage";
import TransfersPage from "./pages/TransfersPage";
import СounterpartiesPage from "./pages/СounterpartiesPage";
import {
  ADD_COUNTERPARTIES_ROUTE,
  AUTH_ROUTE,
  BALANCES_ROUTE,
  CASH_ROUTE,
  COMPANY_TRANS_ROUTE,
  COUNTERPARTIES_ROUTE,
  EDIT_COUNTERPARTIES_ROUTE,
  EXCHANGE_ROUTE,
  HISTORY_ROUTE,
  HOME_ROUTE,
  LINK_CHAT_ROUTE,
  PHYS_TRANS_ROUTE,
  QUESTIONS_ROUTE,
  RECEPTION_ROUTE,
  RECOVERY_ROUTE,
  REG_ROUTE,
  RESET_ROUTE,
  SHOW_COUNTERPARTIES_ROUTE,
  TRANSFERS_ROUTE,
} from "./utils/consts";

export const authRoutes = [
  {
    title: "Главная",
    path: HOME_ROUTE,
    Component: HomePage,
    type: "auth",
  },
  {
    title: "Переводы физлицу",
    path: PHYS_TRANS_ROUTE,
    Component: PhysicalTransfersPage,
    type: "auth",
  },
  {
    title: "Переводы юрлицу",
    path: COMPANY_TRANS_ROUTE,
    Component: CompanyTransfersPage,
    type: "auth",
  },
  {
    title: "Прием из-за рубежа",
    path: RECEPTION_ROUTE,
    Component: ReceptionFromAbroadPage,
    type: "auth",
  },
  {
    title: "Переводы",
    path: TRANSFERS_ROUTE,
    Component: TransfersPage,
    type: "auth",
  },
  {
    title: "Обмен криптовалют",
    path: EXCHANGE_ROUTE,
    Component: ExchangePage,
    type: "auth",
  },
  {
    title: "Выдача наличных",
    path: CASH_ROUTE,
    Component: CashWithdrawPage,
    type: "auth",
  },
  {
    title: "История операций",
    path: HISTORY_ROUTE,
    Component: HistoryPage,
    type: "auth",
  },
  {
    title: "Мои счета",
    path: BALANCES_ROUTE,
    Component: BalancesPage,
    type: "auth",
  },
  {
    title: "Частые вопросы",
    path: QUESTIONS_ROUTE,
    Component: QuestionsPage,
    type: "auth",
  },
  {
    title: "Контрагенты",
    path: COUNTERPARTIES_ROUTE,
    Component: СounterpartiesPage,
    type: "auth",
  },
  {
    title: "Добавление контрагента",
    path: ADD_COUNTERPARTIES_ROUTE,
    Component: AddСounterpartiesPage,
    type: "auth",
  },
  {
    title: "Редактирование контрагента",
    path: EDIT_COUNTERPARTIES_ROUTE,
    Component: AddСounterpartiesPage,
    type: "auth",
  },
  {
    title: "",
    path: SHOW_COUNTERPARTIES_ROUTE,
    Component: ShowCounterpartyPage,
    type: "auth",
  },
];

export const publicRoutes = [
  {
    title: "Авторизация",
    path: AUTH_ROUTE,
    Component: AuthPage,
    type: "public",
  },
  {
    title: "Регистрация",
    path: REG_ROUTE,
    Component: RegPage,
    type: "public",
  },
  {
    title: "Восстановлние пароля",
    path: RECOVERY_ROUTE,
    Component: RecoveryPage,
    type: "public",
  },
  {
    title: "Восстановлние пароля",
    path: RESET_ROUTE,
    Component: ResetPasswordPage,
    type: "public",
  },
  {
    title: "Привязка чат-кассы",
    path: LINK_CHAT_ROUTE,
    Component: LinkChatPage,
    type: "public",
  },
];
