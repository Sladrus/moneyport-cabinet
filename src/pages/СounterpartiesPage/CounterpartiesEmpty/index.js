import React from 'react';
import { ReactComponent as SuitcaseIcon } from '../../../assets/logo/suitcase.svg';

import './CounterpartiesEmpty.css';
import LargeButton from '../../../components/Buttons/LargeButton';

const CounterpartiesEmpty = ({ onClick }) => {
  return (
    <div className="counterparties-empty">
      <div className="counterparties-empty-wrapper">
        <SuitcaseIcon />
        <span className="counterparties-empty-title">Нет контрагентов</span>
        <span className="counterparties-empty-text">
          Если вам необходимо получить валюту от иностранного контрагента,
          добавьте его здесь для проверки.
        </span>
        <div className="add-button">
          <LargeButton text="Добавить" onClick={onClick} />
        </div>
      </div>
    </div>
  );
};

export default CounterpartiesEmpty;
