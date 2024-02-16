import React from 'react';

import './TotalInfoForm.css';
import TextInput from '../../../../components/TextInput';

const TotalInfoForm = ({
  name,
  setName,
  country,
  setCountry,
  source,
  setSource,
  errors,
  setErrors,
  changeProgress,
  type,
}) => {
  const handleName = (e) => {
    changeProgress(name, e.target.value, type === 'corporation' ? 90 : 65);
    setName(e.target.value);
  };

  const handleCountry = (e) => {
    changeProgress(country, e.target.value, type === 'corporation' ? 5 : 5);
    setCountry(e.target.value);
  };

  const handleSource = (e) => {
    changeProgress(source, e.target.value, type === 'corporation' ? 5 : 5);
    setSource(e.target.value);
  };

  return (
    <form className="corporation-form">
      <div className="corporation-form-wrapper">
        <span className="title">Общие данные</span>
        <div className="input-list">
          <TextInput
            value={name}
            errors={errors?.name}
            onClick={() => setErrors(null)}
            placeholder={'Название юр. лица'}
            type="text"
            onChange={handleName}
            required={true}
            badgeText={type === 'corporation' ? '+90%' : '+65%'}
            badgeColor={name ? 'green' : 'grey'}
          />
          <TextInput
            value={country}
            errors={errors?.country}
            onClick={() => setErrors(null)}
            placeholder={'Страна инкорпорации'}
            type="text"
            onChange={handleCountry}
            badgeText={type === 'corporation' ? '+5%' : '+5%'}
            badgeColor={country ? 'green' : 'grey'}
          />
          <TextInput
            value={source}
            errors={errors?.contactUrl}
            onClick={() => setErrors(null)}
            placeholder={
              'Ссылка на сайт / Активную соц.сеть / Публичный каталог с отзывами'
            }
            type="text"
            onChange={handleSource}
            badgeText={type === 'corporation' ? '+5%' : '+5%'}
            badgeColor={source ? 'green' : 'grey'}
          />
        </div>
      </div>
    </form>
  );
};

export default TotalInfoForm;
