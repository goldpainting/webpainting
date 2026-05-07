import {
  businessAddress,
  businessEmail,
  businessHours,
  businessName,
  businessPhone,
  googleMapsHref,
  googleRatingValue,
  googleReviewsHref,
  googleReviewCount,
  sameAsProfiles,
  serviceAreaNames,
  siteUrl,
} from "./siteConfig";

export function buildLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HousePainter",
    name: businessName,
    url: siteUrl,
    telephone: businessPhone,
    email: businessEmail,
    address: businessAddress,
    hasMap: googleMapsHref,
    openingHours: ["Mo-Sa 08:00-20:00"],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "08:00",
        closes: "20:00",
      },
    ],
    sameAs: sameAsProfiles,
    image: `${siteUrl}/gold-lion-painting-logo-512.png`,
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: Number(googleRatingValue),
      reviewCount: Number(googleReviewCount),
    },
    areaServed: serviceAreaNames.map((area) => ({
      "@type": "City",
      name: `${area}, FL`,
    })),
    makesOffer: [
      "Interior Painting",
      "Exterior Painting",
      "Cabinet Painting",
      "Cabinet Refinishing",
      "Color Consultation",
    ].map((serviceType) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: serviceType,
        serviceType,
        provider: {
          "@type": "HousePainter",
          name: businessName,
          url: siteUrl,
        },
      },
    })),
    potentialAction: {
      "@type": "ViewAction",
      target: googleReviewsHref,
      name: "Read Google Reviews",
    },
    description: `${businessHours}. Serving ${serviceAreaNames.join(", ")}.`,
  };
}

type BuildLandingPageSchemaInput = {
  title: string;
  description: string;
  canonical: string;
  image: string;
  pageType: "area" | "service";
  label: string;
};

function absoluteUrl(pathOrUrl: string) {
  return pathOrUrl.startsWith("http") ? pathOrUrl : `${siteUrl}${pathOrUrl}`;
}

function cleanAreaLabel(label: string) {
  return label.replace(/\s+Painting$/i, "").trim();
}

function buildAreaServed(input: BuildLandingPageSchemaInput) {
  if (input.pageType === "area") {
    return [
      {
        "@type": "City",
        name: `${cleanAreaLabel(input.label)}, FL`,
      },
    ];
  }

  return serviceAreaNames.map((area) => ({
    "@type": "City",
    name: `${area}, FL`,
  }));
}

export function buildLandingPageSchema(input: BuildLandingPageSchemaInput) {
  const pageUrl = absoluteUrl(input.canonical);
  const imageUrl = absoluteUrl(input.image);
  const areaServed = buildAreaServed(input);
  const serviceType =
    input.pageType === "service"
      ? input.label
      : [
          "Interior Painting",
          "Exterior Painting",
          "Cabinet Painting",
          "Cabinet Refinishing",
          "Color Consultation",
        ];

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: input.title,
        description: input.description,
        isPartOf: {
          "@type": "WebSite",
          "@id": `${siteUrl}/#website`,
          name: businessName,
          url: siteUrl,
        },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: imageUrl,
        },
        mainEntity: {
          "@id": `${pageUrl}#housepainter`,
        },
      },
      {
        "@type": "HousePainter",
        "@id": `${pageUrl}#housepainter`,
        name: `${businessName} - ${input.title}`,
        url: pageUrl,
        telephone: businessPhone,
        email: businessEmail,
        address: businessAddress,
        hasMap: googleMapsHref,
        image: imageUrl,
        logo: `${siteUrl}/gold-lion-painting-logo-512.png`,
        priceRange: "$$",
        openingHours: ["Mo-Sa 08:00-20:00"],
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
            opens: "08:00",
            closes: "20:00",
          },
        ],
        areaServed,
        sameAs: sameAsProfiles,
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: Number(googleRatingValue),
          reviewCount: Number(googleReviewCount),
        },
        makesOffer: {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name:
              input.pageType === "service"
                ? input.label
                : `Residential painting services in ${cleanAreaLabel(input.label)}, FL`,
            serviceType,
            areaServed,
            provider: {
              "@id": `${pageUrl}#housepainter`,
            },
          },
        },
        potentialAction: [
          {
            "@type": "ReserveAction",
            target: `${siteUrl}/contact-us`,
            name: "Request a painting estimate",
          },
          {
            "@type": "ViewAction",
            target: googleReviewsHref,
            name: "Read Google Reviews",
          },
        ],
        mainEntityOfPage: {
          "@id": `${pageUrl}#webpage`,
        },
        description: input.description,
      },
    ],
  };
}
