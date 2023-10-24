import styled from 'styled-components';
import { Theme } from '../Theme';

export const FooterSection = styled.section`
    background-color: ${Theme.colors.orange};
    height: 70px;
    padding: 30px;
`
export const FooterAdressDiv = styled.div`
    position: fixed;
    left: 343px;
`
export const FooterAdressTitle = styled.p`
    font-family: ${Theme.fonts.body};
    font-size: ${Theme.fontSizes.m};
    font-weight:${Theme.fontWeights.medium};
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
`
export const FooterAdress = styled.p`
    font-family: ${Theme.fonts.body};
    font-size: ${Theme.fontSizes.xs};
    font-weight: ${Theme.fontWeights.medium};
    line-height: 15px;
    letter-spacing: 0em;
    text-align: left;
`
export const FooterContactUsDiv = styled.p`
    position: fixed;
    left: 538px;
`
export const FooterContactUsTitle = styled.p`
    font-family: ${Theme.fonts.body};
    font-size: ${Theme.fontSizes.m};
    font-weight: ${Theme.fontWeights.medium};
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
`