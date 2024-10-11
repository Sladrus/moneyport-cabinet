import { useLazyQuery, useMutation } from "@apollo/client";
import React, { useContext, useEffect } from "react";
import { publicClient } from "../apollo/client/public";
import {
  FORGOT_PASSWORD_MUTATION,
  GET_CHAT_MUTATION,
  LOGIN_MUTATION,
  REGISTRATION_FROM_CHAT_MUTATION,
  REGISTRATION_MUTATION,
  RESET_PASSWORD_MUTATION,
} from "../apollo/mutation";
import { GET_BALANCES_QUERY, GET_PAYMENTS_QUERY } from "../apollo/query";
import { ApiContext, AuthContext, DataContext } from "../context/context";

const ApiProvider = ({ children }) => {
  const {
    handleLogin,
    handleRegistration,
    handleForgotPassword,
    handleResetPassword,
    handleRegistrationFromChat,
  } = useContext(AuthContext);

  const { handleGetBalances, handleGetPayments, handleGetChat } =
    useContext(DataContext);

  const [login, { loading: loginLoading, data: loginData, error: loginError }] =
    useMutation(LOGIN_MUTATION, {
      client: publicClient,
    });

  useEffect(() => {
    if (loginData || loginError) {
      console.log(loginError?.graphQLErrors);
      const errors =
        loginError?.graphQLErrors?.find((error) => error?.code === 422)
          ?.validation ||
        loginError?.graphQLErrors?.find((error) => error?.code === 500);
      handleLogin(loginData?.login?.user, errors);
    }
  }, [loginData, loginError]);

  const [
    registration,
    {
      loading: registrationLoading,
      data: registrationData,
      error: registrationError,
    },
  ] = useMutation(REGISTRATION_MUTATION, {
    client: publicClient,
  });

  useEffect(() => {
    if (registrationData || registrationError) {
      const errors = registrationError?.graphQLErrors?.find(
        (error) => error?.code === 422
      )?.validation;

      handleRegistration(registrationData?.registration?.user, errors);
    }
  }, [registrationData, registrationError]);

  const [
    forgotPassword,
    {
      loading: forgotPasswordLoading,
      data: forgotPasswordData,
      error: forgotPasswordError,
    },
  ] = useMutation(FORGOT_PASSWORD_MUTATION, {
    client: publicClient,
  });

  useEffect(() => {
    if (forgotPasswordData || forgotPasswordError) {
      const errors = forgotPasswordError?.graphQLErrors?.find(
        (error) => error?.code === 422
      )?.validation;
      handleForgotPassword(errors);
    }
  }, [forgotPasswordData, forgotPasswordError]);

  const [
    resetPassword,
    {
      loading: resetPasswordLoading,
      data: resetPasswordData,
      error: resetPasswordError,
    },
  ] = useMutation(RESET_PASSWORD_MUTATION, {
    client: publicClient,
  });

  useEffect(() => {
    if (resetPasswordData || resetPasswordError) {
      const errors = resetPasswordError?.graphQLErrors?.find(
        (error) => error?.code === 422
      )?.validation;
      handleResetPassword(errors);
    }
  }, [resetPasswordData, resetPasswordError]);

  const [
    registrationFromChat,
    {
      loading: registrationFromChatLoading,
      data: registrationFromChatData,
      error: registrationFromChatError,
    },
  ] = useMutation(REGISTRATION_FROM_CHAT_MUTATION, {
    client: publicClient,
  });

  useEffect(() => {
    if (registrationFromChatData || registrationFromChatError) {
      const errors = registrationFromChatError?.graphQLErrors?.find(
        (error) => error?.code === 422
      )?.validation;
      handleRegistrationFromChat(errors);
    }
  }, [registrationFromChatData, registrationFromChatError]);

  const [
    getBalances,
    {
      loading: getBalancesLoading,
      data: getBalancesData,
      error: getBalancesError,
    },
  ] = useLazyQuery(GET_BALANCES_QUERY, {
    client: publicClient,
  });

  useEffect(() => {
    if (getBalancesData) {
      handleGetBalances(
        getBalancesData?.balances?.data,
        getBalancesData?.balances?.pagination
      );
    }
    if (getBalancesError) {
      console.log(getBalancesError);
    }
  }, [getBalancesData, getBalancesError]);

  const [
    getPayments,
    {
      loading: getPaymentsLoading,
      data: getPaymentsData,
      error: getPaymentsError,
    },
  ] = useLazyQuery(GET_PAYMENTS_QUERY, {
    client: publicClient,
  });

  useEffect(() => {
    if (getPaymentsData) {
      handleGetPayments(
        getPaymentsData?.payments?.data,
        getPaymentsData?.payments?.pagination
      );
    }
    if (getPaymentsError) {
      console.log(getPaymentsError);
    }
  }, [getPaymentsData, getPaymentsError]);

  const [
    getChat,
    { loading: getChatLoading, data: getChatData, error: getChatError },
  ] = useMutation(GET_CHAT_MUTATION, {
    client: publicClient,
  });

  useEffect(() => {
    if (getChatData) {
      if (!getChatData?.getChat?.chat) return handleGetChat({ error: "Error" });
      handleGetChat(getChatData?.getChat?.chat?.telegram_group);
      console.log(getChatData);
    }
    if (getChatError) {
      console.log(getChatError);
    }
  }, [getChatData, getChatError]);

  const value = {
    login,
    loginLoading,
    registration,
    registrationLoading,
    forgotPassword,
    forgotPasswordLoading,
    resetPassword,
    resetPasswordLoading,
    registrationFromChat,
    registrationFromChatLoading,
    getBalances,
    getBalancesLoading,
    getPayments,
    getPaymentsLoading,
    getChat,
    getChatLoading,
  };

  return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>;
};

export default ApiProvider;
