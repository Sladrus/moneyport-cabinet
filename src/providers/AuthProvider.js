import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../context/context';
import { AUTH_ROUTE, HOME_ROUTE } from '../utils/consts';
import AuthApi from '../http/AuthApi';
import { publicRoutes } from '../routes';

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { token } = useParams();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!user) handleCheckAuth();
  }, []);

  const handleLogin = async ({ email, password }) => {
    setLoading(true);
    const data = await AuthApi.login({ email, password });
    if (data?.errors || data?.error) {
      setLoading(false);
      return {
        result: false,
        errors: data?.errors || { error: [data?.error] },
      };
    }

    sessionStorage.setItem('token', data?.access_token);
    sessionStorage.setItem('refresh', data?.refresh_token);

    setUser(data?.user);
    setLoading(false);
    navigate(HOME_ROUTE);
    return { result: true, errors: null };
  };

  const isPassEqual = async (password, finalPass) => {
    setLoading(true);
    if (password === finalPass) {
      setLoading(false);
      return true;
    } else {
      setLoading(false);
      return false;
    }
  };

  const handleRegistration = async ({ name, email, phone, password }) => {
    setLoading(true);
    const data = await AuthApi.register({ name, email, phone, password });
    console.log(data);
    if (data?.errors || data?.error) {
      setLoading(false);
      return {
        result: false,
        errors: data?.errors || { error: [data?.error] },
      };
    }

    sessionStorage.setItem('token', data?.access_token);

    setUser(data?.user);
    setLoading(false);
    navigate(HOME_ROUTE);
    return { result: true, errors: null };
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

      const pathParts = location.pathname.split('/').filter((p) => p);

      const isPublicRoute = publicRoutes.some((route) => {
        const routeParts = route.path.split('/').filter((p) => p);

        return routeParts.every((part, index) => {
          if (part.startsWith(':')) {
            return true;
          }
          return part === pathParts[index];
        });
      });
      if (!isPublicRoute) {
        return navigate(AUTH_ROUTE);
      }
      return;
    }

    setUser(user);
    setLoading(false);
    navigate(HOME_ROUTE);
  };

  const handleRecoveryPass = async ({ email }) => {
    setLoading(true);
    const data = await AuthApi.recoveryPass({ email });
    if (data?.errors) {
      setLoading(false);
      return { result: false, errors: data?.errors };
    }
    setLoading(false);
    return { result: true, errors: null };
  };

  const handleCheckResetToken = async ({ token }) => {
    setLoading(true);
    const data = await AuthApi.checkReset({ token });
    if (data?.errors || data?.error) {
      setLoading(false);
      return {
        result: false,
        errors: data?.errors || { error: [data?.error] },
      };
    }
    setLoading(false);
    return { result: true, errors: null };
  };

  const handleUpdatePassword = async ({ token, email, password }) => {
    setLoading(true);
    const data = await AuthApi.updatePassword({ token, email, password });
    console.log(data);
    if (data?.errors || data?.error) {
      setLoading(false);
      return {
        result: false,
        errors: data?.errors || { error: [data?.error] },
      };
    }
    setLoading(false);
    navigate(AUTH_ROUTE);
    return { result: true, errors: null };
  };

  const value = {
    user,
    loading,
    onLogin: handleLogin,
    onLogout: handleLogout,
    onReg: handleRegistration,
    onCheck: handleCheckAuth,
    onRecovery: handleRecoveryPass,
    onCheckReset: handleCheckResetToken,
    onUpdatePassword: handleUpdatePassword,
    isPassEqual,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
