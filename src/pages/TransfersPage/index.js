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
import PreOrderPhysicalContent from '../PhysicalTransfersPage/PreOrderPhysicalContent';
import PreOrderFromAbroadContent from '../ReceptionFromAbroadPage/PreOrderFromAbroadContent';
import PreOrderCompanyContent from '../CompanyTransfersPage/PreOrderCompanyContent';
import PreOrderCashContent from '../CashWithdrawPage/PreOrderCashContent';

const tabs = [
  {
    id: 1,
    title: 'Переводы физ. лицу',
    PreOrderComponent: PreOrderPhysicalContent,
    Component: PhysicalTransfersPage,
    path: PHYS_TRANS_ROUTE,
  },
  {
    id: 2,
    title: 'Переводы юр. лицу',
    PreOrderComponent: PreOrderCompanyContent,
    Component: CompanyTransfersPage,
    path: COMPANY_TRANS_ROUTE,
  },
  {
    id: 3,
    title: 'Прием из-за рубежа',
    PreOrderComponent: PreOrderFromAbroadContent,
    Component: ReceptionFromAbroadPage,
    path: RECEPTION_ROUTE,
  },
  {
    id: 4,
    title: 'Выдача наличных',
    PreOrderComponent: PreOrderCashContent,
    Component: CashWithdrawPage,
    path: CASH_ROUTE,
  },
];

const TransfersPage = () => {
  const { setSelectedSubItem, selectedSubItem, selectedMenuItem } =
    useContext(RouteContext);
  const { order, setOrder, chat, chatLoading, getChat } =
    useContext(DataContext);

  useEffect(() => {
    setOrder();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedSubItem]);

  useEffect(() => {
    if (!selectedSubItem) {
      setSelectedSubItem({ id: 1, title: 'Перевод юр. лицу' });
    }
  }, []);

  if (chat?.error) {
    return (
      <div className="transfers-page">
        <div style={{ padding: '0 24px' }}>
          <Breadcrumbs />
        </div>
        <div className="transfers-page-error">
          <span>
            Произошла ошибка. Свяжитесь с{' '}
            <a href={'https://t.me/mpstart'} rel="noreferrer" target="_blank">
              https://t.me/mpstart
            </a>{' '}
            для получения помощи.
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="transfers-page">
      <div style={{ padding: '0 24px' }}>
        <Breadcrumbs />
      </div>

      <div className="transfers-page-content">
        <TransferTabs
          tabs={tabs}
          activeTab={selectedSubItem}
          setActiveTab={setSelectedSubItem}
        />
        {chatLoading ? (
          <div className="transfers-page-loading">
            <Spinner />
          </div>
        ) : (
          <TransfersContent tabs={tabs} activeTab={selectedSubItem} />
        )}
      </div>
    </div>
  );
};

export default TransfersPage;
