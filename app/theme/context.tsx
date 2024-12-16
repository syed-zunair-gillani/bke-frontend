'use client';

import { createContext, ReactNode } from 'react';
import { themeConfig, ThemeConfig } from './config';

export const ThemeContext = createContext<ThemeConfig>(themeConfig);

interface ThemeProviderProps {
  children: ReactNode;
  theme?: Partial<ThemeConfig>;
}

export function ThemeProvider({ children, theme = themeConfig }: ThemeProviderProps) {
  return (
    <ThemeContext.Provider value={{ ...themeConfig, ...theme }}>
      {children}
    </ThemeContext.Provider>
  );
}