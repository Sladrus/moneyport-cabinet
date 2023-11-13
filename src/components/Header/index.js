import React, { useContext } from 'react';

import './Header.css';
import { ReactComponent as ToogleMenuIcon } from '../../assets/icons/menu/toogle.svg';
import { ReactComponent as QuestionCircleIcon } from '../../assets/icons/header/question-circle.svg';
import { ReactComponent as BellIcon } from '../../assets/icons/header/bell.svg';
import { ReactComponent as UserIcon } from '../../assets/icons/header/user.svg';
import { AuthContext } from '../../context/context';

const Header = ({ toogleMenu }) => {
  const { user } = useContext(AuthContext);
  return (
    <div className="header">
      <div className="header-toogle" onClick={toogleMenu}>
        <ToogleMenuIcon className="header-toogle-icon" />
      </div>
      <div className="header-content">
        <div className="header-content-questions">
          <span>Поддержка</span>
          <QuestionCircleIcon className="header-content-bell-icon" />
        </div>
        <BellIcon className="header-content-bell-icon" />
        <div className="header-content-profile">
          <UserIcon className="header-content-bell-icon" />
          <span>{user?.name}</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
