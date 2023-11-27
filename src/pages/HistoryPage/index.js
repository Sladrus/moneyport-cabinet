import React from 'react';

import './HistoryPage.css';
import HistoryList from './HistoryList';
import Breadcrumbs from '../../components/Breadcrumbs';

const HistoryPage = () => {
  return (
    <div className="history-page">
      <Breadcrumbs />
      <div className="history-page-content">
        <HistoryList />
      </div>
    </div>
  );
};

export default HistoryPage;
