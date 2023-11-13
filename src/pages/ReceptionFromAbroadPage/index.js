import React from 'react';

import './ReceptionFromAbroadPage.css';
import LargeButton from '../../components/Buttons/LargeButton';

const ReceptionFromAbroadPage = () => {
  return (
    <div className="reception-page">
      <div className="reception-page-content">
        <div className="reception-page-content-title">
          <span className="reception-page-content-hello">
            / Прием из-за рубежа
          </span>
          <span className="reception-page-content-head">
            Прием из-за рубежа
          </span>
        </div>
        <div className="reception-page-content-body">
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
            <div className="reception-page-content-body-title">
              <span>Создать перевод</span>
            </div>
            <div className="reception-page-content-body-text">
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
                  Возвращаем валютную выручку в Россию за один день. Ваш
                  контрагент переводит евро и доллары на наш зарубежный счет, а
                  мы выводим деньги в России за один рабочий день. Делаем все,
                  чтобы вы продолжали экспорт без ограничений.
                </span>
                <span>
                  Условия и формат работы обсуждаем с каждым клиентом
                  индивидуально. Пожалуйста, перейдите для дальнейшего
                  обсуждения задачи в чат. Так мы сможем подобрать для вас
                  лучшее платежное решение и оказать лучший сервис.
                </span>
              </div>
              <div className="reception-page-content-body-qr"></div>
            </div>
          </div>
        </div>
        <div className="reception-page-content-button">
          <LargeButton text={'Вступить в чат-кассу'} />
        </div>
      </div>
    </div>
  );
};

export default ReceptionFromAbroadPage;
