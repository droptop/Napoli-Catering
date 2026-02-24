import { Metadata } from "next";

interface SeoProps {
  title: string;
  description: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
}

export const getMetadata = ({
  title,
  description,
  path = "",
  image = "/og.jpg",
  noIndex = false,
}: SeoProps): Metadata => {
  const siteName = "Napoli Catering Co.";
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://napolicateringco.nl";
  const url = `${baseUrl}${path}`;

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: title,
      template: `%s | ${siteName}`,
    },
    description,
    keywords: [
      "pizzabodem horeca",
      "pizzabodems groothandel",
      "Napolitaanse pizzabodems Nederland",
      "ambient pizzabodems",
      "pizzabodems zonder vriezer",
      "authentieke italiaanse pizzabodems",
      "pizzabodems evenementen catering",
      "kant-en-klare pizzabodems",
      "sourdough pizza bases Netherlands",
      "Neapolitan pizza bases wholesale",
      "pizza bases hospitality Netherlands",
      "horeca pizza supplies",
    ],
    alternates: {
      canonical: url,
      languages: {
        "nl-NL": url,
        "x-default": url,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName,
      locale: "nl_NL",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  };
};

export const generateJsonLd = (data: object) => {
  return {
    __html: JSON.stringify(data),
  };
};