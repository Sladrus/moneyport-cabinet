import React, { useState } from 'react';

import './DirectorsInformation.css';
import TextInput from '../../../../components/TextInput';
import SmallTextButton from '../../../../components/Buttons/SmallTextButton';
import { ReactComponent as AddIcon } from '../../../../assets/icons/counterparties/plus.svg';
import TextSelect from '../../../../components/TextSelect';
import DropdownItem from '../../../../components/DropdownItem';
import { useTranslation } from 'react-i18next';

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
  const { i18n, t } = useTranslation();

  const nationalities = [t('russian'), t('other')];

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
      // changeProgress(directorDoc, e.target.files[0], 5);
      setDirectorDoc(e.target.files[0]);
    }
  };

  const deleteDirectorDoc = () => {
    // changeProgress(directorDoc, null, 5);
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
    // changeProgress(otherShareholders[index]['fullName'], e.target.value, 5);

    setOtherShareholders((prev) => {
      let newValue = [...prev];
      newValue[index]['fullName'] = e.target.value;
      return newValue;
    });
  };

  const handleDropDoc = (files) => {
    if (files) {
      // changeProgress(directorDoc, files[0], 5);
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
        <span className="title">{t('personalComposition')}</span>
        <div className="input-list">
          <TextInput
            value={directorName}
            errors={errors?.directorFullName}
            onClick={() => setErrors(null)}
            placeholder={t('directorName')}
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
            placeholder={t('directorNationality')}
            type="text"
            onChange={handleDirectorNationality}
            badgeText={'+5%'}
            badgeColor={directorNationality ? 'green' : 'grey'}
            options={nationalities}
          />
          {directorNationality === t('russian') && (
            <DropdownItem
              text={t('attachDirectorDocument')}
              files={directorDoc}
              setFiles={setDirectorDoc}
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
                placeholder={t('addShareholderName')}
                type="text"
                onChange={(e) => handleShareholders(e, index)}
                // badgeText={'+5%'}
                // badgeColor={item.fullName ? 'green' : 'grey'}
              />
            );
          })}

          <SmallTextButton
            value={t('addShareholder')}
            icon={<AddIcon />}
            onClick={handleAddInput}
          />
        </div>
      </div>
    </form>
  );
};

export default DirectorsInformation;
