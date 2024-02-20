import React from 'react';
import './HomeMenu.css';
import MoneyportLogo from '../../../components/Icons/MoneyportLogo';
import ChannelButton from '../../../components/Buttons/ChannelButton';
import HomeMenuList from './HomeMenuList';
import { HOME_ROUTE } from '../../../utils/consts';
import { useNavigate } from 'react-router-dom';

const HomeMenu = ({ open }) => {
  const navigate = useNavigate();

  return (
    <div className={`home-menu ${open === true ? 'open' : ''}`}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'start',
          justifyContent: 'start',
          gap: '48px',
        }}
      >
        <div style={open ? { padding: '0 10px' } : { padding: '0 10px' }}>
          <MoneyportLogo
            width={open ? '161px' : '34px'}
            height={'26px'}
            open={open}
            onClick={() => navigate(HOME_ROUTE)}
          />
        </div>
        <HomeMenuList open={open} />
      </div>
      <ChannelButton open={open} />
    </div>
  );
};

export default HomeMenu;
