import React, { useState } from 'react';
import './HomeMenu.css';
import MoneyportLogo from '../../../components/Icons/MoneyportLogo';
import ChannelButton from '../../../components/Buttons/ChannelButton';
import HomeMenuList from './HomeMenuList';

const HomeMenu = ({ open }) => {
  return (
    <div className={`home-menu ${open === true ? 'open' : ''}`}>
      <div
        style={
          open
            ? {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: '48px',
                alignSelf: 'stretch',
              }
            : {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '48px',
              }
        }
      >
        <div style={open ? { padding: '0.001px 0px 0.001px 16px' } : {}}>
          <MoneyportLogo
            width={open ? '161px' : '34px'}
            height={'26px'}
            open={open}
          />
        </div>
        <HomeMenuList open={open} />
      </div>
      <ChannelButton open={open} />
    </div>
  );
};

export default HomeMenu;
