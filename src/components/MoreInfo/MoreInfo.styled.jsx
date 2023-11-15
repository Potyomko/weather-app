import styled from "styled-components";

export const InfoList = styled.ul`
display:flex;
gap: 40px 58px;
flex-wrap:wrap;

background-color: ${({ theme }) => theme.colors.greyCards};
border-radius: 20px;
padding: 40px 77px;
justify-content: center;
`
// margin: 40px 150px;

export const InfoName = styled.p`
font-size: 16px;
font-weight: 500;
`

export const MainInfo = styled.p`
font-size: 32px;
font-weight: 500;
font-family:${({ theme }) => theme.fonts.heading};
padding-bottom: ${({pad})=> pad ? '0' : '20px'}
`
export const InfoItem = styled.li`
width: calc((100% - 116px) / 3);
padding: ${({icon})=> icon ? '20px 0' : '20px 0 40px 0'};
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #D9D9D9;
border-radius: 10px;
`

export const ChartContainer = styled.div`
display: flex;
background-color: ${({ theme }) => theme.colors.greyCards};
border-radius: 20px;
align-items: center;
justify-content: center;

`
// padding: 10px;
// margin: 40px 150px;