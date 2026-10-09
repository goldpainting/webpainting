import { type Metadata } from "next";

import { siteUrl } from "../siteConfig";

// @next-codemod-ignore Cache Components adoption: this segment temporarily allows blocking.
// Remove this opt-out after verifying the segment passes validation without it.
// See: https://nextjs.org/docs/app/guides/migrating-to-cache-components
export const instant = false;

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
