import styled from 'styled-components';

export const ContainerTrends = styled.div`
  background-color: var(--red-color);
  display: flex;
  margin-top: 80px;
  padding: 0px 70px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex-shrink: 0;

  @media (max-width: 767px) {
    margin-top: 30px;
    padding: 0;
  }
`;
