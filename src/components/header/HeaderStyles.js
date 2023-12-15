import styled from 'styled-components';

export const ContainerDesktopHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  max-width: 1440px;
  padding: 14px 70px;

  @media (max-width: 767px) {
    display: none; /* mobile */
  }
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

  @media (max-width: 767px) {
    width: 85%;
    padding: 0px 16px;
    margin: 0 auto;
  }
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

  @media (max-width: 767px) {
    gap: 25px;
  }
`;

export const ContainerDesktopMobile = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    display: none; /* desktop */
  }
`;

export const ContainerHalfHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
