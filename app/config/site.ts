export const siteConfig = {
  branding: {
    logo: {
      src: '/images/logo.svg',
      alt: 'BKE Logistics LLC',
      width: 180,
      height: 70,
      padding: {
        x: 3,
        y: 2
      }
    }
  },
  theme: {
    colors: {
      primary: '#3b82f6',
      secondary: '#1e293b',
      accent: '#60a5fa',
      background: {
        primary: '#0a0c10',
        card: '#1a1d25',
        nav: '#1a1d25'
      },
      text: {
        primary: '#e5e7eb',
        secondary: '#9ca3af',
        muted: '#6b7280'
      }
    },
    effects: {
      glow: {
        primary: '0 0 20px rgba(59, 130, 246, 0.4)',
        secondary: '0 0 15px rgba(59, 130, 246, 0.15)'
      },
      shadows: {
        sm: '0 8px 12px -1px rgba(0, 0, 0, 0.7), 0 4px 8px -1px rgba(0, 0, 0, 0.2)',
        md: '0 15px 25px -3px rgba(0, 0, 0, 0.7), 0 8px 12px -2px rgba(0, 0, 0, 0.2)',
        lg: '0 25px 35px -5px rgba(0, 0, 0, 0.7), 0 15px 20px -5px rgba(0, 0, 0, 0.2)'
      }
    }
  },
  content: {
    company: {
      name: 'BKE Logistics LLC',
      tagline: 'Your Trusted Partner in Flatbed Freight',
      description: 'Specialized in flatbed transportation solutions with nationwide coverage and 24/7 dedicated support',
      contact: {
        phone: '1-800-555-0123',
        email: 'contact@bkelogistics.com',
        address: '123 Transport Way, Suite 100, Logistics City, LC 12345'
      },
      social: {
        twitter: 'https://twitter.com/bkelogistics',
        linkedin: 'https://linkedin.com/company/bkelogistics'
      }
    },
    navigation: {
      links: [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/services', label: 'Services' },
        { href: '/blog', label: 'Blog' },
        { href: '/contact', label: 'Contact' }
      ],
      cta: {
        label: 'Request a Quote',
        href: '/quote'
      }
    },
    footer: {
      copyright: 'All rights reserved.',
      links: [
        { href: '/privacy-policy', label: 'Privacy Policy' },
        { href: '/terms-of-service', label: 'Terms of Service' }
      ]
    }
  }
};

export type SiteConfig = typeof siteConfig;