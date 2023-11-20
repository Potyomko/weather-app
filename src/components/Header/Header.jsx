import React, { useEffect, useState } from 'react';
import logo from '../../img/logo.svg';
import { BsPersonCircle } from 'react-icons/bs';
import { HeaderNav, HeaderNavigation, HeaderElement, SingUl, Headerlogo } from './Header.styled';
import { MainButton } from '../Button/Button';
import { Modal } from './Modal';
import { Container } from 'GlobalStyle';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FirstModal } from './FirstModal';
import { SecondModal } from './SecondModal';
import { ThirdModal } from './ThirdModal';
export const Header = () => {
  const [isSignUpModal, setIsSignUpModal] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isSecondModalOpen, setSecondModalOpen] = useState(false);
  const [isThirdModalOpen, setIsThirdModalOpen] = useState(false);
  
  
  const [logOut, setLogOut] = useState(false);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null)
  const [logInUserData, setLogInUserData] = useState(null)



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
      
      setUserLoggedIn(true);
    }
  }, []);

  

  
  

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

    existingUser[userData.userName] = [userData.userName, userData.email, userData.password];

    localStorage.setItem('user', JSON.stringify(existingUser));

    handleCloseModal();

    localStorage.setItem('userName', userData.userName);
    setUserLoggedIn(true);
  };

  const handleLogInSubmit = (e) => {
    e.preventDefault();
    console.log('dgv');
    const existingUserJSON = localStorage.getItem('user');
    if (existingUserJSON) {
      const existingUser = JSON.parse(existingUserJSON);
      if (existingUser[logInUserData.logInUserName] && existingUser[logInUserData.logInUserName][2] === logInUserData.logInPassword) {
        toast.success('You are logged in', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
        setUserLoggedIn(true);
        handleCloseSecondModal();
      } else {
        toast.error('Username or password entered incorrectly!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      }
    } 
  };
  
const getUserDataState = ({userName, password,email})=>{

  if (!{userName, password,email}) {
    return
  }
  
    setUserData({userName, password,email})
  

}

const getLogInUserData = ({logInUserName, logInPassword})=> {
setLogInUserData({logInUserData, logInPassword})
}
  return (
    <HeaderElement>
      <Container>


   
      <HeaderNav>
        <a href="/"><Headerlogo src={logo} alt="Logo" /></a>
        <HeaderNavigation>
          <li><p>Who we are</p></li>
          <li><p>Contacts</p></li>
          <li><p>Menu</p></li>
        </HeaderNavigation>
        <SingUl>
        {userLoggedIn ? (
  <>
    <p>{userData.userName}</p>
   
  </>
) : (
  <>
    <MainButton onClick={handleOpenSecondModal}>Log In</MainButton>
    <MainButton type="button" onClick={handleOpenModal}>Sign Up</MainButton>
  </>
)}
        </SingUl>
        <Modal

>
  {isModalOpen && (
    <FirstModal
      handleCloseModal={handleCloseModal}
      handelSubmit={handelSubmit}
      handleOpenSecondModal={handleCloseSecondModal}
      getUserDataState={getUserDataState}
    />
  )}
  {isSecondModalOpen && (
    <SecondModal
      handleCloseSecondModal={handleCloseSecondModal}
      handleLogInSubmit={handleLogInSubmit}
      handleOpenModal={handleOpenModal}
      getLogInUserData={getLogInUserData}
    />
  )}
  {isThirdModalOpen && (
    <ThirdModal
      handleCloseThirdmodal={handleOpenThirdmodal}
      handleOpenModal={handleOpenModal}
      handleOpenSecondModal={handleOpenSecondModal}
      handlelogOut={handlelogOut}
    />
  )}
</Modal>






        <BsPersonCircle  size={50} style={{ marginLeft: '1300px', marginTop: '-40px' }} />
        <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
{/* Same as */}
<ToastContainer />
      </HeaderNav>
      </Container>
    </HeaderElement>
  );
};
