import { type Metadata } from "next";

import { siteUrl } from "../siteConfig";

export const metadata: Metadata = {
  title: "Cabinet Refinishing in Bradenton, Sarasota & Tampa Bay | Gold Lion Painting Inc",
  description:
    "Cabinet painting and refinishing in Bradenton, Sarasota, Tampa Bay, and nearby Florida service areas for kitchens, vanities, and built-ins using controlled prep.",
  alternates: {
    canonical: "/cabinet-painting-mejor",
  },
  openGraph: {
    title: "Cabinet Refinishing in Bradenton, Sarasota & Tampa Bay | Gold Lion Painting Inc",
    description:
      "Cabinet painting and refinishing in Bradenton, Sarasota, Tampa Bay, and nearby Florida service areas for kitchens, vanities, and built-ins using controlled prep.",
    url: `${siteUrl}/cabinet-painting-mejor`,
    images: [
      {
        url: "/services/custom-cabinet-painting-manatee-county.jpg",
        width: 1200,
        height: 900,
        alt: "Cabinet refinishing project by Gold Lion Painting Inc",
      },
    ],
  },
};

export default function CabinetPaintingMejorLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
