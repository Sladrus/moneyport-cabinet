import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { AuthContext } from '../context/context';
import { AUTH_ROUTE, HOME_ROUTE } from '../utils/consts';
import AuthApi from '../http/AuthApi';
import { publicRoutes } from '../routes';
import { sendMetric } from '../utils/sendMetric';

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const [searchParams] = useSearchParams();

  useEffect(() => {
    setUtms();
    handleCheckAuth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setUtmFromSearchParams = (utm) => {
    if (searchParams.get(utm)) localStorage.setItem(utm, searchParams.get(utm));
  };

  const setUtms = () => {
    setUtmFromSearchParams('utm_source');
    setUtmFromSearchParams('utm_medium');
    setUtmFromSearchParams('utm_campaign');
    setUtmFromSearchParams('utm_content');
    setUtmFromSearchParams('utm_term');
  };

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
    navigate({ pathname: HOME_ROUTE, search: location.search });
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
    const utms = {
      source:
        searchParams.get('utm_source') ||
        localStorage.getItem('utm_source') ||
        '',
      medium:
        searchParams.get('utm_medium') ||
        localStorage.getItem('utm_medium') ||
        '',
      campaign:
        searchParams.get('utm_campaign') ||
        localStorage.getItem('utm_campaign') ||
        '',
      content:
        searchParams.get('utm_content') ||
        localStorage.getItem('utm_content') ||
        '',
      term:
        searchParams.get('utm_term') || localStorage.getItem('utm_term') || '',
    };
    const data = await AuthApi.register({ name, email, phone, password, utms });
    if (data?.errors || data?.error) {
      setLoading(false);
      return {
        result: false,
        errors: data?.errors || { error: [data?.error] },
      };
    }

    sessionStorage.setItem('token', data?.access_token);

    setUser(data?.user);
    sendMetric('reachGoal', 'firstreg');
    setLoading(false);
    navigate({ pathname: HOME_ROUTE, search: location.search });
    return { result: true, errors: null };
  };

  const handleLogout = async () => {
    setLoading(true);

    setUser(null);
    setLoading(false);
    navigate({ pathname: AUTH_ROUTE, search: location.search });
    await AuthApi.logout();
    sessionStorage.removeItem('token');
  };

  const handleCheckAuth = async () => {
    if (!sessionStorage.getItem('token')) return;
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
        return navigate({ pathname: AUTH_ROUTE, search: location.search });
      }
      return;
    }

    setUser(user);
    setLoading(false);
    navigate({ pathname: HOME_ROUTE, search: location.search });
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
    if (data?.errors || data?.error) {
      setLoading(false);
      return {
        result: false,
        errors: data?.errors || { error: [data?.error] },
      };
    }
    setLoading(false);
    navigate({ pathname: AUTH_ROUTE, search: location.search });
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
