import React from 'react';

import './ShowActivityForm.css';
import TextInput from '../../../../components/TextInput';
import FileButton from '../../../../components/FileButton';
import { useTranslation } from 'react-i18next';

const ShowActivityForm = ({
  businessDescription,
  businessSource,
  attachments,
}) => {
  const { i18n, t } = useTranslation();

  return (
    <form className="show-activity-form">
      <div className="show-activity-form-wrapper">
        <div className="wrapper-1">
          <span className="title">{t('activity')}</span>
          <div className="info">
            <div className="text-block">
              <span className="text-wrapper-1">{t('businessDesc')}</span>
              <span className="text-wrapper-2">
                {businessDescription || t('emptyField')}
              </span>
            </div>
            <div className="text-block">
              <span className="text-wrapper-1">{t('businessSource')}</span>
              <span className="text-wrapper-2">
                {businessSource || t('emptyField')}
              </span>
            </div>
          </div>
          {attachments?.length > 0 && (
            <div className="file">
              <span className="text-wrapper-1">{t('attachmentsText')}</span>
              {attachments?.map((item, index) => {
                return <FileButton key={index} text={item} />;
              })}
            </div>
          )}
        </div>
      </div>
    </form>
  );
};

export default ShowActivityForm;
