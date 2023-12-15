import React from 'react';
import {
  BtnFooterDesktop,
  ContainerContact,
  ContainerFooterDesktop,
  ContainerFooterDesktopInfo,
  ContainerItemFooterDesktop,
  ItemContact,
  ItemFooterDesktop,
  ContainerCopyright,
  ItemCopyright,
  DataFiscal,
} from './FooterStyles';
import { Logo } from '../logo/Logo';
import { IconLocation } from './IconLocation';
import { IconPierce } from './IconPierce';

export const FooterDesktop = () => {
  return (
    <ContainerFooterDesktop>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        <ContainerFooterDesktopInfo>
          <ContainerItemFooterDesktop>
            <ItemFooterDesktop>Condiciones</ItemFooterDesktop>
            <ItemFooterDesktop>Trabaja con nosotros</ItemFooterDesktop>
            <ItemFooterDesktop>Medios de pago</ItemFooterDesktop>
            <ItemFooterDesktop>Preguntas frecuentes</ItemFooterDesktop>
          </ContainerItemFooterDesktop>{' '}
          <BtnFooterDesktop> Botón de arrepentimiento</BtnFooterDesktop>
        </ContainerFooterDesktopInfo>

        <Logo
          color="--white-color"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        />

        <ContainerFooterDesktopInfo>
          <ContainerItemFooterDesktop style={{ gap: '10px' }}>
            <ItemFooterDesktop style={{ marginTop: '10px' }}>
              {' '}
              <IconLocation /> Sucursales
            </ItemFooterDesktop>
          </ContainerItemFooterDesktop>
          <ContainerContact>
            <ItemContact>Whatsapp 2215137270</ItemContact>
            <ItemContact>ecommerce@mateu.com.ar</ItemContact>
            <ItemContact>La Plata 1900, Buenos Aires, Argentina</ItemContact>
          </ContainerContact>
        </ContainerFooterDesktopInfo>
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
    </ContainerFooterDesktop>
  );
};
