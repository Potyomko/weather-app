import styled from "styled-components"

export const Ul = styled.ul`
display:flex;
gap: 40px 58px;
flex-wrap:wrap;

background-color: ${({ theme }) => theme.colors.greyCards};
border-radius: 20px;
padding: 40px 77px;
justify-content: center;
`

export const Heading = styled.p`
font-family: Montserrat;
font-size: 16px;
font-weight: 600;
line-height: 20px;
letter-spacing: 0em;
text-align: left;
`

export const Li = styled.li`
display: flex;
flex-direction: column;
background-color: #D9D9D9;
width: 986px;
height: 47px;
border-radius: 10px;
`

export const P = styled.p`
font-family: Montserrat;
font-size: 16px;
font-weight: 500;
line-height: 20px;
letter-spacing: 0em;
text-align: center;

`