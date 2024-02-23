import React, { useContext, useEffect } from 'react';

import CounterpartiesItem from '../../../components/Counterparties/CounterpartiesItem';

import './СounterpartiesList.css';
import { useNavigate } from 'react-router-dom';
import { SHOW_COUNTERPARTIES_ROUTE } from '../../../utils/consts';

const СounterpartiesList = ({ counterparties }) => {
  const navigate = useNavigate();
  const handleClick = (item) => {
    navigate(SHOW_COUNTERPARTIES_ROUTE, { state: item });
  };

  return (
    <div className={`counterparties-page-list`}>
      {counterparties?.map((item) => {
        return (
          <CounterpartiesItem
            key={item?.id}
            title={item?.name}
            status={item?.status}
            item={item}
            onClick={handleClick}
          />
        );
      })}
    </div>
  );
};

export default СounterpartiesList;
