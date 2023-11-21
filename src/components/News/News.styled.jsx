import styled from "styled-components";

export const NewsSection = styled.div`
    margin: 144px 150px 220px;
`

export const NewsList = styled.ul`
    display: flex;

    & > li:not(:last-child) {
        margin-right: 20px;
    }
`;

export const NewsImage = styled.img`
    width: 270px;
    height: 208px;
    border-radius: 10px;

    margin-bottom: 20px;
`;