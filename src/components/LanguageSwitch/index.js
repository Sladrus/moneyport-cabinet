import React, { useState } from 'react';
import { LANGUAGES } from '../../utils/consts';
import { useTranslation } from 'react-i18next';
import { ReactComponent as RuIcon } from '../../assets/icons/languages/ru.svg';
import { ReactComponent as EnIcon } from '../../assets/icons/languages/en.svg';

import './LanguageSwitch.css';

const LanguageSwitch = () => {
  const { i18n, t } = useTranslation();

  const [activeLang, setActiveLang] = useState(i18n.language);

  const onChangeLang = (e) => {
    i18n.changeLanguage(activeLang === 'ru' ? 'en' : 'ru');
    setActiveLang((prev) => (prev === 'ru' ? 'en' : 'ru'));
  };

  return (
    <div className="language-switch" onClick={onChangeLang}>
      <div className={`div ${activeLang === 'ru' && 'active'}`}>
        <RuIcon />
        <div className={`text-wrapper ${activeLang === 'ru' && 'active'}`}>
          RU
        </div>
      </div>
      <div className={`div ${activeLang === 'en' && 'active'}`}>
        <EnIcon />
        <div className={`text-wrapper ${activeLang === 'en' && 'active'}`}>
          ENG
        </div>
      </div>
    </div>
  );
};

export default LanguageSwitch;
