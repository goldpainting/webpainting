import type { NextConfig } from "next";

const config: NextConfig = {
  async redirects() {
    return [
      {
        source: "/interior-painting-upgrade",
        destination: "/interior-painting",
        permanent: true,
      },
      {
        source: "/exterior-painting-upgrade",
        destination: "/exterior-painting",
        permanent: true,
      },
      {
        source: "/cabinet-painting-mejor",
        destination: "/cabinet-painting",
        permanent: true,
      },
      {
        source: "/painters-sarasota-fl",
        destination: "/sarasota",
        permanent: true,
      },
      {
        source: "/cabinet-refinishing-painting",
        destination: "/cabinet-painting",
        permanent: true,
      },
      {
        source: "/residential-painting",
        destination: "/",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.leadconnectorhq.com",
      },
      {
        protocol: "https",
        hostname: "lionpaintingservicesfl.com",
      },
      {
        protocol: "https",
        hostname: "assets.cdn.filesafe.space",
      },
    ],
  },
};

export default config;
