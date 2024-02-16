import React from 'react';

import './ShowTotalInfoForm.css';
import TextInput from '../../../../components/TextInput';

const ShowTotalInfoForm = ({ name, country, source, type }) => {
  return (
    <form className="show-corporation-form">
      <div className="show-corporation-form-wrapper">
        <span className="title">Общие данные</span>
        <div className="info">
          <div className="info-wrapper">
            <div className="text-block">
              <span className="text-wrapper-1">Размер компании</span>
              <span className="text-wrapper-2">{type || 'Не указано'}</span>
            </div>
            <div className="text-block">
              <span className="text-wrapper-1">
                Ссылка на сайт / Активную соц.сеть / Публичный каталог с
                отзывами
              </span>
              <a className="text-wrapper-2" href={source}>
                {source || 'Не указано'}
              </a>
            </div>
          </div>
          <div className="info-wrapper">
            <div className="text-block">
              <span className="text-wrapper-1">Название юр. лица</span>
              <span className="text-wrapper-2">{name || 'Не указано'}</span>
            </div>
            <div className="text-block">
              <span className="text-wrapper-1">Страна инкорпорации</span>
              <span className="text-wrapper-2">{country || 'Не указано'}</span>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ShowTotalInfoForm;
