import React from 'react';
import openLogo from '../../../assets/logo/logo.svg';
import closedLogo from '../../../assets/logo/closedLogo.svg';

import './MoneyportLogo.css';

const MoneyportLogo = ({ width, height, open = true }) => {
  return (
    <div className="moneyport-logo">
      <img
        src={open ? openLogo : closedLogo}
        alt="Логотип"
        width={width}
        height={height}
      />
    </div>
  );
};

export default MoneyportLogo;
