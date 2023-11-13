import React from 'react';
import AuthForm from './AuthForm';
import './AuthPage.css';
import Mockup from '../../components/Mockup';

const AuthPage = () => {
  return (
    <div className="auth-page">
      <AuthForm className="auth-form" />
      <Mockup  />
    </div>
  );
};

export default AuthPage;
