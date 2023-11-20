import React, { useEffect } from 'react';
import { Overlay, Modalp, ModalH1, ModalUserName, ModalEmail, ModalPassword, ModalForm, Submit, LinkModal, LinkModalSecond } from './Header.styled';
import { MainButton } from '../Button/Button';
import { AiOutlineClose } from "react-icons/ai";
import { P } from 'components/WeatherForecastForWeek/WeatherForecastForWeek.styled';

export const Modal = ({
  isModalOpen,
  isSecondModalOpen,
  isThirthModalOpen,
  handleCloseModal,
  handleCloseSecondModal,
  handleOpenSecondModal,
  handleCloseThirdmodal,
  handleOpenModal,
  handelSubmit,
  handelUserName,
  handelEmail,
  handlelogOut,
  handlelogOutFalse,
  handelPassword,
 
  userName,
  email,
  password,
  logOut,
  userLoggedIn,
  handleLogInUserName,
  handleLogInPassword ,
  handleLogInSubmit,
  logInUserName,
  logInPassword,
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
      {/* {isModalOpen && ( */}
        <Overlay onClick={handleOverlayClick}>
          <Modalp>
          
          </Modalp>
        </Overlay>
      {/* )} */}

      {/* {isSecondModalOpen && (
        <Overlay onClick={handleOverlayClick}>
          <Modalp>
          
          </Modalp>
        </Overlay>
      )}
 {isThirthModalOpen && (
  <Overlay onClick={handleOverlayClick}>
    <Modalp>
    
    </Modalp>
  </Overlay>
)} */}
    </>
  );
};