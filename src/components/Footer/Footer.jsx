import { FooterAdress, FooterAdressDiv, FooterAdressTitle, FooterContactUsDiv, FooterContactUsTitle, FooterSection, FooterIconsDiv, FooterIconInstagram, FooterIconFacebook, FooterIconWhatsapp, FooterIconLogoDiv } from "./Footer.styled";
import { Container } from "GlobalStyle";
import Facebook from '../../img/facebook.svg';
import Instagram from '../../img/instagram.svg';
import Whatsapp from '../../img/whatsapp.svg';
import Logo from '../../img/logo.svg';

export const Footer = () => {
    return (
        <FooterSection>
            <FooterIconLogoDiv>
                <img src={Logo} alt="Logo" />
            </FooterIconLogoDiv>
            <FooterAdressDiv>
                <FooterAdressTitle>Adress</FooterAdressTitle>
                <FooterAdress>Svobody str. 35</FooterAdress>
                <FooterAdress>Kyiv</FooterAdress>
                <FooterAdress>Ukraine</FooterAdress>
            </FooterAdressDiv>
            <FooterContactUsDiv>
                <FooterContactUsTitle>Contact us</FooterContactUsTitle>
                    <FooterIconsDiv>
                        <FooterIconInstagram src={Instagram} alt="instagram"/>
                        <FooterIconFacebook src={Facebook} alt="facebook" />
                        <FooterIconWhatsapp src={Whatsapp} alt="whatsapp" />
                    </FooterIconsDiv>
            </FooterContactUsDiv>
        </FooterSection>
    )
}