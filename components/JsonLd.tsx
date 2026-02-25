import React from 'react';
import { generateJsonLd } from '@/lib/seo';

interface JsonLdProps {
  data: object;
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
        "sameAs": ["https://www.linkedin.com/company/napoli-catering-co"],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+31657603128",
          "email": "sales@napolicateringco.nl",
          "contactType": "sales",
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
        "@type": "FoodEstablishment",
        "name": "Napoli Catering Co.",
        "image": "https://napolicateringco.nl/og.jpg",
        "telephone": "+31657603128",
        "email": "sales@napolicateringco.nl",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Amsterdam",
          "addressCountry": "NL"
        },
        "url": "https://napolicateringco.nl",
        "priceRange": "$$",
        "servesCuisine": "Italian",
        "description": "Authentic Neapolitan sourdough pizza bases for professional kitchens and hospitality operators in the Netherlands."
      }}
    />
  );
};

export const FAQJsonLd = () => {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the shelf life of Napoli Catering Co. pizza bases?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our authentic Neapolitan sourdough pizza bases have an ambient shelf life of up to 3 months. No freezer storage is required."
            }
          },
          {
            "@type": "Question",
            "name": "Are the pizza bases preservative-free?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Our pizza bases contain no preservatives. The shelf life is achieved through advanced packaging technology, not additives."
            }
          },
          {
            "@type": "Question",
            "name": "What oven temperature is required?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our pizza bases work in conventional ovens at 240 degrees and above, as well as high-heat professional pizza ovens up to 360 degrees."
            }
          },
          {
            "@type": "Question",
            "name": "Do you supply to the Netherlands?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Napoli Catering Co. supplies authentic Neapolitan pizza bases to hospitality operators, catering companies, restaurants, bars, and sports clubs across the Netherlands."
            }
          },
          {
            "@type": "Question",
            "name": "Wat is de houdbaarheid van de pizzabodems?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Onze authentieke Napolitaanse pizzabodems zijn tot 3 maanden houdbaar bij kamertemperatuur. Geen vriezer nodig."
            }
          },
          {
            "@type": "Question",
            "name": "Zijn de pizzabodems geschikt voor horeca?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ja. Onze pizzabodems zijn speciaal ontworpen voor horeca, cateraars, restaurants, bars en sportclubs in Nederland."
            }
          }
        ]
      }}
    />
  );
};

export const ProductJsonLd = () => {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Napoli Catering Co. Products",
        "description": "Complete ecosystem for high-end Italian catering and hospitality operators in the Netherlands.",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "item": {
              "@type": "Product",
              "name": "Technical Sourdough Pizza Bases",
              "description": "24-hour fermented Neapolitan sourdough pizza bases. Ambient shelf life up to 3 months. No preservatives. Designed for high-volume hospitality.",
              "brand": { "@type": "Brand", "name": "Napoli Catering Co." },
              "countryOfOrigin": { "@type": "Country", "name": "Italy" },
              "offers": {
                "@type": "Offer",
                "availability": "https://schema.org/InStock",
                "priceCurrency": "EUR",
                "seller": { "@type": "Organization", "name": "Napoli Catering Co." }
              }
            }
          },
          {
            "@type": "ListItem",
            "position": 2,
            "item": {
              "@type": "Product",
              "name": "Dough Balls and Pizza Bases",
              "description": "Fresh Neapolitan and sourdough dough balls for artisan-style pizzas. 24-hour fermentation for perfect structure and digestibility.",
              "brand": { "@type": "Brand", "name": "Napoli Catering Co." },
              "countryOfOrigin": { "@type": "Country", "name": "Italy" },
              "offers": {
                "@type": "Offer",
                "availability": "https://schema.org/InStock",
                "priceCurrency": "EUR",
                "seller": { "@type": "Organization", "name": "Napoli Catering Co." }
              }
            }
          },
          {
            "@type": "ListItem",
            "position": 3,
            "item": {
              "@type": "Product",
              "name": "Specialised Pizza Ovens",
              "description": "State-of-the-art ovens engineered for authentic Neapolitan pizza. Reaches and maintains high temperatures for perfect leopard spotting and airy crusts.",
              "brand": { "@type": "Brand", "name": "Napoli Catering Co." },
              "offers": {
                "@type": "Offer",
                "availability": "https://schema.org/InStock",
                "priceCurrency": "EUR",
                "seller": { "@type": "Organization", "name": "Napoli Catering Co." }
              }
            }
          },
          {
            "@type": "ListItem",
            "position": 4,
            "item": {
              "@type": "Product",
              "name": "Neapolitan Ingredients",
              "description": "Full range of authentic Italian ingredients including San Marzano tomatoes, DOP mozzarella, and premium olive oils.",
              "brand": { "@type": "Brand", "name": "Napoli Catering Co." },
              "countryOfOrigin": { "@type": "Country", "name": "Italy" },
              "offers": {
                "@type": "Offer",
                "availability": "https://schema.org/InStock",
                "priceCurrency": "EUR",
                "seller": { "@type": "Organization", "name": "Napoli Catering Co." }
              }
            }
          },
          {
            "@type": "ListItem",
            "position": 5,
            "item": {
              "@type": "Product",
              "name": "Premium Burger Buns",
              "description": "High-quality soft and resilient burger buns designed for professional kitchen demands.",
              "brand": { "@type": "Brand", "name": "Napoli Catering Co." },
              "offers": {
                "@type": "Offer",
                "availability": "https://schema.org/InStock",
                "priceCurrency": "EUR",
                "seller": { "@type": "Organization", "name": "Napoli Catering Co." }
              }
            }
          }
        ]
      }}
    />
  );
};