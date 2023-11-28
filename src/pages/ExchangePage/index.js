import React, { useContext, useEffect } from 'react';

import './ExchangePage.css';
import LargeButton from '../../components/Buttons/LargeButton';
import Breadcrumbs from '../../components/Breadcrumbs';
import { DataContext } from '../../context/context';
import { openInNewTab } from '../../utils/window';
import QRCode from 'react-qr-code';
import Spinner from '../../components/Spinner';

const ExchangePage = () => {
  const { chat, chatLoading, getChat } = useContext(DataContext);

  useEffect(() => {
    getChat();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="exchange-page">
      {chatLoading ? (
        <div className="exchange-page-loading">
          <Spinner />
        </div>
      ) : (
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
                <div className="exchange-page-content-body-qr">
                  <QRCode value={chat?.chat_url || ''} size={153} />
                </div>
              </div>
            </div>
          </div>
          <div className="exchange-page-content-button">
            <LargeButton
              text={'Вступить в чат-кассу'}
              onClick={() => openInNewTab(chat?.chat_url)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ExchangePage;
