import React from 'react';
import { ContainerInfoSection } from './InfoSectionStyles';
import { cardsInfo } from '../../mock/mockInfo';
import { CardInfoSection } from './CardInfoSection';

export const InfoSection = () => {
  return (
    <ContainerInfoSection>
      {cardsInfo.map((cardInfo) => (
        <CardInfoSection
          key={cardInfo.id} // Agrega una clave única aquí
          cardInfo={cardInfo}
        />
      ))}
    </ContainerInfoSection>
  );
};
