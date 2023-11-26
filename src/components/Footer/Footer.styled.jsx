import styled from 'styled-components';
import { Theme } from '../Theme';

export const FooterSection = styled.section`
    display: flex;
    background-color: ${Theme.colors.orange};
    height: auto;
    padding: auto;
    @media screen and (max-width: 320px){
        display: flex;
        flex-wrap: wrap;
    }
`
export const FooterAdressDiv = styled.div`
   
    @media screen and (max-width: 320px){
        padding: 17px 0px 0px 53px;
    }
    @media screen and (min-width: 768px){
        padding: 30px 0px 0px 0px;
    }
    @media screen and (min-width: 1200px){
        display: flex;
        padding: 42px 0px 0px 0px;
        flex-direction: column;
    }
    
`
export const FooterAdressTitle = styled.p`
    font-family: ${Theme.fonts.body};
    font-size: ${Theme.fontSizes.m};
    font-weight:${Theme.fontWeights.medium};
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
    @media screen and (max-width: 320px){
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
    @media screen and (max-width: 320px){
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
    @media screen and (max-width: 320px){
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 29px 0px 0px 59px;
    }
    @media screen and (min-width: 768px){
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 30px 0px 0px 153px;
    }
    @media screen and (min-width: 1200px){
        display: flex;
        flex-direction: column; 
        align-items: flex-start;
        padding: 44px 0px 0px 192px;
    }
`
export const FooterContactUsTitle = styled.p`
    font-family: ${Theme.fonts.body};
    font-size: ${Theme.fontSizes.m};
    font-weight: ${Theme.fontWeights.medium};
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
    @media screen and(max-width: 320px){
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
    @media screen and(max-width: 320px){
        width: 145px;
        padding: 20px;
    }
`
export const FooterIconInstagram = styled.img`
    @media screen and (min-width: 1200px){
        width: 40px;
        height: 40px;
        padding-top: 10px;
        padding-right: 10px;
    }
    @media screen and (min-width: 768px){
        width: 35px;
        height: 35px;
        padding-top: 5px;
        padding-right: 5px;
    }

`
export const FooterIconFacebook = styled.img`
    @media screen and (min-width: 1200px){
        width: 40px;
        height: 40px;
        padding-top: 10px;
        padding-right: 10px;
    }
    @media screen and (min-width: 768px){
        width: 35px;
        height: 35px;
        padding-top: 5px;
        padding-right: 5px;
    }
`
export const FooterIconWhatsapp = styled.img`
    @media screen and (min-width: 1200px){
        width: 40px;
        height: 40px;
        padding-top: 10px;
        padding-right: 10px;
    }
    @media screen and (min-width: 768px){
        width: 35px;
        height: 35px;
        padding-top: 5px;
        padding-right: 5px;
    }
`
export const FooterIconLogoDiv = styled.div`
    padding: 40px 150px 77px 103px;
    width: 343px;
    @media screen and (max-width: 320px){
        padding: 20px 0px 0px 21px;
    }
    @media screen and (min-width: 768px){
        padding: 35px 0px 49px 86px;
    }
    @media screen and (min-width: 1200px){
        display: flex;
        padding: 46px 0px 74px 128px;
    }
`