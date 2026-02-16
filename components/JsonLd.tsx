import React from 'react';
import { generateJsonLd } from '@/lib/seo';

interface JsonLdProps {
  data: any;
}

export const JsonLd: React.FC<JsonLdProps> = ({ data }) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={generateJsonLd(data)}
    />
  );
};

export const OrganizationJsonLd = () => {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Napoli Catering Co.",
        "url": "https://napolicateringco.nl",
        "logo": "https://napolicateringco.nl/logo.png",
        "sameAs": [
          "https://www.linkedin.com/company/napoli-catering-co"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "",
          "contactType": "customer service",
          "availableLanguage": ["English", "Dutch"]
        }
      }}
    />
  );
};

export const LocalBusinessJsonLd = () => {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Napoli Catering Co.",
        "image": "https://napolicateringco.nl/og.jpg",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Placeholder 123",
          "addressLocality": "Amsterdam",
          "postalCode": "1000 AB",
          "addressCountry": "NL"
        },
        "priceRange": "$$",
        "url": "https://napolicateringco.nl"
      }}
    />
  );
};
