import styled from 'styled-components';

export const BtnShop = styled.button`
  color: var(--red-color);
  width: 117px;
  height: 33px;
  flex-shrink: 0;
  border-radius: 20px;
  border: 1px solid var(--red-color);
  text-align: center;
  font-family: 'Encode Sans', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  background-color: transparent;

  @media (max-width: 767px) {
    font-size: 10px;
    height: 16px;
    width: auto;
  }
`;
