import React from 'react';
import { ContainerHero, HeroBanner } from './HeroStyles';
import { CirclesIcon } from './CirclesIcon';

export const Hero = () => {
  return (
    <ContainerHero>
      <HeroBanner src="https://github.com/Candeb/prueba-tecnica/blob/main/src/assets/banner.jpg?raw=true" />
      <div
        style={{
          position: 'relative',
          top: '-42px',
          right: '-628px',
          width: '100px',
        }}
      >
        <CirclesIcon />
      </div>
    </ContainerHero>
  );
};
