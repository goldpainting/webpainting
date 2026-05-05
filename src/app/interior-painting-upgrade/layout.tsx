import { type Metadata } from "next";

import { siteUrl } from "../siteConfig";

export const metadata: Metadata = {
  title: "Interior Painting Services in Bradenton, Sarasota & Tampa Bay | Gold Lion Painting Inc",
  description:
    "Interior house painting in Bradenton, Sarasota, Tampa Bay, and nearby Florida service areas with drywall repair, trim painting, Sherwin-Williams systems, and a prep-first process.",
  alternates: {
    canonical: "/interior-painting-upgrade",
  },
  openGraph: {
    title: "Interior Painting Services in Bradenton, Sarasota & Tampa Bay | Gold Lion Painting Inc",
    description:
      "Interior house painting in Bradenton, Sarasota, Tampa Bay, and nearby Florida service areas with drywall repair, trim painting, Sherwin-Williams systems, and a prep-first process.",
    url: `${siteUrl}/interior-painting-upgrade`,
    images: [
      {
        url: "/parrish/Lluxury-interior-painting.jpg",
        width: 1200,
        height: 900,
        alt: "Luxury interior painting project by Gold Lion Painting Inc",
      },
    ],
  },
};

export default function InteriorPaintingUpgradeLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
