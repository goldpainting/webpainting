import { type Metadata } from "next";

import { siteUrl } from "../siteConfig";

export const metadata: Metadata = {
  title: "Exterior Painting Services in Bradenton, Sarasota & Tampa Bay | Gold Lion Painting Inc",
  description:
    "Exterior house painting in Bradenton, Sarasota, Tampa Bay, and nearby Florida service areas with pressure washing, crack repair, prep-focused execution, and durable coating systems.",
  alternates: {
    canonical: "/exterior-painting-upgrade",
  },
  openGraph: {
    title: "Exterior Painting Services in Bradenton, Sarasota & Tampa Bay | Gold Lion Painting Inc",
    description:
      "Exterior house painting in Bradenton, Sarasota, Tampa Bay, and nearby Florida service areas with pressure washing, crack repair, prep-focused execution, and durable coating systems.",
    url: `${siteUrl}/exterior-painting-upgrade`,
    images: [
      {
        url: "/services/house-exterior-painting-manatee-county.jpg",
        width: 1200,
        height: 900,
        alt: "Luxury exterior painting project by Gold Lion Painting Inc",
      },
    ],
  },
};

export default function ExteriorPaintingUpgradeLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
