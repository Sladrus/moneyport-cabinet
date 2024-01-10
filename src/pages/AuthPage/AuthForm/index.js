import React, { useState } from 'react';
import './AuthForm.css';
import TextInput from '../../../components/TextInput';
import SmallTextButton from '../../../components/Buttons/SmallTextButton';
import LargeButton from '../../../components/Buttons/LargeButton';
import LargeTextButton from '../../../components/Buttons/LargeTextButton';
import { useContext } from 'react';
import { AuthContext } from '../../../context/context';
import { useLocation, useNavigate } from 'react-router-dom';
import { RECOVERY_ROUTE, REG_ROUTE } from '../../../utils/consts';
import { ReactComponent as Logo } from '../../../assets/logo/logo.svg';

const AuthForm = ({ className }) => {
  const { loading, onLogin } = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    let client_id;
    window.ym(92731458, 'getClientID', function (clientID) {
      client_id = clientID;
    });
    console.log(client_id);
    const { errors } = await onLogin({ email, password, client_id });
    setErrors(errors);
  };

  const navigate = useNavigate();
  const location = useLocation();
  // let client_id;
  // window.ym(92731458, 'getClientID', function (clientID) {
  //   client_id = clientID;
  // });
  // console.log(client_id);

  return (
    <div className={className}>
      <Logo className="logo" />
      <form onSubmit={handleLogin}>
        <TextInput
          value={email}
          errors={errors?.email}
          onClick={() => setErrors(null)}
          placeholder={'E-mail'}
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          // disabled={loading}
        />
        <div
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '12px',
          }}
        >
          <TextInput
            value={password}
            errors={errors?.password || errors?.error}
            onClick={() => setErrors(null)}
            placeholder={'Пароль'}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            // disabled={loading}
          />

          <SmallTextButton
            value={'Забыли пароль?'}
            onClick={() =>
              navigate({ pathname: RECOVERY_ROUTE, search: location.search })
            }
          />
        </div>
        <div
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '12px',
            alignSelf: 'stretch',
          }}
        >
          <LargeButton
            type="submit"
            text={'Войти'}
            variant="standart"
            // onClick={() => handleLogin()}
            loading={loading}
          />

          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ paddingRight: '5px' }}>Еще нет аккаунта?</span>
            <LargeTextButton
              value={'Зарегистрироваться'}
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
