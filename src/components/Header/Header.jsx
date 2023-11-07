import React, { useEffect, useState } from 'react';
import logo from '../../img/logo.svg';
import { BsPersonCircle } from 'react-icons/bs';
import { HeaderNav, HeaderNavigation, HeaderElement, SingUl, Headerlogo } from './Header.styled';
import { MainButton } from '../Button/Button';
import { Modal } from './Modal';

export const Header = () => {
  const [isSignUpModal, setIsSignUpModal] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isSecondModalOpen, setSecondModalOpen] = useState(false);
  const [isThirdModalOpen, setIsThirdModalOpen] = useState(false);
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [logInUserName, setLogInUserName] = useState('');
  const [logInPassword, setLogInPassword] = useState('');
  const [password, setPassword] = useState('');
  const [logOut, setLogOut] = useState(false);
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  const handleOpenModal = (e) => {
    e.preventDefault();
    setModalOpen(true);
    setIsSignUpModal(true);
    setSecondModalOpen(false);
    setIsThirdModalOpen(false);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleOpenSecondModal = (e) => {
    e.preventDefault();
    setSecondModalOpen(true);
    setModalOpen(false);
    setIsThirdModalOpen(false);
  };

  const handleCloseSecondModal = () => {
    setSecondModalOpen(false);
  };

  const handleOpenThirdmodal = () => {
    setIsThirdModalOpen(true);
  };

  const handleCloseThirdmodal = () => {
    setIsThirdModalOpen(false);
  };

  useEffect(() => {
    const userNameFromStorage = localStorage.getItem('userName');
    if (userNameFromStorage) {
      setUserName(userNameFromStorage);
      setUserLoggedIn(true);
    }
  }, []);

  function handleOverlayClick(e) {
    if (e.currentTarget === e.target) {
      handleCloseModal();
      handleCloseSecondModal();
    }
  }

  const handelUserName = (e) => {
    setUserName(e.currentTarget.value);
  };

  const handelEmail = (e) => {
    setEmail(e.currentTarget.value);
  };

  const handelPassword = (e) => {
    setPassword(e.currentTarget.value);
  };

  const handleLogInUserName = (e) => {
    setLogInUserName(e.currentTarget.value);
  };

  const handleLogInPassword = (e) => {
    setLogInPassword(e.currentTarget.value);
  };

  const handlelogOut = () => {
    setLogOut(true);
    setUserLoggedIn(false);
  };

  const handlelogOutFalse = () => {
    setLogOut(false);
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    const existingUserJSON = localStorage.getItem('user');
    let existingUser = {};

    if (existingUserJSON) {
      existingUser = JSON.parse(existingUserJSON);
    }

    existingUser[userName] = [userName, email, password];

    localStorage.setItem('user', JSON.stringify(existingUser));

    handleCloseModal();

    localStorage.setItem('userName', userName);
    setUserLoggedIn(true);
  };

  const handleLogInSubmit = (e) => {
    e.preventDefault();
    const existingUserJSON = localStorage.getItem('user');
    let existingUser = {};

    if (existingUserJSON) {
      existingUser = JSON.parse(existingUserJSON);
    }

    if (existingUser[logInUserName] && existingUser[logInUserName][2] === logInPassword) {
      localStorage.setItem('userName', logInUserName);
      setUserLoggedIn(true);
      setLogInUserName('');
      setLogInPassword('');
      handleCloseSecondModal();
    } else {
      // Вивести повідомлення про помилку
      alert('Invalid username or password');
    }
  };

  return (
    <HeaderElement>
      <HeaderNav>
        <a href="/"><Headerlogo src={logo} alt="Logo" /></a>
        <HeaderNavigation>
          <li><p>Who we are</p></li>
          <li><p>Contacts</p></li>
          <li><p>Menu</p></li>
        </HeaderNavigation>
        <SingUl>
          {userLoggedIn ? (
            <p>{userName}</p>
          ) : (
            <>
              <MainButton onClick={handleOpenSecondModal}>Log In</MainButton>
              <MainButton type="button" onClick={handleOpenModal}>Sign Up</MainButton>
            </>
          )}
        </SingUl>
        <Modal
          isModalOpen={isModalOpen}
          isSecondModalOpen={isSecondModalOpen}
          isThirthModalOpen={isThirdModalOpen}
          handleCloseModal={handleCloseModal}
          handleCloseSecondModal={handleCloseSecondModal}
          handleOpenSecondModal={handleOpenSecondModal}
          handleOpenModal={handleOpenModal}
          handleCloseThirdmodal={handleCloseThirdmodal}
          handelSubmit={handelSubmit}
          handelUserName={handelUserName}
          handelEmail={handelEmail}
          handlelogOut={handlelogOut}
          handlelogOutFalse={handlelogOutFalse}
          handelPassword={handelPassword}
          handleOverlayClick={handleOverlayClick}
          userName={userName}
          email={email}
          password={password}
          logOut={logOut}
          userLoggedIn={userLoggedIn}
          handleLogInUserName={handleLogInUserName}
          handleLogInPassword={handleLogInPassword}
          handleLogInSubmit={handleLogInSubmit}
          logInUserName={logInUserName}
          logInPassword={logInPassword}
        />
        <BsPersonCircle onClick={handleOpenThirdmodal} size={50} style={{ marginLeft: '1300px', marginTop: '-40px' }} />
      </HeaderNav>
    </HeaderElement>
  );
};
