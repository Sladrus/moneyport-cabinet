import React, { useContext } from 'react';

import './BalancesPage.css';
import LargeButton from '../../components/Buttons/LargeButton';
import BalancesList from './BalancesList';
import Breadcrumbs from '../../components/Breadcrumbs';
import { DataContext } from '../../context/context';
// import LargeButton from '../../components/Buttons/LargeButton';

const BalancesPage = () => {
  const { balances } = useContext(DataContext);

  return (
    <div className="balances-page">
      <div className="balances-page-content">
        <Breadcrumbs />
        <BalancesList />
        {balances?.nextPage && (
          <div className="balances-page-content-button">
            <LargeButton text={'Показать еще'} variant="outlined" />
          </div>
        )}
      </div>
    </div>
  );
};

export default BalancesPage;
