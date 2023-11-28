import React from 'react';

import './TransferTabItem.css';

const TransferTabItem = React.forwardRef(
  ({ id, title, activeTab, setActiveTab }, ref) => {
    const handleClick = () => {
      setActiveTab({ id, title });
    };

    return (
      <div
        ref={ref}
        onClick={handleClick}
        className={`transfer-tab-item ${id === activeTab.id ? 'selected' : ''}`}
      >
        <span>{title}</span>
      </div>
    );
  }
);

export default TransferTabItem;
