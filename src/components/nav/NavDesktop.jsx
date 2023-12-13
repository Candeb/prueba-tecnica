import React from 'react';
import { ContainerNav, ContainerNavItem } from './NavStyles';
import { FireIcon } from './FireIcon';
import { NavItemLink } from './NavItemLink';

export const NavDesktop = () => {
  return (
    <ContainerNav>
      <ContainerNavItem>
        <NavItemLink color="--grey-color" fontWeight="500">
          Muebles
        </NavItemLink>
        <NavItemLink color="--grey-color" fontWeight="500">
          Calzado
        </NavItemLink>
        <NavItemLink color="--grey-color" fontWeight="500">
          Colchones
        </NavItemLink>
        <NavItemLink color="--grey-color" fontWeight="500">
          Herramientas
        </NavItemLink>
        <NavItemLink color="--red-color" fontWeight="600">
          Ofertas <FireIcon />{' '}
        </NavItemLink>
      </ContainerNavItem>
    </ContainerNav>
  );
};
