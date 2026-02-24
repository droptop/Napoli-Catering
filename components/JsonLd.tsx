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
              "name": "Dough Balls & Pizza Bases",
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