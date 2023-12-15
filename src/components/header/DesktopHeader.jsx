import React from 'react';
import {
  ContainerDesktopHeader,
  ContainerIcons,
  InputSearchBar,
  SearchBar,
} from './HeaderStyles';
import { Logo } from '../logo/Logo';
import { MyAccount } from './user/MyAccount';
import { CartIcon } from './cart/CartIcon';
import { SearchIcon } from './search/SearchIcon';

export const DesktopHeader = () => {
  return (
    <ContainerDesktopHeader>
      <Logo color="--blue-color" />
      <SearchBar>
        <InputSearchBar />
        <SearchIcon />
      </SearchBar>
      <ContainerIcons>
        <MyAccount />
        <CartIcon />
      </ContainerIcons>
    </ContainerDesktopHeader>
  );
};
