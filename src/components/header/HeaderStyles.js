import styled from 'styled-components';

export const ContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 40px;
  max-width: 1440px;
  padding: 14px 70px;
`;

export const SearchBar = styled.div`
  display: flex;
  width: 515px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 48px;
  border: 1px solid var(--bordergrey-color);
  align-items: center;
  padding: 0px 10px;
  background: #fff;
`;

export const InputSearchBar = styled.input`
  width: 100%;
  border: none;
  height: 70%;
  margin: 0px 10px;
`;

export const ContainerIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
