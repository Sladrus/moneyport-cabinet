import React, { useContext } from 'react';

import './CashWithdrawPage.css';
import LargeButton from '../../components/Buttons/LargeButton';
import { DataContext } from '../../context/context';
import { openInNewTab } from '../../utils/window';

const CashWithdrawPage = () => {
  const { chat } = useContext(DataContext);

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
              <span>Создать перевод</span>
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
                    Для вас создан чат–касса в Telegram с командой MoneyPort
                  </b>
                </span>
                <span>
                  Мы выдаем наличные в 35 городах мира и в 10 городах РФ, в
                  офисах или курьером. Доступны практически все направления. По
                  выдаче наличных условия и формат работы обсуждаем с каждым
                  клиентом индивидуально
                </span>
                <span>
                  Пожалуйста, перейдите для дальнейшего обсуждения задачи в чат
                  Так мы сможем подобрать для вас лучшее платежное решение и
                  оказать лучший сервис
                </span>
              </div>
              <div className="cash-page-content-body-qr"></div>
            </div>
          </div>
        </div>
        <div className="cash-page-content-button">
          <LargeButton
            text={'Вступить в чат-кассу'}
            onClick={() => openInNewTab(chat?.chat_url)}
          />
        </div>
      </div>
    </div>
  );
};

export default CashWithdrawPage;
