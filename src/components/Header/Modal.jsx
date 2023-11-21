import React, { useEffect } from 'react';
import { Overlay, Modalp,  } from './Header.styled';

export const Modal = ({
  
  handleCloseModal,
  handleCloseSecondModal,
  
 
  userName,
  
  children
}) => {
  const handleKeydown = (e) => {
    if (e.key === "Escape") {
      handleCloseModal();
      handleCloseSecondModal();
    }
  };
  function handleOverlayClick(e) {
    if (e.currentTarget === e.target) {
      handleCloseModal();
      handleCloseSecondModal();
    }
  }
  useEffect(() => {
    window.addEventListener("keydown", handleKeydown);
    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, []);
  const userStorage = JSON.parse(localStorage.getItem('user'));
  const userNameFromStorage = userStorage && userStorage[userName] ? userStorage[userName][0] : '';

  return (
    <>
      
        <Overlay onClick={handleOverlayClick}>
          <Modalp>
          {children}
          </Modalp>
        </Overlay>
    
    </>
  );
};