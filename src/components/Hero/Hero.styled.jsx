import styled from "styled-components";
import heroBackground from './HeroBackround.jpg';
const mobile =  480;
const tablet = 768;
const desktop = 1200;
export const HeroSection = styled.section`
  background-color: #2f303a;

  padding-bottom: 170px;
  padding-top: 170px;

  @media screen and (min-width: ${desktop}){
    height: 500px;
}
  
  @media screen and (min-width: ${tablet}){
    height: 345px;
}
  

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

text-align: center;
 margin-bottom: 100px;
  margin-left: 530px;
 
  @media screen and (min-width: 1200px){
    font-size: 48.76px;
}

@media screen and (max-width:768px ){
    font-size: 24.76px;
}

@media screen and (max-width: 480px){
    font-size: 17.76px;
}



`;

export const HeroUl = styled.ul`
display: flex;
justify-content:  center;


`

export const HeroText = styled.p`
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.body};
 



font-weight: 500;

@media screen and (min-width: 1200px){
  width: 340px;
  font-size: 24px;
  line-height: 29px;
}

@media screen and (max-width:768px ){
  font-size: 14px;
  line-height: 17px;
  width: 1000px;
}

@media screen and (max-width: 480px){
  font-size: 10px;
  line-height: 12px;
}
`;


export const HeroData = styled.p`
color: ${props => props.theme.colors.white};
font-family: ${props => props.theme.fonts.body};



@media screen and (min-width: 1200px){
 
  size: 24px;
  line-height: 29.26px;
}

@media screen and (max-width:768px ){
  size: 14px;
  line-height: 17px;
 
}

@media screen and (max-width: 480px){
  font-size: 10px;
  line-height: 12px;
}
`




export const HeroSubmit = styled.button`

  margin-left: 5px;
  width: 45px;
  height: 42px;
  background: #FFB36C;
  border-radius: 0px 10px 10px 0px; 
  border: 0 0 0 2px; 


`;
export const HeroSpan = styled.span`
  width: 144px;
  height: 3px;
  background-color: ${props => props.theme.colors.white};
  display: inline-block;
  transform: rotate(-90deg);
  

  
`;


export const ContainerText = styled.div`

display:flex;
margin-bottom: 100px;
justify-content: center;
text-aling: center;
`

export const Field = styled.input`
  background: #D9D9D9;
  border-radius: 10px;
  border: none;
  

  @media screen and (max-width: 767px) {
    width: 157px;
    height: 14px;
  }

  @media screen and (min-width: 768px) {
    width: 402px;
    height: 27px;
  }

  @media screen and (min-width: 1200px) {
    width: 625px;
    height: 42px;
  }
`;








export const TextContainer = styled.div`
margin-bottom: 100px;
display: flex;
align-items: center; 
justify-content: center;

`