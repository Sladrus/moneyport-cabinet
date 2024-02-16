import React, { useState } from 'react';

import './AddCounterpartiesForm.css';
import RadioButtons from '../../../components/RadioButtons';
import CorporationForm from './CorporationForm';
import SmallBusinessForm from './SmallBusinessForm';
import { useLocation } from 'react-router-dom';

const AddCounterpartiesForm = ({ changeProgress, removeProgress }) => {
  const { state } = useLocation();

  const [selectedOption, setSelectedOption] = useState(
    state ? state?.type : 'corporation'
  );

  const options = [
    { value: 'corporation', label: 'Крупная корпорация' },
    { value: 'small_business', label: 'Малый бизнес' },
  ];

  const handleOptionChange = (newOption) => {
    setSelectedOption(newOption);
    removeProgress();
  };

  return (
    <div className="add-corporations-form">
      <RadioButtons
        options={options}
        selectedOption={selectedOption}
        onOptionChange={handleOptionChange}
      />
      {selectedOption === 'corporation' && (
        <CorporationForm
          type={selectedOption}
          changeProgress={changeProgress}
          removeProgress={removeProgress}
        />
      )}
      {selectedOption === 'small_business' && (
        <SmallBusinessForm
          type={selectedOption}
          changeProgress={changeProgress}
          removeProgress={removeProgress}
        />
      )}
    </div>
  );
};

export default AddCounterpartiesForm;
