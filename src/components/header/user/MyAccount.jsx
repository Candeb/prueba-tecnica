import React from 'react';
import { MyAccountIcon } from './MyAccountIcon';
import { ContainerMyAccount, TitleMyAccount } from './MyAccountStyles';

export const MyAccount = () => {
  return (
    <ContainerMyAccount>
      <MyAccountIcon />
      <TitleMyAccount> Mi cuenta</TitleMyAccount>
    </ContainerMyAccount>
  );
};
