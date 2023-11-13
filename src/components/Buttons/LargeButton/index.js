import React from 'react';
import './LargeButton.css';
import { ReactComponent as Loader } from '../../../assets/icons/menu/spinner.svg';

const LargeButton = ({
  text,
  onClick,
  disabled,
  variant = 'standart',
  loading,
}) => {
  return (
    <div
      className={`large-button ${variant} ${disabled && 'disabled'}`}
      onClick={onClick}
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
