import React, { useContext } from 'react';

import './PhysicalTransfersPage.css';
import LargeButton from '../../components/Buttons/LargeButton';
import { openInNewTab } from '../../utils/window';
import { DataContext } from '../../context/context';
import QRCode from 'react-qr-code';

const PhysicalTransfersPage = () => {
  const { chat, order, setChatOrder } = useContext(DataContext);

  const handleClick =  () => {
     setChatOrder(order);
    openInNewTab(chat?.chat_url, 'go_to_chat_perevod_fiz');
  };

  return (
    <div className="physical-page">
      <div className="physical-page-content">
        <div className="physical-page-content-body">
          <div
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '16px',
              alignSelf: 'stretch',
            }}
          >
            <div className="physical-page-content-body-title">
              <span>Создать перевод</span>
            </div>
            <div className="physical-page-content-body-text">
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  gap: '12px',
                  flex: '1 0 0',
                }}
              >
                <span>
                  <b>
                    Для вас создан чат–касса в Telegram с командой MoneyPort
                  </b>
                </span>
                <span>
                  В нашей структуре есть счета в большом количестве банков и
                  платежных систем: PayPal, Zelle, WISE, Revolut, WeChat, AliPay
                  и других.
                </span>
                <span>
                  Вступайте в чат–кассу с менеджером и укажите реквизиты, куда
                  необходимо отправить. Мы вас уже ожидаем.
                </span>
              </div>
              <div className="physical-page-content-body-qr">
                <QRCode value={chat?.chat_url || ''} size={153} />
              </div>
            </div>
          </div>
        </div>
        <div className="physical-page-content-button">
          <LargeButton text={'Вступить в чат-кассу'} onClick={handleClick} />
        </div>
      </div>
    </div>
  );
};

export default PhysicalTransfersPage;
