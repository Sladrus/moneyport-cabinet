import React, { useContext, useEffect, useState } from 'react';

import './ResetPasswordPage.css';

import TextInput from '../../components/TextInput';
import { AuthContext } from '../../context/context';
import LargeButton from '../../components/Buttons/LargeButton';
import { ReactComponent as Logo } from '../../assets/logo/logo.svg';
import { ReactComponent as ArrowLeft } from '../../assets/icons/arrows/arrow-left.svg';
import mailLogo from '../../assets/logo/mail-destination.png';

import LargeTextButton from '../../components/Buttons/LargeTextButton';
import { AUTH_ROUTE, REG_ROUTE } from '../../utils/consts';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const ResetPasswordPage = () => {
  const { loading, onCheckReset, onUpdatePassword, isPassEqual } =
    useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const { token } = useParams();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('1234567890');
  const [finalPass, setFinalPass] = useState('1234567890');

  const [errors, setErrors] = useState(null);
  const [isComplete, setComplete] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const equal = await isPassEqual(password, finalPass);
    if (!equal) {
      return setErrors({ finalPass: ['Passwords do not match'] });
    }
    const { result, errors } = await onUpdatePassword({
      token,
      email,
      password,
    });

    setErrors(errors);
  };

  useEffect(() => {
    onCheckReset({ token }).then(({ result, errors }) => {
      setErrors(errors);
      setComplete(result);
    });
  }, []);

  return (
    <div className="recovery-page">
      <div className="recovery-page-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          <ArrowLeft
            style={{ cursor: 'pointer' }}
            onClick={() =>
              navigate({ pathname: AUTH_ROUTE, search: location.search })
            }
          />
          <Logo className="logo" />
        </div>
      </div>
      {isComplete ? (
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
            <div style={{ width: '100%' }}>
              <TextInput
                value={email}
                errors={errors?.email}
                placeholder={'E-mail'}
                type="text"
                onClick={() => setErrors(null)}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
              />
              <TextInput
                value={password}
                errors={errors?.password}
                placeholder={'E-mail'}
                type="password"
                onClick={() => setErrors(null)}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
              />
              <TextInput
                value={finalPass}
                errors={errors?.finalPass}
                placeholder={'E-mail'}
                type="password"
                onClick={() => setErrors(null)}
                onChange={(e) => setFinalPass(e.target.value)}
                disabled={loading}
              />
            </div>

            <LargeButton
              text={'Продолжить'}
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

export default ResetPasswordPage;
