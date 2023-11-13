import React, { useState } from 'react';
import './AuthForm.css';
import TextInput from '../../../components/TextInput';
import SmallTextButton from '../../../components/Buttons/SmallTextButton';
import LargeButton from '../../../components/Buttons/LargeButton';
import LargeTextButton from '../../../components/Buttons/LargeTextButton';
import MoneyportLogo from '../../../components/Icons/MoneyportLogo';
import { useContext } from 'react';
import { AuthContext } from '../../../context/context';
import { useNavigate } from 'react-router-dom';
import { REG_ROUTE } from '../../../utils/consts';

const AuthForm = ({ className }) => {
  const { loading, onLogin } = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const navigate = useNavigate();

  return (
    <div className={className}>
      <MoneyportLogo />
      <form>
        <TextInput
          value={email}
          placeholder={'E-mail'}
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          disabled={loading}
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
            value={pass}
            placeholder={'Пароль'}
            type="password"
            onChange={(e) => setPass(e.target.value)}
            disabled={loading}
          />

          <SmallTextButton value={'Забыли пароль?'} />
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
            text={'Авторизация'}
            variant="standart"
            onClick={onLogin}
            // disabled={loading}
            loading={loading}
          />

          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ paddingRight: '5px' }}>Еще нет аккаунта?</span>
            <LargeTextButton
              value={'Зарегистрироваться'}
              onClick={() => navigate(REG_ROUTE)}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AuthForm;
