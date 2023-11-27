import React, { useContext } from 'react';

import './AppBar.css';
import { ReactComponent as HelpIcon } from '../../assets/icons/header/help.svg';
import { ReactComponent as UserIcon } from '../../assets/icons/header/user.svg';

import MoneyportLogo from '../Icons/MoneyportLogo';
import Popup from 'reactjs-popup';
import { AuthContext, DataContext } from '../../context/context';

const AppBar = () => {
  const { onLogout } = useContext(AuthContext);
  const { clearData } = useContext(DataContext);

  const handleLogout = async () => {
    await clearData();
    await onLogout();
  };

  return (
    <div className="home-appbar">
      <MoneyportLogo width={'179px'} height={'29px'} />
      <div className="appbar-content">
        <HelpIcon className="appbar-content-icon" />
        {/* <BellIcon className="appbar-content-icon" /> */}
        <Popup
          position="bottom right"
          on="click"
          closeOnDocumentClick
          mouseLeaveDelay={100}
          mouseEnterDelay={0}
          offsetY={8}
          contentStyle={{ padding: '4px 0', border: 'none' }}
          arrow={false}
          trigger={
            <div>
              <UserIcon className="appbar-content-icon" />
            </div>
          }
        >
          <div
            className="header-content-profile-popup"
            onClick={() => handleLogout()}
          >
            <UserIcon />
            <span>Выйти</span>
          </div>
        </Popup>
        {/* <UserIcon className="appbar-content-icon" /> */}
      </div>
    </div>
  );
};

export default AppBar;
