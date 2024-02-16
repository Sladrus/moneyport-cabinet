import React from 'react';

import './ShowActivityForm.css';
import TextInput from '../../../../components/TextInput';
import FileButton from '../../../../components/FileButton';

const ShowActivityForm = ({
  businessDescription,
  businessSource,
  attachments,
}) => {
  return (
    <form className="show-activity-form">
      <div className="show-activity-form-wrapper">
        <div className="wrapper-1">
          <span className="title">Виды деятельности</span>
          <div className="info">
            <div className="text-block">
              <span className="text-wrapper-1">
                Краткое описание природы бизнеса
              </span>
              <span className="text-wrapper-2">
                {businessDescription || 'Не указано'}
              </span>
            </div>
            <div className="text-block">
              <span className="text-wrapper-1">
                Источник происхождения денежных средств
              </span>
              <span className="text-wrapper-2">
                {businessSource || 'Не указано'}
              </span>
            </div>
          </div>
          {attachments?.length > 0 && (
            <div className="file">
              <span className="text-wrapper-1">
                Подтверждающие документы: инвойсы, контракты или выписки с
                банковского счета
              </span>
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
