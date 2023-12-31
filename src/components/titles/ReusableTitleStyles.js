import styled from 'styled-components';

export const SectionTitle = styled.h3`
  margin: 0;
  margin-top: 50px;
  font-family: 'Roboto', sans-serif;
  font-size: 32px;
  font-style: italic;
  font-weight: 800;
  line-height: 32px;
  text-transform: uppercase;

  @media (max-width: 767px) {
    font-size: 24px;
    padding: 0 16px;
    margin-top: 40px;
  }
`;
