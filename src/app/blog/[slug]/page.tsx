import Image from 'next/image';
import { type Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { type ReactNode } from 'react';
import {
  FaArrowLeft,
  FaArrowRight,
  FaCalendarAlt,
  FaCheckCircle,
  FaClock,
  FaHome,
  FaPaintRoller,
  FaPhone,
} from 'react-icons/fa';

import { type BlogPost, blogPosts, getBlogPost } from '../blogData';
import { siteUrl } from '../../siteConfig';

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {};
  }

  return {
    title: `${post.title} | Gold Lion Painting Inc`,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: `${post.title} | Gold Lion Painting Inc`,
      description: post.excerpt,
      url: `${siteUrl}/blog/${post.slug}`,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 800,
          alt: post.imageAlt,
        },
      ],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts.filter(
    (relatedPost) => relatedPost.slug !== post.slug
  );
  const currentPostIndex = blogPosts.findIndex(
    (blogPost) => blogPost.slug === post.slug
  );
  const previousPost =
    currentPostIndex > 0 ? blogPosts[currentPostIndex - 1] : null;
  const nextPost =
    currentPostIndex < blogPosts.length - 1
      ? blogPosts[currentPostIndex + 1]
      : null;
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: `${siteUrl}${post.image}`,
    datePublished: post.dateTime,
    dateModified: post.dateTime,
    author: {
      '@type': 'Organization',
      name: 'Gold Lion Painting Inc',
      url: siteUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Gold Lion Painting Inc',
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/gold-lion-painting-logo-512.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteUrl}/blog/${post.slug}`,
    },
  };

  return (
    <main className="bg-white text-[#0c0d0e]">
      <script
        id={`${post.slug}-article-schema`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema).replace(/</g, '\\u003c'),
        }}
      />
      <article>
        <section className="overflow-hidden bg-[#0c0d0e] text-white sm:relative sm:px-6 sm:py-20 lg:px-8">
          <div className="relative h-[250px] sm:absolute sm:inset-0 sm:h-auto">
            <Image
              src={post.image}
              alt={post.imageAlt}
              fill
              loading="eager"
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <div className="relative mx-auto max-w-5xl bg-[#0c0d0e] p-5 shadow-[0_22px_55px_rgba(0,0,0,0.32)] sm:rounded-2xl sm:bg-[#0c0d0e]/58 sm:p-7">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded-full bg-[#e4ad42] px-4 py-2 font-heading text-sm font-black text-[#0c0d0e] transition hover:bg-white"
            >
              <FaPaintRoller aria-hidden="true" />
              Blog
            </Link>
            <h1 className="mt-7 font-heading text-3xl leading-tight font-black sm:text-4xl md:text-6xl">
              {post.title}
            </h1>
            <div className="mt-6 flex flex-wrap gap-4 text-sm font-bold text-[#dddddd]">
              <span className="inline-flex items-center gap-2">
                <FaCalendarAlt aria-hidden="true" />
                <time dateTime={post.dateTime}>{post.date}</time>
              </span>
              <span className="inline-flex items-center gap-2">
                <FaClock aria-hidden="true" />
                {post.readTime}
              </span>
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,0.68fr)_0.32fr]">
            <div>
              {post.slug ===
              'exterior-painting-lakewood-ranch-specialized-approach' ? (
                <LakewoodRanchExteriorArticle />
              ) : (
                <FloridaPrepGuideArticle />
              )}

              <BlogPostPagination
                previousPost={previousPost}
                nextPost={nextPost}
              />
            </div>

            <aside className="space-y-6">
              <div className="sticky top-28 space-y-6">
                <div className="border-t-4 border-[#e4ad42] bg-[#f3f3f3] p-6">
                  <h2 className="font-heading text-2xl font-black text-[#0c0d0e]">
                    Need help planning a project?
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-[#1f2124]">
                    Gold Lion Painting Inc can help you compare interior,
                    exterior, and cabinet painting options for your home.
                  </p>
                  <a
                    href="tel:9414625894"
                    className="mt-5 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#d90000] px-5 py-4 font-bold text-white transition hover:bg-[#0c0d0e]"
                  >
                    <FaPhone aria-hidden="true" />
                    Call 941-462-5894
                  </a>
                </div>

                <div className="border-t-4 border-[#d90000] bg-[#0c0d0e] p-6 text-[#dddddd]">
                  <h2 className="font-heading text-2xl font-black text-[#e4ad42]">
                    Related Services
                  </h2>
                  <div className="mt-5 grid gap-3">
                    {[
                      {
                        href: '/interior-painting',
                        label: 'Interior Painting',
                      },
                      {
                        href: '/exterior-painting',
                        label: 'Exterior Painting',
                      },
                      {
                        href: '/cabinet-painting',
                        label: 'Cabinet Painting',
                      },
                    ].map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="flex items-center gap-3 border border-[#e4ad42]/35 px-4 py-3 text-sm font-bold transition hover:bg-[#e4ad42] hover:text-[#0c0d0e]"
                      >
                        <FaHome aria-hidden="true" />
                        {service.label}
                      </Link>
                    ))}
                  </div>
                </div>

                {relatedPosts.length > 0 ? (
                  <div className="border-t-4 border-[#e4ad42] bg-[#f3f3f3] p-6">
                    <h2 className="font-heading text-2xl font-black text-[#0c0d0e]">
                      Related Blog Articles
                    </h2>
                    <div className="mt-5 grid gap-4">
                      {relatedPosts.map((relatedPost) => (
                        <Link
                          key={relatedPost.slug}
                          href={`/blog/${relatedPost.slug}`}
                          className="group block border-l-4 border-[#e4ad42] bg-white p-4 transition hover:border-[#d90000]"
                        >
                          <p className="text-xs font-black text-[#a97a36] uppercase">
                            {relatedPost.category}
                          </p>
                          <h3 className="mt-2 font-heading text-lg leading-tight font-black text-[#0c0d0e] group-hover:text-[#d90000]">
                            {relatedPost.title}
                          </h3>
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            </aside>
          </div>
        </section>
      </article>
    </main>
  );
}

function BlogPostPagination({
  previousPost,
  nextPost,
}: {
  previousPost: BlogPost | null;
  nextPost: BlogPost | null;
}) {
  if (!previousPost && !nextPost) return null;

  return (
    <nav
      aria-label="Blog article pagination"
      className="mt-12 grid gap-4 border-t border-[#0c0d0e]/12 pt-8 md:grid-cols-2"
    >
      {previousPost ? (
        <Link
          href={`/blog/${previousPost.slug}`}
          className="group rounded-2xl border border-[#e4ad42]/35 bg-[#f7f7f7] p-5 transition hover:border-[#d90000] hover:bg-white"
        >
          <span className="inline-flex items-center gap-2 text-sm font-black text-[#a97a36] uppercase">
            <FaArrowLeft aria-hidden="true" />
            Previous article
          </span>
          <p className="mt-3 font-heading text-xl leading-tight font-black text-[#0c0d0e] group-hover:text-[#d90000]">
            {previousPost.title}
          </p>
        </Link>
      ) : (
        <div />
      )}

      {nextPost ? (
        <Link
          href={`/blog/${nextPost.slug}`}
          className="group rounded-2xl border border-[#e4ad42]/35 bg-[#0c0d0e] p-5 text-right transition hover:border-[#d90000] hover:bg-[#1f2124]"
        >
          <span className="inline-flex items-center justify-end gap-2 text-sm font-black text-[#e4ad42] uppercase">
            Next article
            <FaArrowRight aria-hidden="true" />
          </span>
          <p className="mt-3 font-heading text-xl leading-tight font-black text-white group-hover:text-[#e4ad42]">
            {nextPost.title}
          </p>
        </Link>
      ) : null}
    </nav>
  );
}

function InlineBlogLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className="font-black text-[#a97a36] underline decoration-[#e4ad42] decoration-2 underline-offset-4 transition hover:text-[#d90000]"
    >
      {children}
    </Link>
  );
}

function LakewoodRanchExteriorArticle() {
  return (
    <div className="space-y-10 text-base leading-7 text-[#1f2124] sm:text-lg sm:leading-8">
      <p className="border-l-4 border-[#e4ad42] bg-[#f7f2e8] p-5 text-lg leading-8 font-semibold text-[#0c0d0e] sm:p-6 sm:text-xl sm:leading-9">
        Lakewood Ranch, FL is known for upscale communities, strict HOA
        standards, and beautifully designed homes. Maintaining that high-end
        appearance takes more than a fresh coat of paint. Exterior painting in
        this area requires a specialized approach built around Florida sun,
        humidity, rain, and coastal exposure.
      </p>

      <section className="space-y-4">
        <p>
          At Gold Lion Painting Inc, we understand that homes in communities
          like Waterside, The Lake Club, and Esplanade are not typical painting
          projects. These properties demand precision, proper preparation, and
          long-lasting materials that perform in Florida&apos;s challenging
          climate.
        </p>
        <p>
          For the surface-prep side of this topic, read our{' '}
          <InlineBlogLink href="/blog/florida-painting-prep-guide">
            Florida painting prep guide
          </InlineBlogLink>
          .
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="font-heading text-3xl font-black text-[#0c0d0e]">
          The Impact of Florida&apos;s Climate on Exterior Paint
        </h2>
        <p>
          Florida weather is one of the biggest factors affecting the lifespan
          of exterior paint. In Lakewood Ranch, homes are exposed to intense UV
          rays, high humidity, heavy rains, and heat that causes surfaces to
          expand and contract.
        </p>
        <p>
          Without the right preparation and products, paint can start failing in
          just a few years. That is why choosing the correct exterior painting
          system is critical.
        </p>
        <p>
          You can compare the full service approach on our{' '}
          <InlineBlogLink href="/exterior-painting">
            exterior painting service
          </InlineBlogLink>{' '}
          page.
        </p>
      </section>

      <section className="grid gap-5 md:grid-cols-2">
        {[
          'Intense UV rays that fade colors quickly',
          'High humidity that can lead to mold and mildew',
          'Heavy rains that test coating durability',
          'Heat movement that affects stucco, trim, and siding',
        ].map((item) => (
          <div
            key={item}
            className="flex items-start gap-3 bg-[#e4ad42] p-5 font-semibold text-[#0c0d0e]"
          >
            <FaCheckCircle aria-hidden="true" className="mt-1 shrink-0" />
            {item}
          </div>
        ))}
      </section>

      <section className="space-y-4">
        <h2 className="font-heading text-3xl font-black text-[#0c0d0e]">
          Why HOA Standards in Lakewood Ranch Matter
        </h2>
        <p>
          Many Lakewood Ranch communities have strict HOA guidelines for
          approved color palettes, sheen finishes, maintenance timelines, and
          the overall appearance of the property. Failing to meet those
          standards can lead to fines or required repainting.
        </p>
        <p>
          A professional painting company familiar with HOA requirements helps
          homeowners manage color approvals, keep finishes uniform, and stay
          aligned with community standards.
        </p>
        <p>
          For location-specific details, review our{' '}
          <InlineBlogLink href="/lakewood-ranch">
            Lakewood Ranch painting page
          </InlineBlogLink>
          .
        </p>
      </section>

      <section className="bg-[#1f2124] p-5 text-[#dddddd] sm:p-7">
        <h2 className="font-heading text-3xl font-black text-[#e4ad42]">
          Our Professional Exterior Painting Process
        </h2>
        <p className="mt-4">
          We are not a production painting company. Every project follows a
          detailed system designed for durability and high-end results.
        </p>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {[
            {
              title: 'Pressure Washing',
              text: 'We clean exterior surfaces to remove dirt, mold, mildew, and contaminants before coatings are applied.',
            },
            {
              title: 'Surface Preparation',
              text: 'We seal cracks with elastomeric caulking and repair stucco as needed before painting.',
            },
            {
              title: 'Priming When Needed',
              text: 'High-quality primers, including Loxon conditioner where appropriate, help support adhesion.',
            },
            {
              title: 'Protection and Masking',
              text: 'Windows, floors, landscaping, fixtures, and exterior details are carefully protected.',
            },
            {
              title: 'Spray and Back-Roll Application',
              text: 'This technique helps create even coverage and stronger adhesion on exterior surfaces.',
            },
            {
              title: 'Premium Paints',
              text: 'We use top-tier products such as Sherwin-Williams Duration and Emerald Rain Refresh.',
            },
          ].map((step) => (
            <article
              key={step.title}
              className="border-l-4 border-[#e4ad42] pl-4"
            >
              <h3 className="font-heading text-xl font-black text-[#e4ad42]">
                {step.title}
              </h3>
              <p className="mt-2 text-base leading-7">{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="font-heading text-3xl font-black text-[#0c0d0e]">
          Choosing the Right Paint for Lakewood Ranch Homes
        </h2>
        <p>
          Not all paints are created equal, especially in Florida. Emerald Rain
          Refresh is a strong luxury option because of its self-cleaning
          benefits and longer lifespan. Duration Exterior offers excellent
          durability and value. Satin finishes are ideal for trim and washable
          areas, while flat finishes are common for main body colors in many HOA
          communities.
        </p>
        <p>
          Selecting the right combination can extend the life of your exterior
          paint job by years.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="font-heading text-3xl font-black text-[#0c0d0e]">
          How Long Should Exterior Paint Last in Lakewood Ranch?
        </h2>
        <p>
          With proper preparation and high-quality materials, a professional
          exterior paint job can often last 7 to 10 years with Duration and 10
          to 15 years with Emerald Rain Refresh. Poor preparation or low-quality
          products can reduce that lifespan dramatically.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="font-heading text-3xl font-black text-[#0c0d0e]">
          Why Homeowners in Lakewood Ranch Choose Gold Lion Painting
        </h2>
        <p>
          Homeowners in Lakewood Ranch choose Gold Lion Painting Inc because we
          focus on quality, not volume. We keep job sites clean, follow a
          detailed preparation process, produce high-end finishes with sharp
          lines, and bring experience with luxury homes and HOA communities.
        </p>
        <p>
          Gold Lion Painting Inc is fully insured and offers a 5-year
          workmanship warranty on qualifying projects. We do not cut corners. We
          build results designed to last.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="font-heading text-3xl font-black text-[#0c0d0e]">
          Serving All Lakewood Ranch Communities
        </h2>
        <p>
          We proudly serve Waterside at Lakewood Ranch, The Lake Club, Esplanade
          Golf & Country Club, Country Club East and West, and Del Webb Lakewood
          Ranch. We understand the expectations in each of these neighborhoods.
        </p>
      </section>

      <section className="border-t-4 border-[#d90000] bg-[#f3f3f3] p-5 sm:p-7">
        <h2 className="font-heading text-3xl font-black text-[#0c0d0e]">
          Get a Professional Exterior Painting Estimate in Lakewood Ranch, FL
        </h2>
        <p className="mt-4">
          If you are planning to repaint your home, choosing the right team will
          make all the difference. Gold Lion Painting Inc delivers a smooth,
          professional experience from start to finish, with results designed to
          last in Florida&apos;s climate.
        </p>
      </section>
    </div>
  );
}

function FloridaPrepGuideArticle() {
  return (
    <div className="space-y-10 text-base leading-7 text-[#1f2124] sm:text-lg sm:leading-8">
      <p className="border-l-4 border-[#e4ad42] bg-[#f7f2e8] p-5 text-lg leading-8 font-semibold text-[#0c0d0e] sm:p-6 sm:text-xl sm:leading-9">
        Great paint work starts before the first coat. In Florida, preparation
        decides whether a finish looks sharp for years or starts failing early
        under heat, humidity, rain cycles, and daily use.
      </p>

      <section className="space-y-4">
        <h2 className="font-heading text-3xl font-black text-[#0c0d0e]">
          1. Prep is the real foundation of a professional finish
        </h2>
        <p>
          A clean finish is not just about premium paint. Walls, trim, stucco,
          doors, and cabinets all need the right surface profile. That means
          washing, degreasing, patching, sanding, caulking, and spot priming
          before color goes on.
        </p>
        <p>
          For exterior painting, prep protects adhesion. For interiors, prep
          controls texture and light reflection. For cabinets, prep determines
          whether the finish bonds like a professional coating or chips like a
          quick touch-up.
        </p>
        <p>
          If you are comparing prep standards by location, review our{' '}
          <InlineBlogLink href="/blog/exterior-painting-lakewood-ranch-specialized-approach">
            Lakewood Ranch exterior painting article
          </InlineBlogLink>
          .
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="font-heading text-3xl font-black text-[#0c0d0e]">
          2. Exterior paint in Florida needs a weather-aware system
        </h2>
        <p>
          Florida exteriors deal with UV exposure, humidity, wind-driven rain,
          stucco movement, mildew pressure, and constant expansion cycles.
          Rushed exterior paint can look good at first, then break down around
          cracks, joints, trim edges, and sun-heavy elevations.
        </p>
        <p>
          A better approach starts with pressure washing, crack treatment,
          flexible sealants, substrate-specific primer where needed, and a
          coating system selected for the home&apos;s exposure.
        </p>
        <p>
          For full exterior repaint scopes, compare our{' '}
          <InlineBlogLink href="/exterior-painting">
            exterior painting service
          </InlineBlogLink>
          .
        </p>
      </section>

      <section className="grid gap-5 md:grid-cols-3">
        {[
          'Wash and remove chalky residue before coating.',
          'Seal cracks and joints before finish coats.',
          'Use durable products suited for Florida exposure.',
        ].map((item) => (
          <div
            key={item}
            className="bg-[#e4ad42] p-5 font-semibold text-[#0c0d0e]"
          >
            <FaCheckCircle aria-hidden="true" className="mb-3" />
            {item}
          </div>
        ))}
      </section>

      <section className="space-y-4">
        <h2 className="font-heading text-3xl font-black text-[#0c0d0e]">
          3. Interior painting should feel clean, controlled, and low-disruption
        </h2>
        <p>
          Interior work is personal because the painters are inside the home.
          The best projects protect floors, furniture, fixtures, and daily
          routines while improving walls, ceilings, doors, and trim.
        </p>
        <p>
          A professional interior repaint should include drywall correction,
          sanding where needed, careful cut lines, consistent sheen, and a
          walkthrough that catches small details before the crew leaves.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="font-heading text-3xl font-black text-[#0c0d0e]">
          4. Cabinet refinishing is a system, not just a color change
        </h2>
        <p>
          Cabinet painting can completely change a kitchen without replacing the
          layout. But cabinets are high-touch surfaces, so the process has to be
          more controlled than wall painting.
        </p>
        <p>
          Strong cabinet results usually include door removal, labeling,
          degreasing, sanding or deglossing, bonding primer, sprayed finish
          coats, curing time, and careful reinstallation.
        </p>
        <p>
          For kitchens and high-use surfaces, see our{' '}
          <InlineBlogLink href="/cabinet-painting">
            cabinet painting service
          </InlineBlogLink>
          .
        </p>
      </section>

      <section className="bg-[#1f2124] p-5 text-[#dddddd] sm:p-7">
        <h2 className="font-heading text-3xl font-black text-[#e4ad42]">
          Homeowner checklist before booking a painter
        </h2>
        <ul className="mt-6 grid gap-4">
          {[
            'Ask what prep is included, not just how many coats will be applied.',
            'Confirm whether repairs, caulking, masking, and cleanup are part of the scope.',
            'Discuss product options based on the surface and exposure.',
            'Ask how occupied spaces, pets, furniture, and landscaping will be protected.',
            'Request a clear estimate with the exact areas being painted.',
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <FaCheckCircle
                aria-hidden="true"
                className="mt-1 shrink-0 text-[#e4ad42]"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="font-heading text-3xl font-black text-[#0c0d0e]">
          Final thought
        </h2>
        <p>
          The best paint job is the one that still looks intentional after the
          first season of Florida heat and rain. When prep, product selection,
          communication, and finish standards work together, the result feels
          cleaner, lasts longer, and adds real value to the home.
        </p>
      </section>
    </div>
  );
}
