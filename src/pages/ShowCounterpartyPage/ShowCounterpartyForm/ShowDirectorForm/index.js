import React from 'react';

import './ShowDirectorForm.css';
import TextInput from '../../../../components/TextInput';
import FileButton from '../../../../components/FileButton';
import { useTranslation } from 'react-i18next';

const ShowDirectorForm = ({
  directorFullName,
  nationality,
  directorDocument,
  shareholders,
}) => {
  const { i18n, t } = useTranslation();

  return (
    <form className="show-director-form">
      <div className="show-director-form-wrapper">
        <div className="wrapper-1">
          <span className="title">{t('personalComposition')}</span>
          <div className="info">
            <div className="info-wrapper">
              <div className="text-block">
                <span className="text-wrapper-1">{t('directorName')}</span>
                <span className="text-wrapper-2">
                  {directorFullName || t('emptyField')}
                </span>
              </div>
              <div className="text-block">
                <span className="text-wrapper-1">
                  {t('directorNationality')}
                </span>
                <span className="text-wrapper-2">
                  {nationality || t('emptyField')}
                </span>
              </div>
            </div>
          </div>
          {directorDocument && (
            <div className="file">
              <span className="text-wrapper-1">{t('directorDoc')}</span>
              <FileButton text={directorDocument} />
            </div>
          )}
        </div>
        <div className="stroke"></div>
        {shareholders?.length > 0 && (
          <div className="wrapper-2">
            <span className="title">{t('shareholders')}</span>
            <div className="list">
              {shareholders?.map(({ fullName }, index) => {
                return (
                  <div key={index} className="text-block">
                    <span className="text-wrapper-1">
                      {t('addShareholderName')}
                    </span>
                    <span className="text-wrapper-2">
                      {fullName || t('emptyField')}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </form>
  );
};

export default ShowDirectorForm;
