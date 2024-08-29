import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ReactComponent as Logo } from "../../../assets/logo/logo.svg";
import LargeButton from "../../../components/Buttons/LargeButton";
import LargeTextButton from "../../../components/Buttons/LargeTextButton";
import SmallTextButton from "../../../components/Buttons/SmallTextButton";
import TextInput from "../../../components/TextInput";
import { ApiContext, AuthContext } from "../../../context/context";
import AuthApi from "../../../http/AuthApi";
import { RECOVERY_ROUTE, REG_ROUTE } from "../../../utils/consts";
import "./AuthForm.css";

const AuthForm = ({ className }) => {
  const { login, loginLoading } = useContext(ApiContext);

  const { errors, setErrors } = useContext(AuthContext);

  const [email, setEmail] = useState("1");
  const [password, setPassword] = useState("12345678");
  // const [errors, setErrors] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    // let client_id;
    // window.ym(92731458, "getClientID", function (clientID) {
    //   client_id = clientID;
    // });
    // const { errors } = await onLogin({ email, password, client_id });
    await AuthApi.getCsrfCookie();

    await login({
      variables: {
        input: {
          login: email,
          password: password,
        },
      },
    });
    // setErrors(errors);
  };

  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className={className}>
      <Logo className="logo" />
      <form onSubmit={handleLogin}>
        <TextInput
          value={email}
          errors={
            (errors && errors["input.login"]) || (errors && [errors?.message])
          }
          onClick={() => setErrors(null)}
          placeholder={"E-mail"}
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          // disabled={loading}
        />
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "12px",
          }}
        >
          <TextInput
            value={password}
            errors={errors && errors["input.password"]}
            onClick={() => setErrors(null)}
            placeholder={"Пароль"}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            // disabled={loading}
          />

          <SmallTextButton
            value={"Забыли пароль?"}
            onClick={() =>
              navigate({ pathname: RECOVERY_ROUTE, search: location.search })
            }
          />
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "12px",
            alignSelf: "stretch",
          }}
        >
          <LargeButton
            type="submit"
            text={"Войти"}
            variant="standart"
            // onClick={() => handleLogin()}
            loading={loginLoading}
          />

          <div style={{ display: "flex", alignItems: "center" }}>
            <span style={{ paddingRight: "5px" }}>Еще нет аккаунта?</span>
            <LargeTextButton
              value={"Зарегистрироваться"}
              onClick={() =>
                navigate({ pathname: REG_ROUTE, search: location.search })
              }
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AuthForm;
