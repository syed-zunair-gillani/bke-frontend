'use client';

import { useContext } from 'react';
import { ContentContext } from '../context';

export const useContent = () => {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
};