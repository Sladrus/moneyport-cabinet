import React, { useState } from 'react';
import { ReactComponent as PlusIcon } from '../../assets/icons/accordion/plus.svg';
import { ReactComponent as MinusIcon } from '../../assets/icons/accordion/minus.svg';

import './QuestionsAccordion.css';

const QuestionsAccordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="questions-accordion">
      <div
        style={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'start',
        }}
      >
        <div className="questions-accordion-icon" onClick={handleClick}>
          {isActive ? <MinusIcon /> : <PlusIcon />}
        </div>
      </div>
      <div className="questions-accordion-item">
        <div
          style={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            justifyContent: 'center',
            gap: '8px',
          }}
        >
          <div
            className={`questions-accordion-title ${
              isActive ? 'expanded' : 'closed'
            }`}
          >
            <span onClick={handleClick}>{title}</span>
          </div>
          {isActive && (
            <div className="questions-accordion-content">{content}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuestionsAccordion;
