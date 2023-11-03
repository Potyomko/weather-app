import React, { useEffect, useState } from 'react';
import logo from '../../img/logo.svg';
import { BsPersonCircle } from "react-icons/bs";
import { HeaderNav, HeaderNavigation, HeaderElement, SingUl,
   Headerlogo, Overlay,Modal, ModalH1,
   ModalUserName, ModalEmail, ModalPassword,
   ModalForm,  Submit, LinkModal, LinkModalSecond
} from './Header.styled';
import { MainButton } from '.././Button/Button'; 
import {  AiOutlineClose} from "react-icons/ai";

export const Header = () => {

const [isSignUpModal, setIsSignUpModal] = useState(true);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isSecondModalOpen, setSecondModalOpen] = useState(false);
const [userName, setUserName] = useState('')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
  const handleKeydown = (e) => {
    if (e.key === "Escape") {
      setModalOpen(false);
      setSecondModalOpen(false);
    }
  };

  const handleOpenModal = (e) => {
    e.preventDefault()
    setModalOpen(true);
    setIsSignUpModal(true);
    setSecondModalOpen(false);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleOpenSecondModal = (e) => {
    e.preventDefault()
    setSecondModalOpen(true);
    setModalOpen(false);
  };

  const handleCloseSecondModal = () => {
    setSecondModalOpen(false);
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeydown);
    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  function handleOverlayClick(e) {
    if (e.currentTarget === e.target) {
      handleCloseModal();
      handleCloseSecondModal();
    }
  }
const handelUserName = (e)=>{
setUserName(e.currentTarget.value)
}
const handelEmail= (e)=>{
  setEmail(e.currentTarget.value)
  }
  const handelPassword = (e)=>{
    setPassword(e.currentTarget.value)
    }

   const  handelSubmit = (e)=>{
      e.preventDefault()
      localStorage.setItem(userName, JSON.stringify([userName, email, password]))
      
    }
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
          <MainButton onClick={handleOpenSecondModal}>Log In</MainButton>
          <MainButton type="button" onClick={handleOpenModal}>Sign Up</MainButton>
        </SingUl>

        {isModalOpen && (
          <Overlay onClick={handleOverlayClick}>
            <Modal>
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
            </Modal>
          </Overlay>
        )}

        {isSecondModalOpen && (
          <Overlay onClick={handleOverlayClick}>
          <Modal>
            <AiOutlineClose
              size={25}
              onClick={handleCloseSecondModal}
              style={{ marginLeft: '570px' }}
            />
            <ModalH1>Log In</ModalH1>
            <ModalForm>
              <label htmlFor="username">
                Username
                <ModalUserName
                  placeholder="Username"
                  id="username"
                  type="text"
                />
              </label>
             
              <label htmlFor="password">
                Password
                <ModalPassword
                  id="password"
                  placeholder="Password"
                  type="password"
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
          </Modal>
        </Overlay>
        )}

        <BsPersonCircle size={50} style={{ marginLeft: '1300px', marginTop: '-40px' }} />
      </HeaderNav>
    </HeaderElement>
  );
};
