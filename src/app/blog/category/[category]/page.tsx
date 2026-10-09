import Image from "next/image";
import { type Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaArrowRight, FaCalendarAlt, FaClock } from "react-icons/fa";

import {
  blogCategories,
  getBlogCategory,
  getBlogPostsByCategory,
} from "../../blogData";
import { siteUrl } from "../../../siteConfig";

type BlogCategoryPageProps = {
  params: Promise<{ category: string }>;
};

export function generateStaticParams() {
  return blogCategories.map((category) => ({
    category: category.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogCategoryPageProps): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const category = getBlogCategory(categorySlug);

  if (!category) {
    return {};
  }
  const posts = getBlogPostsByCategory(category.slug);

  return {
    title: `${category.label} | Painting Blog`,
    description: `Articles from Gold Lion Painting Inc about ${category.label.toLowerCase()} for Florida homeowners.`,
    alternates: {
      canonical: `/blog/category/${category.slug}`,
    },
    openGraph: {
      title: `${category.label} | Gold Lion Painting Inc`,
      description: `Professional painting articles about ${category.label.toLowerCase()} for Florida homes.`,
      url: `${siteUrl}/blog/category/${category.slug}`,
    },
    robots:
      posts.length > 0
        ? {
            index: true,
            follow: true,
          }
        : {
            index: false,
            follow: true,
          },
  };
}

export default async function BlogCategoryPage({
  params,
}: BlogCategoryPageProps) {
  const { category: categorySlug } = await params;
  const category = getBlogCategory(categorySlug);

  if (!category) {
    notFound();
  }

  const posts = getBlogPostsByCategory(category.slug);

  return (
    <main className="bg-white text-[#0c0d0e]">
      <section className="blog-hero-enter bg-[#0c0d0e] px-4 py-12 text-white sm:px-6 sm:py-16 lg:px-8">
        <div className="blog-panel-enter mx-auto max-w-6xl">
          <Link
            href="/blog"
            className="font-heading inline-flex rounded-full bg-[#e4ad42] px-4 py-2 text-sm font-black text-[#0c0d0e] transition hover:bg-white"
          >
            Painting Blog
          </Link>
          <h1 className="font-heading mt-6 max-w-4xl text-3xl leading-tight font-black sm:text-5xl md:text-6xl">
            {category.label}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-[#dddddd]">
            Articles assigned to this category for Florida homeowners planning
            better painting projects.
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[300px_1fr] lg:items-start">
          <aside className="blog-sidebar-enter border-t-4 border-[#e4ad42] bg-[#0c0d0e] p-6 text-[#dddddd] shadow-[1px_1px_16px_rgba(0,0,0,0.22)] lg:sticky lg:top-32">
            <h2 className="font-heading text-2xl font-black text-[#e4ad42]">
              Categories
            </h2>
            <div className="blog-category-list-enter mt-5 grid gap-2">
              <Link
                href="/blog"
                className="group flex items-center justify-between gap-3 border border-white/10 bg-[#1f2124] px-4 py-3 text-sm font-bold text-[#dddddd] transition hover:border-[#e4ad42] hover:text-[#e4ad42]"
              >
                <span>All Blog</span>
                <FaArrowRight
                  aria-hidden="true"
                  className="shrink-0 text-xs text-[#e4ad42] transition group-hover:translate-x-1"
                />
              </Link>
              {blogCategories.map((item) => (
                <Link
                  key={item.slug}
                  href={`/blog/category/${item.slug}`}
                  className={`group flex items-center justify-between gap-3 border px-4 py-3 text-sm font-bold transition hover:border-[#e4ad42] hover:text-[#e4ad42] ${
                    item.slug === category.slug
                      ? "border-[#e4ad42] bg-[#1f2124] text-[#e4ad42]"
                      : "border-white/10 bg-[#1f2124] text-[#dddddd]"
                  }`}
                >
                  <span>{item.label}</span>
                  <FaArrowRight
                    aria-hidden="true"
                    className="shrink-0 text-xs text-[#e4ad42] transition group-hover:translate-x-1"
                  />
                </Link>
              ))}
            </div>
          </aside>

          <div className="blog-content-enter">
            {posts.length > 0 ? (
              <div className="blog-card-grid-enter grid gap-8 md:grid-cols-2">
                {posts.map((post) => (
                  <article
                    key={post.slug}
                    className="blog-card-enter group overflow-hidden bg-[#e4ad42] shadow-[1px_1px_16px_rgba(0,0,0,0.28)] transition hover:-translate-y-1 hover:shadow-[1px_12px_28px_rgba(0,0,0,0.32)]"
                  >
                    <Link href={`/blog/${post.slug}`} className="block">
                      <div className="relative h-64 overflow-hidden">
                        <Image
                          src={post.image}
                          alt={post.imageAlt}
                          fill
                          sizes="(min-width: 1024px) 420px, (min-width: 768px) 50vw, 100vw"
                          className="object-cover transition duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-6">
                        <div className="mb-4 flex flex-wrap gap-3 text-xs font-black text-[#0c0d0e] uppercase">
                          <span className="inline-flex items-center gap-2">
                            <FaCalendarAlt aria-hidden="true" />
                            <time dateTime={post.dateTime}>{post.date}</time>
                          </span>
                          <span className="inline-flex items-center gap-2">
                            <FaClock aria-hidden="true" />
                            {post.readTime}
                          </span>
                        </div>
                        <p className="font-heading text-sm font-black text-[#7a120f] uppercase">
                          {post.category}
                        </p>
                        <h2 className="font-heading mt-3 text-2xl leading-tight font-black text-[#0c0d0e]">
                          {post.title}
                        </h2>
                        <p className="mt-4 leading-7 text-[#1f2124]">
                          {post.excerpt}
                        </p>
                        <span className="font-heading mt-6 inline-flex items-center gap-2 text-sm font-black text-[#0c0d0e] uppercase">
                          Read Blog
                          <FaArrowRight aria-hidden="true" />
                        </span>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            ) : (
              <div className="border-t-4 border-[#e4ad42] bg-[#f3f3f3] p-8">
                <h2 className="font-heading text-3xl font-black">
                  No posts in this category yet
                </h2>
                <p className="mt-3 leading-7 text-[#1f2124]">
                  This category is ready for future articles. Browse all blog
                  posts while new content is added.
                </p>
                <Link
                  href="/blog"
                  className="mt-6 inline-flex w-full justify-center rounded-full bg-[#d90000] px-5 py-4 text-center font-bold text-white transition hover:bg-[#0c0d0e] sm:w-auto sm:px-6"
                >
                  View All Articles
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
