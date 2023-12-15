import React, { useState } from 'react';
import {
  ContainerDesktopMobile,
  SearchBar,
  InputSearchBar,
  ContainerIcons,
  ContainerHalfHeader,
} from './HeaderStyles';
import { SearchIcon } from './search/SearchIcon';
import { Logo } from '../logo/Logo';
import { MyAccount } from './user/MyAccount';
import { CartIcon } from './cart/CartIcon';
import { IconMenu } from './menu/IconMenu';
import { scrollToTop } from '../../App';
import { NavDesktop } from '../nav/NavDesktop';
import { NavMobile } from '../nav/NavMobile';
import {
  BtnExitMenu,
  ContainerNavItemMobile,
  ContainerTitleMenuMobile,
} from '../nav/NavStyles';
import { NavItemLink } from '../nav/NavItemLink';
import { FireIcon } from '../nav/FireIcon';
import { IconExit } from './exit/IconExit';

export const MobileHeader = () => {
  const [click, setClick] = useState(false);
  const handlerMenu = () => {
    setClick(!click);
    scrollToTop();
  };
  return (
    <ContainerDesktopMobile>
      <ContainerHalfHeader style={{ padding: '10px 20px', height: '40px' }}>
        <button
          onClick={handlerMenu}
          style={{
            backgroundColor: 'transparent',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          <IconMenu />
        </button>

        <Logo color="--blue-color" />
        <ContainerIcons>
          <MyAccount />
          <CartIcon />
        </ContainerIcons>
      </ContainerHalfHeader>

      <ContainerNavItemMobile click={click}>
        <ContainerTitleMenuMobile>
          <div
            style={{
              marginLeft: '27px',
              paddingTop: '10px',
              paddingBottom: '20px',
            }}
          >
            <Logo color="--blue-color" />
          </div>
          <BtnExitMenu onClick={handlerMenu}>
            <IconExit />
          </BtnExitMenu>
        </ContainerTitleMenuMobile>

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
      </ContainerNavItemMobile>

      <ContainerHalfHeader>
        <SearchBar>
          <InputSearchBar />
          <SearchIcon />
        </SearchBar>
      </ContainerHalfHeader>
    </ContainerDesktopMobile>
  );
};
