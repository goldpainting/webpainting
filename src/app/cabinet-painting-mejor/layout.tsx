import { type Metadata } from "next";

import { siteUrl } from "../siteConfig";

export const metadata: Metadata = {
  title: "Cabinet Refinishing in Manatee County | Gold Lion Painting Inc",
  description:
    "Cabinet painting and refinishing in Manatee County for kitchens, vanities, and built-ins using controlled prep and cabinet-grade finishes.",
  alternates: {
    canonical: "/cabinet-painting-mejor",
  },
  openGraph: {
    title: "Cabinet Refinishing in Manatee County | Gold Lion Painting Inc",
    description:
      "Cabinet painting and refinishing in Manatee County for kitchens, vanities, and built-ins using controlled prep and cabinet-grade finishes.",
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
