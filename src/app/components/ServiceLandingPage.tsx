import Image from "next/image";
import Link from "next/link";
import {
  FaArrowRight,
  FaCheckCircle,
  FaChevronRight,
  FaPaintRoller,
  FaPhoneAlt,
  FaStar,
} from "react-icons/fa";

import FaqSchema from "./FaqSchema";
import { serviceLinks } from "./navigationData";
import ServiceImageGallery, {
  type ServiceGalleryImage,
} from "./ServiceImageGallery";
import {
  googleRatingValue,
  googleReviewCount,
  googleReviewsHref,
} from "../siteConfig";

type ServiceLandingPageProps = {
  schemaId: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  heroAlt: string;
  includedServices: string[];
  failureTitle: string;
  failureIntro: string;
  failurePoints: string[];
  standardsTitle: string;
  standardsText: string;
  standards: string[];
  environmentTitle: string;
  environmentText: string;
  environmentPoints: string[];
  imageBriefs: string[];
  imageGallery?: ServiceGalleryImage[];
  imageGalleryTitle?: string;
  imageGalleryDescription?: string;
  serviceAreas: string[];
  details: {
    title: string;
    text: string;
  }[];
  process: {
    title: string;
    text: string;
  }[];
  reviews: {
    label: string;
    quote: string;
  }[];
  faqs: {
    q: string;
    a: string;
  }[];
};

const proof = [
  "5-Year Workmanship Warranty",
  "Fully Insured",
  "Clean, Organized Job Sites",
  "High-End Residential Focus",
];

