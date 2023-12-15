import styled from 'styled-components';

export const ContainerHero = styled.div``;

export const HeroBanner = styled.img`
  width: 100%;
  height: 427px;
  flex-shrink: 0;

  @media (max-width: 767px) {
    height: 140px;
    margin: 10px 0;
    object-fit: cover;
    object-position: left;
  }
`;

export const ContainerCirclesIcon = styled.div`
  position: relative;
  top: -42px;
  right: -628px;
  width: 100px;

  @media (max-width: 767px) {
    left: 118px;
    top: -35px;
  }
`;
