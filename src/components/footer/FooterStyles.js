import styled from 'styled-components';

export const ContainerFooter = styled.div`
  display: flex;
  height: 290px;
  flex-shrink: 0;
  background: var(--black-color);
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 45px 70px 15px 70px;
`;

export const ContainerFooterInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const ContainerItemFooter = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ItemFooter = styled.p`
  color: var(--white-color);
  font-family: 'Rubik', sans-serif;
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 0;
  line-height: 24px;
`;

export const BtnFooter = styled.button`
  width: 203px;
  height: 40px;
  flex-shrink: 0;
  border: 1px solid var(--white-color);
  color: var(--white-color);
  background-color: transparent;
  text-transform: uppercase;
  color: var(--white-color);
  font-family: 'Rubik', sans-serif;
  font-size: 12px;
  text-align: end;
`;

export const ContainerContact = styled.div`
  width: 266px;
  height: 64px;
  flex-shrink: 0;
`;

export const ItemContact = styled.p`
  color: var(--white-color);
  font-family: 'Rubik', sans-serif;
  font-size: 14px;
  font-weight: 400;
  margin: 0;
  line-height: 22px;
`;

export const ContainerCopyright = styled.div`
  display: flex;
  width: 100%;
  margin-top: 30px;
  justify-content: space-between;
`;

export const ItemCopyright = styled.p`
  color: var(--white-color);
  text-align: center;
  font-family: 'Rubik', sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
`;

export const DataFiscal = styled.img`
  width: 29.461px;
  height: 37.146px;
  margin-right: -24px;
`;
