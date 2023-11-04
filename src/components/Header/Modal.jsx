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
  handleOverlayClick,
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
      {isModalOpen && (
        <Overlay onClick={handleOverlayClick}>
          <Modalp>
            <AiOutlineClose
              size={25}
              onClick={handleCloseModal}
              style={{ marginLeft: '570px' }}
            />
            <ModalH1>Sign Up</ModalH1>
            <ModalForm onSubmit={handelSubmit}>
              <label htmlFor="username">
                Username
                <ModalUserName
                  placeholder="Username"
                  id="username"
                  type="text"
                  value={userName}
                  onChange={handelUserName}
                />
              </label>
              <label htmlFor="email">
                E-mail
                <ModalEmail
                  id="email"
                  placeholder="E-mail"
                  type="email"
                  value={email}
                  onChange={handelEmail}
                />
              </label>
              <label htmlFor="password">
                Password
                <ModalPassword
                  id="password"
                  placeholder="Password"
                  type="password"
                  value={password}
                  onChange={handelPassword}
                />
              </label>
              <Submit>
                <MainButton type="submit">Sign Up</MainButton>
              </Submit>
            </ModalForm>
            <LinkModal>
              Already have an account?{" "}
              <a href="/" onClick={handleOpenSecondModal}>
                Log In
              </a>
            </LinkModal>
          </Modalp>
        </Overlay>
      )}

      {isSecondModalOpen && (
        <Overlay onClick={handleOverlayClick}>
          <Modalp>
            <AiOutlineClose
              size={25}
              onClick={handleCloseSecondModal}
              style={{ marginLeft: '570px' }}
            />
            <ModalH1>Log In</ModalH1>
            <ModalForm onSubmit={handleLogInSubmit}>
              <label htmlFor="username">
                Username
                <ModalUserName
                  placeholder="Username"
                  id="username"
                  type="text"
                onChange={handleLogInUserName}
                value={logInUserName}
                />
              </label>
              <label htmlFor="password">
                Password
                <ModalPassword
                  id="password"
                  placeholder="Password"
                  type="password"
                  onChange={handleLogInPassword}
                  value={logInPassword}
                />
              </label>
            </ModalForm>
            <Submit>
              <MainButton type="submit">Log In</MainButton>
            </Submit>
            <LinkModalSecond>
              Don't have an account yet?{" "}
              <a href="/" onClick={handleOpenModal}>
                Sign Up
              </a>
            </LinkModalSecond>
          </Modalp>
        </Overlay>
      )}
 {isThirthModalOpen && (
  <Overlay onClick={handleOverlayClick}>
    <Modalp>
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
              <MainButton>Delete Account</MainButton>
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
    </Modalp>
  </Overlay>
)}
    </>
  );
};