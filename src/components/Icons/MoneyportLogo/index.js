import React from 'react';
import openLogo from '../../../assets/logo/logo.svg';
import closedLogo from '../../../assets/logo/closedLogo.svg';

import './MoneyportLogo.css';

const MoneyportLogo = ({ open = true }) => {

  return (
    <div className={`moneyport-logo ${open ? 'expanded' : 'closed'}`}>
      <img className="moneyport-logo-small" src={closedLogo} alt="Логотип" />
      <img className="moneyport-logo-big" src={openLogo} alt="Логотип" />
    </div>
  );
};

export default MoneyportLogo;
