import React from 'react';
import './LargeButton.css';
import { ReactComponent as Loader } from '../../../assets/icons/menu/spinner.svg';

const LargeButton = ({
  type,
  text,
  onClick,
  disabled,
  variant = 'standart',
  loading,
}) => {
  return (
    <div
      type={type}
      className={`large-button ${variant} ${disabled && 'disabled'}`}
      onClick={!disabled ? onClick : () => null}
    >
      <span
        className={`large-button-text ${variant} ${disabled && 'disabled'}`}
      >
        {!loading ? text : <Loader className="spinner" />}
      </span>
    </div>
  );
};

export default LargeButton;
