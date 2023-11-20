import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/context';
import { AUTH_ROUTE, HOME_ROUTE } from '../utils/consts';
import AuthApi from '../http/AuthApi';

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!user) handleCheckAuth();
  }, []);

  const handleLogin = async ({ email, password }) => {
    setLoading(true);
    const data = await AuthApi.login({ email, password });
    if (!data) return setLoading(false);
    sessionStorage.setItem('token', data?.access_token);
    sessionStorage.setItem('refresh', data?.refresh_token);

    setUser(data?.user);
    setLoading(false);
    navigate(HOME_ROUTE);
  };

  const handleRegistration = async ({ name, email, phone, password }) => {
    setLoading(true);
    const data = await AuthApi.register({ name, email, phone, password });
    if (!data) return setLoading(false);
    sessionStorage.setItem('token', data?.access_token);

    setUser(data?.user);
    setLoading(false);
    navigate(HOME_ROUTE);
  };

  const handleLogout = async () => {
    setLoading(true);

    await AuthApi.logout();
    sessionStorage.setItem('token', '');
    sessionStorage.setItem('refresh', '');
    setUser(null);
    setLoading(false);
    navigate(AUTH_ROUTE);
  };

  const handleCheckAuth = async () => {
    setLoading(true);
    const user = await AuthApi.checkAuth();
    if (!user) {
      setLoading(false);
      return navigate(AUTH_ROUTE);
    }

    setUser(user);
    setLoading(false);
    navigate(HOME_ROUTE);
  };

  const value = {
    user,
    loading,
    onLogin: handleLogin,
    onLogout: handleLogout,
    onReg: handleRegistration,
    onCheck: handleCheckAuth,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
