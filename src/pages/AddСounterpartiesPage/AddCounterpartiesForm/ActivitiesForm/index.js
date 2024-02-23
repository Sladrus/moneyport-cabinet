import React from 'react';

import './ActivitiesForm.css';
import TextInput from '../../../../components/TextInput';
import DropdownItem from '../../../../components/DropdownItem';
import { useTranslation } from 'react-i18next';

const ActivitiesForm = ({
  businessDecs,
  setBusinessDesc,
  businessSource,
  setBusinessSource,
  changeProgress,
  errors,
  setErrors,
  attachments,
  setAttachments,
}) => {
  const { i18n, t } = useTranslation();

  const handleBusinessDocs = (e) => {
    changeProgress(businessDecs, e.target.value, 5);
    setBusinessDesc(e.target.value);
  };

  const handleBusinessSource = (e) => {
    changeProgress(businessSource, e.target.value, 5);
    setBusinessSource(e.target.value);
  };

  const handleAttachmentsChange = (e) => {
    if (e.target.files) {
      changeProgress(attachments.length, [...e.target.files].length, 5);
      setAttachments((prev) => [...prev, ...e.target.files]);
    }
  };

  const handleDropAttachments = (files) => {
    if (files) {
      changeProgress(attachments.length, [...files].length, 5);
      setAttachments((prev) => [...prev, ...files]);
    }
  };

  const deleteAttachment = (name) => {
    if (attachments?.length === 1) changeProgress(attachments.length, 0, 5);
    setAttachments((prev) =>
      prev.filter((item) => {
        return typeof item === 'object' ? item.name !== name : item !== name;
      })
    );
  };

  return (
    <form className="corporation-form">
      <div className="corporation-form-wrapper">
        <span className="title">{t('activity')}</span>
        <div className="input-list">
          <TextInput
            value={businessDecs}
            errors={errors?.businessDescription}
            onClick={() => setErrors(null)}
            placeholder={t('businessDesc')}
            type="text"
            onChange={handleBusinessDocs}
            // required={true}
            badgeText={'+5%'}
            badgeColor={businessDecs ? 'green' : 'grey'}
          />
          <TextInput
            value={businessSource}
            errors={errors?.businessSource}
            onClick={() => setErrors(null)}
            placeholder={t('businessSource')}
            type="text"
            onChange={handleBusinessSource}
            badgeText={'+5%'}
            badgeColor={businessSource ? 'green' : 'grey'}
          />
          <DropdownItem
            text={t('attachments')}
            files={attachments}
            setFiles={setAttachments}
            multiple={true}
            badgeText={'+5%'}
            badgeColor={attachments?.length > 0 ? 'green' : 'grey'}
            onChange={handleAttachmentsChange}
            onDelete={deleteAttachment}
            onDrop={handleDropAttachments}
          />
        </div>
      </div>
    </form>
  );
};

export default ActivitiesForm;
