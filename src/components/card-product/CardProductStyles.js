import styled from 'styled-components';

export const ContainerCardProduct = styled.div`
  width: 246px;
  height: 402px;
  flex-shrink: 0;
  border-radius: 6px;
  background: var(--white-color);
  box-shadow: 0px 2px 6px 0px #cccaca;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin: 2px;

  @media (max-width: 767px) {
    width: 160px;
    border-radius: 15px;
    height: 233px;
  }
`;

export const ContainerNameProduct = styled.div``;

export const ImgCardProduct = styled.img`
  width: 188px;
  height: 188px;

  @media (max-width: 767px) {
    width: 99px;
    height: 99px;
  }
`;

export const TitleCardProduct = styled.p`
  color: var(--grey-color);
  text-align: center;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  margin: 0;

  @media (max-width: 767px) {
    font-size: 12px;
  }
`;

export const PriceCardProduct = styled.span`
  color: var(--lightblack-color);

  text-align: center;
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  @media (max-width: 767px) {
    font-size: 12px;
  }
`;
