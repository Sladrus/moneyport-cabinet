import React, { useEffect, useState } from 'react';

import './AddСounterpartiesPage.css';
import Breadcrumbs from '../../components/Breadcrumbs';
import CounterpartiesProgress from '../../components/Counterparties/CounterpartiesProgress';
import AddCounterpartiesForm from './AddCounterpartiesForm';
import SnackbarButCooler from '../../components/SnackbarButCooler';
import { useLocation } from 'react-router-dom';

const AddСounterpartiesPage = () => {
  const [progress, setProgress] = useState(0);
  const { state } = useLocation();

  const changeProgress = (oldValue, newValue, percent, type = 'input') => {
    if (type === 'file') {
    }
    if (type === 'input') {
      if (!oldValue && newValue) setProgress((prev) => prev + percent);
      if (oldValue && !newValue) setProgress((prev) => prev - percent);
    }
  };

  const removeProgress = () => {
    setProgress(0);
  };

  return (
    <div className="add-counterparties-page">
      <Breadcrumbs />
      <div className="add-counterparties-page-content">
        {state && (
          <SnackbarButCooler
            title={'Требуется информация'}
            text={
              state?.recheckReason
            }
          />
        )}
        <CounterpartiesProgress progress={progress} />
        <AddCounterpartiesForm
          changeProgress={changeProgress}
          removeProgress={removeProgress}
        />
      </div>
    </div>
  );
};

export default AddСounterpartiesPage;
