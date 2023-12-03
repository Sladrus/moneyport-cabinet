import React from 'react';
import './LargeButton.css';
import { ReactComponent as Loader } from '../../../assets/icons/menu/spinner.svg';

const LargeButton = ({
  type,
  text,
  onClick,
  onKeyDown,
  disabled,
  variant = 'standart',
  loading,
}) => {
  return (
    <button
      onKeyDown={onKeyDown}
      type={type}
      className={`large-button ${variant} ${disabled && 'disabled'}`}
      onClick={!disabled ? onClick : () => null}
    >
      <span
        className={`large-button-text ${variant} ${disabled && 'disabled'}`}
      >
        {!loading ? text : <Loader className="spinner" />}
      </span>
    </button>
  );
};

export default LargeButton;
