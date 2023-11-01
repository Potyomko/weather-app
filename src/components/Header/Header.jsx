import React, { useEffect, useState } from 'react';
import logo from '../../img/logo.svg';
import { BsPersonCircle } from "react-icons/bs";
import { HeaderNav, HeaderNavigation, HeaderElement, SingUl ,Headerlogo } from './Header.styled';
import './Modal.css';
import { MainButton } from 'components/Button/Button';
export const Header = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleKeydown = (e) => {
    if (e.key === "Escape") {
      setModalOpen(false);
    }
  };

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeydown);
    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, []);

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
         <MainButton>Sign in</MainButton>

         <MainButton type="button" onClick={handleOpenModal}>Sign Up</MainButton>
        </SingUl>
        
        {isModalOpen && (
          <div className="Overlay" onClick={handleOverlayClick}>
            <div className="Modal">
              <h1>SignUp</h1>
              <button onClick={handleCloseModal}>close</button>
            </div>
          </div>
        )}
        <BsPersonCircle size={50} style={{ marginLeft: '1300px', marginTop: '-40px' }} />
      </HeaderNav>
    </HeaderElement>
  );

  function handleOverlayClick(e) {
    if (e.currentTarget === e.target) {
      handleCloseModal();
    }
  }
};