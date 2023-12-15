import React from 'react';
import { ContainerHero, HeroBanner, ContainerCirclesIcon } from './HeroStyles';
import { CirclesIcon } from './CirclesIcon';

export const Hero = () => {
  return (
    <ContainerHero>
      <HeroBanner src="https://github.com/Candeb/prueba-tecnica/blob/main/src/assets/banner.jpg?raw=true" />
      <ContainerCirclesIcon>
        <CirclesIcon />
      </ContainerCirclesIcon>
    </ContainerHero>
  );
};
