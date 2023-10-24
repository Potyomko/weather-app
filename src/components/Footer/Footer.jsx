import { FooterAdress, FooterAdressDiv, FooterAdressTitle, FooterContactUsDiv, FooterContactUsTitle, FooterSection } from "./Footer.styled";

export const Footer = () => {
    return (
        <FooterSection>
            <FooterAdressDiv>
                <FooterAdressTitle>Adress</FooterAdressTitle>
                <FooterAdress>Svobody str. 35</FooterAdress>
                <FooterAdress>Kyiv</FooterAdress>
                <FooterAdress>Ukraine</FooterAdress>
            </FooterAdressDiv>
            <FooterContactUsDiv>
                <FooterContactUsTitle>Contact us</FooterContactUsTitle>
            </FooterContactUsDiv>
        </FooterSection>
    )
}