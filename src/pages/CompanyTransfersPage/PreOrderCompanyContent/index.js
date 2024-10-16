import React, { useState } from "react";

import "./PreOrderCompanyContent.css";

import { useContext } from "react";
import LargeButton from "../../../components/Buttons/LargeButton";
import TextInput from "../../../components/TextInput";
import TextSelect from "../../../components/TextSelect";
import { ApiContext, AuthContext, DataContext } from "../../../context/context";
import { currencies } from "../../../utils/currencies";
import { sendMetric } from "../../../utils/sendMetric";

const PreOrderCompanyContent = () => {
  const { chat, setOrder } = useContext(DataContext);
  const { getChat, getChatLoading } = useContext(ApiContext);
  const { user } = useContext(AuthContext);

  const [amount, setAmount] = useState(1000);
  const [currency, setCurrency] = useState("EUR");

  const handleClick = () => {
    sendMetric("reachGoal", "click_perevod_ur_start");
    setOrder({ amount, currency, type: "company", id: 2 });
    getChat({
      variables: {
        input: {
          // user_id: Number(user?.id),
          pre_order: JSON.stringify({
            currency,
            amount: String(amount),
            type: "Перевод юр. лицу",
          }),
        },
      },
    });
  };

  return (
    <div className="company-page-order">
      <div className="company-page-order-content">
        <div className="company-page-order-content-body">
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "16px",
              alignSelf: "stretch",
            }}
          >
            <div className="company-page-content-body-title">
              <span>Сумма и валюта перевода</span>
            </div>
            <div className="company-page-content-order-body-text">
              <div
                style={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "start",
                  gap: "16px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    flexDirection: "column",
                    alignItems: "start",
                    // gap: '12px',
                  }}
                >
                  <TextInput
                    value={amount}
                    placeholder={"Сумма"}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                  {/* <span>Минимальная сумма 500$</span> */}
                </div>
                <div>
                  <TextSelect
                    value={currency}
                    placeholder={"Валюта"}
                    onChange={(value) => setCurrency(value)}
                    options={currencies}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="company-page-order-content-body">
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
            <div className="company-page-content-body-title">
              <span>Лимиты по переводам</span>
            </div>
            <div className="company-page-content-body-text">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "12px",
                  flex: "1 0 0",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span style={{ fontWeight: "600", color: "#647081" }}>
                    Перевод на юр. лицо в ЕС
                  </span>
                  <p>от 1 000 EUR</p>
                </div>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span style={{ fontWeight: "600", color: "#647081" }}>
                    Перевод на юр. лицо в США
                  </span>
                  <p>от 3 000 USD</p>
                </div>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span style={{ fontWeight: "600", color: "#647081" }}>
                    Перевод на юр. лицо в Китай
                  </span>
                  <p>от 50 000 CNY</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="company-page-order-content-button">
        <LargeButton
          disabled={getChatLoading}
          text={"Начать перевод"}
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default PreOrderCompanyContent;
