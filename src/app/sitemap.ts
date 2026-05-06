import { type MetadataRoute } from "next";

import { blogPosts, getPopulatedBlogCategories } from "./blog/blogData";
import { indexedRoutes, siteUrl } from "./siteConfig";

export default function sitemap(): MetadataRoute.Sitemap {
  const dynamicBlogRoutes = [
    ...blogPosts.map((post) => `/blog/${post.slug}`),
    ...getPopulatedBlogCategories().map(
      (category) => `/blog/category/${category.slug}`,
    ),
  ];
  const routes = Array.from(new Set([...indexedRoutes, ...dynamicBlogRoutes]));

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.8,
  }));
}
