import styled from 'styled-components';
import { Theme } from '../Theme';

export const FooterSection = styled.section`
    display: flex;
    background-color: ${Theme.colors.orange};
    height: auto;
    padding: auto;
    @media screen and (min-width: 320px){
        display: flex;
    }
`
export const FooterAdressDiv = styled.div`
    left: 343px;
    padding: 40px 0px 64px 0px;
    @media screen and (min-width: 320px){
        left: 180px;
        top: 698px;
    }
    @media screen and (min-width: 768px){
        padding: 56px 0px 0px 108px;
    }
    @media screen and (min-width: 1200px){
        adding: 41px 0px 0px 0px;
    }
    
`
export const FooterAdressTitle = styled.p`
    font-family: ${Theme.fonts.body};
    font-size: ${Theme.fontSizes.m};
    font-weight:${Theme.fontWeights.medium};
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
    @media screen and (min-width: 320px){
    font-size: ${Theme.fontSizes.xs};
    }
    @media screen and (min-width: 768px){
    font-size: ${Theme.fontSizes.s};
    }
    @media screen and (min-width: 1200px){
    font-size: ${Theme.fontSizes.m};
    }
`
export const FooterAdress = styled.p`
    font-family: ${Theme.fonts.body};
    font-size: ${Theme.fontSizes.xs};
    font-weight: ${Theme.fontWeights.medium};
    line-height: 15px;
    letter-spacing: 0em;
    text-align: left;
    @media screen and (min-width: 320px){
        font-size: ${Theme.fontSizes.xxxs};
    }
    @media screen and (min-width: 768px){
        font-size: ${Theme.fontSizes.xxs};
    }
    @media screen and (min-width: 1200px){
        font-size: ${Theme.fontSizes.xs};
    }
`
export const FooterContactUsDiv = styled.div`
    left: 538px;
    padding: 40px 0px 69px 0px;
    @media screen and (min-width: 320px){
        left: 73px;
        top: 796px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    @media screen and (min-width: 768px){
        display: flex;
        align-items: flex-start;
        padding: 755px 0px 0px 409px;
    }
    @media screen and (min-width: 1200px){
        padding: 755px 0px 0px 475px;
        padding: 36px 0px 0px 140px;
    }
`
export const FooterContactUsTitle = styled.p`
    font-family: ${Theme.fonts.body};
    font-size: ${Theme.fontSizes.m};
    font-weight: ${Theme.fontWeights.medium};
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
    @media screen and(min-width: 320px){
        font-size: ${Theme.fontSizes.xs};
    }
    @media screen and(min-width: 768px){
        font-size: ${Theme.fontSizes.s};
    }
    @media screen and(min-width: 1200px){
        font-size: ${Theme.fontSizes.m};
    }
`
export const FooterIconsDiv = styled.div`
    display: flex;
    @media screen and(min-width: 320px){
        width: 145px;
        padding: 20px;
    }
    @media screen and(min-width: 1200px){
        width: 161px;
    }
`
export const FooterIconInstagram = styled.img`
    width: 40px;
    height: 40px;
    padding-top: 10px;
    padding-right: 10px;
    padding-bottom: 10px;
    @media screen and(min-width: 320px){
        width: 35px;
    }
`
export const FooterIconFacebook = styled.img`
    width: 40px;
    height: 40px;
    padding-top: 10px;
    padding-right: 10px;
    padding-left: 10px;
    padding-bottom: 10px;
    @media screen and(min-width: 320px){
        width: 35px;
    }
`
export const FooterIconWhatsapp = styled.img`
    width: 40px;
    height: 40px;
    padding-top: 10px;
    padding-right: 10px;
    padding-left: 10px;
    padding-bottom: 10px;
    @media screen and(min-width: 320px){
        width: 35px;
    }
`
export const FooterIconLogoDiv = styled.div`
    padding: 40px 150px 77px 103px;
    width: 90px;
    @media screen and (min-width: 320px){
        padding: 19px 0px 145px 15px;
        width: 50px;
    }
    @media screen and (min-width: 768px){
        width: 58px;
        padding: 35px 100px 63px 100px;
    }
    @media screen and (min-width: 1200px){
        width: 90px;
        padding: 40px 150px 77px 103px;
    }
`