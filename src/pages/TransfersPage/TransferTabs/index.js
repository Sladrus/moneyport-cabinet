import React, { useContext, useEffect, useRef, useState } from 'react';

import './TransferTabs.css';
import TransferTabItem from './TransferTabItem/index,';
import styled from 'styled-components';
import Popup from 'reactjs-popup';
import { ReactComponent as ArrowDownIcon } from '../../../assets/icons/arrows/arrow-down.svg';
import { ReactComponent as CheckIcon } from '../../../assets/icons/menu/check.svg';

import { RouteContext } from '../../../context/context';
import { useNavigate } from 'react-router-dom';

const ActiveLine = styled.div`
  height: 3px;
  width: 36px;
  transform: translateX(${(p) => `${p.offset + p.width / 2 - 16}px`});
  background: #408ef6;
  transition: all 350ms cubic-bezier(0.15, 0.3, 0.25, 1);
  text-align: 'center';
  @media (max-width: 820px) {
    display: none;
  }
`;

export const TransferTabs = ({ tabs, activeTab, setActiveTab }) => {
  const { setSelectedMenuItem, setSelectedSubItem, selectedSubItem, location } =
    useContext(RouteContext);

  const activeRef = useRef();
  const none = useRef();

  const [offset, setOffset] = useState(0);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (!activeTab?.id) return;
    const activeElement = activeRef?.current;
    setOffset(activeElement?.offsetLeft);
    setWidth(activeElement?.clientWidth);
  }, [activeTab, activeRef]);

  const navigateToPage = (id, title) => {
    setSelectedSubItem({ id, title });
    setSelectedMenuItem(3);
  };

  return (
    <div className="transfer-tabs">
      <ul className="transfer-tabs-nav">
        {tabs?.map(({ id, title }) => {
          return (
            <TransferTabItem
              key={id}
              ref={activeTab?.id === id ? activeRef : none}
              id={id}
              d
              title={title}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          );
        })}
      </ul>
      <ActiveLine width={width} offset={offset} />
      <Popup
        position="bottom left"
        on="click"
        closeOnDocumentClick
        mouseLeaveDelay={100}
        mouseEnterDelay={0}
        offsetY={8}
        offsetX={24}
        contentStyle={{ padding: '4px 0', border: 'none' }}
        arrow={false}
        trigger={
          <div>
            <div className="transfer-menu">
              <span>{activeTab?.title}</span>
              <ArrowDownIcon />
            </div>
          </div>
        }
      >
        <div className="transfer-menu-list">
          {tabs?.map(({ id, title }) => {
            return (
              <div
                className={`transfer-menu-item ${
                  activeTab?.id === id ? 'selected' : ''
                }`}
                key={id}
                onClick={() => navigateToPage(id, title)}
              >
                <span>{title}</span>
                {activeTab?.id === id && <CheckIcon />}
              </div>
            );
          })}
        </div>
      </Popup>
    </div>
  );
};
