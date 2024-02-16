import React from 'react';

import './ShowCounterpartyForm.css';
import LargeButton from '../../../components/Buttons/LargeButton';
import ShowTotalInfoForm from './ShowTotalInfoForm';
import ShowDirectorForm from './ShowDirectorForm';
import ShowActivityForm from './ShowActivityForm';
import { useNavigate } from 'react-router-dom';
import { COUNTERPARTIES_ROUTE } from '../../../utils/consts';
import SnackbarButCooler from '../../../components/SnackbarButCooler';

const ShowCounterpartyForm = ({
  name,
  country,
  contactUrl,
  type,
  status,
  directorFullName,
  directorNationality,
  directorDocument,
  shareholders,
  businessDescription,
  businessSource,
  attachments,
}) => {
  const navigate = useNavigate();

  return (
    <div className="show-counterparties-form">
      <ShowTotalInfoForm
        name={name}
        country={country}
        source={contactUrl}
        type={type}
        status={status}
      />
      <ShowDirectorForm
        directorFullName={directorFullName}
        nationality={directorNationality}
        directorDocument={directorDocument}
        shareholders={shareholders}
      />
      <ShowActivityForm
        businessDescription={businessDescription}
        businessSource={businessSource}
        attachments={attachments}
      />
      <div style={{ width: '250px' }}>
        <LargeButton
          variant="outlined"
          text="К списку контрагентов"
          onClick={() => navigate(COUNTERPARTIES_ROUTE)}
        />
      </div>
    </div>
  );
};

export default ShowCounterpartyForm;
