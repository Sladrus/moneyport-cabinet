import React from 'react';
import { ReactComponent as InfoIcon } from '../../assets/icons/counterparties/info.svg';

import './SnackbarButCooler.css';

const SnackbarButCooler = ({ title, text }) => {
  return (
    <div className="snackbar-but-cooler">
      <div className="wrapper">
        <div className="icon">
          <InfoIcon />
        </div>
        <div className="text-block">
          <span className="text-wrapper-1">{title}</span>
          <span className="text-wrapper-2">{text}</span>
        </div>
      </div>
    </div>
  );
};

export default SnackbarButCooler;
