import React, { useState } from 'react';
import './RegForm.css';
import TextInput from '../../../components/TextInput';
import LargeButton from '../../../components/Buttons/LargeButton';
import LargeTextButton from '../../../components/Buttons/LargeTextButton';
import { useContext } from 'react';
import { AuthContext } from '../../../context/context';
import CheckBox from '../../../components/CheckBox';
import { useLocation, useNavigate } from 'react-router-dom';
import { AUTH_ROUTE } from '../../../utils/consts';
import { ReactComponent as Logo } from '../../../assets/logo/logo.svg';

const randomNumberInRange = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const RegForm = ({ className }) => {
  const { loading, onReg, isPassEqual } = useContext(AuthContext);

  const [name, setName] = useState('Имя Фамилия Отчество');
  const [email, setEmail] = useState(
    `name${randomNumberInRange(1, 1000)}@gmail.com`
  );
  const [phone, setPhone] = useState(
    `8904183${randomNumberInRange(1000, 9999)}`
  );
  const [password, setPassword] = useState('1234567890');
  const [finalPass, setFinalPass] = useState('1234567890');

  const [checked, setChecked] = useState(false);

  const [errors, setErrors] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const equal = await isPassEqual(password, finalPass);
    if (!equal) {
      return setErrors({ finalPass: ['Passwords do not match'] });
    }
    const {  errors } = await onReg({ name, email, phone, password });
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
          placeholder={'ФИО'}
          type="text"
          onChange={(e) => setName(e.target.value)}
          // disabled={loading}
        />
        <TextInput
          value={email}
          errors={errors?.email}
          onClick={() => setErrors(null)}
          placeholder={'E-mail'}
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          // disabled={loading}
        />
        <TextInput
          value={phone}
          errors={errors?.phone}
          onClick={() => setErrors(null)}
          placeholder={'Мобильный телефон'}
          type="text"
          onChange={(e) => setPhone(e.target.value)}
          // disabled={loading}
        />
        <TextInput
          value={password}
          errors={errors?.password}
          onClick={() => setErrors(null)}
          placeholder={'Пароль'}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          // disabled={loading}
        />

        <TextInput
          value={finalPass}
          errors={errors?.finalPass}
          onClick={() => setErrors(null)}
          placeholder={'Пароль еще раз'}
          type="password"
          onChange={(e) => setFinalPass(e.target.value)}
          // disabled={loading}
        />
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
            onClick={handleSubmit}
            variant="standart"
            loading={loading}
            disabled={!checked}
          />

          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ paddingRight: '5px' }}>Уже есть аккаунт?</span>
            <LargeTextButton
              value={'Войти'}
              onClick={() => navigate({ pathname: AUTH_ROUTE, search: location.search })}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegForm;
