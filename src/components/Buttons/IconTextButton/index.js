import React from 'react';
import { ReactComponent as AddIcon } from '../../../assets/icons/counterparties/edit.svg';
import './IconTextButton.css';

const IconTextButton = ({
  state,
  type,
  size,
  className,
  icon = <AddIcon className="add-instance" color="#408EF6" />,
  text = 'Button',
}) => {
  return (
    <button className={`button`}>
      <>
        {icon}
        <div className="text-wrapper">{text}</div>
      </>
    </button>
  );
};

export default IconTextButton;
