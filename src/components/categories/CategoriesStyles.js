import styled from 'styled-components';

export const ContainerCategories = styled.div`
  margin-top: 35px;
  padding: 0px 70px;
`;
export const ContainerCardsCategories = styled.div`
  display: flex;
  height: 400px;
  padding: 25px 0px;
  gap: '10px';
  justify-content: space-between;
`;
export const ContainerCardCategory = styled.div`
  height: 100%;
  display: flex;
  min-width: 316.216px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  gap: 10px;
`;
export const CardContent = styled.div`
  display: flex;
  align-items: flex-end;
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
