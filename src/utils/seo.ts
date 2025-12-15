import { SEOMetadata, Breadcrumb, LocalBusinessSchema, ServiceSchema } from '../types/seo';

export const updateMetaTags = (metadata: SEOMetadata) => {
  document.title = metadata.title;

  const metaTags = [
    { name: 'description', content: metadata.description },
    { name: 'keywords', content: metadata.keywords || '' },
    { property: 'og:title', content: metadata.title },
    { property: 'og:description', content: metadata.description },
    { property: 'og:type', content: metadata.ogType || 'website' },
    { property: 'og:locale', content: metadata.locale || 'en_IN' },
    { property: 'og:image', content: metadata.ogImage || '' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: metadata.title },
    { name: 'twitter:description', content: metadata.description },
    { name: 'twitter:image', content: metadata.ogImage || '' },
  ];

  metaTags.forEach(({ name, property, content }) => {
    if (!content) return;

    const selector = name ? `meta[name="${name}"]` : `meta[property="${property}"]`;
    let element = document.querySelector(selector);

    if (!element) {
      element = document.createElement('meta');
      if (name) element.setAttribute('name', name);
      if (property) element.setAttribute('property', property);
      document.head.appendChild(element);
    }

    element.setAttribute('content', content);
  });

  if (metadata.canonicalUrl) {
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', metadata.canonicalUrl);
  }
};

export const generateBreadcrumbSchema = (breadcrumbs: Breadcrumb[]) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  };
};

export const generateLocalBusinessSchema = (business: LocalBusinessSchema) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'AutoRepair',
    name: business.name,
    description: business.description,
    image: business.image,
    telephone: business.telephone,
    email: business.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: business.address.streetAddress,
      addressLocality: business.address.addressLocality,
      addressRegion: business.address.addressRegion,
      postalCode: business.address.postalCode,
      addressCountry: business.address.addressCountry,
    },
    ...(business.geo && {
      geo: {
        '@type': 'GeoCoordinates',
        latitude: business.geo.latitude,
        longitude: business.geo.longitude,
      },
    }),
    ...(business.openingHours && { openingHoursSpecification: business.openingHours }),
    ...(business.priceRange && { priceRange: business.priceRange }),
    ...(business.services && { hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Auto Repair Services',
      itemListElement: business.services.map(service => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service,
        },
      })),
    }}),
  };
};

export const generateServiceSchema = (service: ServiceSchema) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'AutoRepair',
      name: service.provider.name,
      url: service.provider.url,
    },
    serviceType: service.serviceType,
    ...(service.areaServed && { areaServed: service.areaServed }),
  };
};

export const injectJSONLD = (schema: object) => {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.text = JSON.stringify(schema);
  document.head.appendChild(script);
  return script;
};

export const removeJSONLD = (script: HTMLScriptElement) => {
  if (script && script.parentNode) {
    script.parentNode.removeChild(script);
  }
};
