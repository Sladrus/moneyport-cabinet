import React, { useState } from 'react';

import './PreOrderFromAbroadContent.css';

import LargeButton from '../../../components/Buttons/LargeButton';
import { openInNewTab } from '../../../utils/window';
import { useContext } from 'react';
import { DataContext } from '../../../context/context';
import TextInput from '../../../components/TextInput';
import TextSelect from '../../../components/TextSelect';
import { currencies } from '../../../utils/currencies';

const PreOrderFromAbroadContent = () => {
  const { chat, setOrder, getChat } = useContext(DataContext);
  const [amount, setAmount] = useState(500);
  const [currency, setCurrency] = useState('USD');

  const handleClick = () => {
    setOrder({ amount, currency: 'RUB', id: 3 });
    getChat();
  };
  return (
    <div className="reception-page-order">
      <div className="reception-page-order-content">
        <div className="reception-page-order-content-body">
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '16px',
              alignSelf: 'stretch',
            }}
          >
            <div className="reception-page-content-body-title">
              <span>Сумма и валюта к приему</span>
            </div>
            <div className="reception-page-content-order-body-text">
              <div
                style={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'start',
                  gap: '16px',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    width: '100%',
                    flexDirection: 'column',
                    alignItems: 'start',
                  }}
                >
                  <TextInput
                    value={amount}
                    placeholder={'Сумма'}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                  <span>Минимальная сумма 500$</span>
                </div>
                <div>
                  <TextSelect
                    value={currency}
                    placeholder={'Валюта'}
                    onChange={(value) => setCurrency(value)}
                    options={currencies}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="reception-page-order-content-body">
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
              <span>Лимиты по переводам</span>
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
                <div
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <span style={{ fontWeight: '600', color: '#647081' }}>
                    Прием от физ. лица США
                  </span>
                  <p>от 1 000 USD</p>
                </div>
                <div
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <span style={{ fontWeight: '600', color: '#647081' }}>
                    Прием от юр. лица США
                  </span>
                  <p>от 1 000 USD</p>
                </div>
                <div
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <span style={{ fontWeight: '600', color: '#647081' }}>
                    Прием от физ. лица ЕС
                  </span>
                  <p>от 1 000 EUR</p>
                </div>
                <div
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <span style={{ fontWeight: '600', color: '#647081' }}>
                    Прием от юр. лица ЕС
                  </span>
                  <p>от 1 000 EUR</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="reception-page-order-content-button">
        <LargeButton text={'Начать перевод'} onClick={handleClick} />
      </div>
    </div>
  );
};

export default PreOrderFromAbroadContent;
