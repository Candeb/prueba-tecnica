import React from 'react';
import { SectionTitle } from './ReusableTitleStyles';

export const ReusableTitle = ({ color, children }) => {
  return (
    <SectionTitle style={{ color: `var(${color})` }}>{children}</SectionTitle>
  );
};
