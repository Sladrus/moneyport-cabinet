import React, { useContext, useEffect } from 'react';

import './СounterpartiesPage.css';
import Breadcrumbs from '../../components/Breadcrumbs';
import CounterpartiesList from '../../pages/СounterpartiesPage/СounterpartiesList';
import LargeButton from '../../components/Buttons/LargeButton';
import CounterpartiesEmpty from './CounterpartiesEmpty';
import { DataContext } from '../../context/context';
import Spinner from '../../components/Spinner';
import { useNavigate } from 'react-router-dom';
import { ADD_COUNTERPARTIES_ROUTE } from '../../utils/consts';

const СounterpartiesPage = () => {
  const { counterparties, counterpartiesLoading, getCounterparties } =
    useContext(DataContext);

  const navigate = useNavigate();
  useEffect(() => {
    getCounterparties();
  }, []);

  const handleClick = () => {
    navigate(ADD_COUNTERPARTIES_ROUTE);
  };

  return (
    <div className="counterparties-page">
      <Breadcrumbs />
      <div className="counterparties-page-content">
        {counterpartiesLoading ? (
          <Spinner />
        ) : counterparties?.length > 0 ? (
          <>
            <CounterpartiesList counterparties={counterparties} />
            <div style={{ width: '150px' }}>
              <LargeButton text="Добавить" onClick={handleClick} />
            </div>
          </>
        ) : (
          <>
            <CounterpartiesEmpty />
            <div style={{ width: '150px' }}>
              <LargeButton text="Добавить" onClick={handleClick} />
            </div>
          </>
        )}

        {/*  */}
      </div>
    </div>
  );
};

export default СounterpartiesPage;
