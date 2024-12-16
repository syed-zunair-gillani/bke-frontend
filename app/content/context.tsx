'use client';

import { createContext, ReactNode } from 'react';
import { contentConfig, ContentConfig } from './config';

export const ContentContext = createContext<ContentConfig>(contentConfig);

interface ContentProviderProps {
  children: ReactNode;
  content?: Partial<ContentConfig>;
}

export function ContentProvider({ children, content = contentConfig }: ContentProviderProps) {
  return (
    <ContentContext.Provider value={{ ...contentConfig, ...content }}>
      {children}
    </ContentContext.Provider>
  );
}