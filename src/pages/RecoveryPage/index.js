import React, { useContext, useState } from 'react';

import './RecoveryPage.css';
import TextInput from '../../components/TextInput';
import { AuthContext } from '../../context/context';
import LargeButton from '../../components/Buttons/LargeButton';
import { ReactComponent as Logo } from '../../assets/logo/logo.svg';
import { ReactComponent as ArrowLeft } from '../../assets/icons/arrows/arrow-left.svg';
import mailLogo from '../../assets/logo/mail-destination.png';

import LargeTextButton from '../../components/Buttons/LargeTextButton';
import { AUTH_ROUTE, REG_ROUTE } from '../../utils/consts';
import { useNavigate } from 'react-router-dom';

const RecoveryPage = () => {
  const { loading, onRecovery } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState('yakov.ufimkin@gmail.com');
  const [isComplete, setComplete] = useState(false);
  const [errors, setErrors] = useState(null);

  const handleRecovery = async () => {
    const { result, errors } = await onRecovery({ email });
    setComplete(result);
    setErrors(errors);
  };

  return (
    <div className="recovery-page">
      <div className="recovery-page-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          <ArrowLeft
            style={{ cursor: 'pointer' }}
            onClick={() => navigate(AUTH_ROUTE)}
          />
          <Logo className="logo" />
        </div>
        <div className="need-acc">
          <span style={{ paddingRight: '5px' }}>Еще нет аккаунта?</span>
          <LargeTextButton
            value={'Зарегистрироваться'}
            onClick={() => navigate(REG_ROUTE)}
          />
        </div>
      </div>
      {isComplete ? (
        <div
          style={{
            width: '376px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '32px',
          }}
        >
          <img src={mailLogo} alt="mail" width={133} height={133} />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '16px',
            }}
          >
            <span className="recovery-page-form-title">
              Восстановление пароля
            </span>
            <span className="recovery-page-form-subtext">
              Письмо со сменой пароля отправлено на указанный электронный адрес
            </span>
          </div>
        </div>
      ) : (
        <>
          <form className="recovery-page-form">
            <span className="recovery-page-form-title">
              Восстановление пароля
            </span>
            <div
              style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: '24px',
              }}
            >
              <TextInput
                value={email}
                errors={errors?.email}
                placeholder={'E-mail'}
                type="text"
                onClick={() => setErrors(null)}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
              />
              <LargeButton
                text={'Продолжить'}
                variant="standart"
                onClick={() => handleRecovery()}
                loading={loading}
              />
            </div>
            <div className="mobile-need-acc">
              <span style={{ paddingRight: '5px' }}>Еще нет аккаунта?</span>
              <LargeTextButton
                value={'Зарегистрироваться'}
                onClick={() => navigate(REG_ROUTE)}
              />
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default RecoveryPage;
