import React, { useState } from 'react';

import './PreOrderCashContent.css';

import LargeButton from '../../../components/Buttons/LargeButton';
import { openInNewTab } from '../../../utils/window';
import { useContext } from 'react';
import { DataContext } from '../../../context/context';
import TextInput from '../../../components/TextInput';
import TextSelect from '../../../components/TextSelect';
import { currencies } from '../../../utils/currencies';
import { sendMetric } from '../../../utils/sendMetric';

const PreOrderCashContent = () => {
  const { chat, setOrder, getChat } = useContext(DataContext);
  const [amount, setAmount] = useState(500);
  const [currency, setCurrency] = useState('USD');

  const handleClick = () => {
    sendMetric('reachGoal', 'click_perevod_cash_start');
    setOrder({ amount, currency, type: 'cash', id: 4 });
    getChat('lk', amount, currency, 'cash');
  };

  return (
    <div className="cash-page-order">
      <div className="cash-page-order-content">
        <div className="cash-page-order-content-body">
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
            <div className="cash-page-content-body-title">
              <span>Сумма и валюта выдачи</span>
            </div>
            <div className="cash-page-content-order-body-text">
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
        <div className="cash-page-order-content-body">
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
              <span>Лимиты по переводам</span>
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
                <div
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <span style={{ fontWeight: '600', color: '#647081' }}>
                    Выдача RUB в РФ{' '}
                  </span>
                  <p>от 150 000 RUB</p>
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
                    Выдача USD в РФ
                  </span>
                  <p>от 5 000 USD</p>
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
                    Выдача EUR в РФ
                  </span>
                  <p>от 5 000 EUR</p>
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
                    Выдача USD за рубежом
                  </span>
                  <p>от 10 000 - 20 000 USD</p>
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
                    Выдача EUR за рубежом
                  </span>
                  <p>от 10 000 - 20 000 EUR</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cash-page-order-content-button">
        <LargeButton text={'Начать перевод'} onClick={handleClick} />
      </div>
    </div>
  );
};

export default PreOrderCashContent;
