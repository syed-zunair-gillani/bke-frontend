'use client';

import { createContext, ReactNode } from 'react';
import { siteConfig, SiteConfig } from './site';

export const SiteContext = createContext<SiteConfig>(siteConfig);

interface SiteProviderProps {
  children: ReactNode;
  config?: Partial<SiteConfig>;
}

export function SiteProvider({ children, config = siteConfig }: SiteProviderProps) {
  return (
    <SiteContext.Provider value={{ ...siteConfig, ...config }}>
      {children}
    </SiteContext.Provider>
  );
}