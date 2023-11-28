import React, { useContext } from 'react';

import './CompanyTransfersPage.css';
import LargeButton from '../../components/Buttons/LargeButton';
import { openInNewTab } from '../../utils/window';
import { DataContext } from '../../context/context';
import QRCode from 'react-qr-code';

const CompanyTransfersPage = () => {
  const { chat } = useContext(DataContext);

  return (
    <div className="company-page">
      <div className="company-page-content">
        <div className="company-page-content-body">
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
            <div className="company-page-content-body-title">
              <span>Создать перевод</span>
            </div>
            <div className="company-page-content-body-text">
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
                  Мы оплатим ваш инвойс от одного из наших юр.лиц в Чехии,
                  Германии, Турции, Киргизии, Дубай, Канаде, США, Гонконге по
                  трехстороннему соглашению, где наша компания — платежный
                  агент.
                </span>
                <span>
                  По оплате инвойсов условия и формат работы обсуждаем с каждым
                  клиентом индивидуально. Пожалуйста, перейдите для дальнейшего
                  обсуждения задачи в чат. Так мы сможем подобрать для вас
                  лучшее платежное решение и оказать лучший сервис.
                </span>
              </div>
              <div className="company-page-content-body-qr">
                <QRCode value={chat?.chat_url || ''} size={153} />
              </div>
            </div>
          </div>
        </div>
        <div className="company-page-content-button">
          <LargeButton
            text={'Вступить в чат-кассу'}
            onClick={() => openInNewTab(chat?.chat_url)}
          />
        </div>
      </div>
    </div>
  );
};

export default CompanyTransfersPage;
