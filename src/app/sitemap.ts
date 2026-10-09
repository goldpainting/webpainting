import { type MetadataRoute } from "next";
import { cacheLife } from "next/cache";

import { blogPosts, getPopulatedBlogCategories } from "./blog/blogData";
import { indexedRoutes, siteUrl } from "./siteConfig";

async function getLastModified() {
  "use cache";
  cacheLife("days");

  return new Date();
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = await getLastModified();
  const dynamicBlogRoutes = [
    ...blogPosts.map((post) => `/blog/${post.slug}`),
    ...getPopulatedBlogCategories().map(
      (category) => `/blog/category/${category.slug}`,
    ),
  ];
  const routes = Array.from(new Set([...indexedRoutes, ...dynamicBlogRoutes]));

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.8,
  }));
}
