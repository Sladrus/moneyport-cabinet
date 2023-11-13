import React from 'react';

import './AppBar.css';
import { ReactComponent as QuestionCircleIcon } from '../../../assets/icons/header/question-circle.svg';
import { ReactComponent as BellIcon } from '../../../assets/icons/header/bell.svg';
import { ReactComponent as UserIcon } from '../../../assets/icons/header/user.svg';

import MoneyportLogo from '../../../components/Icons/MoneyportLogo';

const AppBar = ({}) => {
  return (
    <div className="home-appbar">
      <MoneyportLogo width={'179px'} height={'29px'} />
      <div className="appbar-content">
        <QuestionCircleIcon className="appbar-content-icon" />
        <BellIcon className="appbar-content-icon" />
        <UserIcon className="appbar-content-icon" />
      </div>
    </div>
  );
};

export default AppBar;
