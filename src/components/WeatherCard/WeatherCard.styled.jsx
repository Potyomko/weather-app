import styled from 'styled-components';

// export const Container = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: auto;
//   height: 100%;
//   background-color: #212121;
// `;

export const Container = styled.div`
    display: flex;
    align-items: center;
    padding-left: 15px;
    padding-right: 15px;
    margin-left: auto;
    margin-right: auto;

    @media screen and (max-width: 320px) {
        width: 320px;
         margin-top: 17px;
        margin-bottom: 17px;
    }

    @media screen and (min-width: 768px) {
        width: 768px;
         margin-top: 25px;
    margin-bottom: 25px;
    }

    @media screen and (min-width: 1200px) {
        width: 1200px;
         margin-top: 40px;
    margin-bottom: 40px;
    }
`

export const First = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

// export const Block = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   padding: 150px;
// `;

export const City = styled.p`
  margin-right: 175px;
  margin-left: 30px;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 500;
  color: #000;
`;

export const Country = styled.p`
  margin-right: 30px;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 500;
  color: #000;
`;

export const BtnContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
`;

export const Btn = styled.button`
  padding: 8px 18px;
  border-radius: 10px;
  background: #ffb36c;
  border: none;
  white-space: nowrap;
  color: #000;
  text-align: right;
  font-family: Montserrat;
  font-size: 10px;
  font-weight: 500;
  margin: 0;
`;

export const Time = styled.h2`
  color: #000;
  text-align: center;
  font-family: Montserrat;
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 10px;
`;

export const Second = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
  gap: 10px;
`;

export const List = styled.ul`
  margin-top: 15px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Dete = styled.p`
  margin-right: 13px;
  margin-left: 102px;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 500;
  color: #000;
`;

export const Day = styled.p`
  padding-left: 13px;
  border-left: solid #212121 1px;
  margin-right: 103px;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 500;
  color: #000;
`;

export const Temp = styled.h1`
  margin-top: 15px;
  text-align: center;
  color: #000;
  font-family: Montserrat;
  font-size: 32px;
  font-weight: 500;
`;

export const SunIcon = styled.img`
  object-fit: contain;
`;

export const Last = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 21px;
  margin-top: 40px;
`;

export const RefleshIcon = styled.img`
  margin-left: 20px;
  margin-right: 16px;
`;

export const See = styled.button`
  padding: 8px 25px;
  border-radius: 10px;
  background: #ffb36c;
  border: none;
  margin-left: 38px;
  font-family: Montserrat;
  font-size: 10px;
  font-weight: 500;
  color: #000;
`;

export const DeleteIcon = styled.img`
  margin-right: 20px;
  margin-left: 37px;
  display: block;
`;

export const ChooseCity = styled.p`
  text-align: center;
`;

export const Cards = styled.div`
  max-width: 320px;
  height: 100%;
  background-color: #e8e8e8;
  border-radius: 20px;
  padding-top: 15px;
  margin-right: 90px;
`;
