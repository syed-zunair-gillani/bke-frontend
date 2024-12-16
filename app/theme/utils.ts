import { ThemeConfig } from './config';

export const generateCssVariables = (theme: ThemeConfig): string => {
  const variables: string[] = [];

  // Generate color variables
  Object.entries(theme.colors).forEach(([category, values]) => {
    if (typeof values === 'object') {
      Object.entries(values).forEach(([shade, value]) => {
        variables.push(`--color-${category}-${shade}: ${value};`);
      });
    } else {
      variables.push(`--color-${category}: ${values};`);
    }
  });

  // Generate effect variables
  Object.entries(theme.effects).forEach(([category, values]) => {
    Object.entries(values).forEach(([name, value]) => {
      variables.push(`--effect-${category}-${name}: ${value};`);
    });
  });

  return `:root {\n  ${variables.join('\n  ')}\n}`;
};