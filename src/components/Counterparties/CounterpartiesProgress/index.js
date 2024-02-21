import React, { useEffect } from 'react';
import { ReactComponent as CheckCircleIcon } from '../../../assets/icons/counterparties/check.svg';

import './CounterpartiesProgress.css';
import { useTranslation } from 'react-i18next';

const CounterpartiesProgress = ({ progress }) => {
  const { i18n, t } = useTranslation();

  return (
    <div className="frame">
      <div className="frame-wrapper">
        <div className="div">
          <CheckCircleIcon />
          <div className="text-wrapper">{t('progress')}</div>
        </div>
        <div className="div-2">
          <div className="group">
            <div
              style={{ width: (progress > 100 ? '100' : progress) + '%' }}
              className="rectangle"
            />
          </div>
          <div className="div-wrapper">
            <div className="text-wrapper-2">
              {progress > 100 ? '100' : progress}%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterpartiesProgress;
