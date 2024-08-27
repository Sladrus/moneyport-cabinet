//public
export const AUTH_ROUTE = "/login";
export const REG_ROUTE = "/register";
export const RECOVERY_ROUTE = "/pass-recovery";
export const RESET_ROUTE = "/reset/:token";
export const LINK_CHAT_ROUTE = "/link/:token";

//private
export const HOME_ROUTE = "/home";

//home...
export const TRANSFERS_ROUTE = "/transfers";

export const PHYS_TRANS_ROUTE = "/physical";
export const COMPANY_TRANS_ROUTE = "/company";
export const RECEPTION_ROUTE = "/reception";
export const EXCHANGE_ROUTE = "/exchange";
export const CASH_ROUTE = "/cash";
export const HISTORY_ROUTE = "/history";
export const BALANCES_ROUTE = "/balance";

export const QUESTIONS_ROUTE = "/questions";

export const COUNTERPARTIES_ROUTE = "/counterparties";
export const ADD_COUNTERPARTIES_ROUTE = COUNTERPARTIES_ROUTE + "/add";
export const EDIT_COUNTERPARTIES_ROUTE = COUNTERPARTIES_ROUTE + "/edit";
export const SHOW_COUNTERPARTIES_ROUTE = COUNTERPARTIES_ROUTE + "/show";

export const LANGUAGES = [
  { label: "RU", code: "ru" },
  { label: "END", code: "en" },
];
