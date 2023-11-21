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
    const userNameFromStorage = JSON.parse(localStorage.getItem('user'));
    if (userNameFromStorage) {
      setUserData(userNameFromStorage)
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

  

  const handleLogInSubmit = (e) => {
    e.preventDefault()
    
    const existingUserJSON = localStorage.getItem('user');
    if (existingUserJSON) {
      const existingUser = JSON.parse(existingUserJSON);
  

      if (existingUser.password === logInUserData.logInPassword && existingUser.userName === logInUserData.logInUserName) {
        console.log(existingUser.password, existingUser.userName, logInUserData.logInPassword );
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
         console.log(existingUser.password && existingUser.userName === logInUserData.logInPassword && logInUserData.logInUserName);
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
    setUserData({userName, password,email})
}

const getLogInUserData = ({logInUserName, logInPassword}) => {
  setLogInUserData({logInUserName, logInPassword});
}

    console.log('dgv');
    const existingUserJSON = localStorage.getItem('user');
    if (existingUserJSON) {
      const existingUser = JSON.parse(existingUserJSON);
      if (existingUser[logInUserName] && existingUser[logInUserName][2] === logInPassword) {
        
        setUserLoggedIn(true);
        handleCloseSecondModal();
      } else {
alert('неправельні дані')
      }
    } 
  };
  


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
    <p>{userName}</p>
   
  </>
) : (
  <>
    <MainButton onClick={handleOpenSecondModal}>Log In</MainButton>
    <MainButton type="button" onClick={handleOpenModal}>Sign Up</MainButton>
  </>
)}

        </SingUl>       
  {isModalOpen && (
     <Modal>
    <FirstModal
      handleCloseModal={handleCloseModal}
      setUserLoggedIn={setUserLoggedIn}
      handleOpenSecondModal={handleOpenSecondModal}
      getUserData={getUserDataState}
    />
    </Modal>
  )}
  {isSecondModalOpen && (
    <Modal>
    <SecondModal
      handleCloseSecondModal={handleCloseSecondModal}
      handleLogInSubmit={handleLogInSubmit}
      handleOpenModal={handleOpenModal}
      getLogInUserData={getLogInUserData}
    />
    </Modal>
  )}
  {isThirdModalOpen && (
    <Modal>
    <ThirdModal
      handleCloseThirdmodal={handleCloseThirdmodal}
      handleOpenModal={handleOpenModal}
      handleOpenSecondModal={handleOpenSecondModal}
      handlelogOut={handlelogOut}
      userLoggedIn={userLoggedIn}
    />
    </Modal>
  )}
        <BsPersonCircle  size={50} style={{ marginLeft: '1300px', marginTop: '-40px' }} onClick={handleOpenThirdmodal}/>
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
      </Container>
    </HeaderElement>
  );
};
