import Image from "next/image";
import { type Metadata } from "next";
import Link from "next/link";
import {
  FaArrowRight,
  FaCalendarAlt,
  FaClock,
  FaPaintRoller,
} from "react-icons/fa";

import { blogCategories, blogPosts, featuredBlogPost } from "./blogData";
import { siteUrl } from "../siteConfig";

const BLOG_POSTS_PER_PAGE = 6;

type BlogPageProps = {
  searchParams: Promise<{ page?: string | string[] }>;
};

export const metadata: Metadata = {
  title: "Painting Blog | Gold Lion Painting Inc",
  description:
    "Professional painting tips from Gold Lion Painting Inc for Florida homeowners planning interior painting, exterior repainting, and cabinet refinishing projects.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Painting Blog | Gold Lion Painting Inc",
    description:
      "Professional painting tips for Florida interiors, exteriors, cabinets, prep, finishes, and long-term coating performance.",
    url: `${siteUrl}/blog`,
    images: [
      {
        url: featuredBlogPost.image,
        width: 1200,
        height: 800,
        alt: featuredBlogPost.imageAlt,
      },
    ],
  },
};

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const { page } = await searchParams;
  const pageValue = Array.isArray(page) ? page[0] : page;
  const requestedPage = Number.parseInt(pageValue ?? "1", 10);
  const totalPages = Math.max(
    1,
    Math.ceil(blogPosts.length / BLOG_POSTS_PER_PAGE),
  );
  const currentPage =
    Number.isFinite(requestedPage) && requestedPage > 0
      ? Math.min(requestedPage, totalPages)
      : 1;
  const startIndex = (currentPage - 1) * BLOG_POSTS_PER_PAGE;
  const visibleBlogPosts = blogPosts.slice(
    startIndex,
    startIndex + BLOG_POSTS_PER_PAGE,
  );
  const paginationPages = Array.from(
    { length: totalPages },
    (_, index) => index + 1,
  );

  return (
    <main className="bg-white text-[#0c0d0e]">
      <section className="blog-hero-enter overflow-hidden bg-[#0c0d0e] text-white sm:relative sm:px-6 sm:py-20 lg:px-8">
        <div className="relative h-[250px] sm:absolute sm:inset-0 sm:h-auto">
          <Image
            src="/services/house-exterior-painting-manatee-county.jpg"
            alt="Gold Lion Painting blog hero"
            fill
            loading="eager"
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="blog-panel-enter relative mx-auto max-w-6xl bg-[#0c0d0e] p-5 shadow-[0_22px_55px_rgba(0,0,0,0.32)] sm:rounded-2xl sm:bg-[#0c0d0e]/58 sm:p-7">
          <p className="font-heading inline-flex items-center gap-2 rounded-full bg-[#e4ad42] px-4 py-2 text-sm font-black text-[#0c0d0e]">
            <FaPaintRoller aria-hidden="true" />
            Painting Blog
          </p>
          <h1 className="font-heading mt-6 max-w-4xl text-3xl leading-tight font-black sm:text-5xl md:text-7xl">
            Expert Painting Advice For Florida Homes
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#dddddd]">
            Practical articles on prep, coatings, color planning, cabinet
            refinishing, exterior durability, and the details that make a paint
            project feel professional.
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[300px_1fr] lg:items-start">
          <aside className="blog-sidebar-enter border-t-4 border-[#e4ad42] bg-[#0c0d0e] p-6 text-[#dddddd] shadow-[1px_1px_16px_rgba(0,0,0,0.22)] lg:sticky lg:top-32">
            <h2 className="font-heading text-2xl font-black text-[#e4ad42]">
              Blog Categories
            </h2>
            <div className="blog-category-list-enter mt-5 grid gap-2">
              <Link
                href="/blog"
                className="group flex items-center justify-between gap-3 border border-[#e4ad42] bg-[#1f2124] px-4 py-3 text-sm font-bold text-[#e4ad42] transition hover:border-[#e4ad42] hover:text-[#e4ad42]"
              >
                <span>All Blog</span>
                <FaArrowRight
                  aria-hidden="true"
                  className="shrink-0 text-xs text-[#e4ad42] transition group-hover:translate-x-1"
                />
              </Link>
              {blogCategories.map((category) => (
                <Link
                  key={category.slug}
                  href={`/blog/category/${category.slug}`}
                  className="group flex items-center justify-between gap-3 border border-white/10 bg-[#1f2124] px-4 py-3 text-sm font-bold transition hover:border-[#e4ad42] hover:text-[#e4ad42]"
                >
                  <span>{category.label}</span>
                  <FaArrowRight
                    aria-hidden="true"
                    className="shrink-0 text-xs text-[#e4ad42] transition group-hover:translate-x-1"
                  />
                </Link>
              ))}
            </div>
          </aside>

          <div className="blog-content-enter">
            <div className="mb-8 flex flex-col justify-between gap-4 border-b border-[#e4ad42]/40 pb-6 md:flex-row md:items-end">
              <div>
                <h2 className="font-heading text-4xl font-black text-[#0c0d0e]">
                  Latest Articles
                </h2>
                <p className="mt-3 max-w-2xl leading-7 text-[#1f2124]">
                  Fresh guidance from today for homeowners planning better
                  painting outcomes.
                </p>
              </div>
            </div>

            <div className="blog-card-grid-enter grid gap-8 md:grid-cols-2">
              {visibleBlogPosts.map((post) => (
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
                      <h3 className="font-heading mt-3 text-2xl leading-tight font-black text-[#0c0d0e]">
                        {post.title}
                      </h3>
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

            {totalPages > 1 ? (
              <nav
                aria-label="Blog pagination"
                className="blog-pagination-enter mt-10 flex flex-wrap items-center justify-center gap-3 border-t border-[#e4ad42]/40 pt-8"
              >
                {currentPage === 1 ? (
                  <span className="font-heading inline-flex min-h-11 items-center gap-2 border border-[#d7d7d7] px-4 py-3 text-sm font-black text-[#8a8a8a] uppercase">
                    <FaArrowRight aria-hidden="true" className="rotate-180" />
                    Previous
                  </span>
                ) : (
                  <Link
                    href={
                      currentPage > 2
                        ? {
                            pathname: "/blog",
                            query: { page: currentPage - 1 },
                          }
                        : "/blog"
                    }
                    scroll={false}
                    className="font-heading inline-flex min-h-11 items-center gap-2 border border-[#0c0d0e] px-4 py-3 text-sm font-black text-[#0c0d0e] uppercase transition hover:border-[#e4ad42] hover:bg-[#e4ad42]"
                  >
                    <FaArrowRight aria-hidden="true" className="rotate-180" />
                    Previous
                  </Link>
                )}

                <div className="flex flex-wrap justify-center gap-2">
                  {paginationPages.map((pageNumber) => (
                    <Link
                      key={pageNumber}
                      href={
                        pageNumber === 1
                          ? "/blog"
                          : {
                              pathname: "/blog",
                              query: { page: pageNumber },
                            }
                      }
                      aria-current={
                        pageNumber === currentPage ? "page" : undefined
                      }
                      scroll={false}
                      className={`font-heading flex size-11 items-center justify-center border text-sm font-black transition ${
                        pageNumber === currentPage
                          ? "border-[#0c0d0e] bg-[#0c0d0e] text-white"
                          : "border-[#e4ad42] text-[#0c0d0e] hover:bg-[#e4ad42]"
                      }`}
                    >
                      {pageNumber}
                    </Link>
                  ))}
                </div>

                {currentPage === totalPages ? (
                  <span className="font-heading inline-flex min-h-11 items-center gap-2 border border-[#d7d7d7] px-4 py-3 text-sm font-black text-[#8a8a8a] uppercase">
                    Next
                    <FaArrowRight aria-hidden="true" />
                  </span>
                ) : (
                  <Link
                    href={{
                      pathname: "/blog",
                      query: { page: currentPage + 1 },
                    }}
                    scroll={false}
                    className="font-heading inline-flex min-h-11 items-center gap-2 border border-[#0c0d0e] px-4 py-3 text-sm font-black text-[#0c0d0e] uppercase transition hover:border-[#e4ad42] hover:bg-[#e4ad42]"
                  >
                    Next
                    <FaArrowRight aria-hidden="true" />
                  </Link>
                )}
              </nav>
            ) : null}
          </div>
        </div>
      </section>
    </main>
  );
}
