import "~/styles/globals.css";

import { type Metadata } from "next";
import Script from "next/script";

import { Geist } from "next/font/google";
import Topbar from "./components/Topbar";
import {
  businessAddress,
  businessEmail,
  businessName,
  businessPhone,
  googleReviewsHref,
  sameAsProfiles,
  siteUrl,
} from "./siteConfig";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Gold Lion Painting Inc | Residential Painting in Manatee County",
    template: "%s | Gold Lion Painting Inc",
  },
  description:
    "Gold Lion Painting Inc provides interior painting, exterior house painting, and cabinet refinishing for homeowners across Manatee County, Florida.",
  keywords: [
    "Gold Lion Painting Inc",
    "Manatee County painters",
    "interior painting",
    "exterior painting",
    "cabinet refinishing",
    "Bradenton painters",
    "Lakewood Ranch painters",
  ],
  openGraph: {
    title: "Gold Lion Painting Inc | Residential Painting in Manatee County",
    description:
      "Interior painting, exterior house painting, and cabinet refinishing built around clean execution, durable finishes, and homeowner-friendly service.",
    siteName: "Gold Lion Painting Inc",
    type: "website",
    url: siteUrl,
    images: [
      {
        url: "/logo.jpg",
        width: 900,
        height: 900,
        alt: "Gold Lion Painting Inc logo",
      },
    ],
  },
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "HousePainter",
    name: businessName,
    url: siteUrl,
    telephone: businessPhone,
    email: businessEmail,
    address: businessAddress,
    openingHours: ["Mo-Su 06:00-22:00"],
    sameAs: sameAsProfiles,
    image: `${siteUrl}/logo.jpg`,
    priceRange: "$$",
    areaServed: [
      "Manatee County, FL",
      "Bradenton, FL",
      "Lakewood Ranch, FL",
      "Parrish, FL",
      "Palmetto, FL",
      "Ellenton, FL",
      "Anna Maria Island, FL",
      "Holmes Beach, FL",
    ],
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
  };

  return (
    <html lang="en" className={`${geist.variable}`}>
      <body>
        <Script
          id="gold-lion-painting-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Topbar />
        {children}
      </body>
    </html>
  );
}
