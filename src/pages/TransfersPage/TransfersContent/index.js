import React from 'react';

import './TransfersContent.css';

const TransfersContent = ({ tabs, activeTab }) => {
  return (
    <div className="transfers-content">
      {tabs.map(({ id, Component }) => {
        if (activeTab === id) return <Component key={id} />;
        return '';
      })}
    </div>
  );
};

export default TransfersContent;
