import React from 'react';
import telegramIcon from '../../../assets/icons/menu/telegram.svg';
import './ChannelButton.css';

const ChannelButton = ({ open }) => {
  return (
    <div className="channel-button">
      <div className="channel-button-icon">
        <img src={telegramIcon} alt="Telegram" />
      </div>
      {open && (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span className="channel-button-title">@MONEYPORT</span>
          <span className="channel-button-subtext">Наш канал в telegram</span>
        </div>
      )}
    </div>
  );
};

export default ChannelButton;
