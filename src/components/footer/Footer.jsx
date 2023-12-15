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
  DataFiscal,
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
          <BtnFooter> Botón de arrepentimiento</BtnFooter>
        </ContainerFooterInfo>

        <Logo
          color="--white-color"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        />

        <ContainerFooterInfo>
          <ContainerItemFooter style={{ gap: '10px' }}>
            <ItemFooter style={{ marginTop: '10px' }}>
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
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
          }}
        >
          <ItemCopyright>Powered by Pierce commerce</ItemCopyright>
          <ItemCopyright>
            <IconPierce />
          </ItemCopyright>
          <img
            src="https://github.com/Candeb/prueba-tecnica/blob/main/src/assets/vtex.png?raw=true"
            style={{ width: '51.093px', height: '19.679px' }}
          />{' '}
        </div>
        <div
          style={{
            display: 'flex',

            gap: '150px',
          }}
        >
          <ItemCopyright>© 2023 MateuSports</ItemCopyright>
          <DataFiscal src="https://github.com/Candeb/prueba-tecnica/blob/main/src/assets/datafiscal.jpg?raw=true" />
        </div>
      </ContainerCopyright>
    </ContainerFooter>
  );
};
