import React, { useState } from 'react';
import './HomeMenuItemButton.css';
import { ReactComponent as ArrowUpIcon } from '../../../../../assets/icons/arrows/arrow-up.svg';
import { ReactComponent as ArrowDownIcon } from '../../../../../assets/icons/arrows/arrow-down.svg';
import SubmenuList from './SubmenuList';
import Popup from 'reactjs-popup';

const HomeMenuItemButton = ({
  id,
  selectedItem,
  setSelectedItem,
  selectedSubItem,
  setSelectedSubItem,
  title,
  icon,
  open,
  submenu,
  submenuList,
  onClick,
}) => {
  const [submenuOpen, setSubmenuOpen] = useState(true);

  return (
    <div style={{ width: 'calc(100% - 24px)' }}>
      <Popup
        trigger={
          <div
            onClick={() => {
              setSubmenuOpen(!submenuOpen);
              onClick();
            }}
            className={`home-menu-item-button ${open === true ? 'open' : ''} ${
              selectedItem === id ? 'selected' : ''
            }`}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '16px',
              }}
            >
              <div onClick={onClick} className="home-menu-item-logo">
                {icon}
              </div>
              {open && <span>{title}</span>}
            </div>
            <div
              className="home-menu-item-icon"
              onClick={() => setSubmenuOpen(!submenuOpen)}
            >
              {open && submenu ? (
                submenuOpen ? (
                  <ArrowUpIcon />
                ) : (
                  <ArrowDownIcon />
                )
              ) : (
                ''
              )}
            </div>
          </div>
        }
        position="bottom left"
        on="hover"
        closeOnDocumentClick
        mouseLeaveDelay={100}
        mouseEnterDelay={0}
        contentStyle={{ padding: '0px', border: 'none' }}
        arrow={false}
      >
        {!open && submenu && !submenuOpen && (
          <SubmenuList
            menuId={id}
            submenuList={submenuList}
            setSelectedItem={setSelectedItem}
            selectedSubItem={selectedSubItem}
            setSelectedSubItem={setSelectedSubItem}
          />
        )}
      </Popup>
      {open && submenu && submenuOpen && (
        <SubmenuList
          menuId={id}
          submenuList={submenuList}
          setSelectedItem={setSelectedItem}
          selectedSubItem={selectedSubItem}
          setSelectedSubItem={setSelectedSubItem}
        />
      )}
    </div>
  );
};

export default HomeMenuItemButton;
