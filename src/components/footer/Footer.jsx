import React from 'react';
import {
  BtnFooter,
  ContainerContact,
  ContainerFooter,
  ContainerFooterInfo,
  ContainerItemFooter,
  ItemContact,
  ItemFooter,
  ContainerCopyright,
} from './FooterStyles';
import { Logo } from '../logo/Logo';
import { IconLocation } from './IconLocation';

export const Footer = () => {
  return (
    <ContainerFooter>
      <ContainerFooterInfo>
        <ContainerItemFooter>
          <ItemFooter>Condiciones</ItemFooter>
          <ItemFooter>Trabaja con nosotros</ItemFooter>
          <ItemFooter>Medios de pago</ItemFooter>
          <ItemFooter>Preguntas frecuentes</ItemFooter>
        </ContainerItemFooter>{' '}
        <BtnFooter> Boton de arrepentimiento</BtnFooter>
      </ContainerFooterInfo>

      <Logo color="--white-color" />

      <ContainerFooterInfo>
        <ContainerItemFooter>
          <ItemFooter>
            {' '}
            <IconLocation /> Sucursales
          </ItemFooter>
        </ContainerItemFooter>
        <ContainerContact>
          <ItemContact>Whatsapp 2215137270</ItemContact>
          <ItemContact>ecommerce@mateu.com.ar</ItemContact>
          <ItemContact>La Plata 1900, Buenos Aires, Argentina</ItemContact>
        </ContainerContact>
      </ContainerFooterInfo>

      <ContainerCopyrightght>
        <div>
          <ItemCopyright>Powered by Pierce commerce</ItemCopyright>
        </div>
        <div>
          <ItemCopyright>© 2023 MateuSports</ItemCopyright>
        </div>
      </ContainerCopyrightght>
    </ContainerFooter>
  );
};
