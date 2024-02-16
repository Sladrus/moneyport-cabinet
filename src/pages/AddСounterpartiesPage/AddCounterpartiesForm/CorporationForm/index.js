import React, { useContext, useEffect, useState } from 'react';

import './CorporationForm.css';
import TotalInfoForm from '../TotalInfoForm';
import LargeButton from '../../../../components/Buttons/LargeButton';
import { DataContext } from '../../../../context/context';
import { useLocation, useNavigate } from 'react-router-dom';
import { COUNTERPARTIES_ROUTE } from '../../../../utils/consts';

const CorporationForm = ({ changeProgress, removeProgress, type }) => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
  const [source, setSource] = useState('');

  const [errors, setErrors] = useState();

  const { counterpartiesLoading, createCounterparties } =
    useContext(DataContext);

  useEffect(() => {
    if (!state) return;

    changeProgress(name, state?.name, 65);
    setName(state?.name ? state?.name : '');

    changeProgress(country, state?.country, 5);
    setCountry(state?.country ? state?.country : '');

    changeProgress(source, state?.contactUrl, 5);
    setSource(state?.contactUrl ? state?.contactUrl : '');
  }, []);

  const handleClick = async () => {
    const body = {
      name: name,
      type: type,
      country: country,
      contactUrl: source,
    };
    const { errors } = await createCounterparties(body);
    setErrors(errors);
    if (!errors) {
      removeProgress();
      navigate(COUNTERPARTIES_ROUTE);
    }
  };

  return (
    <>
      <TotalInfoForm
        name={name}
        setName={setName}
        country={country}
        setCountry={setCountry}
        source={source}
        setSource={setSource}
        errors={errors}
        setErrors={setErrors}
        changeProgress={changeProgress}
        type={type}
      />
      <div style={{ width: '150px' }}>
        <LargeButton
          text="Добавить"
          onClick={handleClick}
          loading={counterpartiesLoading}
        />
      </div>
    </>
  );
};

export default CorporationForm;
