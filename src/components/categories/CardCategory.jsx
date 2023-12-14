import React from 'react';
import {
  CardContent,
  ContainerCardCategory,
  TitleCard,
} from './CategoriesStyles';

export const CardCategory = ({ bgImg, name, margin }) => {
  return (
    <ContainerCardCategory
      style={{ backgroundImage: `url(${bgImg})`, margin: `${margin}` }}
    >
      <CardContent>
        <TitleCard>{name}</TitleCard>
      </CardContent>
    </ContainerCardCategory>
  );
};
