import { type Metadata } from "next";

import { siteUrl } from "../siteConfig";

export const metadata: Metadata = {
  title: "About Us | Gold Lion Painting Inc",
  description:
    "Learn about Gold Lion Painting Inc, our painting team, service values, and the residential painting standards we bring to Manatee County homes.",
  alternates: {
    canonical: "/about-us",
  },
  openGraph: {
    title: "About Us | Gold Lion Painting Inc",
    description:
      "Learn about Gold Lion Painting Inc, our painting team, service values, and the residential painting standards we bring to Manatee County homes.",
    url: `${siteUrl}/about-us`,
    images: [
      {
        url: "/services/exterior-painting-manatee-county.jpg",
        width: 1365,
        height: 768,
        alt: "Gold Lion Painting exterior painting project in Manatee County",
      },
    ],
  },
};

export default function AboutUsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
