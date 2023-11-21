import { useEffect, useState } from 'react';
import {ModalH1, ModalUserName,  ModalPassword, ModalForm, Submit, LinkModalSecond } from './Header.styled';
import { AiOutlineClose } from "react-icons/ai";
import { MainButton } from '../Button/Button';

export const SecondModal = ({handleCloseSecondModal, handleLogInSubmit,handleOpenModal, getLogInUserData})=>{
    const [logInUserName, setLogInUserName] = useState('');
    const [logInPassword, setLogInPassword] = useState('');
    const handleLogInUserName = (e) => {
        setLogInUserName(e.currentTarget.value);
      };
    
      const handleLogInPassword = (e) => {
        setLogInPassword(e.currentTarget.value);
      };
      useEffect(() => {
        if (logInUserName || logInPassword) {
          getLogInUserData({ logInUserName, logInPassword });
        }
      }, [logInUserName, logInPassword]);
      
    return(
        <>
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
        </>
    )

}