import React, { useContext } from 'react';
import Breadcrumbs from '../../components/Breadcrumbs';
import ShowCounterpartyForm from './ShowCounterpartyForm';

import './ShowCounterpartyPage.css';
import { DataContext } from '../../context/context';
import { useLocation } from 'react-router-dom';
import SnackbarButCooler from '../../components/SnackbarButCooler';
import { useTranslation } from 'react-i18next';

const ShowCounterpartyPage = () => {
  const { i18n, t } = useTranslation();

  const { counterparties } = useContext(DataContext);
  const { state } = useLocation();
  return (
    <div className="show-counterparties-page">
      <Breadcrumbs />
      <div className="show-counterparties-page-content">
        {state?.recheckReason && (
          <SnackbarButCooler
            title={t('needInformation')}
            text={state?.recheckReason}
          />
        )}
        <ShowCounterpartyForm {...state} />
      </div>
    </div>
  );
};

export default ShowCounterpartyPage;
