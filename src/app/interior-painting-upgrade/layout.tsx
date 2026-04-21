import { type Metadata } from "next";

import { siteUrl } from "../siteConfig";

export const metadata: Metadata = {
  title: "Interior Painting Services in Manatee County | Gold Lion Painting Inc",
  description:
    "Interior house painting in Manatee County with drywall repair, trim painting, Sherwin-Williams systems, and a prep-first process for cleaner finishes.",
  alternates: {
    canonical: "/interior-painting-upgrade",
  },
  openGraph: {
    title: "Interior Painting Services in Manatee County | Gold Lion Painting Inc",
    description:
      "Interior house painting in Manatee County with drywall repair, trim painting, Sherwin-Williams systems, and a prep-first process for cleaner finishes.",
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
