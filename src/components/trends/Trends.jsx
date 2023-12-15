import React from 'react';
import { ContainerTrends } from './TrendsStyles';
import { Carousel } from '../carousel/Carousel';
import { CardProduct } from '../card-product/CardProduct';
import { ReusableTitle } from '../titles/ReusableTitle';
import { CirclesIcon } from '../hero/CirclesIcon';

export const Trends = () => {
  return (
    <ContainerTrends>
      <ReusableTitle color="--white-color"> Tendencias </ReusableTitle>
      <Carousel icon={<CirclesIcon />}>
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
    </ContainerTrends>
  );
};
