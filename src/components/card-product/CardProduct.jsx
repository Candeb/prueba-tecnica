import React from 'react';
import {
  ContainerCardProduct,
  ImgCardProduct,
  PriceCardProduct,
  TitleCardProduct,
  ContainerNameProduct,
} from './CardProductStyles';
import { ReusableButton } from '../buttons/ReusableButton/ReusableButton';

export const CardProduct = () => {
  return (
    <ContainerCardProduct>
      <ImgCardProduct src="https://github.com/Candeb/prueba-tecnica/blob/main/src/assets/lavarropas.png?raw=true" />

      <ContainerNameProduct>
        <TitleCardProduct>Samsung</TitleCardProduct>
        <TitleCardProduct>Smart Tv 75" UHD</TitleCardProduct>
      </ContainerNameProduct>
      <PriceCardProduct>$1.100.999</PriceCardProduct>
      <ReusableButton />
    </ContainerCardProduct>
  );
};
