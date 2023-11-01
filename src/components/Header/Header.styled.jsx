import styled from "styled-components";

export const HeaderNav = styled.div`
position: relative;
box-sizing: border-box;




`

export const HeaderElement = styled.header`

background: ${props => props.theme.colors.white};
height: 80px;

`
export const HeaderNavigation = styled.ul`
  display: flex;
  margin-left: 400px;
  margin-top: -40px;

  & > li:not(:last-child) {
    margin-right: 30px;
  }
`;

export const SingUl = styled.ul`
margin-left: 1000px;
margin-top: -20px;

& > button:not(:last-child) {
    margin-right: 30px;
  }
`




export const Headerlogo = styled.img`

margin-left: 70px;

`