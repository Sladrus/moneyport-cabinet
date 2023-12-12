import React, { useState } from 'react';

import './PreOrderExchangeContent.css';

import LargeButton from '../../../components/Buttons/LargeButton';
import { openInNewTab } from '../../../utils/window';
import { useContext } from 'react';
import { DataContext } from '../../../context/context';
import TextInput from '../../../components/TextInput';
import TextSelect from '../../../components/TextSelect';
import { currencies } from '../../../utils/currencies';
import { sendMetric } from '../../../utils/sendMetric';

const PreOrderExchangeContent = () => {
  const { chat, setOrder, getChat } = useContext(DataContext);
  const [amount, setAmount] = useState(500);
  const [currency, setCurrency] = useState('USD');

  const handleClick = () => {
    sendMetric('reachGoal', 'click_cryptoexchange_start');
    setOrder({ amount, currency, type: 'exchange', id: 5 });
    getChat('lk',amount, currency, 'exchange');
  };

  return (
    <div className="exchange-page-order">
      <div className="exchange-page-order-content">
        <div className="exchange-page-order-content-body">
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
            <div className="exchange-page-content-body-title">
              <span>Сумма и валюта к обмену</span>
            </div>
            <div className="exchange-page-content-order-body-text">
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
                    // gap: '12px',
                  }}
                >
                  <TextInput
                    value={amount}
                    placeholder={'Сумма'}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                  {/* <span>Минимальная сумма 500$</span> */}
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
        <div className="exchange-page-order-content-body">
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
              <span>Лимиты по переводам</span>
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
                <div
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <span style={{ fontWeight: '600', color: '#647081' }}>
                    Обмен
                  </span>
                  <p>от 500 USDT</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="exchange-page-order-content-button">
        <LargeButton text={'Начать перевод'} onClick={handleClick} />
      </div>
    </div>
  );
};

export default PreOrderExchangeContent;
