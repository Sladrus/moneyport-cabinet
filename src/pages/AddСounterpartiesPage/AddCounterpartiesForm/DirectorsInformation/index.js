import React, { useState } from 'react';

import './DirectorsInformation.css';
import TextInput from '../../../../components/TextInput';
import SmallTextButton from '../../../../components/Buttons/SmallTextButton';
import { ReactComponent as AddIcon } from '../../../../assets/icons/counterparties/plus.svg';
import TextSelect from '../../../../components/TextSelect';
import DropdownItem from '../../../../components/DropdownItem';

const DirectorsInformation = ({
  directorName,
  setDirectorName,
  directorNationality,
  setDirectorNationality,
  directorDoc,
  setDirectorDoc,
  otherShareholders,
  setOtherShareholders,
  errors,
  setErrors,
  changeProgress,
}) => {
  const nationalities = ['Русский', 'Другая'];

  const handleDirectorName = (e) => {
    changeProgress(directorName, e.target.value, 5);
    setDirectorName(e.target.value);
  };

  const handleDirectorNationality = (value) => {
    changeProgress(directorNationality, value, 5);
    setDirectorNationality(value);
    setDirectorDoc();
  };

  const handleDirectorDoc = (e) => {
    if (e.target.files[0]) {
      changeProgress(directorDoc, e.target.files[0], 5);
      setDirectorDoc(e.target.files[0]);
    }
  };

  const deleteDirectorDoc = () => {
    changeProgress(directorDoc, null, 5);
    setDirectorDoc();
  };

  const handleAddInput = () => {
    const newArray = [];
    for (const item of otherShareholders) {
      if (!item?.fullName) continue;
      else newArray.push(item);
    }

    setOtherShareholders([...newArray, { fullName: '' }]);
  };

  const handleShareholders = (e, index) => {
    changeProgress(otherShareholders[index]['fullName'], e.target.value, 5);

    setOtherShareholders((prev) => {
      let newValue = [...prev];
      newValue[index]['fullName'] = e.target.value;
      return newValue;
    });
  };

  const handleDropDoc = (files) => {
    if (files) {
      changeProgress(directorDoc, files[0], 5);
      setDirectorDoc(files[0]);
    }
  };

  const handleDeleteInput = (index) => {
    const newArray = [...otherShareholders];
    newArray.splice(index, 1);
    setOtherShareholders(newArray);
  };

  return (
    <form className="corporation-form">
      <div className="corporation-form-wrapper">
        <span className="title">Персональный состав органа управления</span>
        <div className="input-list">
          <TextInput
            value={directorName}
            errors={errors?.directorFullName}
            onClick={() => setErrors(null)}
            placeholder={'ФИО директора'}
            type="text"
            onChange={handleDirectorName}
            badgeText={'+5%'}
            badgeColor={directorName ? 'green' : 'grey'}
          />
          <TextSelect
            className="wide-popup"
            value={directorNationality}
            errors={errors?.directorNationality}
            onClick={() => setErrors(null)}
            placeholder={'Национальность директора'}
            type="text"
            onChange={handleDirectorNationality}
            badgeText={'+5%'}
            badgeColor={directorNationality ? 'green' : 'grey'}
            options={nationalities}
          />
          {directorNationality === 'Русский' && (
            <DropdownItem
              text={
                'Прикрепите нероссийский документ (паспорт, водительское удостоверение или ВНЖ)'
              }
              files={directorDoc}
              setFiles={setDirectorDoc}
              badgeText={'+5%'}
              badgeColor={directorDoc ? 'green' : 'grey'}
              onChange={handleDirectorDoc}
              onDelete={deleteDirectorDoc}
              onDrop={handleDropDoc}
            />
          )}
          {otherShareholders?.map((item, index) => {
            return (
              <TextInput
                key={index}
                value={item.fullName}
                errors={
                  errors?.shareholders?.length > 0 &&
                  errors?.shareholders[index]
                }
                onClick={() => setErrors(null)}
                placeholder={'ФИО акционера с долей акций свыше 25%'}
                type="text"
                onChange={(e) => handleShareholders(e, index)}
                badgeText={'+5%'}
                badgeColor={item.fullName ? 'green' : 'grey'}
              />
            );
          })}

          <SmallTextButton
            value={'Добавить акционера'}
            icon={<AddIcon />}
            onClick={handleAddInput}
          />
        </div>
      </div>
    </form>
  );
};

export default DirectorsInformation;
