import styled from 'styled-components';

export const ContainerFooter = styled.div`
  display: flex;
  height: 290px;
  flex-shrink: 0;
  background: var(--black-color);
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 40px 70px;
`;

export const ContainerFooterInfo = styled.div``;

export const ContainerItemFooter = styled.div``;

export const ItemFooter = styled.p`
  color: var(--white-color);
  font-family: 'Rubik', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const BtnFooter = styled.button`
  width: 194px;
  height: 40px;
  flex-shrink: 0;
  border: 1px solid var(--white-color);
  color: var(--white-color);
  background-color: transparent;
  text-transform: uppercase;
  color: var(--white-color);
  font-family: 'Rubik', sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
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
  line-height: 22px;
`;

export const ContainerCopyright = styled.div``;

export const ItemCopyright = styled.p`
  color: #fff;

  text-align: center;
  font-family: 'Rubik', sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
`;
