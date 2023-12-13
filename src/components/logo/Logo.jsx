import React from 'react';
import { LogoMiTienda } from './LogoStyles';

export const Logo = ({ color }) => {
  return (
    <LogoMiTienda style={{ color: `var(${color})` }}>Mi Tienda</LogoMiTienda>
  );
};
