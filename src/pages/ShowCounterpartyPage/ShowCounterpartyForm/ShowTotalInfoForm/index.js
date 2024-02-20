import React from 'react';

import './ShowTotalInfoForm.css';

const ShowTotalInfoForm = ({ name, country, source, type }) => {
  const options = [
    { value: 'corporation', label: 'Крупная корпорация' },
    { value: 'small_business', label: 'Малый бизнес' },
  ];

  const typeOption = options.find((option) => option?.value === type);
  return (
    <form className="show-corporation-form">
      <div className="show-corporation-form-wrapper">
        <span className="title">Общие данные</span>
        <div className="info">
          <div className="info-wrapper">
            <div className="text-block">
              <span className="text-wrapper-1">Размер компании</span>
              <span className="text-wrapper-2">
                {typeOption?.label || 'Не указано'}
              </span>
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
