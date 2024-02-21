import React from 'react';

import './ShowTotalInfoForm.css';
import { useTranslation } from 'react-i18next';

const ShowTotalInfoForm = ({ name, country, source, type }) => {
  const { i18n, t } = useTranslation();

  const options = [
    { value: 'corporation', label: t('corporation') },
    { value: 'small_business', label: t('smallBusiness') },
  ];

  const typeOption = options.find((option) => option?.value === type);
  return (
    <form className="show-corporation-form">
      <div className="show-corporation-form-wrapper">
        <span className="title">{t('general')}</span>
        <div className="info">
          <div className="info-wrapper">
            <div className="text-block">
              <span className="text-wrapper-1">{t('companySize')}</span>
              <span className="text-wrapper-2">
                {typeOption?.label || t('emptyField')}
              </span>
            </div>
            <div className="text-block">
              <span className="text-wrapper-1">{t('link')}</span>
              <a className="text-wrapper-2" href={source}>
                {source || t('emptyField')}
              </a>
            </div>
          </div>
          <div className="info-wrapper">
            <div className="text-block">
              <span className="text-wrapper-1">{t('legalEntity')}</span>
              <span className="text-wrapper-2">{name || t('emptyField')}</span>
            </div>
            <div className="text-block">
              <span className="text-wrapper-1">{t('country')}</span>
              <span className="text-wrapper-2">
                {country || t('emptyField')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ShowTotalInfoForm;
