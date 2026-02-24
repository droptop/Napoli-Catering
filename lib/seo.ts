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
  const fullTitle = `${title} | ${siteName}`;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://napolicateringco.nl";
  const url = `${baseUrl}${path}`;

  return {
    metadataBase: new URL(baseUrl),
    title: fullTitle,
    description,
    keywords: [
      "Neapolitan Pizza Bases Netherlands",
      "Sourdough Pizza Bases Wholesale NL",
      "Authentic Italian Pizza Supply Amsterdam",
      "Ambient Pizza Bases Hospitality",
      "Pizza Oven Supply Netherlands",
      "Napoli Catering",
      "Pizza deeg bollen",
      "Pizza bodems groothandel",
    ],
    alternates: {
      canonical: url,
      languages: {
        'en-NL': `${baseUrl}${path}`,
        'nl-NL': `${baseUrl}/nl${path}`,
      },
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
    },
  };
};

export const generateJsonLd = (data: any) => {
  return {
    __html: JSON.stringify(data),
  };
};
