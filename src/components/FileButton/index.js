import React, { useContext, useEffect } from 'react';
import { ReactComponent as PaperClip } from '../../assets/icons/dropdown/paperclip.svg';
import { ReactComponent as TrashIcon } from '../../assets/icons/dropdown/trash.svg';

import './FileButton.css';
import SmallTextButton from '../Buttons/SmallTextButton';
import { DataContext } from '../../context/context';
import { useLocation } from 'react-router-dom';

const FileButton = ({ text, onDelete }) => {
  const { state } = useLocation();

  const { getFile } = useContext(DataContext);

  const handleClick = () => {
    const fileName = text;

    getFile(fileName).then((data) => {
      const href = window.URL.createObjectURL(data);

      const anchorElement = document.createElement('a');

      anchorElement.href = href;
      anchorElement.download = fileName;

      document.body.appendChild(anchorElement);
      anchorElement.click();

      document.body.removeChild(anchorElement);
      window.open(href);
    });
  };

  return (
    <div className="file-button">
      <SmallTextButton
        value={text}
        icon={<PaperClip />}
        onClick={state && handleClick}
      />
      {onDelete && <TrashIcon onClick={() => onDelete(text)} />}
    </div>
  );
};

export default FileButton;
