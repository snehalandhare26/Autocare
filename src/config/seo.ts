import { SEOMetadata, Breadcrumb, LocalBusinessSchema } from '../types/seo';

export const siteConfig = {
  name: 'AutoCare Plus',
  description: 'Premium auto repair and car care services with transparent pricing, same-day diagnostics, and secure Stripe payments in Bangalore',
  url: 'https://autocareplus.com',
  locale: 'en_IN',
  phone: '+91 98765 43210',
  email: 'contact@autocare.com',
  address: {
    streetAddress: '123 Auto Service Road, Koramangala',
    addressLocality: 'Bangalore',
    addressRegion: 'Karnataka',
    postalCode: '560034',
    addressCountry: 'IN'
  }
};

export const homePageMetadata: SEOMetadata = {
  title: 'AutoCare Plus - Premium Auto Repair & Car Care Services in Bangalore',
  description: 'Trusted car care with transparent pricing and fast turnaround. Same-day diagnostics, secure Stripe payments, live updates, and OEM parts. Book your service in Bangalore today.',
  keywords: 'auto repair bangalore, car service bangalore, car maintenance koramangala, bangalore car repair, vehicle service, auto care, engine diagnostics, brake service, ac repair, oem parts',
  canonicalUrl: siteConfig.url,
  ogImage: `${siteConfig.url}/og-image.jpg`,
  ogType: 'website',
  locale: siteConfig.locale
};

export const homePageBreadcrumbs: Breadcrumb[] = [
  { name: 'Home', url: siteConfig.url }
];

export const localBusinessData: LocalBusinessSchema = {
  name: siteConfig.name,
  description: siteConfig.description,
  image: 'https://images.pexels.com/photos/3806249/pexels-photo-3806249.jpeg',
  telephone: siteConfig.phone,
  email: siteConfig.email,
  address: siteConfig.address,
  geo: {
    latitude: 12.9346,
    longitude: 77.6265
  },
  openingHours: [
    'Mo-Sa 09:00-19:00',
    'Su 10:00-17:00'
  ],
  priceRange: '₹₹',
  services: [
    'General Service & Maintenance',
    'Engine Diagnostics',
    'AC Repair',
    'Brake & Suspension Service',
    'Body & Paint',
    'Tyres & Balancing'
  ]
};