export default function ServiceLandingPage({
  schemaId,
  eyebrow,
  title,
  subtitle,
  description,
  heroImage,
  heroAlt,
  includedServices,
  failureTitle,
  failureIntro,
  failurePoints,
  standardsTitle,
  standardsText,
  standards,
  environmentTitle,
  environmentText,
  environmentPoints,
  imageBriefs,
  imageGallery,
  imageGalleryTitle,
  imageGalleryDescription,
  serviceAreas,
  details,
  process,
  reviews,
  faqs,
}: ServiceLandingPageProps) {
  return (
    <main className="bg-white text-[#0c0d0e]">
      <FaqSchema faqs={faqs} id={schemaId} />

      <section className="relative min-h-[390px] overflow-hidden px-4 py-7 text-white sm:px-6 lg:px-8 lg:py-9">
        <Image
          src={heroImage}
          alt={heroAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c0d0e]/88 via-[#0c0d0e]/58 to-[#0c0d0e]/20" />
        <div className="relative mx-auto flex max-w-6xl items-center py-4 lg:min-h-[310px]">
          <div className="reveal-up max-w-4xl">
            <p className="font-display text-xs font-black tracking-[0.18em] text-[#e4ad42] uppercase">
              {eyebrow}
            </p>
            <h1 className="font-heading mt-2 max-w-3xl text-3xl leading-[1.02] font-black sm:text-4xl lg:text-5xl">
              {title}
            </h1>
            <h2 className="mt-3 max-w-2xl text-lg font-black text-[#e4ad42] sm:text-xl">
              {subtitle}
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-[#f3f3f3] sm:text-base">
              {description}
            </p>
            <div className="mt-4 flex max-w-4xl flex-wrap gap-2">
              {proof.map((point) => (
                <span
                  key={point}
                  className="inline-flex items-center gap-2 border border-white/20 bg-[#0c0d0e]/60 px-3 py-1.5 text-xs font-bold backdrop-blur-sm"
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
                Request Your Free Estimate
              </Link>
              <a
                href="tel:9414625894"
                className="inline-flex items-center gap-3 rounded-full border-2 border-white px-5 py-2.5 text-sm font-black text-white transition hover:border-[#e4ad42] hover:bg-[#e4ad42] hover:text-[#0c0d0e]"
              >
                <FaPhoneAlt aria-hidden="true" />
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
            Gold Lion Painting Inc pairs service-specific planning with clean
            protection, disciplined prep, and a finish standard designed for
            Florida homes.
          </p>
          <a
            href={googleReviewsHref}
            target="_blank"
            rel="noreferrer"
            className="font-heading mt-5 inline-flex text-2xl font-black text-[#0c0d0e] transition hover:text-[#e4ad42]"
          >
            {googleRatingValue} Google Rating From {googleReviewCount} Reviews
          </a>
        </div>
      </section>

      <section className="px-4 py-18 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="scroll-reveal">
            <SectionKicker text="Professional Service" />
            <h2 className="font-heading mt-3 text-4xl leading-tight font-black lg:text-5xl">
              A Better Painting Result Starts Before Paint Touches the Surface
            </h2>
            <div className="mt-8 grid gap-6">
              {details.map((detail) => (
                <article
                  key={detail.title}
                  className="border-l-4 border-[#e4ad42] pl-5"
                >
                  <h3 className="font-heading text-2xl font-black">
                    {detail.title}
                  </h3>
                  <p className="mt-3 text-lg leading-8 text-[#1f2124]">
                    {detail.text}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="scroll-reveal grid gap-4 bg-[#0c0d0e] p-6 text-white shadow-[1px_1px_18px_rgba(0,0,0,0.28)]">
            <h2 className="font-heading text-3xl font-black text-[#e4ad42]">
              What We Include
            </h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {includedServices.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 border border-white/10 bg-[#1f2124] p-4"
                >
                  <FaCheckCircle
                    aria-hidden="true"
                    className="mt-1 shrink-0 text-[#e4ad42]"
                  />
                  <span className="leading-6 font-bold">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#1f2124] px-4 py-18 text-[#dddddd] sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="scroll-reveal max-w-3xl">
            <SectionKicker text="Process" />
            <h2 className="font-heading mt-3 text-4xl leading-tight font-black text-white lg:text-5xl">
              Our Structured Painting Process
            </h2>
            <p className="mt-5 text-lg leading-8">
              Every project follows a controlled sequence so the final finish is
              cleaner, stronger, and easier to inspect.
            </p>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-4">
            {process.map((step, index) => (
              <article
                key={step.title}
                className="scroll-reveal group border-t-4 border-[#e4ad42] bg-white p-6 text-[#0c0d0e] shadow-[1px_1px_12px_rgba(0,0,0,0.4)] transition duration-300 hover:-translate-y-2"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <span className="font-heading text-5xl font-black text-[#e4ad42]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-heading mt-5 text-2xl font-black">
                  {step.title}
                </h3>
                <p className="mt-3 leading-7 text-[#1f2124]">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-18 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
          <div className="scroll-reveal bg-[#f3f3f3] p-7">
            <SectionKicker text="Problems We Prevent" />
            <h2 className="font-heading mt-3 text-4xl font-black">
              {failureTitle}
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#1f2124]">
              {failureIntro}
            </p>
            <div className="mt-7 grid gap-3">
              {failurePoints.map((point) => (
                <div
                  key={point}
                  className="flex items-center gap-3 border-b border-[#0c0d0e]/12 pb-3 font-bold"
                >
                  <span className="h-2.5 w-2.5 shrink-0 bg-[#d90000]" />
                  {point}
                </div>
              ))}
            </div>
          </div>

          <div className="scroll-reveal bg-[#e4ad42] p-7">
            <SectionKicker text="Finish Standard" dark />
            <h2 className="font-heading mt-3 text-4xl font-black">
              {standardsTitle}
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#1f2124]">
              {standardsText}
            </p>
            <div className="mt-7 grid gap-3">
              {standards.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 bg-[#0c0d0e] p-4 font-bold text-white"
                >
                  <FaCheckCircle
                    aria-hidden="true"
                    className="mt-1 shrink-0 text-[#e4ad42]"
                  />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0c0d0e] px-4 py-18 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div className="scroll-reveal">
            <SectionKicker
              text={imageGallery ? "Project Gallery" : "Image Placeholders"}
            />
            <h2 className="font-heading mt-3 text-4xl leading-tight font-black lg:text-5xl">
              {imageGalleryTitle ?? "Photo Blocks Ready For Your Final Images"}
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#dddddd]">
              {imageGalleryDescription ??
                "Dejé estos cuadros preparados para que luego me digas qué imagen exacta quieres colocar en cada bloque."}
            </p>
          </div>
          {imageGallery ? (
            <ServiceImageGallery images={imageGallery} />
          ) : (
            <div className="grid gap-4 sm:grid-cols-2">
              {imageBriefs.map((brief, index) => (
                <div
                  key={brief}
                  className="scroll-reveal flex min-h-52 items-center justify-center border-2 border-dashed border-[#e4ad42]/70 bg-[#1f2124] p-6 text-center"
                  style={{ animationDelay: `${index * 90}ms` }}
                >
                  <div>
                    <p className="font-heading text-lg font-black text-[#e4ad42]">
                      Image Placeholder {index + 1}
                    </p>
                    <p className="mt-3 text-sm leading-6 text-[#dddddd]">
                      {brief}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="px-4 py-18 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div className="scroll-reveal">
            <SectionKicker text="Built For Local Homes" />
            <h2 className="font-heading mt-3 text-4xl leading-tight font-black lg:text-5xl">
              {environmentTitle}
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#1f2124]">
              {environmentText}
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {environmentPoints.map((point) => (
                <div key={point} className="border-l-4 border-[#e4ad42] pl-4">
                  <p className="leading-7 font-bold">{point}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="scroll-reveal bg-[#0c0d0e] p-7 text-white">
            <h2 className="font-heading text-3xl font-black text-[#e4ad42]">
              Serving Manatee & Sarasota County
            </h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {serviceAreas.map((area) => (
                <span
                  key={area}
                  className="border border-white/12 bg-[#1f2124] px-4 py-2 text-sm font-bold"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#1f2124] px-4 py-16 text-[#dddddd] sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.42fr_0.58fr]">
          <div className="scroll-reveal">
            <h2 className="font-heading text-4xl font-black text-[#e4ad42]">
              Review Proof Homeowners Can Check
            </h2>
            <p className="mt-5 text-lg leading-8">
              Service pages connect the promise to visible proof and a direct
              Google Business Profile destination.
            </p>
            <a
              href={googleReviewsHref}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex rounded-full bg-[#d90000] px-6 py-4 font-bold text-white transition hover:bg-[#e4ad42] hover:text-[#0c0d0e]"
            >
              Open Google Reviews
            </a>
          </div>
          <div className="grid gap-5">
            {reviews.map((review) => (
              <article
                key={`${review.label}-${review.quote}`}
                className="scroll-reveal bg-white p-6 text-[#0c0d0e] shadow-[1px_1px_10px_rgba(0,0,0,0.35)]"
              >
                <p className="font-display font-bold text-[#a97a36]">
                  {review.label}
                </p>
                <p className="mt-4 text-xl leading-8">{review.quote}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.4fr_0.6fr]">
          <div className="scroll-reveal">
            <h2 className="font-heading text-4xl font-black text-[#0c0d0e]">
              Frequently Asked Questions
            </h2>
            <p className="mt-5 text-lg leading-8">
              Clear answers help homeowners plan the project before booking.
            </p>
          </div>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="scroll-reveal">
                <h3 className="font-heading text-xl font-black text-[#0c0d0e]">
                  {faq.q}
                </h3>
                <p className="mt-2 leading-7 text-[#1f2124]">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionTitle title="Explore Our Painting Services" />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {serviceLinks.map((service) => (
              <Link
                key={`${service.label}-${service.href}`}
                href={service.href}
                className="hover-lift group bg-[#e4ad42] p-6 shadow-[1px_1px_10px_rgba(0,0,0,0.35)]"
              >
                <FaPaintRoller
                  aria-hidden="true"
                  className="text-3xl text-[#0c0d0e]"
                />
                <h3 className="font-heading mt-5 text-2xl font-black text-[#0c0d0e]">
                  {service.label}
                </h3>
                <span className="mt-5 inline-flex items-center gap-2 font-bold">
                  More
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
          <h2 className="font-heading text-3xl font-black text-[#0c0d0e]">
            Get Expert Painting Services From Gold Lion Painting Inc
          </h2>
          <Link
            href="/contact-us"
            className="inline-flex shrink-0 items-center justify-center gap-3 rounded-lg bg-[#0c0d0e] px-6 py-4 font-bold text-white uppercase shadow-[0_0_10px_rgba(0,0,0,0.45)] transition hover:bg-[#d90000]"
          >
            Get a Free Estimate
            <FaArrowRight aria-hidden="true" />
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

function SectionKicker({
  text,
  dark = false,
}: {
  text: string;
  dark?: boolean;
}) {
  return (
    <p
      className={`font-display text-sm font-black tracking-[0.16em] uppercase ${
        dark ? "text-[#0c0d0e]" : "text-[#e4ad42]"
      }`}
    >
      {text}
    </p>
  );
}
