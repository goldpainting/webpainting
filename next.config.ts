import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const config: NextConfig = {
  turbopack: {
    root: projectRoot,
  },
  experimental: {
    // Next.js 16.3 turned `useTypeScriptCli` on by default, which makes
    // `next build` shell out to the `tsc` binary owned by the `typescript`
    // package. This project aliases `typescript` to
    // `@typescript/typescript6`, whose binary is named `tsc6`, so the CLI
    // checker finds no `tsc` there and aborts the build claiming TypeScript
    // is not installed. Opting out restores the in-process JavaScript
    // compiler API, which the aliased TypeScript 6 does provide and which
    // also produces better Next.js code frames.
    //
    // Type checking still runs on TypeScript 7: `node_modules/.bin/tsc`
    // resolves to `@typescript/native`, so `npm run check` and
    // `npm run typecheck` get the faster native compiler. The `typescript`
    // package has to stay on 6 because typescript-eslint needs the
    // JavaScript compiler API that TypeScript 7 does not expose.
    useTypeScriptCli: false,
  },
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
