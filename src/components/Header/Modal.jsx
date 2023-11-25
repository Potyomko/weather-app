import React, { useEffect } from 'react';
import { Overlay, Modalp,  } from './Header.styled';

export const Modal = ({
  
  // handleCloseModal,
  handleCloseSecondModal,children
}) => {
  // const handleKeydown = (e) => {
  //   if (e.key === "Escape") {
  //     // handleCloseModal();
  //     handleCloseSecondModal();
  //   }
  // };
  // function handleOverlayClick(e) {
  //   if (e.currentTarget === e.target) {
  //     // handleCloseModal();
  //     // handleCloseSecondModal();
  //   }
  // }
  // useEffect(() => {
  //   window.addEventListener("keydown", handleKeydown);
  //   return () => {
  //     window.removeEventListener("keydown", handleKeydown);
  //   };
  // }, []);

  return (
    <Overlay >
          <Modalp>
          {children}
          </Modalp>
        </Overlay>
      );
};