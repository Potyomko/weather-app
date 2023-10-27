import styled from "styled-components";
import heroBackground from './HeroBackround.jpg';

export const HeroSection = styled.section`
  background-color: #2f303a;

  padding-bottom: 100px;
  padding-top: 100px;
  height: 500px;

  background-image: linear-gradient(
    to right,
    rgba(47, 48, 58, 0.4),
    rgba(47, 48, 58, 0.4)
  ),
  url(${heroBackground});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const HeroH1 = styled.h1`
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.body};
  font-weight: 600;
  font-size: 48.76px;
  

`;

export const HeroUl = styled.ul`
display: flex;
justify-content:  center;


`
export const HeroLiH1 = styled.li`
margin-left: 530px;
`

export const HeroText = styled.p`
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.body};
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
width: 330px;
margin-left: 450px;
margin-top: 100px;
`;


export const HeroData = styled.p`
color: ${props => props.theme.colors.white};
font-family: ${props => props.theme.fonts.body};
Size: 24px;
line-height: 29.26px;
margin-left: 830px;
margin-top: -80px;
`

export const Field = styled.input`
width: 625px;
height: 42px;
 background: #D9D9D9;

border-radius: 10px;


`

export const HeroSubmit = styled.button`

  margin-left: 5px;
  width: 45px;
  height: 42px;
  background: #FFB36C;
  border-radius: 0px 10px 10px 0px; 
  border: 0 0 0 2px; 

`;


 