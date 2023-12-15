import styled from 'styled-components';

export const ContainerCarousel = styled.div`
  display: flex;
  width: 100%;
  padding: 40px 0px;

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
    width: 90%;
    padding: 30px 16px;
  }
`;

export const ContainerCardsCarousel = styled.div`
  overflow: hidden;
  width: 100%;
`;

export const ContainerCards = styled.div`
  display: flex;
  gap: 11px;

  @media (max-width: 767px) {
    gap: 3px;
  }
`;

export const CarouselBtn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  width: 0;
  padding: 0;

  @media (max-width: 767px) {
    display: none;
  }
`;

export const BtnCarouselMobile = styled.div`
  display: none;
  @media (max-width: 767px) {
    display: flex;
    margin-top: 15px;
  }
`;
