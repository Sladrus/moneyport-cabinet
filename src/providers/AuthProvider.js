import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/context';
import { AUTH_ROUTE, HOME_ROUTE } from '../utils/consts';

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const fakeAuth = () =>
    new Promise((resolve) => {
      setTimeout(() => resolve('2342f2f1d131rf12'), 250);
    });

  const registerUser = () =>
    new Promise((resolve) => {
      setTimeout(() => resolve('2342f2f1d131rf12'), 250);
    });

  const handleLogin = async () => {
    setLoading(true);
    const user = await fakeAuth();
    setUser(user);

    setLoading(false);
    // console.log(location.state?.from?.pathname);
    const origin = location.state?.from?.pathname || HOME_ROUTE;
    navigate(HOME_ROUTE);
  };

  const handleRegistration = async () => {
    setLoading(true);
    const user = await registerUser();
    // setUser(user);

    setLoading(false);
    // console.log(location.state?.from?.pathname);
    const origin = location.state?.from?.pathname || HOME_ROUTE;
    navigate(AUTH_ROUTE);
  };

  const handleLogout = () => {
    setLoading(null);
  };

  const value = {
    user,
    loading,
    onLogin: handleLogin,
    onLogout: handleLogout,
    onReg: handleRegistration,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
