import React, { useRef, useState } from "react";
import "./RegForm.css";
import TextInput from "../../../components/TextInput";
import LargeButton from "../../../components/Buttons/LargeButton";
import LargeTextButton from "../../../components/Buttons/LargeTextButton";
import { useContext } from "react";
import { AuthContext } from "../../../context/context";
import CheckBox from "../../../components/CheckBox";
import { useLocation, useNavigate } from "react-router-dom";
import { AUTH_ROUTE } from "../../../utils/consts";
import { ReactComponent as Logo } from "../../../assets/logo/logo.svg";

const randomNumberInRange = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const RegForm = ({ className }) => {
  const { loading, onReg, isPassEqual } = useContext(AuthContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState(``);
  const [phone, setPhone] = useState(``);
  const [password, setPassword] = useState("");
  const [finalPass, setFinalPass] = useState("");

  const [checked, setChecked] = useState(false);

  const [errors, setErrors] = useState(null);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const equal = await isPassEqual(password, finalPass);
    if (!equal) {
      return setErrors({ finalPass: ["Пароли не совпадают"] });
    }
    let client_id;
    window.ym(92731458, "getClientID", function (clientID) {
      client_id = clientID;
    });
    const { errors } = await onReg({ name, email, phone, password, client_id });
    if (!errors) {
      insertFbPixelScript();
    }
    setErrors(errors);
  };

  return (
    <div className={className}>
      <Logo className="logo" />
      <form onSubmit={handleSubmit}>
        <TextInput
          value={name}
          errors={errors?.name}
          onClick={() => setErrors(null)}
          placeholder={"ФИО"}
          type="text"
          onChange={(e) => setName(e.target.value)}
          // disabled={loading}
        />
        <TextInput
          value={email}
          errors={errors?.email}
          onClick={() => setErrors(null)}
          placeholder={"E-mail"}
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          // disabled={loading}
        />
        <TextInput
          value={phone}
          errors={errors?.phone}
          onClick={() => setErrors(null)}
          placeholder={"Мобильный телефон"}
          type="text"
          onChange={(e) => setPhone(e.target.value)}
          // disabled={loading}
        />
        <TextInput
          value={password}
          errors={errors?.password}
          onClick={() => setErrors(null)}
          placeholder={"Пароль"}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          // disabled={loading}
        />

        <TextInput
          value={finalPass}
          errors={errors?.finalPass}
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
            loading={loading}
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
