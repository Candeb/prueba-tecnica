import React from 'react';
import {
  ContainerFooterMobile,
  ContainerFooterDesktopInfo,
  ContainerItemFooterDesktop,
  ItemFooterDesktop,
  BtnFooterDesktop,
  ContainerContact,
  ItemContact,
  ContainerCopyright,
  ItemCopyright,
  DataFiscal,
  ContainerHalfFooterMobile,
} from './FooterStyles';
import { Logo } from '../logo/Logo';
import { IconLocation } from './IconLocation';
import { IconPierce } from './IconPierce';

export const FooterMobile = () => {
  return (
    <ContainerFooterMobile>
      <ContainerHalfFooterMobile>
        <Logo
          color="--white-color"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        />

        <ContainerFooterDesktopInfo>
          <ContainerItemFooterDesktop>
            <ItemFooterDesktop>Condiciones</ItemFooterDesktop>
            <ItemFooterDesktop>Trabaja con nosotros</ItemFooterDesktop>
            <ItemFooterDesktop>Medios de pago</ItemFooterDesktop>
            <ItemFooterDesktop>Preguntas frecuentes</ItemFooterDesktop>
          </ContainerItemFooterDesktop>{' '}
          <BtnFooterDesktop> Botón de arrepentimiento</BtnFooterDesktop>
        </ContainerFooterDesktopInfo>

        <ContainerFooterDesktopInfo>
          <ContainerItemFooterDesktop style={{ gap: '10px' }}>
            <ItemFooterDesktop style={{ marginTop: '35px' }}>
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
      </ContainerHalfFooterMobile>

      <ContainerCopyright>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '7px',
            justifyContent: 'center',
          }}
        >
          <ItemCopyright>Powered by Pierce commerce</ItemCopyright>
          <ItemCopyright>
            <IconPierce />
          </ItemCopyright>
        </div>

        <ItemCopyright>© 2023 MateuSports</ItemCopyright>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '45px',
            justifyContent: 'center',
            margin: '25px 0',
          }}
        >
          <DataFiscal src="https://github.com/Candeb/prueba-tecnica/blob/main/src/assets/datafiscal.jpg?raw=true" />
          <img
            src="https://github.com/Candeb/prueba-tecnica/blob/main/src/assets/vtex.png?raw=true"
            style={{ width: '51.093px', height: '19.679px' }}
          />
        </div>
      </ContainerCopyright>
    </ContainerFooterMobile>
  );
};
