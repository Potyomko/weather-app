import { useState } from 'react';
import { Overlay, Modalp, ModalH1, ModalUserName, ModalEmail, ModalPassword, ModalForm, Submit, LinkModal, LinkModalSecond } from './Header.styled';
import { AiOutlineClose } from "react-icons/ai";
import { MainButton } from '../Button/Button';

export const ThirdModal = ({handleCloseThirdmodal, handleOpenModal, handleOpenSecondModal, handlelogOut, userName, userLoggedIn})=>{
    const userStorage = JSON.parse(localStorage.getItem('user'));
  const userNameFromStorage = userStorage && userStorage[userName] ? userStorage[userName][0] : '';
    return(
        <>
          <AiOutlineClose
        size={25}
        onClick={handleCloseThirdmodal}
        style={{ marginLeft: '570px' }}
      />
      {userLoggedIn ? (
        <>
          <p>Your account:</p>
          <p>Name: {userNameFromStorage}</p>
          {userStorage && userStorage[userName] && (
            <>
              <p>E-mail: {userStorage[userName][1]}</p>
              <p>Password: {userStorage[userName][2]}</p>
              <MainButton onClick={handlelogOut}>Log Out</MainButton>
          
            </>
          )}
        </>
      ) : (
        <>
          <p>You are not there or not logged in to the account</p>
          <MainButton onClick={handleOpenSecondModal}>Log In</MainButton>
          <MainButton type="button" onClick={handleOpenModal}>Sign Up</MainButton>
        </>
      )}
        </>
    )
}