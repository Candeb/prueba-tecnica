import styled from 'styled-components';

export const ContainerCategories = styled.div`
  margin-top: 35px;
  padding: 0px 70px;

  @media (max-width: 767px) {
    margin-top: 0;
    padding: 0;
  }
`;
export const ContainerCardsCategories = styled.div`
  display: flex;
  height: 400px;
  padding: 25px 0px;
  gap: '10px';
  justify-content: space-between;

  @media (max-width: 767px) {
    display: none;
  }
`;
export const ContainerCardCategory = styled.div`
  height: 100%;
  display: flex;
  min-width: 316.216px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  gap: 10px;

  @media (max-width: 767px) {
    width: 100%;
    height: 288px;
  }
`;
export const CardContent = styled.div`
  display: flex;
  align-items: flex-end;
  @media (max-width: 767px) {
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`;

export const TitleCard = styled.p`
  color: var(--white-color);
  text-transform: uppercase;
  font-family: 'Rubik', sans-serif;
  font-size: 38px;
  margin-bottom: 16px;
  font-weight: 800;
  padding-left: 20px;
`;

export const ContaierCardsCategoriesMobile = styled.div`
  display: none;
  @media (max-width: 767px) {
    display: flex;
  }
`;
