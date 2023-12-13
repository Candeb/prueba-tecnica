import React from 'react';
import { NavItem } from './NavStyles';

export const NavItemLink = ({ children, color, fontWeight }) => {
  return (
    <NavItem style={{ color: `var(${color})`, fontWeight: `${fontWeight}` }}>
      {children}
    </NavItem>
  );
};
