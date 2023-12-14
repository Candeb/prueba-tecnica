import React from 'react';
import {
  ContainerCardCategory,
  ContainerCategories,
  ContainerCardsCategories,
} from './CategoriesStyles';
import { ReusableTitle } from '../titles/ReusableTitle';
import { CardCategory } from './CardCategory';

export const Categories = () => {
  return (
    <ContainerCategories>
      <ReusableTitle color="--black-color">
        Visitá las categorías más populares
      </ReusableTitle>
      <ContainerCardsCategories>
        <ContainerCardCategory>
          <CardCategory
            bgImg="https://github.com/Candeb/prueba-tecnica/blob/main/src/assets/categoriazapatillas.jpg?raw=true"
            name="zapatillas"
            margin="0 10px 0 0"
          />
        </ContainerCardCategory>
        <ContainerCardCategory
          style={{ flexDirection: 'column', width: '644.144px' }}
        >
          <CardCategory
            bgImg="https://github.com/Candeb/prueba-tecnica/blob/main/src/assets/categoriafutbol.jpg?raw=true"
            name="futbol"
            margin="0"
          />
          <CardCategory
            bgImg="https://github.com/Candeb/prueba-tecnica/blob/main/src/assets/categoriacalzas.jpg?raw=true"
            name="calzas"
            margin="0"
          />
        </ContainerCardCategory>
        <ContainerCardCategory>
          <CardCategory
            bgImg="https://github.com/Candeb/prueba-tecnica/blob/main/src/assets/categoriapelotas.jpg?raw=true"
            name="pelotas"
            margin="0 0 0 10px"
          />
        </ContainerCardCategory>{' '}
      </ContainerCardsCategories>
    </ContainerCategories>
  );
};
