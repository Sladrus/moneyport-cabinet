import React from 'react';
import './ChipButton.css';
import { ReactComponent as Loader } from '../../../assets/icons/menu/spinner.svg';

const ChipButton = ({
  type,
  text,
  onClick,
  onKeyDown,
  disabled,
  variant = 'standart',
  loading,
  icon,
}) => {
  return (
    <button
      onKeyDown={onKeyDown}
      type={type}
      className={`chip-button ${variant} ${disabled && 'disabled'}`}
      onClick={!disabled ? onClick : () => null}
    >
      <span className={`chip-button-text ${variant} ${disabled && 'disabled'}`}>
        {!loading ? text : <Loader className="spinner" />}
      </span>
      {icon}
    </button>
  );
};

export default ChipButton;
