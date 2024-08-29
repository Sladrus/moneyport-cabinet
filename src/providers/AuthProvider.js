import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { AuthContext } from "../context/context";
import AuthApi from "../http/AuthApi";
import { publicRoutes } from "../routes";
import { AUTH_ROUTE, HOME_ROUTE } from "../utils/consts";
import { sendMetric } from "../utils/sendMetric";

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const [searchParams] = useSearchParams();

  const [errors, setErrors] = useState();
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    setUtms();
    // handleCheckAuth();
  }, []);

  // useEffect(() => {
  //   // handleCheckAuth();
  //   if (!user) navigate(AUTH_ROUTE);
  // }, [user]);

  const setUtmFromSearchParams = (utm) => {
    if (searchParams.get(utm)) localStorage.setItem(utm, searchParams.get(utm));
  };

  const setUtms = () => {
    setUtmFromSearchParams("utm_source");
    setUtmFromSearchParams("utm_medium");
    setUtmFromSearchParams("utm_campaign");
    setUtmFromSearchParams("utm_content");
    setUtmFromSearchParams("utm_term");
  };

  const handleLogin = async (user, errors) => {
    if (errors) {
      return setErrors(errors);
    }
    setUser(user);
    navigate({ pathname: HOME_ROUTE, search: location.search });
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

  const handleRegistration = async (user, errors) => {
    if (errors) {
      return setErrors(errors);
    }
    setUser(user);
    sendMetric("reachGoal", "firstreg");
    navigate({ pathname: HOME_ROUTE, search: location.search });
  };

  const handleLogout = async () => {
    setLoading(true);

    setUser(null);
    setLoading(false);
    navigate({ pathname: AUTH_ROUTE, search: location.search });
    await AuthApi.logout();
    sessionStorage.removeItem("token");
  };

  const handleCheckAuth = async () => {
    if (!sessionStorage.getItem("token")) return;
    setLoading(true);
    const user = await AuthApi.checkAuth();
    if (!user) {
      setLoading(false);

      const pathParts = location.pathname.split("/").filter((p) => p);

      const isPublicRoute = publicRoutes.some((route) => {
        const routeParts = route.path.split("/").filter((p) => p);

        return routeParts.every((part, index) => {
          if (part.startsWith(":")) {
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
    if (location.pathname === AUTH_ROUTE)
      navigate({ pathname: HOME_ROUTE, search: location.search });
  };

  const handleForgotPassword = async (errors) => {
    console.log(errors);
    if (errors) {
      return setErrors(errors);
    }
    setIsComplete(true);
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

  const handleResetPassword = async (errors) => {
    if (errors) {
      return setErrors(errors);
    }
    setIsComplete(true);
    // setLoading(true);
    // const data = await AuthApi.updatePassword({ token, email, password });
    // if (data?.errors || data?.error) {
    //   setLoading(false);
    //   return {
    //     result: false,
    //     errors: data?.errors || { error: [data?.error] },
    //   };
    // }
    // setLoading(false);
    // navigate({ pathname: AUTH_ROUTE, search: location.search });
    // return { result: true, errors: null };
  };

  const value = {
    user,
    loading,
    handleLogin,
    onLogout: handleLogout,
    handleRegistration,
    onCheck: handleCheckAuth,
    handleForgotPassword,
    onCheckReset: handleCheckResetToken,
    handleResetPassword,
    isPassEqual,
    errors,
    setErrors,
    isComplete,
    setIsComplete,
    searchParams,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
