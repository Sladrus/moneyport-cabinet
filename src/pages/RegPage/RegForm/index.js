import React, { useContext, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ReactComponent as Logo } from "../../../assets/logo/logo.svg";
import LargeButton from "../../../components/Buttons/LargeButton";
import LargeTextButton from "../../../components/Buttons/LargeTextButton";
import CheckBox from "../../../components/CheckBox";
import TextInput from "../../../components/TextInput";
import { ApiContext, AuthContext } from "../../../context/context";
import AuthApi from "../../../http/AuthApi";
import { AUTH_ROUTE } from "../../../utils/consts";
import "./RegForm.css";

const randomNumberInRange = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const RegForm = ({ className }) => {
  const { isPassEqual, errors, setErrors, searchParams } =
    useContext(AuthContext);
  const { registration, registrationLoading } = useContext(ApiContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState(``);
  const [phone, setPhone] = useState(``);
  const [password, setPassword] = useState("");
  const [finalPass, setFinalPass] = useState("");

  const [checked, setChecked] = useState(false);

  // const [errors, setErrors] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  const pixelContRef = useRef(null);

  const insertFbPixelScript = () => {
    const scriptContent = `
      !function(f,b,e,v,n,t,s) {
        if(f.fbq) return; n=f.fbq=function() {
          n.callMethod ? n.callMethod.apply(n,arguments) : n.queue.push(arguments)
        };
        if(!f._fbq) f._fbq=n;
        n.push=n; n.loaded=!0; n.version='2.0';
        n.queue=[];
        t=b.createElement(e); t.async=!0;
        t.src=v; s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)
      }(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '660125684947277');
      fbq('track', 'Lead');
    `;
    const pixelContainer = pixelContRef.current;
    const scriptElement = document.createElement("script");
    scriptElement.innerHTML = scriptContent;
    pixelContainer.appendChild(scriptElement);

    const imgElement = document.createElement("img");
    imgElement.height = 1;
    imgElement.width = 1;
    imgElement.style.display = "none";
    imgElement.src =
      "https://www.facebook.com/tr?id=660125684947277&ev=Lead&noscript=1";
    pixelContainer.appendChild(imgElement);
  };

  const getInputNumbersValue = (input) => {
    return input.value.replace(/\D/g, "");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!checked) return;
    const equal = await isPassEqual(password, finalPass);
    if (!equal) {
      return setErrors((prev) => ({
        ...prev,
        finalPass: ["Пароли не совпадают"],
      }));
    }
    await AuthApi.getCsrfCookie();
    let ym_client_id;
    window.ym(92731458, "getClientID", function (clientID) {
      ym_client_id = clientID;
    });
    const allParameters = new URLSearchParams(location.search);
    allParameters.forEach((value, key) => {
      allParameters[key] = value;
    });
    console.log(JSON.stringify(allParameters, null, 2));

    const source = {
      utm_source:
        searchParams.get("utm_source") ||
        localStorage.getItem("utm_source") ||
        null,
      utm_medium:
        searchParams.get("utm_medium") ||
        localStorage.getItem("utm_medium") ||
        null,
      utm_campaign:
        searchParams.get("utm_campaign") ||
        localStorage.getItem("utm_campaign") ||
        null,
      utm_content:
        searchParams.get("utm_content") ||
        localStorage.getItem("utm_content") ||
        null,
      utm_term:
        searchParams.get("utm_term") || localStorage.getItem("utm_term") || "",
      all_parameters: JSON.stringify(allParameters, null, 2),
      ym_client_id: ym_client_id ? ym_client_id : null,
    };

    registration({
      variables: {
        input: {
          name,
          email,
          phone: "+" + phone?.replace(/\D/g, ""),
          password,
          password_confirmation: finalPass,
          source: source,
        },
      },
    });

    // const { errors } = await onReg({
    //   name,
    //   email,
    //   phone: phone?.replace(/\D/g, ""),
    //   password,
    //   client_id,
    // });
    if (!errors) {
      insertFbPixelScript();
    }
    // setErrors(errors);
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
      e.target.value = "";
      setPhone("");
    }
    setPhone(inputValue);
  };

  const onPhonePaste = (e) => {
    const input = e.target;
    const inputNumbersValue = getInputNumbersValue(input);
    const pasted = e.clipboardData || window.clipboardData;
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
    <div className={className}>
      <Logo className="logo" />
      <form onSubmit={handleSubmit}>
        <TextInput
          value={name}
          errors={errors && errors["input.name"]}
          onClick={() => setErrors(null)}
          placeholder={"ФИО"}
          type="text"
          onChange={(e) => setName(e.target.value)}
          // disabled={loading}
        />
        <TextInput
          value={email}
          errors={errors && errors["input.email"]}
          onClick={() => setErrors(null)}
          placeholder={"E-mail"}
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          // disabled={loading}
        />
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
          onClick={() => setErrors(null)}
          placeholder={"Пароль"}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          // disabled={loading}
        />

        <TextInput
          value={finalPass}
          errors={errors && errors?.finalPass}
          onClick={() => setErrors(null)}
          placeholder={"Пароль еще раз"}
          type="password"
          onChange={(e) => setFinalPass(e.target.value)}
          // disabled={loading}
        />
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <CheckBox checked={checked} onChange={() => setChecked(!checked)} />
          <span>
            Соглашаюсь с{" "}
            <a
              href={"https://moneyport.ru/policy/"}
              rel="noreferrer"
              target="_blank"
            >
              правилами сервиса
            </a>
          </span>
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
            text={"Регистрация"}
            onClick={handleSubmit}
            variant="standart"
            loading={registrationLoading}
            disabled={!checked}
          />

          <div style={{ display: "flex", alignItems: "center" }}>
            <span style={{ paddingRight: "5px" }}>Уже есть аккаунт?</span>
            <LargeTextButton
              value={"Войти"}
              onClick={() =>
                navigate({ pathname: AUTH_ROUTE, search: location.search })
              }
            />
          </div>
        </div>
      </form>
      <div id="pixel-cont" ref={pixelContRef}></div>
    </div>
  );
};

export default RegForm;
