import React, { useContext } from "react";

import QRCode from "react-qr-code";
import LargeButton from "../../components/Buttons/LargeButton";
import { DataContext } from "../../context/context";
import { openInNewTab } from "../../utils/window";
import "./PhysicalTransfersPage.css";

const PhysicalTransfersPage = () => {
  const { chat, order, setChatOrder } = useContext(DataContext);

  const handleClick = () => {
    // setChatOrder(order);
    openInNewTab(chat?.group_url, "go_to_chat_perevod_fiz");
  };

  return (
    <div className="physical-page">
      <div className="physical-page-content">
        <div className="physical-page-content-body">
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
            <div className="physical-page-content-body-title">
              <span>Используйте чат-кассу для перевода</span>
            </div>
            <div className="physical-page-content-body-text">
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
                  В нашей структуре есть счета во многих банках и платёжных
                  системах: PayPal, Zelle, WISE, Revolut, WeChat, AliPay и
                  других.
                </span>
                <span>
                  Переходите в чат-кассу с менеджером и укажите реквизиты, по
                  которым вы хотите сделать перевод. Если возникнут вопросы, их
                  тоже можно задать в чате.
                </span>
              </div>
              <div className="physical-page-content-body-qr">
                <QRCode value={chat?.group_url || ""} size={153} />
              </div>
            </div>
          </div>
        </div>
        <div className="physical-page-content-button">
          <LargeButton text={"Перейти в чат-кассу"} onClick={handleClick} />
        </div>
      </div>
    </div>
  );
};

export default PhysicalTransfersPage;
