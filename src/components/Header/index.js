import React, { useContext, useState } from 'react';

import './Header.css';
import { ReactComponent as ToogleMenuIcon } from '../../assets/icons/menu/toogle.svg';
import { ReactComponent as HelpIcon } from '../../assets/icons/header/help.svg';
import { ReactComponent as UserIcon } from '../../assets/icons/header/user.svg';
import { ReactComponent as ArrowDownIcon } from '../../assets/icons/arrows/arrow-down.svg';

import { AuthContext, DataContext } from '../../context/context';
import Popup from 'reactjs-popup';

const Header = ({ toogleMenu }) => {
  const [open, setOpen] = useState(false);
  const { user, onLogout } = useContext(AuthContext);
  const { clearData } = useContext(DataContext);

  const handleLogout = async () => {
    await clearData();
    await onLogout();
  };

  return (
    <div className="header">
      <div className="header-body">
        <div className="header-toogle" onClick={toogleMenu}>
          <ToogleMenuIcon className="header-toogle-icon" />
        </div>
        <div className="header-content">
          <div className="header-content-questions">
            <span>Поддержка</span>
            <HelpIcon className="header-content-bell-icon" />
          </div>
          {/* <BellIcon className="header-content-bell-icon" /> */}
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
                <div
                  onClick={() => setOpen(!open)}
                  className="header-content-profile"
                >
                  <UserIcon className="header-content-bell-icon" />
                  <span>{user?.name}</span>
                  <ArrowDownIcon
                    className={`header-content-profile-arrow ${
                      open ? 'expanded' : 'closed'
                    }`}
                  />
                </div>
              </div>
            }
          >
            <div className="header-content-profile-popup" onClick={handleLogout}>
              <UserIcon />
              <span>Выйти</span>
            </div>
          </Popup>
        </div>
      </div>
    </div>
  );
};

export default Header;
