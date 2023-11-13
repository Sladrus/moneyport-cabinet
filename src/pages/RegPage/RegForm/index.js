import React, { useState } from 'react';
import './RegForm.css';
import TextInput from '../../../components/TextInput';
import SmallTextButton from '../../../components/Buttons/SmallTextButton';
import LargeButton from '../../../components/Buttons/LargeButton';
import LargeTextButton from '../../../components/Buttons/LargeTextButton';
import MoneyportLogo from '../../../components/Icons/MoneyportLogo';
import { useContext } from 'react';
import { AuthContext } from '../../../context/context';
import CheckBox from '../../../components/CheckBox';
import { useNavigate } from 'react-router-dom';
import { AUTH_ROUTE } from '../../../utils/consts';

const RegForm = ({ className }) => {
  const { loading, onReg } = useContext(AuthContext);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [pass, setPass] = useState('');
  const [finalPass, setFinallPass] = useState('');

  const [checked, setChecked] = useState(false);

  const navigate = useNavigate();

  return (
    <div className={className}>
      <MoneyportLogo />
      <form>
        <TextInput
          value={name}
          placeholder={'ФИО'}
          type="text"
          onChange={(e) => setName(e.target.value)}
          disabled={loading}
        />
        <TextInput
          value={email}
          placeholder={'E-mail'}
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          disabled={loading}
        />
        <TextInput
          value={phone}
          placeholder={'Мобильный телефон'}
          type="text"
          onChange={(e) => setPhone(e.target.value)}
          disabled={loading}
        />
        <TextInput
          value={pass}
          placeholder={'Пароль'}
          type="password"
          onChange={(e) => setPass(e.target.value)}
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
            value={finalPass}
            placeholder={'Пароль еще раз'}
            type="password"
            onChange={(e) => setFinallPass(e.target.value)}
            disabled={loading}
          />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <CheckBox checked={checked} onChange={() => setChecked(!checked)} />
          <span>
            Соглашаюсь с <a href={AUTH_ROUTE}>правилами сервиса</a>
          </span>
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
            text={'Регистрация'}
            variant="standart"
            onClick={onReg}
            loading={loading}
          />

          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ paddingRight: '5px' }}>Уже есть аккаунт?</span>
            <LargeTextButton
              value={'Войти'}
              onClick={() => navigate(AUTH_ROUTE)}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegForm;
