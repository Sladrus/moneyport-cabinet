import React, { createRef, useEffect, useRef, useState } from 'react';

import './TransferTabs.css';
import TransferTabItem from './TransferTabItem/index,';
import styled from 'styled-components';

const ActiveLine = styled.div`
  height: 3px;
  width: 36px;
  transform: translateX(${(p) => `${p.offset + p.width / 2 - 16}px`});
  background: #408ef6;
  transition: all 350ms cubic-bezier(0.15, 0.3, 0.25, 1);
  text-align: 'center';
`;

export const TransferTabs = ({ tabs, activeTab, setActiveTab }) => {
  const activeRef = useRef();
  const none = useRef();

  const [offset, setOffset] = useState(0);
  const [width, setWidth] = useState(0);

  console.log(activeTab);
  useEffect(() => {
    if (!activeTab) return;
    const activeElement = activeRef?.current;
    setOffset(activeElement.offsetLeft);
    setWidth(activeElement.clientWidth);
  }, [activeTab, activeRef]);

  return (
    <div className="transfer-tabs">
      <ul className="transfer-tabs-nav">
        {tabs.map(({ id, title }) => {
          return (
            <TransferTabItem
              key={id}
              ref={activeTab === id ? activeRef : none}
              id={id}
              title={title}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          );
        })}
      </ul>
      <ActiveLine width={width} offset={offset} />
    </div>
  );
};
