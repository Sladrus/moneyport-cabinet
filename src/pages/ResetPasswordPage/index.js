import React, { useContext, useState } from "react";

import "./ResetPasswordPage.css";

import { ReactComponent as ArrowLeft } from "../../assets/icons/arrows/arrow-left.svg";
import { ReactComponent as Logo } from "../../assets/logo/logo.svg";
import LargeButton from "../../components/Buttons/LargeButton";
import TextInput from "../../components/TextInput";
import { ApiContext, AuthContext } from "../../context/context";

import { useLocation, useNavigate, useParams } from "react-router-dom";
import { AUTH_ROUTE } from "../../utils/consts";

const ResetPasswordPage = () => {
  const {
    loading,
    onCheckReset,
    handleResetPassword,
    isPassEqual,
    errors,
    setErrors,
    isComplete,
    setIsComplete,
  } = useContext(AuthContext);

  const { resetPassword } = useContext(ApiContext);

  const navigate = useNavigate();
  const location = useLocation();

  const { token } = useParams();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [finalPass, setFinalPass] = useState("");

  // const [errors, setErrors] = useState(null);
  // const [isComplete, setComplete] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const equal = await isPassEqual(password, finalPass);
    if (!equal) {
      return setErrors({ finalPass: ["Пароли не совпадают"] });
    }
    resetPassword({ variables: { input: { token, email, password } } });
    // setErrors(errors);
  };

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
      </div>
      {isComplete && !errors && <>Пароль успешно изменен</>}
      {!isComplete ? (
        <form className="recovery-page-form">
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
            <div style={{ width: "100%" }}>
              <TextInput
                value={email}
                errors={errors && errors["input.email"]}
                placeholder={"E-mail"}
                type="text"
                onClick={() => setErrors(null)}
                onChange={(e) => setEmail(e.target.value)}
                // disabled={loading}
              />
              <TextInput
                value={password}
                errors={errors && errors["input.password"]}
                placeholder={"Пароль"}
                type="password"
                onClick={() => setErrors(null)}
                onChange={(e) => setPassword(e.target.value)}
                // disabled={loading}
              />
              <TextInput
                value={finalPass}
                errors={errors?.finalPass}
                placeholder={"Пароль еще раз"}
                type="password"
                onClick={() => setErrors(null)}
                onChange={(e) => setFinalPass(e.target.value)}
                // disabled={loading}
              />
            </div>

            <LargeButton
              text={"Продолжить"}
              variant="standart"
              onClick={handleSubmit}
              loading={loading}
            />
          </div>
        </form>
      ) : (
        <>
          <div>{errors?.error && errors?.error.map((error) => error)}</div>
          <div>{errors?.token && errors?.token.map((error) => error)}</div>
        </>
      )}
    </div>
  );
};

export default ResetPasswordPage;
