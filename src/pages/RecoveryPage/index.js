import React, { useContext, useEffect, useState } from "react";

import { ReactComponent as ArrowLeft } from "../../assets/icons/arrows/arrow-left.svg";
import { ReactComponent as Logo } from "../../assets/logo/logo.svg";
import mailLogo from "../../assets/logo/mail-destination.png";
import LargeButton from "../../components/Buttons/LargeButton";
import TextInput from "../../components/TextInput";
import { ApiContext, AuthContext } from "../../context/context";
import "./RecoveryPage.css";

import { useLocation, useNavigate } from "react-router-dom";
import LargeTextButton from "../../components/Buttons/LargeTextButton";
import { AUTH_ROUTE, REG_ROUTE } from "../../utils/consts";

const RecoveryPage = () => {
  const { errors, setErrors, isComplete, setIsComplete } =
    useContext(AuthContext);
  const { forgotPassword, forgotPasswordLoading } = useContext(ApiContext);
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState("");

  const handleRecovery = async (e) => {
    e.preventDefault();

    forgotPassword({
      variables: {
        input: {
          email,
        },
      },
    });
    // const { result, errors } = await onRecovery({ email });
    // setComplete(result);
    // setErrors(errors);
  };

  useEffect(() => {
    setIsComplete(false);
  }, []);
  console.log(isComplete);
  return (
    <div className="recovery-page">
      <div className="recovery-page-header">
        <div style={{ display: "flex", alignItems: "center", gap: "32px" }}>
          <ArrowLeft
            style={{ cursor: "pointer" }}
            onClick={() =>
              navigate({ pathname: AUTH_ROUTE, search: location.search })
            }
          />
          <Logo className="logo" />
        </div>
        <div className="need-acc">
          <span style={{ paddingRight: "5px" }}>Еще нет аккаунта?</span>
          <LargeTextButton
            value={"Зарегистрироваться"}
            onClick={() =>
              navigate({ pathname: REG_ROUTE, search: location.search })
            }
          />
        </div>
      </div>
      {isComplete ? (
        <div
          style={{
            width: "376px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "32px",
          }}
        >
          <img src={mailLogo} alt="mail" width={133} height={133} />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <span className="recovery-page-form-title">
              Восстановление пароля
            </span>
            <span className="recovery-page-form-subtext">
              Письмо со сменой пароля отправлено на указанный электронный адрес
            </span>
          </div>
        </div>
      ) : (
        <>
          <form onSubmit={handleRecovery} className="recovery-page-form">
            <span className="recovery-page-form-title">
              Восстановление пароля
            </span>
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "24px",
              }}
            >
              <TextInput
                value={email}
                errors={errors && errors["input.email"]}
                placeholder={"E-mail"}
                type="text"
                onClick={() => setErrors(null)}
                onChange={(e) => setEmail(e.target.value)}
                // disabled={loading}
              />
              <LargeButton
                type="submit"
                text={"Продолжить"}
                variant="standart"
                // onClick={() => handleRecovery()}
                loading={forgotPasswordLoading}
              />
            </div>
            <div className="mobile-need-acc">
              <span style={{ paddingRight: "5px" }}>Еще нет аккаунта?</span>
              <LargeTextButton
                value={"Зарегистрироваться"}
                onClick={() => {
                  navigate({ pathname: REG_ROUTE, search: location.search });
                }}
              />
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default RecoveryPage;
