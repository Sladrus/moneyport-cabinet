import React, { useState } from 'react';
import { ReactComponent as ErrorIcon } from '../../assets/icons/input/rejection.svg';
import { ReactComponent as ClosedEyeIcon } from '../../assets/icons/input/closed-eye.svg';
import { ReactComponent as OpenedEyeIcon } from '../../assets/icons/input/opened-eye.svg';

import './TextInput.css';

const TextInput = ({
  value,
  errors,
  onClick,
  onChange,
  placeholder,
  type,
  disabled,
}) => {
  const [showPass, setShowPass] = useState(false);

  return (
    <div className="input">
      <div
        onClick={onClick}
        className={`input-body ${errors ? 'reject' : ''} ${
          disabled ? 'disabled' : ''
        }`}
      >
        <div
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'start',
            alignItems: 'start',
          }}
        >
          <input
            type={showPass ? 'text' : type}
            value={value}
            onChange={onChange}
            disabled={disabled}
          />
          <label className={value && 'filled'}>{placeholder}</label>
        </div>
        {!errors && type === 'password' && (
          <>
            {showPass ? (
              <OpenedEyeIcon
                className="input-body-eye"
                onClick={() => setShowPass(!showPass)}
              />
            ) : (
              <ClosedEyeIcon
                className="input-body-eye"
                onClick={() => setShowPass(!showPass)}
              />
            )}
          </>
        )}
        {errors && <ErrorIcon />}
      </div>
      {errors &&
        errors.map((error, index) => (
          <span key={index} className="input-error">
            {error}
          </span>
        ))}
    </div>
  );
};

export default TextInput;
