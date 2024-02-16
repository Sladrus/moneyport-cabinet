import React, { useContext } from 'react';
import Breadcrumbs from '../../components/Breadcrumbs';
import ShowCounterpartyForm from './ShowCounterpartyForm';

import './ShowCounterpartyPage.css';
import { DataContext } from '../../context/context';
import { useLocation } from 'react-router-dom';
import SnackbarButCooler from '../../components/SnackbarButCooler';

const ShowCounterpartyPage = () => {
  const { counterparties } = useContext(DataContext);
  const { state } = useLocation();
  return (
    <div className="show-counterparties-page">
      <Breadcrumbs />
      <div className="show-counterparties-page-content">
        {state?.recheckReason && (
          <SnackbarButCooler
            title={'Требуется информация'}
            text={state?.recheckReason}
          />
        )}
        <ShowCounterpartyForm {...state} />
      </div>
    </div>
  );
};

export default ShowCounterpartyPage;
