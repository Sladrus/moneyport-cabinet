import React from 'react';

import './PhysicalTransfersPage.css';
import LargeButton from '../../components/Buttons/LargeButton';

const PhysicalTransfersPage = () => {
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
                  Чтобы подобрать для вас счет, с которого сможем отправить
                  средства быстро и с наименьшей комиссией, пожалуйста,
                  вступайте в чат–кассу с менеджером и укажите реквизиты, куда
                  необходимо отправить, мы вас уже ожидаем.
                </span>
              </div>
              <div className="physical-page-content-body-qr"></div>
            </div>
          </div>
        </div>
        <div className="physical-page-content-button">
          <LargeButton text={'Вступить в чат-кассу'} />
        </div>
      </div>
    </div>
  );
};

export default PhysicalTransfersPage;
