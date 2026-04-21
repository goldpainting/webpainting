import Image from "next/image";
import Link from "next/link";

import FaqSchema from "./FaqSchema";
import { type AreaLandingData, googleReviewsHref } from "./areaLandingData";

type AreaLandingPageProps = {
  area: AreaLandingData;
};

const trustPoints = [
  "Experienced painters with 10+ years in the trade",
  "Fully insured residential painting company",
  "5-year workmanship warranty on qualifying jobs",
];

export default function AreaLandingPage({ area }: AreaLandingPageProps) {
  return (
    <main className="min-h-screen bg-[#f6f1e7] text-[#2f2a24]">
      <FaqSchema faqs={area.faqs} id={`${area.slug}-faq-schema`} />
      <section className="relative overflow-hidden border-b border-[#d8c39f]/60 bg-linear-to-br from-[#fbf4e8] via-[#efe2d2] to-[#f8f2e8]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-8rem] top-[-6rem] h-72 w-72 rounded-full bg-[#f0cd84]/30 blur-3xl" />
          <div className="absolute right-[-4rem] top-12 h-80 w-80 rounded-full bg-[#d9b57a]/18 blur-3xl" />
        </div>
        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1fr_0.95fr] lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#a36a14]">
              {area.county} Residential Painting
            </p>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight text-[#34261b] sm:text-5xl lg:text-6xl">
              {area.heroTitle}
            </h1>
            <p className="mt-5 text-2xl font-semibold text-[#6f5738]">{area.heroSubtitle}</p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5a4d41]">{area.description}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              {trustPoints.map((point) => (
                <div
                  key={point}
                  className="rounded-full border border-[#ddc49f] bg-[#fffaf2]/90 px-4 py-2 text-sm font-semibold text-[#6b5639] shadow-sm"
                >
                  {point}
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact-us"
                className="rounded-2xl bg-[#d4a038] px-6 py-4 text-base font-bold text-[#1f1a14] transition hover:scale-[1.02] hover:bg-[#c7942f]"
              >
                Get a Free Estimate
              </Link>
              <a
                href="tel:9414625894"
                className="rounded-2xl border border-[#cdbba0] bg-[#fffaf2] px-6 py-4 text-base font-bold text-[#3a3028] transition hover:bg-[#f5ecde]"
              >
                Call 941-462-5894
              </a>
              <a
                href={googleReviewsHref}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-[#cdbba0] bg-[#fffaf2] px-6 py-4 text-base font-bold text-[#3a3028] transition hover:bg-[#f5ecde]"
              >
                Read Google Reviews
              </a>
            </div>

            <div className="reveal-up mt-8 rounded-3xl border border-[#dfcfb5] bg-[#fffaf2]/95 p-5 shadow-[0_18px_35px_rgba(120,94,52,0.08)]">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#a36a14]">
                Local Conditions Matter
              </p>
              <p className="mt-3 text-base leading-7 text-[#4b4034]">{area.highlight}</p>
            </div>
          </div>

          <div className="space-y-5">
            <div className="hover-lift overflow-hidden rounded-[2rem] border border-[#d8c39f] bg-[#fffaf2] shadow-[0_18px_40px_rgba(120,94,52,0.1)]">
              <div className="relative min-h-80">
                <Image
                  src={area.heroImage}
                  alt={area.heroImageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#251b13]/78 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="inline-flex rounded-full border border-[#e0c48d] bg-[#f2d493]/85 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#533711]">
                    {area.city}
                  </p>
                  <p className="mt-4 max-w-md text-2xl font-bold text-[#fff4e7]">
                    Clean execution, durable prep, and a polished final presentation
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {area.localFactors.slice(0, 3).map((factor) => (
                <div
                  key={factor}
                  className="hover-lift rounded-2xl border border-[#dbc7aa] bg-[#fffaf2]/95 p-4 shadow-[0_18px_35px_rgba(120,94,52,0.08)]"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#8f6220]">Focus</p>
                  <p className="mt-3 text-sm leading-6 text-[#5d4f42]">{factor}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#a36a14]">
            Featured Projects
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-[#34261b] sm:text-4xl">
            Recent Painting Work In {area.city}
          </h2>
          <p className="mt-4 text-lg leading-8 text-[#615447]">
            A quick look at exterior, interior, and cabinet projects that reflect the finish quality and project presentation we aim for on local homes.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {area.gallery.map((item) => (
            <article
              key={item.src}
              className="hover-lift group overflow-hidden rounded-[2rem] border border-[#dfcfb5] bg-[#fffaf2] shadow-[0_22px_45px_rgba(120,94,52,0.08)]"
            >
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.06]"
                />
              </div>
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8f6220]">{item.label}</p>
                <p className="mt-3 text-sm leading-6 text-[#64584c]">{item.alt}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-[#dfcfb5] bg-[#ede2d1]/55">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#a36a14]">
              Local Fit
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-[#34261b] sm:text-4xl">
              Why {area.city} Homes Need A Prep-First Painting Company
            </h2>
            <p className="mt-4 text-lg leading-8 text-[#615447]">{area.localFactorsIntro}</p>
            <div className="mt-8 rounded-[2rem] border border-[#dfcfb5] bg-[#fffaf2] p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#8f6220]">Where We Commonly Work</p>
              <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-[#5c4f42]">
                {area.communities.map((community) => (
                  <div key={community} className="rounded-2xl bg-[#f4ecdf] px-4 py-3">
                    {community}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {area.localFactors.map((factor) => (
              <div key={factor} className="rounded-[2rem] border border-[#dfcfb5] bg-[#fffaf2] p-6 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#8f6220]">What We Plan For</p>
                <p className="mt-4 text-lg leading-8 text-[#5e5144]">{factor}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#a36a14]">
            Service Focus
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-[#34261b] sm:text-4xl">
            The Residential Painting Services We Provide In {area.city}
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {area.serviceCards.map((card) => (
            <article
              key={card.title}
              className="hover-lift flex h-full flex-col rounded-[2rem] border border-[#d8c39f] bg-[#fffaf2] p-6 shadow-xl shadow-[#b39358]/10"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#a36a14]">{area.city}</p>
              <h3 className="mt-3 text-2xl font-bold text-[#8f6220]">{card.title}</h3>
              <p className="mt-4 leading-7 text-[#64584c]">{card.description}</p>
              <ul className="mt-5 space-y-3 text-[#43372d]">
                {card.points.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-yellow-400" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="overflow-hidden rounded-[2.25rem] border border-[#d8c39f] bg-linear-to-br from-[#2a1f17] via-[#38281d] to-[#1f1712] shadow-[0_24px_60px_rgba(49,34,22,0.22)]">
          <div className="grid gap-0 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="space-y-6 p-8 text-[#f4e9d8] sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f0c776]">
                Google Reviews
              </p>
              <h2 className="text-3xl font-extrabold text-[#fff6ea] sm:text-4xl">
                Review Proof Homeowners In {area.city} Can Check For Themselves
              </h2>
              <p className="text-lg leading-8 text-[#ddcfbf]">
                Local landing pages convert better when they pair service-specific messaging with visible proof. These review highlights are supported by the same Google Reviews destination used throughout the site.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={googleReviewsHref}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl bg-[#d4a038] px-6 py-4 font-bold text-[#1f1a14] transition hover:bg-[#c7942f]"
                >
                  Open Google Reviews
                </a>
                <Link
                  href="/warranty-service"
                  className="rounded-2xl border border-[#7e6344] bg-transparent px-6 py-4 font-bold text-[#fff1dc] transition hover:bg-[#3b2b20]"
                >
                  Review Warranty Details
                </Link>
              </div>
            </div>

            <div className="grid gap-5 bg-[#f7f0e5] p-8 sm:p-10">
              {area.reviewHighlights.map((review, index) => (
                <article
                  key={`${review.label}-${review.quote}`}
                  className={`hover-lift rounded-[1.75rem] border border-[#dec8aa] bg-[#fffaf2] p-6 shadow-[0_16px_35px_rgba(120,94,52,0.08)] ${index === 1 ? "md:translate-x-6" : ""}`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#a36a14]">
                      {review.label}
                    </p>
                    <p className="text-lg font-bold text-[#8f6220]">5-star review</p>
                  </div>
                  <p className="mt-4 text-xl leading-8 text-[#40342b]">&ldquo;{review.quote}&rdquo;</p>
                  <div className="mt-5 flex items-center justify-between gap-4 text-sm text-[#6a5d4f]">
                    <span>{area.city} review highlight</span>
                    <a
                      href={googleReviewsHref}
                      target="_blank"
                      rel="noreferrer"
                      className="font-semibold text-[#8f6220] underline underline-offset-4"
                    >
                      Verify source
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#dfcfb5] bg-[#ede2d1]/55">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#a36a14]">
              FAQs
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-[#34261b] sm:text-4xl">
              Common Questions About Painting In {area.city}
            </h2>
            <p className="mt-4 text-lg leading-8 text-[#615447]">
              Homeowners usually want clear answers before booking. These are some of the most common questions we hear for local painting projects.
            </p>
          </div>

          <div className="space-y-4">
            {area.faqs.map((faq) => (
              <div key={faq.q} className="rounded-3xl border border-[#dfcfb5] bg-[#fffaf2] p-6 shadow-sm">
                <h3 className="text-xl font-bold text-[#8f6220]">{faq.q}</h3>
                <p className="mt-3 leading-7 text-[#64584c]">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="rounded-[2.25rem] border border-[#d8c39f] bg-linear-to-r from-[#efe0bd] via-[#f6eddc] to-[#fff9f0] p-8 shadow-2xl shadow-[#b39358]/10 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#a36a14]">
                Request An Estimate
              </p>
              <h2 className="mt-3 text-3xl font-extrabold text-[#34261b] sm:text-4xl">
                Talk Through Your {area.city} Painting Project
              </h2>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-[#5c5045]">
                Whether you need interior repainting, exterior protection, or cabinet refinishing, Gold Lion Painting Inc helps homeowners move from estimate to final walkthrough with cleaner communication and stronger finish standards.
              </p>
            </div>

            <div className="flex flex-col gap-4 lg:items-end">
              <Link
                href="/contact-us"
                className="inline-flex rounded-2xl bg-[#d4a038] px-6 py-4 text-base font-extrabold text-[#1f1a14] transition hover:scale-[1.02] hover:bg-[#c7942f]"
              >
                Get a Free Estimate
              </Link>
              <a
                href="tel:9414625894"
                className="inline-flex rounded-2xl border border-[#cdbba0] bg-[#fffaf2] px-6 py-4 text-base font-extrabold text-[#3a3028] transition hover:bg-[#f5ecde]"
              >
                Call 941-462-5894
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

