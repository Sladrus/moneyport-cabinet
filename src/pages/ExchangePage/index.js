import React, { useContext, useEffect } from "react";

import "./ExchangePage.css";
import LargeButton from "../../components/Buttons/LargeButton";
import Breadcrumbs from "../../components/Breadcrumbs";
import { DataContext, RouteContext } from "../../context/context";
import { openInNewTab } from "../../utils/window";
import QRCode from "react-qr-code";
import Spinner from "../../components/Spinner";
import PreOrderExchangeContent from "./PreOrderExchangeContent";

const ExchangePage = () => {
  const { order, setOrder, setChatOrder, chat, chatLoading, getChat } =
    useContext(DataContext);
  const { selectedMenuItem } = useContext(RouteContext);

  const handleClick = () => {
    // setChatOrder(order);
    openInNewTab(chat?.group_url, "go_to_chat_cryptoexchange");
  };

  useEffect(() => {
    setOrder();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedMenuItem]);

  if (chat?.error) {
    return (
      <div className="exchange-page">
        <div style={{ padding: "0 24px" }}>
          <Breadcrumbs />
        </div>
        <div className="exchange-page-error">
          <span>
            Произошла ошибка. Свяжитесь с{" "}
            <a href={"https://t.me/mpstart"} rel="noreferrer" target="_blank">
              https://t.me/mpstart
            </a>{" "}
            для получения помощи.
          </span>
        </div>{" "}
      </div>
    );
  }

  return (
    <div className="exchange-page">
      <div style={{ padding: "0 24px" }}>
        <Breadcrumbs />
      </div>
      {order ? (
        chatLoading ? (
          <div className="exchange-page-loading">
            <Spinner />
          </div>
        ) : (
          <div className="exchange-page-content">
            <div className="exchange-page-content-body">
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
                <div className="exchange-page-content-body-title">
                  <span>Используйте чат-кассу для перевода</span>
                </div>
                <div className="exchange-page-content-body-text">
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
                        Мы создали для вас чат–кассу в Telegram с командой
                        MoneyPort
                      </b>
                    </span>
                    <span>
                      Для дальнейшего обсуждения задачи, пожалуйста, перейдите в
                      чат–кассу с менеджером. Мы вас уже ожидаем.
                    </span>
                  </div>
                  <div className="exchange-page-content-body-qr">
                    <QRCode value={chat?.group_url || ""} size={153} />
                  </div>
                </div>
              </div>
            </div>
            <div className="exchange-page-content-button">
              <LargeButton text={"Перейти в чат-кассу"} onClick={handleClick} />
            </div>
          </div>
        )
      ) : (
        <div style={{ padding: "0 24px" }}>
          <PreOrderExchangeContent />
        </div>
      )}
    </div>
  );
};

export default ExchangePage;
