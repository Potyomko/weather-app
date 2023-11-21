import { useEffect, useState } from 'react';
import { Overlay, Modalp, ModalH1, ModalUserName, ModalEmail, ModalPassword, ModalForm, Submit, LinkModal, LinkModalSecond } from './Header.styled';
import { AiOutlineClose } from "react-icons/ai";
import { MainButton } from '../Button/Button';

export const ThirdModal = ({
  handleCloseThirdmodal, 
  handleOpenModal, 
  handleOpenSecondModal, 
  handlelogOut, 
  userName, 
  userLoggedIn})=>{
    const [userNameFromStorage, setUserNameFromStorage] = useState('')
    const [userStorage, setUserStorage] = useState(JSON.parse(localStorage.getItem('user')) || '')
    console.log(userLoggedIn);
    useEffect(()=>{
      // setUserStorage(JSON.parse(localStorage.getItem('user')));
      if(userStorage){
        setUserNameFromStorage(userStorage.userName)
      }
    },[])
  //   const userStorage = JSON.parse(localStorage.getItem('user'));
  //   console.log(userStorage)
  // const userNameFromStorage = userStorage && userStorage.userName ? userStorage.userName : '';
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
          {userStorage && (
            <>
              <p>E-mail: {userStorage.email}</p>
              <p>Password: {userStorage.password}</p>
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