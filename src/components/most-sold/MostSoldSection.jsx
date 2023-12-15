import React from 'react';
import { ReusableTitle } from '../titles/ReusableTitle';
import { ContainerMostSold } from './MostSoldSectionStyles';
import { Carousel } from '../carousel/Carousel';
import { CardProduct } from '../card-product/CardProduct';
import { RedCirclesIcon } from '../carousel/RedCirclesIcon';

export const MostSoldSection = () => {
  return (
    <ContainerMostSold>
      <ReusableTitle color="--black-color">Los mas vendidos</ReusableTitle>
      <Carousel icon={<RedCirclesIcon />}>
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
