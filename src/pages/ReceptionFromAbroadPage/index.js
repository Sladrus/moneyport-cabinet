import React, { useContext } from "react";

import QRCode from "react-qr-code";
import LargeButton from "../../components/Buttons/LargeButton";
import { DataContext } from "../../context/context";
import { openInNewTab } from "../../utils/window";
import "./ReceptionFromAbroadPage.css";

const ReceptionFromAbroadPage = () => {
  const { chat, order, setChatOrder } = useContext(DataContext);

  const handleClick = () => {
    // setChatOrder(order);
    openInNewTab(chat?.group_url, "go_to_chat_perevod_priem_from_abroad");
  };

  return (
    <div className="reception-page">
      <div className="reception-page-content">
        <div className="reception-page-content-body">
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "16px",
              alignSelf: "stretch",
            }}
          >
            <div className="reception-page-content-body-title">
              <span>Используйте чат-кассу для перевода</span>
            </div>
            <div className="reception-page-content-body-text">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "12px",
                  flex: "1 0 0",
                }}
              >
                <span>
                  <b>
                    Мы создали для вас чат–кассу в Telegram с командой MoneyPort
                  </b>
                </span>
                <span>
                  Возвращаем валютную выручку в Россию за один день. Ваш
                  контрагент переводит евро и доллары на наш зарубежный счет, а
                  мы выводим деньги в России за один рабочий день. Делаем все,
                  чтобы вы продолжали экспорт без ограничений.
                </span>
                <span>
                  Условия и формат работы обсуждаем с каждым клиентом
                  индивидуально. Пожалуйста, перейдите в чат–кассу с менеджером.
                  Мы вас уже ожидаем.
                </span>
              </div>
              <div className="reception-page-content-body-qr">
                <QRCode value={chat?.group_url || ""} size={153} />
              </div>
            </div>
          </div>
        </div>
        <div className="reception-page-content-button">
          <LargeButton text={"Перейти в чат-кассу"} onClick={handleClick} />
        </div>
      </div>
    </div>
  );
};

export default ReceptionFromAbroadPage;
