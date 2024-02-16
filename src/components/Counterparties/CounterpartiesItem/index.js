import React from 'react';
import { ReactComponent as SuitcaseIcon } from '../../../assets/icons/counterparties/suitcase.svg';
import { ReactComponent as AddIcon } from '../../../assets/icons/counterparties/edit.svg';

import Badge from '../../Badge';

import './CounterpartiesItem.css';
import LargeTextButton from '../../Buttons/LargeTextButton';
import { useNavigate } from 'react-router-dom';
import {
  ADD_COUNTERPARTIES_ROUTE,
  EDIT_COUNTERPARTIES_ROUTE,
} from '../../../utils/consts';
import { statusList } from '../../../utils/statusList';

const CounterpartiesItem = ({ title, status, onClick, item }) => {
  const navigate = useNavigate();

  const statusItem = statusList.find((item) => item.value === status);

  const handleEdit = (e) => {
    e.stopPropagation();
    navigate(EDIT_COUNTERPARTIES_ROUTE, { state: item });
  };

  return (
    <div className="counterparties-item" onClick={() => onClick(item)}>
      <div className="frame">
        <div className="div">
          <div className="div-1">
            <div className="suitcase-wrapper">
              <SuitcaseIcon className="suitcase-instance" color="#A8B1BE" />
            </div>
            <div className="text-wrapper">{title}</div>
          </div>
          <div className="edit-button-wrapper">
            {statusItem.value === 'RECHECK' && (
              <LargeTextButton
                value={'Редактировать данные'}
                icon={<AddIcon />}
                onClick={handleEdit}
              />
            )}
          </div>
        </div>

        <Badge
          className="badge-instance"
          color={statusItem.color}
          text={statusItem.text}
        />
      </div>
    </div>
  );
};

export default CounterpartiesItem;
