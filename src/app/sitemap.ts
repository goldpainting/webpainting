import { type MetadataRoute } from "next";

import { indexedRoutes, siteUrl } from "./siteConfig";

export default function sitemap(): MetadataRoute.Sitemap {
  return indexedRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.8,
  }));
}
