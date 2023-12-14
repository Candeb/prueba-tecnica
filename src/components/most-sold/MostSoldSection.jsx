import React from 'react';
import { ReusableTitle } from '../titles/ReusableTitle';
import { ContainerMostSold } from './MostSoldSectionStyles';
import { Carousel } from '../carousel/Carousel';
import { CardProduct } from '../card-product/CardProduct';

export const MostSoldSection = () => {
  return (
    <ContainerMostSold>
      <ReusableTitle color="--black-color">Las mas vendidas</ReusableTitle>
      <Carousel>
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
      </Carousel>
    </ContainerMostSold>
  );
};
