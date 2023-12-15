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
  ItemCopyright,
} from './FooterStyles';
import { Logo } from '../logo/Logo';
import { IconLocation } from './IconLocation';
import { IconPierce } from './IconPierce';

export const Footer = () => {
  return (
    <ContainerFooter>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
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
      </div>

      <ContainerCopyright>
        <div>
          <ItemCopyright>Powered by Pierce commerce</ItemCopyright>
          <ItemCopyright>
            <IconPierce />
          </ItemCopyright>
          <img
            src="https://github.com/Candeb/prueba-tecnica/blob/main/src/assets/vtex.png?raw=true"
            style={{ width: '51.093px', height: '19.679px' }}
          />{' '}
        </div>
        <div>
          <ItemCopyright>© 2023 MateuSports</ItemCopyright>
        </div>
      </ContainerCopyright>
    </ContainerFooter>
  );
};
