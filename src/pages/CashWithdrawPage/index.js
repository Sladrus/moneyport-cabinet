import React, { useContext } from 'react';

import './CashWithdrawPage.css';
import LargeButton from '../../components/Buttons/LargeButton';
import { DataContext } from '../../context/context';
import { openInNewTab } from '../../utils/window';
import QRCode from 'react-qr-code';

const CashWithdrawPage = () => {
  const { chat, order, setChatOrder } = useContext(DataContext);

  const handleClick =  () => {
     setChatOrder(order);
    openInNewTab(chat?.chat_url, 'go_to_chat_perevod_cash');
  };

  return (
    <div className="cash-page">
      <div className="cash-page-content">
        <div className="cash-page-content-body">
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
            <div className="cash-page-content-body-title">
              <span>Используйте чат-кассу для перевода</span>
            </div>
            <div className="cash-page-content-body-text">
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
                    Мы создали для вас чат–кассу в Telegram с командой MoneyPort
                  </b>
                </span>
                <span>
                  Мы выдаем наличные в 35 городах мира и в 10 городах РФ, в
                  офисах или курьером. Доступны практически все направления.
                </span>
                <span>
                  По выдаче наличных условия и формат работы обсуждаем с каждым
                  клиентом индивидуально. Пожалуйста, перейдите в чат–кассу с
                  менеджером. Мы вас уже ожидаем.
                </span>
              </div>
              <div className="cash-page-content-body-qr">
                <QRCode value={chat?.chat_url || ''} size={153} />
              </div>
            </div>
          </div>
        </div>
        <div className="cash-page-content-button">
          <LargeButton text={'Перейти в чат-кассу'} onClick={handleClick} />
        </div>
      </div>
    </div>
  );
};

export default CashWithdrawPage;
