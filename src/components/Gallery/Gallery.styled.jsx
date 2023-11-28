import styled from 'styled-components';
import { Theme } from '../Theme';

export const Title = styled.h2`
    color: ${Theme.colors.black};
    font-family: ${Theme.fonts.heading};
    font-size: 20px;
    font-weight: ${Theme.fontWeights.medium};
    margin-bottom: 40px;
`;

export const Container = styled.div`
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 80px 0;
`;

export const Image = styled.img`
    width: 384px;
    height: 211px;
    object-fit: cover;
`