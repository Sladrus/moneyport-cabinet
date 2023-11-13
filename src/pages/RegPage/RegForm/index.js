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
  const [password, setPassword] = useState('');
  const [finalPass, setFinallPass] = useState('');

  const [checked, setChecked] = useState(false);

  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, phone, password);
    // onReg({ name, email, phone, password });
  };

  return (
    <div className={className}>
      <MoneyportLogo />
      <form onSubmit={handleSubmit}>
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
          value={password}
          placeholder={'Пароль'}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
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
            type="submit"
            text={'Регистрация'}
            variant="standart"
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
