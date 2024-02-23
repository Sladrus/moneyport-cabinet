import React, { useContext } from 'react';
import { ReactComponent as HomeIcon } from '../../assets/icons/menu/home.svg';
import { useLocation, useNavigate } from 'react-router-dom';
import { authRoutes } from '../../routes';

import './Breadcrumbs.css';
import {
  ADD_COUNTERPARTIES_ROUTE,
  EDIT_COUNTERPARTIES_ROUTE,
  HOME_ROUTE,
  LANGUAGES,
  SHOW_COUNTERPARTIES_ROUTE,
} from '../../utils/consts';
import { RouteContext } from '../../context/context';
import getAllPaths from '../../utils/getAllPaths';
import Badge from '../Badge';
import { statusList } from '../../utils/statusList';
import SmallTextButton from '../Buttons/SmallTextButton';
import { ReactComponent as BackIcon } from '../../assets/icons/arrows/back.svg';
import { useTranslation } from 'react-i18next';
import LanguageSwitch from '../LanguageSwitch';

const Breadcrumbs = ({ path }) => {
  const { setSelectedMenuItem, location } = useContext(RouteContext);

  const navigate = useNavigate();
  const { state } = useLocation();

  const route = authRoutes.find((route) => route.path === location.pathname);

  let statusItem;
  if (state?.status)
    statusItem = statusList.find((item) => item.value === state?.status);

  if (route.path === SHOW_COUNTERPARTIES_ROUTE) route.title = state.name;
  const paths = getAllPaths(route?.path);

  const handleClick = () => {
    setSelectedMenuItem(1);
    navigate({ pathname: HOME_ROUTE, search: location.search });
  };

  return (
    <div className="breadcrumbs">
      <div className="breadcrumbs-back">
        <SmallTextButton
          value={'НАЗАД'}
          icon={<BackIcon />}
          onClick={() => navigate(-1)}
        />
      </div>
      <div className="breadcrumbs-path">
        <HomeIcon className="breadcrumbs-home" onClick={handleClick} />
        <div className="breadcrumbs-pathname">
          {paths?.map((path, index) => {
            const findedRoute = authRoutes.find((route) => route.path === path);
            return (
              <div key={index}>
                <span className="breadcrumbs-slash">/</span>
                <span
                  className="breadcrumbs-pathname-value"
                  onClick={() =>
                    findedRoute?.path !== SHOW_COUNTERPARTIES_ROUTE &&
                    navigate(findedRoute?.path)
                  }
                >
                  {findedRoute?.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>
      <div
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          justifyContent: 'space-between',

          // maxWidth: '830px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            // maxWidth: '830px',
          }}
        >
          <span className="breadcrumbs-title">{route?.title}</span>
          {state?.status && (
            <div className="badge-block">
              <Badge color={statusItem.color} text={statusItem?.text} />
            </div>
          )}
        </div>
        {(route.path === ADD_COUNTERPARTIES_ROUTE ||
          route.path === EDIT_COUNTERPARTIES_ROUTE ||
          route.path === SHOW_COUNTERPARTIES_ROUTE) && <LanguageSwitch />}
      </div>
    </div>
  );
};

export default Breadcrumbs;
