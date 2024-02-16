import React from 'react';

import './ShowDirectorForm.css';
import TextInput from '../../../../components/TextInput';
import FileButton from '../../../../components/FileButton';

const ShowDirectorForm = ({
  directorFullName,
  nationality,
  directorDocument,
  shareholders,
}) => {
  console.log(shareholders);
  return (
    <form className="show-director-form">
      <div className="show-director-form-wrapper">
        <div className="wrapper-1">
          <span className="title">Персональный состав органа управления</span>
          <div className="info">
            <div className="info-wrapper">
              <div className="text-block">
                <span className="text-wrapper-1">Директор</span>
                <span className="text-wrapper-2">
                  {directorFullName || 'Не указано'}
                </span>
              </div>
              <div className="text-block">
                <span className="text-wrapper-1">Национальность директора</span>
                <span className="text-wrapper-2">
                  {nationality || 'Не указано'}
                </span>
              </div>
            </div>
          </div>
          {directorDocument && (
            <div className="file">
              <span className="text-wrapper-1">
                Нероссийский документ (паспорт, водительское удостоверение или
                ВНЖ)
              </span>
              <FileButton text={directorDocument} />
            </div>
          )}
        </div>
        <div className="stroke"></div>
        {shareholders?.length > 0 && (
          <div className="wrapper-2">
            <span className="title">Акционеры</span>
            <div className="list">
              {shareholders?.map(({ fullName }, index) => {
                return (
                  <div key={index} className="text-block">
                    <span className="text-wrapper-1">
                      ФИО акционера компании с долей выше 25%
                    </span>
                    <span className="text-wrapper-2">
                      {fullName || 'Не указано'}
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
