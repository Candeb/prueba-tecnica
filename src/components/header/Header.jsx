import React from 'react';
import {
  ContainerHeader,
  ContainerIcons,
  InputSearchBar,
  SearchBar,
} from './HeaderStyles';
import { Logo } from '../logo/Logo';
import { MyAccount } from './user/MyAccount';
import { CartIcon } from './cart/CartIcon';
import { SearchIcon } from './search/SearchIcon';

export const Header = () => {
  return (
    <ContainerHeader>
      <Logo color="--blue-color" />
      <SearchBar>
        <InputSearchBar />
        <SearchIcon />
      </SearchBar>
      <ContainerIcons>
        <MyAccount />
        <CartIcon />
      </ContainerIcons>
    </ContainerHeader>
  );
};
