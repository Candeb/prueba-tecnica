import React from 'react';
import {
  ContainerCardInfoSection,
  DetailCardInfoSection,
  ImgCardInfoSection,
  TitleCardInfoSection,
} from './InfoSectionStyles';

export const CardInfoSection = ({ cardInfo }) => {
  return (
    <ContainerCardInfoSection>
      <ImgCardInfoSection src={`${cardInfo.img}`} />
      <TitleCardInfoSection>{cardInfo.title}</TitleCardInfoSection>
      <DetailCardInfoSection>{cardInfo.description}</DetailCardInfoSection>
    </ContainerCardInfoSection>
  );
};
