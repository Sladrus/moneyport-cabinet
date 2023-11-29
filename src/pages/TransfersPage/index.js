import React, { useContext, useEffect } from 'react';
import PhysicalTransfersPage from '../PhysicalTransfersPage';
import CompanyTransfersPage from '../CompanyTransfersPage';
import {
  CASH_ROUTE,
  COMPANY_TRANS_ROUTE,
  PHYS_TRANS_ROUTE,
  RECEPTION_ROUTE,
} from '../../utils/consts';
import ReceptionFromAbroadPage from '../ReceptionFromAbroadPage';
import CashWithdrawPage from '../CashWithdrawPage';
import { TransferTabs } from './TransferTabs';
import TransfersContent from './TransfersContent';

import './TransfersPage.css';
import { DataContext, RouteContext } from '../../context/context';
import Breadcrumbs from '../../components/Breadcrumbs';
import Spinner from '../../components/Spinner';

const tabs = [
  {
    id: 1,
    title: 'Переводы физ. лицу',
    Component: PhysicalTransfersPage,
    path: PHYS_TRANS_ROUTE,
  },
  {
    id: 2,
    title: 'Переводы юр. лицу',
    Component: CompanyTransfersPage,
    path: COMPANY_TRANS_ROUTE,
  },
  {
    id: 3,
    title: 'Прием из-за рубежа',
    Component: ReceptionFromAbroadPage,
    path: RECEPTION_ROUTE,
  },
  {
    id: 4,
    title: 'Выдача наличных',
    Component: CashWithdrawPage,
    path: CASH_ROUTE,
  },
];

const TransfersPage = () => {
  const { setSelectedSubItem, selectedSubItem } = useContext(RouteContext);
  const { chatLoading, getChat } = useContext(DataContext);

  useEffect(() => {
    getChat();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="transfers-page">
      {chatLoading ? (
        // <div className="transfers-page-loading">
        <Spinner />
      ) : (
        // </div>
        <div className="transfers-page-content">
          <div style={{ padding: '0 24px' }}>
            <Breadcrumbs />
          </div>
          <TransferTabs
            tabs={tabs}
            activeTab={selectedSubItem}
            setActiveTab={setSelectedSubItem}
          />
          <TransfersContent tabs={tabs} activeTab={selectedSubItem} />
        </div>
      )}
    </div>
  );
};

export default TransfersPage;
