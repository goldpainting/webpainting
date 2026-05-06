import {
  businessAddress,
  businessEmail,
  businessHours,
  businessName,
  businessPhone,
  googleMapsHref,
  googleReviewsHref,
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
    areaServed: serviceAreaNames.map((area) => ({
      "@type": "City",
      name: `${area}, FL`,
    })),
    serviceType: [
      "Interior Painting",
      "Exterior Painting",
      "Cabinet Painting",
      "Cabinet Refinishing",
      "Color Consultation",
    ],
    potentialAction: {
      "@type": "ViewAction",
      target: googleReviewsHref,
      name: "Read Google Reviews",
    },
    description: `${businessHours}. Serving ${serviceAreaNames.join(", ")}.`,
  };
}
