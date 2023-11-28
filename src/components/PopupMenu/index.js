import React, { useEffect, useRef, useState } from 'react';

import './PopupMenu.css';

const PopupMenu = ({ list }) => {
  const [isShown, setIsShown] = useState(false);
  const popupRef = useRef();
  const documentClickHandler = useRef();

  useEffect(() => {
    documentClickHandler.current = (e) => {
      if (popupRef?.current?.contains(e.target)) return;

      //   setIsShown(false);
      //   removeDocumentClickHandler();
      handleCloseButtonClick();
    };
  }, []);

  const removeDocumentClickHandler = () => {
    document.removeEventListener('click', documentClickHandler.current);
  };

  const handleToggleButtonClick = () => {
    if (isShown) return;

    setIsShown(true);
    document.addEventListener('click', documentClickHandler.current);
  };

  const handleCloseButtonClick = () => {
    setIsShown(false);
    removeDocumentClickHandler();
  };

  return (
    <div className="popup-menu-container">
      <div onClick={handleToggleButtonClick}>Toggle Menu</div>
      <div className={`popup-menu ${isShown ? 'shown' : ''}`} ref={popupRef}>
        {list.map((item) => {
          console.log(item);
          return <div>{item.title}</div>;
        })}
      </div>
    </div>
  );
};

export default PopupMenu;
