import { useEffect } from 'react';
import { SEOMetadata, Breadcrumb, LocalBusinessSchema } from '../types/seo';
import {
  updateMetaTags,
  generateBreadcrumbSchema,
  generateLocalBusinessSchema,
  injectJSONLD,
  removeJSONLD
} from '../utils/seo';

interface SEOHeadProps {
  metadata: SEOMetadata;
  breadcrumbs?: Breadcrumb[];
  localBusiness?: LocalBusinessSchema;
}

export const SEOHead = ({ metadata, breadcrumbs, localBusiness }: SEOHeadProps) => {
  useEffect(() => {
    updateMetaTags(metadata);

    const scripts: HTMLScriptElement[] = [];

    if (breadcrumbs && breadcrumbs.length > 0) {
      const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs);
      scripts.push(injectJSONLD(breadcrumbSchema));
    }

    if (localBusiness) {
      const businessSchema = generateLocalBusinessSchema(localBusiness);
      scripts.push(injectJSONLD(businessSchema));
    }

    return () => {
      scripts.forEach(script => removeJSONLD(script));
    };
  }, [metadata, breadcrumbs, localBusiness]);

  return null;
};
