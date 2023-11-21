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
              <Submit>
              <MainButton type="submit">Log In</MainButton>
            </Submit>
            </ModalForm>
            
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