import styled from 'styled-components';

export const ContainerFooterDesktop = styled.div`
  display: flex;
  height: 290px;
  flex-shrink: 0;
  background: var(--black-color);
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 45px 70px 15px 70px;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const ContainerFooterDesktopInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (max-width: 768px) {
    gap: 25px;
  }
`;

export const ContainerItemFooterDesktop = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    align-items: center;
    gap: 15px;
    margin-bottom: 10px;
  }
`;

export const ItemFooterDesktop = styled.p`
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

export const BtnFooterDesktop = styled.button`
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

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
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

  @media (max-width: 768px) {
    flex-direction: column;
  }
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

export const ContainerFooterMobile = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    background: var(--black-color);
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 25px 0px 15px 0px;
  }
`;

export const ContainerHalfFooterMobile = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;
