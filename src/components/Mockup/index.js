import React from 'react';
import './Mockup.css';
import mockupLogo from '../../assets/mockup/mockup.svg';
import subtractLogo from '../../assets/icons/location/subtract.svg';

const Mockup = () => {
  return (
    <div className="mockup">
      <div style={{ display: 'flex' }}>
        <div
          style={{
            position: 'relative',
            top: '25px',
            left: '110px',
          }}
          className="location-point"
        >
          <img src={subtractLogo} alt="Логотип" />
          <span>+1 payment, Bali</span>
        </div>
        <div
          style={{ position: 'relative', top: '75px', left: '140px' }}
          className="location-point"
        >
          <img src={subtractLogo} alt="Логотип" />
          <span>+1 payment, UAE</span>
        </div>
        <div
          style={{ position: 'relative', top: '125px', right: '305px' }}
          className="location-point"
        >
          <img src={subtractLogo} alt="Логотип" />
          <span>+1 payment, Germany</span>
        </div>
      </div>

      <div className="mockup-logo">
        <img src={mockupLogo} alt="Логотип" />
      </div>
    </div>
  );
};

export default Mockup;
