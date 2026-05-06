import Image from "next/image";
import Link from "next/link";
import {
  FaArrowRight,
  FaCheckCircle,
  FaChevronRight,
  FaMapMarkedAlt,
  FaPaintRoller,
  FaStar,
} from "react-icons/fa";

import FaqSchema from "./FaqSchema";
import GoogleReviewsCarousel from "./GoogleReviewsCarousel";
import { type AreaLandingData } from "./areaLandingData";
import { serviceLinks } from "./navigationData";
import { googleRatingValue, googleReviewCount } from "../siteConfig";

type AreaLandingPageProps = {
  area: AreaLandingData;
};

const trustPoints = [
  "Experienced painters with 10+ years in the trade",
  "Fully insured residential painting company",
  "5-year workmanship warranty on qualifying jobs",
];

function getServiceHref(label: string) {
  const normalized = label.toLowerCase();

  if (normalized.includes("exterior")) {
    return "/exterior-painting";
  }

  if (normalized.includes("cabinet")) {
    return "/cabinet-painting";
  }

  return "/interior-painting";
}

export default function AreaLandingPage({ area }: AreaLandingPageProps) {
  return (
    <main className="bg-white text-[#0c0d0e]">
      <FaqSchema faqs={area.faqs} id={`${area.slug}-faq-schema`} />

      <section className="relative min-h-[390px] overflow-hidden px-4 py-7 text-white sm:px-6 lg:px-8 lg:py-9">
        <Image
          src={area.heroImage}
          alt={area.heroImageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="relative mx-auto flex max-w-6xl items-center py-4 lg:min-h-[310px]">
          <div className="reveal-up max-w-4xl">
            <p className="font-display text-xs font-black tracking-[0.18em] text-[#e4ad42] uppercase">
              {area.county} Residential Painting
            </p>
            <h1 className="font-heading mt-2 max-w-3xl text-3xl leading-[1.02] font-black sm:text-4xl lg:text-5xl">
              {area.heroTitle}
            </h1>
            <h2 className="mt-3 max-w-2xl text-lg font-black text-[#e4ad42] sm:text-xl">
              {area.heroSubtitle}
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-[#f3f3f3] sm:text-base">
              {area.description}
            </p>
            <div className="mt-4 flex max-w-4xl flex-wrap gap-2">
              {trustPoints.map((point) => (
                <span
                  key={point}
                  className="inline-flex items-center gap-2 border border-white/20 bg-[#0c0d0e]/60 px-3 py-1.5 text-xs font-bold text-white backdrop-blur-sm"
                >
                  <FaCheckCircle
                    aria-hidden="true"
                    className="text-[#e4ad42]"
                  />
                  {point}
                </span>
              ))}
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-3 rounded-full bg-[#d90000] px-5 py-2.5 text-sm font-black text-white shadow-[0_18px_35px_rgba(0,0,0,0.42)] transition hover:bg-[#e4ad42] hover:text-[#0c0d0e]"
              >
                <FaPaintRoller aria-hidden="true" />
                Get a Free Estimate
              </Link>
              <a
                href="tel:9414625894"
                className="inline-flex items-center rounded-full border-2 border-white px-5 py-2.5 text-sm font-black text-white transition hover:border-[#e4ad42] hover:bg-[#e4ad42] hover:text-[#0c0d0e]"
              >
                Call (941) 462-5894
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#dddddd] px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl text-center">
          <div
            className="flex justify-center gap-1 text-[#e4ad42]"
            aria-label="5 star rating"
          >
            {[0, 1, 2, 3, 4].map((star) => (
              <FaStar key={star} aria-hidden="true" />
            ))}
          </div>
          <p className="mx-auto mt-5 max-w-4xl text-lg leading-8">
            Homeowners in <strong>{area.city}</strong> need painting work that
            matches local exposure, property expectations, and clean execution
            standards.
          </p>
          <p className="font-heading mt-5 text-2xl font-black text-[#0c0d0e]">
            {googleRatingValue} Google Rating From {googleReviewCount} Reviews
          </p>
        </div>
      </section>

      <GoogleReviewsCarousel areaName={area.city} />

      <section className="px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.42fr_0.58fr] lg:items-start">
          <div className="scroll-reveal">
            <p className="font-display text-sm font-black tracking-[0.16em] text-[#e4ad42] uppercase">
              Local Strategy
            </p>
            <h2 className="font-heading mt-3 text-4xl leading-tight font-black text-[#0c0d0e]">
              Painting Built Around {area.city} Conditions
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#1f2124]">
              {area.highlight}
            </p>
            <p className="mt-5 rounded-xl border-l-4 border-[#e4ad42] bg-[#f7f7f7] px-5 py-4 text-base leading-7 text-[#1f2124]">
              Compare the right scope for your home with our{" "}
              {serviceLinks.map((link, index) => (
                <span key={link.href}>
                  <Link
                    href={link.href}
                    className="font-black text-[#a97a36] underline decoration-[#e4ad42] decoration-2 underline-offset-4 transition hover:text-[#d90000]"
                  >
                    {link.label}
                  </Link>
                  {index < serviceLinks.length - 2
                    ? ", "
                    : index === serviceLinks.length - 2
                      ? " and "
                      : ""}
                </span>
              ))}{" "}
              pages.
            </p>
            <Link
              href="/contact-us"
              className="mt-7 inline-flex items-center gap-3 rounded-full bg-[#d90000] px-6 py-3 font-black text-white transition hover:bg-[#0c0d0e]"
            >
              Schedule Local Estimate
              <FaArrowRight aria-hidden="true" />
            </Link>
          </div>
          <div className="scroll-reveal grid gap-4 sm:grid-cols-2">
            {area.localFactors.map((factor) => (
              <div
                key={factor}
                className="border-l-4 border-[#e4ad42] bg-[#f3f3f3] p-5"
              >
                <p className="leading-7 font-bold">{factor}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionTitle title={`Recent Painting Work In ${area.city}`} />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {area.gallery.map((item) => (
              <Link
                key={item.src}
                href={getServiceHref(item.label)}
                className="hover-lift bg-[#e4ad42] p-4 shadow-[1px_1px_10px_rgba(0,0,0,0.65)]"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={700}
                  height={500}
                  className="h-64 w-full rounded-xl object-cover"
                />
                <h3 className="font-heading mt-4 text-2xl font-black text-[#0c0d0e]">
                  {item.label}
                </h3>
                <p className="mt-3 text-sm leading-6">{item.alt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-4 py-16 text-[#dddddd] sm:px-6 lg:px-8">
        <Image
          src={area.heroImage}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0c0d0e]/82" />
        <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.42fr_0.58fr]">
          <div>
            <h2 className="font-heading text-4xl font-black text-[#e4ad42]">
              Process Standards For {area.city} Homes
            </h2>
            <p className="mt-5 text-lg leading-8">{area.localFactorsIntro}</p>
            <div className="mt-8">
              <h3 className="font-display text-lg font-bold text-[#e4ad42]">
                Where We Commonly Work
              </h3>
              <div className="mt-4 flex flex-wrap gap-3">
                {area.communities.map((community) => (
                  <span
                    key={community}
                    className="inline-flex items-center gap-2 rounded-full border border-[#e4ad42]/35 px-4 py-3 text-sm"
                  >
                    <FaMapMarkedAlt
                      aria-hidden="true"
                      className="text-[#e4ad42]"
                    />
                    {community}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {[
              "Evaluation of exposure, surface condition, access, and finish expectations.",
              "Cleaning, sanding, masking, repairs, caulking, and protection before finish work.",
              "Primer and coating selection based on material, moisture, UV, and daily use.",
              "Final inspection for coverage, lines, cleanup, and homeowner walkthrough.",
            ].map((factor) => (
              <article
                key={factor}
                className="border-b border-[#e4ad42]/40 pb-5"
              >
                <p className="font-display font-bold text-[#e4ad42]">
                  What We Plan For
                </p>
                <p className="mt-3 leading-7">{factor}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionTitle
            title={`Residential Painting Services In ${area.city}`}
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {area.serviceCards.map((card) => (
              <Link
                key={card.title}
                href={getServiceHref(card.title)}
                className="flex h-full flex-col bg-[#e4ad42] p-6 shadow-[1px_1px_10px_rgba(0,0,0,0.65)]"
              >
                <h3 className="font-heading text-2xl font-black text-[#0c0d0e]">
                  {card.title}
                </h3>
                <p className="mt-4 leading-7">{card.description}</p>
                <ul className="mt-5 space-y-3">
                  {card.points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <FaCheckCircle
                        aria-hidden="true"
                        className="mt-1 shrink-0 text-[#0c0d0e]"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <span className="font-heading mt-6 inline-flex items-center gap-2 text-sm font-black text-[#0c0d0e] uppercase">
                  View service
                  <FaChevronRight aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.4fr_0.6fr]">
          <div>
            <h2 className="font-heading text-4xl font-black text-[#0c0d0e]">
              Common Questions About Painting In {area.city}
            </h2>
            <p className="mt-5 text-lg leading-8">
              Homeowners usually want clear answers before booking. These are
              common questions for local painting projects.
            </p>
          </div>
          <div className="space-y-6">
            {area.faqs.map((faq) => (
              <div key={faq.q}>
                <h3 className="font-heading text-xl font-black text-[#0c0d0e]">
                  {faq.q}
                </h3>
                <p className="mt-2 leading-7 text-[#1f2124]">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f3f3f3] px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionTitle title="Related Painting Pages" />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {serviceLinks.map((link) => (
              <Link
                key={`${area.slug}-${link.href}`}
                href={link.href}
                className="group border border-[#e4ad42]/45 bg-[#0c0d0e] p-6 text-[#dddddd] shadow-[0_18px_35px_rgba(0,0,0,0.22)] transition hover:-translate-y-1 hover:border-[#e4ad42]"
              >
                <FaPaintRoller
                  aria-hidden="true"
                  className="text-3xl text-[#e4ad42]"
                />
                <h3 className="font-heading mt-5 text-2xl font-black text-white">
                  {link.label}
                </h3>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-[#e4ad42] uppercase">
                  View page
                  <FaChevronRight
                    aria-hidden="true"
                    className="transition group-hover:translate-x-1"
                  />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#d39620] px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="font-heading text-3xl font-black text-[#0c0d0e]">
              Talk Through Your {area.city} Painting Project
            </h2>
            <p className="mt-3 max-w-3xl leading-7 text-[#0c0d0e]">
              Whether you need interior repainting, exterior protection, or
              cabinet refinishing, Gold Lion Painting Inc helps homeowners move
              from estimate to final walkthrough.
            </p>
          </div>
          <Link
            href="/contact-us"
            className="inline-flex shrink-0 justify-center rounded-lg bg-[#0c0d0e] px-6 py-4 font-bold text-white uppercase shadow-[0_0_10px_rgba(0,0,0,0.45)] transition hover:bg-[#a97a36]"
          >
            Get a Free Estimate
          </Link>
        </div>
      </section>
    </main>
  );
}

function SectionTitle({ title }: { title: string }) {
  return (
    <div className="text-center">
      <h2 className="font-heading text-4xl font-black text-[#0c0d0e]">
        {title}
      </h2>
      <div className="mx-auto mt-5 h-1.5 w-2/3 max-w-xl bg-[#e4ad42]" />
    </div>
  );
}
