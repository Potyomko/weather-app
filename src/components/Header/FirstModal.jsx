import { useState } from 'react';
import { Overlay, Modalp, ModalH1, ModalUserName, ModalEmail, ModalPassword, ModalForm, Submit, LinkModal, LinkModalSecond } from './Header.styled';
import { AiOutlineClose } from "react-icons/ai";
import { MainButton } from '../Button/Button';
export const FirstModal = ({handleCloseModal, handelSubmit,handleOpenSecondModal })=>{

    const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handelUserName = (e) => {
    setUserName(e.currentTarget.value);
  };

  const handelEmail = (e) => {
    setEmail(e.currentTarget.value);
  };

  const handelPassword = (e) => {
    setPassword(e.currentTarget.value);
  };

return(
<>

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
</>
   
)
}