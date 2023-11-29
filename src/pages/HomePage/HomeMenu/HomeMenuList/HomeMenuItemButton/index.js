import React, { useContext, useState } from 'react';
import './HomeMenuItemButton.css';
import { ReactComponent as ArrowDownIcon } from '../../../../../assets/icons/arrows/arrow-down.svg';
import SubmenuList from './SubmenuList';
import { RouteContext } from '../../../../../context/context';
import { sendMetric } from '../../../../../utils/sendMetric';

const HomeMenuItemButton = ({
  id,
  title,
  icon,
  path,
  open,
  submenu,
  submenuList,
  onClick,
  type,
}) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const { selectedMenuItem, setSelectedMenuItem, setSelectedSubItem } =
    useContext(RouteContext);

  return (
    <div>
      <div
        onClick={() => {
          setSubmenuOpen(!submenuOpen);
          // if (!submenu) setSelectedSubItem(null);
          // else setSelectedSubItem({ id: 1, title: 'Переводы физ. лицу' });

          if (!submenu) {
            setSelectedSubItem(null);
            setSelectedMenuItem(id);
            onClick(id, path);
          }
        }}
        className={`home-menu-item-button ${open === true ? 'open' : ''} ${
          selectedMenuItem === id ? 'selected' : ''
        }`}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '24px',
          }}
        >
          <div
            onClick={() => {
              if (!open) {
                setSelectedSubItem({ id: 1, title: 'Перевод физ. лицу' });
                setSelectedMenuItem(3);
                onClick(id, path);
              }
            }}
            className="home-menu-item-logo"
          >
            {icon}
          </div>
          {<span>{title}</span>}
        </div>
        <div
          onClick={(e) => {
            e.stopPropagation();
            setSubmenuOpen(!submenuOpen);
          }}
        >
          <div
            className={`home-menu-item-icon ${
              submenuOpen ? 'expanded' : 'closed'
            }`}
          >
            {open && submenu ? <ArrowDownIcon /> : ''}
          </div>
        </div>
      </div>
      {open && submenu && (
        <SubmenuList
          path={path}
          submenuOpen={submenuOpen}
          menuId={id}
          submenuList={submenuList}
        />
      )}
    </div>
  );
};

export default HomeMenuItemButton;
