import React from 'react';
import RegForm from './RegForm';
import './RegPage.css';
import Mockup from '../../components/Mockup';

const RegPage = () => {
  return (
    <div className="reg-page">
      <RegForm className="reg-form" />
      <Mockup className="mockup" />
    </div>
  );
};

export default RegPage;
