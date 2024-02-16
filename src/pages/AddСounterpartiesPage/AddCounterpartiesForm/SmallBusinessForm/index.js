import React, { useContext, useEffect, useState } from 'react';

import './SmallBusinessForm.css';
import TextInput from '../../../../components/TextInput';
import TotalInfoForm from '../TotalInfoForm';
import DirectorsInformation from '../DirectorsInformation';
import ActivitiesForm from '../ActivitiesForm';
import { DataContext } from '../../../../context/context';
import LargeButton from '../../../../components/Buttons/LargeButton';
import { useLocation, useNavigate } from 'react-router-dom';
import { COUNTERPARTIES_ROUTE } from '../../../../utils/consts';

const SmallBusinessForm = ({ changeProgress, removeProgress, type }) => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
  const [source, setSource] = useState('');

  const [directorName, setDirectorName] = useState('');
  const [directorNationality, setDirectorNationality] = useState('');
  const [directorDoc, setDirectorDoc] = useState('');

  const [otherShareholders, setOtherShareholders] = useState([]);

  const [businessDecs, setBusinessDesc] = useState('');
  const [businessSource, setBusinessSource] = useState('');

  const [attachments, setAttachments] = useState([]);

  useEffect(() => {
    if (!state) return;

    changeProgress(name, state?.name, 65);
    setName(state?.name ? state?.name : '');

    changeProgress(country, state?.country, 5);
    setCountry(state?.country ? state?.country : '');

    changeProgress(source, state?.contactUrl, 5);
    setSource(state?.contactUrl ? state?.contactUrl : '');

    changeProgress(directorName, state?.directorFullName, 5);
    setDirectorName(
      state?.directorFullName
        ? state?.directorFullName
        : state?.directorFullName
    );

    changeProgress(directorNationality, state?.directorNationality, 5);
    setDirectorNationality(
      state?.directorNationality ? state?.directorNationality : ''
    );

    changeProgress(directorDoc, state?.directorDocument, 5);
    setDirectorDoc(state?.directorDocument ? state?.directorDocument : '');

    // for (const item of state?.shareholders) {
    //   changeProgress('', item?.fullName, 5);
    // }
    setOtherShareholders(
      state?.shareholders ? state?.shareholders : [{ fullName: '' }]
    );

    changeProgress(businessDecs, state?.businessDescription, 5);
    setBusinessDesc(
      state?.businessDescription ? state?.businessDescription : ''
    );

    changeProgress(businessSource, state?.businessSource, 5);
    setBusinessSource(state?.businessSource ? state?.businessSource : '');

    changeProgress(attachments, state?.attachments, 5);
    setAttachments(state?.attachments ? state?.attachments : []);
  }, []);

  const [errors, setErrors] = useState();

  const {
    counterpartiesLoading,
    setCounterpartiesLoading,
    createCounterparties,
    editCounterparties,
    getFile,
  } = useContext(DataContext);

  const handleClick = async () => {
    const body = {
      counterAgentId: state?.id,
      name: name,
      type: type,
      country: country,
      contactUrl: source,
      directorFullName: directorName,
      directorNationality: directorNationality,
      directorDocument: directorDoc,
      shareholders: otherShareholders,
      businessDescription: businessDecs,
      businessSource: businessSource,
      attachments: attachments,
    };

    const newArray = [];
    for (const item of body?.shareholders) {
      if (!item?.fullName) continue;
      else newArray.push(item);
    }
    body.shareholders = newArray;

    setCounterpartiesLoading(true);
    for (var i = 0; i < body?.attachments?.length; i++) {
      if (typeof body?.attachments[i] === 'object') continue;
      else {
        const fileName = body?.attachments[i];
        if (fileName) {
          const blobFile = await getFile(fileName);
          body.attachments[i] = new File([blobFile], fileName);
        }
      }
    }
    if (typeof body?.directorDocument !== 'object') {
      const fileName = body?.directorDocument;
      if (fileName) {
        const blobFile = await getFile(fileName);
        body.directorDocument = new File([blobFile], fileName);
      }
    }
    const { errors } = state
      ? await editCounterparties(body)
      : await createCounterparties(body);
    setErrors(errors);
    if (!errors) {
      removeProgress();
      navigate(COUNTERPARTIES_ROUTE);
    }
  };

  return (
    <>
      <div className="small-business-form">
        <TotalInfoForm
          name={name}
          setName={setName}
          country={country}
          setCountry={setCountry}
          source={source}
          setSource={setSource}
          changeProgress={changeProgress}
          errors={errors}
          setErrors={setErrors}
        />
        <DirectorsInformation
          directorName={directorName}
          setDirectorName={setDirectorName}
          directorNationality={directorNationality}
          setDirectorNationality={setDirectorNationality}
          directorDoc={directorDoc}
          setDirectorDoc={setDirectorDoc}
          otherShareholders={otherShareholders}
          setOtherShareholders={setOtherShareholders}
          changeProgress={changeProgress}
          errors={errors}
          setErrors={setErrors}
        />
        <ActivitiesForm
          businessDecs={businessDecs}
          setBusinessDesc={setBusinessDesc}
          businessSource={businessSource}
          setBusinessSource={setBusinessSource}
          changeProgress={changeProgress}
          attachments={attachments}
          setAttachments={setAttachments}
          errors={errors}
          setErrors={setErrors}
        />
      </div>
      <div style={{}}>
        <LargeButton
          text={state ? 'Сохранить данные' : 'Добавить'}
          onClick={handleClick}
          loading={counterpartiesLoading}
        />
      </div>
    </>
  );
};

export default SmallBusinessForm;
