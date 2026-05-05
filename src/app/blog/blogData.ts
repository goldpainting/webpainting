export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  dateTime: string;
  readTime: string;
  category: string;
  image: string;
  imageAlt: string;
};

export const blogCategories = [
  "Luxury Residential Painting",
  "Exterior Painting Florida Homes",
  "Interior Painting & Finishes",
  "Cabinet Painting & Refinishing",
  "Stucco & Siding Painting",
  "Pressure Washing & Surface Preparation",
  "Wood Staining & Clear Coating",
  "High-End Painting Projects",
  "Coastal Home Painting (Anna Maria, Siesta Key)",
  "HOA & Community Painting Standards",
  "Painting Tips for Florida Homes",
  "Before & After Painting Projects",
].map((label) => ({
  label,
  slug: getCategorySlug(label),
}));

export const blogPosts = [
  {
    slug: "exterior-painting-lakewood-ranch-specialized-approach",
    title:
      "Why Exterior Painting in Lakewood Ranch, FL Requires a Specialized Approach",
    excerpt:
      "Lakewood Ranch homes need more than a fresh coat of paint. Learn how climate, HOA standards, surface preparation, and premium coatings affect exterior painting results.",
    date: "May 4, 2026",
    dateTime: "2026-05-04",
    readTime: "8 min read",
    category: "Exterior Painting Florida Homes",
    image: "/LakewoodRanch/house-exterior-painting-lakewood-ranch.jpg",
    imageAlt:
      "Exterior painting project for a Lakewood Ranch Florida home",
  },
  {
    slug: "florida-painting-prep-guide",
    title:
      "Florida Painting Prep: How to Make Interior, Exterior, and Cabinet Paint Last",
    excerpt:
      "A practical guide for homeowners who want smoother finishes, better adhesion, cleaner lines, and paint systems built for Florida heat, humidity, and daily wear.",
    date: "May 4, 2026",
    dateTime: "2026-05-04",
    readTime: "6 min read",
    category: "Painting Tips for Florida Homes",
    image: "/services/professional-interior-painting.jpg",
    imageAlt:
      "Professional painting preparation for a residential project in Florida",
  },
] satisfies BlogPost[];

export const featuredBlogPost = blogPosts[0]!;

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getCategorySlug(category: string) {
  return category
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function getBlogCategory(slug: string) {
  return blogCategories.find((category) => category.slug === slug);
}

export function getBlogPostsByCategory(categorySlug: string) {
  return blogPosts.filter(
    (post) => getCategorySlug(post.category) === categorySlug,
  );
}
