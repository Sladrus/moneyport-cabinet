import React, { useContext, useEffect, useState } from "react";

import "./LinkChatPage.css";

import { ReactComponent as ArrowLeft } from "../../assets/icons/arrows/arrow-left.svg";
import { ReactComponent as Logo } from "../../assets/logo/logo.svg";
import LargeButton from "../../components/Buttons/LargeButton";
import TextInput from "../../components/TextInput";
import { ApiContext, AuthContext } from "../../context/context";

import { useLocation, useNavigate, useParams } from "react-router-dom";
import { AUTH_ROUTE } from "../../utils/consts";

const LinkChatPage = () => {
  const {
    loading,
    onCheckReset,
    onUpdatePassword,
    handleLinkChat,
    isPassEqual,
    errors,
    setErrors,
    isComplete,
  } = useContext(AuthContext);

  const { registrationFromChat } = useContext(ApiContext);

  const navigate = useNavigate();
  const location = useLocation();

  const { token } = useParams();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [finalPass, setFinalPass] = useState("");

  // const [errors, setErrors] = useState(null);
  // const [isComplete, setComplete] = useState(false);

  const getInputNumbersValue = (input) => {
    return input.value.replace(/\D/g, "");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const equal = await isPassEqual(password, finalPass);
    if (!equal) {
      return setErrors({ finalPass: ["Пароли не совпадают"] });
    }
    let ym_client_id;
    window.ym(92731458, "getClientID", function (clientID) {
      ym_client_id = clientID;
    });
    await registrationFromChat({
      variables: {
        input: {
          name,
          phone: "+" + phone?.replace(/\D/g, ""),
          token,
          email,
          password,
          source: {
            ym_client_id,
          },
        },
      },
    });
    // setErrors(errors);
    // if (!errors || errors?.token) setComplete(true);
  };

  const onPhoneInput = (e) => {
    const input = e.target;
    let inputNumbersValue = getInputNumbersValue(input);
    const selectionStart = input.selectionStart;
    let formattedInputValue = "";

    if (!inputNumbersValue) {
      input.value = "";
      return setPhone(input.value);
    }

    if (input.value.length !== selectionStart) {
      if (e.data && /\D/g.test(e.data)) {
        input.value = inputNumbersValue;
        setPhone(input.value);
      }
      return;
    }

    if (["7", "8", "9"].indexOf(inputNumbersValue[0]) > -1) {
      if (inputNumbersValue[0] === "9")
        inputNumbersValue = "7" + inputNumbersValue;
      const firstSymbols = inputNumbersValue[0] === "8" ? "8" : "+7";
      formattedInputValue = firstSymbols + " ";
      if (inputNumbersValue.length > 1) {
        formattedInputValue += "(" + inputNumbersValue.substring(1, 4);
      }
      if (inputNumbersValue.length >= 5) {
        formattedInputValue += ") " + inputNumbersValue.substring(4, 7);
      }
      if (inputNumbersValue.length >= 8) {
        formattedInputValue += "-" + inputNumbersValue.substring(7, 9);
      }
      if (inputNumbersValue.length >= 10) {
        formattedInputValue += "-" + inputNumbersValue.substring(9, 11);
      }
    } else {
      formattedInputValue = "+" + inputNumbersValue.substring(0, 16);
    }
    input.value = formattedInputValue;
    setPhone(input.value);
  };

  const onPhoneKeyDown = (e) => {
    const inputValue = e.target.value.replace(/\D/g, "");
    if (e.keyCode === 8 && inputValue.length === 1) {
      console.log(e?.target?.value);
      e.target.value = "";
      setPhone("");
    }
    setPhone(inputValue);
  };

  const onPhonePaste = (e) => {
    const input = e.target;
    const inputNumbersValue = getInputNumbersValue(input);
    const pasted = e.clipboardData || window?.clipboardData;
    if (pasted) {
      const pastedText = pasted.getData("Text");
      if (/\D/g.test(pastedText)) {
        input.value = inputNumbersValue;
        setPhone(input?.vaue);
        return;
      }
    }
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
      {/* {errors?.token} */}
      {isComplete && !errors && <span>Чат-касса привязана к {email}</span>}
      {isComplete && errors && errors["input.token"]}
      {!isComplete ? (
        <form className="recovery-page-form">
          <span className="recovery-page-form-title">Привязка чат-кассы</span>
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
                value={name}
                errors={errors && errors["input.name"]}
                placeholder={"ФИО"}
                type="text"
                onClick={() => setErrors(null)}
                onChange={(e) => setName(e.target.value)}
                // disabled={loading}
              />
              <TextInput
                value={email}
                errors={errors && errors["input.email"]}
                placeholder={"E-mail"}
                type="text"
                onClick={() => setErrors(null)}
                onChange={(e) => setEmail(e.target.value)}
                // disabled={loading}
              />
              {/* <TextInput
                value={phone}
                errors={errors?.phone}
                placeholder={"Мобильный телефон"}
                type="text"
                onClick={() => setErrors(null)}
                onChange={(e) => setPhone(e.target.value)}
                // disabled={loading}
              /> */}
              <TextInput
                className="mask-phone"
                value={phone}
                errors={errors && errors["input.phone"]}
                onClick={() => setErrors(null)}
                placeholder={"Мобильный телефон"}
                type="text"
                onKeyDown={(e) => {
                  onPhoneKeyDown(e);
                }}
                onChange={(e) => {
                  onPhoneInput(e);
                  onPhonePaste(e);
                }}
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

export default LinkChatPage;
