import styled from 'styled-components';

export const ContainerNav = styled.div`
  padding: 32px 70px 14px 70px;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const ContainerNavItem = styled.ul`
  display: flex;
  gap: 24px;
  justify-content: flex-end;
  align-items: center;
  list-style: none;
  margin: 0;
`;

export const NavItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-style: normal;
  line-height: normal;
  gap: 8px;
  cursor: pointer;

  @media (max-width: 767px) {
    color: var(--grey-color);
    font-weight: 500;
    border-bottom: 1px solid black;
    width: 85%;
    justify-content: flex-start;
    padding: 15px 0px;
  }
`;

export const ContainerNavItemMobile = styled.div`
  display: none;

  @media (max-width: 767px) {
    display: ${({ click }) => (click ? 'flex' : 'none')};
    flex-direction: column;
    position: fixed;
    right: 0;
    width: 100%;
    align-items: center;
    transition: 0.7s all ease;
    background: var(--white-color);
    height: 100vh;
    z-index: 99;

    & > :nth-child(2) {
      margin-top: 30px;
    }
    & > :nth-child(6) {
      border: none;
    }
  }
`;
export const ContainerTitleMenuMobile = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0px 31px;
  height: 81px;
  border-bottom: 2px solid black;
`;

export const BtnExitMenu = styled.button`
  background-color: transparent;
  border: none;
  height: 37px;
  width: 30px;
  margin-bottom: 25px;
  margin-right: 19px;
  cursor: pointer;
`;
