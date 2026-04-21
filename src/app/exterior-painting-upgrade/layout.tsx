import { type Metadata } from "next";

import { siteUrl } from "../siteConfig";

export const metadata: Metadata = {
  title: "Exterior Painting Services in Manatee County | Gold Lion Painting Inc",
  description:
    "Exterior house painting in Manatee County with pressure washing, crack repair, prep-focused execution, and durable Sherwin-Williams coating systems.",
  alternates: {
    canonical: "/exterior-painting-upgrade",
  },
  openGraph: {
    title: "Exterior Painting Services in Manatee County | Gold Lion Painting Inc",
    description:
      "Exterior house painting in Manatee County with pressure washing, crack repair, prep-focused execution, and durable Sherwin-Williams coating systems.",
    url: `${siteUrl}/exterior-painting-upgrade`,
    images: [
      {
        url: "/holmesbeach/luxury-exterior-painting-holmes-beach-02.jpg",
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
