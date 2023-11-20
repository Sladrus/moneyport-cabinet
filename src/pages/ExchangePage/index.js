import React from 'react';

import './ExchangePage.css';
import LargeButton from '../../components/Buttons/LargeButton';
import Breadcrumbs from '../../components/Breadcrumbs';

const ExchangePage = () => {
  return (
    <div className="exchange-page">
      <div className="exchange-page-content">
        <Breadcrumbs />
        <div className="exchange-page-content-body">
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
            <div className="exchange-page-content-body-title">
              <span>Создать перевод</span>
            </div>
            <div className="exchange-page-content-body-text">
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
                  Условия и формат работы обсуждаем с каждым клиентом
                  индивидуально. Пожалуйста, перейдите для дальнейшего
                  обсуждения задачи в чат. Так мы сможем подобрать для вас
                  лучшее платежное решение и оказать лучший сервис.
                </span>
              </div>
              <div className="exchange-page-content-body-qr"></div>
            </div>
          </div>
        </div>
        <div className="exchange-page-content-button">
          <LargeButton text={'Вступить в чат-кассу'} />
        </div>
      </div>
    </div>
  );
};

export default ExchangePage;
