export const themeConfig = {
  colors: {
    primary: {
      50: '#eff6ff',
      100: '#dbeafe',
      200: '#bfdbfe',
      300: '#93c5fd',
      400: '#60a5fa',
      500: '#3b82f6',
      600: '#2563eb',
      700: '#1d4ed8',
      800: '#1e40af',
      900: '#1e3a8a',
    },
    secondary: {
      50: '#f8fafc',
      100: '#f1f5f9',
      200: '#e2e8f0',
      300: '#cbd5e1',
      400: '#94a3b8',
      500: '#64748b',
      600: '#475569',
      700: '#334155',
      800: '#1e293b',
      900: '#0f172a',
    },
    background: {
      primary: '#0a0c10',
      card: '#1a1d25',
      nav: '#1a1d25',
    },
    text: {
      primary: '#e5e7eb',
      secondary: '#9ca3af',
      muted: '#6b7280',
    }
  },
  effects: {
    glow: {
      primary: '0 0 20px rgba(59, 130, 246, 0.4)',
      secondary: '0 0 15px rgba(59, 130, 246, 0.15)',
    },
    shadows: {
      sm: 'shadow-[0_8px_12px_-1px_rgba(0,0,0,0.7),0_4px_8px_-1px_rgba(0,0,0,0.2),0_0_15px_rgba(59,130,246,0.15)]',
      md: 'shadow-[0_15px_25px_-3px_rgba(0,0,0,0.7),0_8px_12px_-2px_rgba(0,0,0,0.2),0_0_30px_rgba(59,130,246,0.3)]',
      lg: 'shadow-[0_25px_35px_-5px_rgba(0,0,0,0.7),0_15px_20px_-5px_rgba(0,0,0,0.2),0_0_45px_rgba(59,130,246,0.4)]'
    },
  },
  branding: {
    logo: {
      src: '/logo.svg',
      alt: 'BKE Logistics LLC',
      width: 160,
      height: 65
    }
  }
};

export type ThemeConfig = typeof themeConfig;