import styled from 'styled-components';

export const ContainerInfoSection = styled.div`
  display: flex;
  padding: 40px 150px;
  justify-content: space-between;
  align-items: flex-start;
  background-color: var(--lightgrey-color);

  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 25px 0;
    margin-top: 65px;
  }
`;

export const ContainerCardInfoSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 9px;
  height: 190px;
  max-width: 263px;

  @media (max-width: 768px) {
    margin-bottom: 15px;
  }
`;

export const ContainerCardsInfoSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media (max-width: 767px) {
    display: none;
  }
`;

export const ImgCardInfoSection = styled.img``;

export const TitleCardInfoSection = styled.div`
  color: var(--black-color);

  text-align: center;
  font-family: 'Rubik', sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 22px;
  text-transform: uppercase;
`;

export const DetailCardInfoSection = styled.div`
  color: var(--darkgrey-color);

  text-align: center;
  font-family: 'Rubik', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;

export const ContainerCardsInfoSectionMobile = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
