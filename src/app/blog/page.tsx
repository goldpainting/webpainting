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

export default function BlogPage() {
  return (
    <main className="bg-white text-[#0c0d0e]">
      <section className="relative overflow-hidden px-4 py-20 text-white sm:px-6 lg:px-8">
        <Image
          src="/services/house-exterior-painting-manatee-county.jpg"
          alt="Gold Lion Painting blog hero"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0c0d0e]/76" />
        <div className="relative mx-auto max-w-6xl">
          <p className="font-heading inline-flex items-center gap-2 rounded-full bg-[#e4ad42] px-4 py-2 text-sm font-black text-[#0c0d0e]">
            <FaPaintRoller aria-hidden="true" />
            Painting Blog
          </p>
          <h1 className="font-heading mt-6 max-w-4xl text-5xl leading-tight font-black md:text-7xl">
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
          <aside className="border-t-4 border-[#e4ad42] bg-[#0c0d0e] p-6 text-[#dddddd] shadow-[1px_1px_16px_rgba(0,0,0,0.22)] lg:sticky lg:top-32">
            <h2 className="font-heading text-2xl font-black text-[#e4ad42]">
              Blog Categories
            </h2>
            <div className="mt-5 grid gap-2">
              <Link
                href="/blog"
                className="group flex items-center justify-between gap-3 border border-[#e4ad42] bg-[#1f2124] px-4 py-3 text-sm font-bold text-[#e4ad42] transition hover:border-[#e4ad42] hover:text-[#e4ad42]"
              >
                <span>All Categories</span>
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

          <div>
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

            <div className="grid gap-8 md:grid-cols-2">
              {blogPosts.map((post) => (
                <article
                  key={post.slug}
                  className="group overflow-hidden bg-[#e4ad42] shadow-[1px_1px_16px_rgba(0,0,0,0.28)] transition hover:-translate-y-1 hover:shadow-[1px_12px_28px_rgba(0,0,0,0.32)]"
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
          </div>
        </div>
      </section>
    </main>
  );
}
