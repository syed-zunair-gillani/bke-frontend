export const contentConfig = {
  company: {
    name: 'BKE Logistics LLC',
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
};

export type ContentConfig = typeof contentConfig;