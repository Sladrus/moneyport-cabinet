import React, { useContext } from "react";

import "./HomeContent.css";
import SendTypeButton from "../../../components/Buttons/SendTypeButton";
import { ReactComponent as BillListIcon } from "../../../assets/icons/sendtypes/bull-list.svg";
import { ReactComponent as MoneyBagIcon } from "../../../assets/icons/sendtypes/moneybag.svg";
import { ReactComponent as WalletIcon } from "../../../assets/icons/sendtypes/wallet.svg";
import { ReactComponent as BitcoinIcon } from "../../../assets/icons/sendtypes/bitcoin.svg";
import { ReactComponent as UserIcon } from "../../../assets/icons/sendtypes/user.svg";

import Balances from "../../../components/Balances";
import History from "../../../components/History";
import { EXCHANGE_ROUTE, TRANSFERS_ROUTE } from "../../../utils/consts";
import { useNavigate } from "react-router-dom";
import { AuthContext, RouteContext } from "../../../context/context";
import { sendMetric } from "../../../utils/sendMetric";

const items = [
  {
    id: 2,
    title: "Перевод юрлицу",
    subtitle: "SWIFT, SEPA",
    Icon: <BillListIcon className="send-type-button-icon" />,
    path: TRANSFERS_ROUTE,
    type: "click_perevod_ur",
  },
  {
    id: 3,
    title: "Прием из-за рубежа",
    subtitle: "Возврат валютной выручки в Россию",
    Icon: <MoneyBagIcon className="send-type-button-icon" />,
    path: TRANSFERS_ROUTE,
    type: "click_perevod_priem_from_abroad",
  },
  {
    id: 4,
    title: "Выдача наличных",
    subtitle: "В 35 городах мира",
    Icon: <WalletIcon className="send-type-button-icon" />,
    path: TRANSFERS_ROUTE,
    type: "click_perevod_cash",
  },
  {
    id: 5,
    title: "Обмен криптовалют",
    subtitle: "USDT, BTC, ETH и другие",
    Icon: <BitcoinIcon className="send-type-button-icon" />,
    path: EXCHANGE_ROUTE,
    type: "click_cryptoexchange",
  },
  {
    id: 1,
    title: "Перевод физлицу",
    subtitle: "PayPal, Zelle, Wise, Revolut, Сбербанк, Тинькофф",
    Icon: <UserIcon className="send-type-button-icon" />,
    path: TRANSFERS_ROUTE,
    type: "click_perevod_fiz",
  },
];

const HomeContent = () => {
  const { user } = useContext(AuthContext);
  const { setSelectedSubItem, setSelectedMenuItem, location } =
    useContext(RouteContext);

  const navigate = useNavigate();

  const handleClick = (id, title, path, type) => {
    sendMetric("reachGoal", type);
    if (path === TRANSFERS_ROUTE) {
      setSelectedMenuItem(3);
      setSelectedSubItem({ id, title });
    } else setSelectedMenuItem(4);
    navigate({ pathname: path, search: location.search });
  };

  return (
    <div className="home-page-content">
      <div className="home-page-content-title">
        <span className="home-page-content-hello">
          Приветствуем, {user?.name}
        </span>
        <span className="home-page-content-head">Главная</span>
      </div>
      <div className="home-page-content-send-list">
        {items.map(({ id, title, subtitle, Icon, path, type }) => {
          return (
            <SendTypeButton
              key={id}
              title={title}
              subtitle={subtitle}
              icon={Icon}
              onClick={() => handleClick(id, title, path, type)}
            />
          );
        })}
      </div>
      <Balances />
      <History />
    </div>
  );
};

export default HomeContent;
