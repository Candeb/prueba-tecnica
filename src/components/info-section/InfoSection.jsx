import React from 'react';
import {
  ContainerInfoSection,
  ContainerCardsInfoSection,
  ContainerCardsInfoSectionMobile,
  ContainerCardInfoSection,
  ImgCardInfoSection,
  TitleCardInfoSection,
  DetailCardInfoSection,
} from './InfoSectionStyles';
import { cardsInfo } from '../../mock/mockInfo';
import { CardInfoSection } from './CardInfoSection';
import { BlackCirclesIcon } from '../carousel/BlackCirclesIcon';

export const InfoSection = () => {
  return (
    <ContainerInfoSection>
      <ContainerCardsInfoSection>
        {cardsInfo.map((cardInfo) => (
          <CardInfoSection
            key={cardInfo.id} // Agrega una clave única aquí
            cardInfo={cardInfo}
          />
        ))}
      </ContainerCardsInfoSection>
      <ContainerCardsInfoSectionMobile>
        <ContainerCardInfoSection>
          <ImgCardInfoSection src="https://github.com/Candeb/prueba-tecnica/blob/main/src/assets/cart.jpg?raw=true" />
          <TitleCardInfoSection>
            {' '}
            Elegí los productos que vas a comprar{' '}
          </TitleCardInfoSection>
          <DetailCardInfoSection>
            Si querés más de uno, sumalos a tu carrito.
          </DetailCardInfoSection>
        </ContainerCardInfoSection>
        <BlackCirclesIcon />
      </ContainerCardsInfoSectionMobile>
    </ContainerInfoSection>
  );
};
