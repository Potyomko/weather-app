 import styled from "styled-components";
 import heroBackround from './HeroBackround.jpg'
 export const HeroSection = styled.section`
 
 background-color: #2f303a;
 text-align: center;
 padding-bottom: 200px;
 padding-top: 200px;

 
 background-image: linear-gradient(
   to right,
   rgba(47, 48, 58, 0.4),
   rgba(47, 48, 58, 0.4)
 ),
  url(${heroBackround});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
 
 `

 export const HeroH1 = styled.h1`
 font: ${props=>props.theme.fonts.heading}
 
 
 `