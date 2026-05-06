import Image from "next/image";
import Link from "next/link";
import { type Metadata } from "next";
import { type ReactNode } from "react";
import {
  FaCheckCircle,
  FaChevronRight,
  FaExternalLinkAlt,
  FaFileContract,
  FaMapMarkedAlt,
  FaPaintRoller,
  FaStar,
} from "react-icons/fa";
import { type IconType } from "react-icons";

import EstimateRequestForm from "./components/EstimateRequestForm";
import FaqSchema from "./components/FaqSchema";
import GoogleReviewsCarousel from "./components/GoogleReviewsCarousel";
import ProcessStepImage from "./components/ProcessStepImage";
import { areaLinks, serviceAreaNames } from "./components/navigationData";

import {
  bbbProfileHref,
  businessHours,
  businessName,
  googleRatingValue,
  googleReviewCount,
  googleReviewsHref,
  siteUrl,
} from "./siteConfig";

export const metadata: Metadata = {
  title: "Gold Lion Painting Inc | Interior, Exterior & Cabinet Painters",
  description:
    "Gold Lion Painting Inc provides interior painting, exterior house painting, cabinet painting, cabinet refinishing, and color consultation across Bradenton, Sarasota, Tampa, St. Petersburg, and nearby Florida service areas.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Gold Lion Painting Inc | Interior, Exterior & Cabinet Painters",
    description:
      "Gold Lion Painting Inc provides interior painting, exterior house painting, cabinet painting, cabinet refinishing, and color consultation across Bradenton, Sarasota, Tampa, St. Petersburg, and nearby Florida service areas.",
    url: siteUrl,
    images: [
      {
        url: "/home/luxury-exterior-painting-anna-maria.jpg",
        width: 1200,
        height: 900,
        alt: "Gold Lion Painting exterior painting project in Bradenton, Sarasota",
      },
    ],
  },
};

const trustPoints = [
  "Fully insured residential painting company",
  "Experienced painters with 10+ years in the trade",
  "5-Year Limited Workmanship Warranty",
  `${googleRatingValue} Google rating from ${googleReviewCount} reviews`,
  businessHours,
];

const areaCards = [
  {
    href: "/bradenton",
    label: "Bradenton",
    image: "/bradenton/luxury-exterior-painting-bradenton-02.jpg.jpg",
    alt: "Luxury exterior painting project in Bradenton",
  },
  {
    href: "/lakewood-ranch",
    label: "Lakewood Ranch",
    image: "/LakewoodRanch/house-exterior-painting-lakewood-ranch.jpg",
    alt: "Exterior house painting in Lakewood Ranch",
  },
  {
    href: "/parrish",
    label: "Parrish",
    image: "/parrish/house-exterior-painting-parrish.jpg",
    alt: "Exterior painting project in Parrish",
  },
  {
    href: "/palmetto",
    label: "Palmetto",
    image: "/palmeto/house-exterior-painting-palmetto.jpg",
    alt: "Exterior house painting in Palmetto",
  },
  {
    href: "/ellenton",
    label: "Ellenton",
    image: "/ellenton/professional-exterior-painter-ellenton.jpg",
    alt: "Professional exterior painting in Ellenton",
  },
  {
    href: "/ana-maria",
    label: "Anna Maria Island",
    image: "/anamaria/luxury-exterior-painting-anna-maria-02.jpg.jpg",
    alt: "Luxury exterior painting in Anna Maria Island",
  },
  {
    href: "/holmes-beach",
    label: "Holmes Beach",
    image: "/holmesbeach/luxury-exterior-painting-holmes-beach-02.jpg",
    alt: "Luxury exterior painting in Holmes Beach",
  },
  {
    href: "/venice",
    label: "Venice",
    image: "/venice/exterior-painting-venice.jpeg",
    alt: "Exterior house painting in Venice",
  },
  {
    href: "/sarasota",
    label: "Sarasota",
    image: "/sarasota/sarasota_home.jpeg",
    alt: "Exterior house painting in Sarasota",
  },
  {
    href: "/siesta-key",
    label: "Siesta Key",
    image: "/siesta/siesta_key_home.jpeg",
    alt: "Exterior house painting in Siesta Key",
  },
];

const services = [
  {
    title: "Interior Painting",
    href: "/interior-painting-upgrade",
    image: "/home/interior-house-painting-anna-maria-.jpg",
    alt: "Interior painting project by Gold Lion Painting Inc",
    description:
      "Full interior repainting for walls, ceilings, trim, doors, crown molding, accent walls, and occupied homes that need cleaner finishes.",
  },
  {
    title: "Exterior Painting",
    href: "/exterior-painting-upgrade",
    image: "/home/luxury-exterior-painting-anna-maria.jpg",
    alt: "Exterior house painting project by Gold Lion Painting Inc",
    description:
      "Exterior repaint systems built for Florida sun, humidity, rain cycles, stucco movement, caulking, crack repair, and durable curb appeal.",
  },
  {
    title: "Cabinet Painting",
    href: "/cabinet-painting-mejor",
    image: "/home/kitchen-cabinet-painting.jpg",
    alt: "Kitchen cabinet painting project by Gold Lion Painting Inc",
    description:
      "Cabinet refinishing and kitchen modernization using degreasing, sanding, bonding primers, and controlled cabinet-grade finishes.",
  },
];

const processSteps = [
  {
    title: "1. Setup",
    image: "/process/1..png",
    description:
      "We begin by preparing your space to ensure full protection and efficiency.",
    panels: [
      {
        label: "Interior",
        text: "Furniture and decor are carefully moved or covered. Floors and surfaces are fully protected using clean drop cloths and plastic coverings.",
      },
      {
        label: "Exterior",
        text: "All surfaces are thoroughly cleaned using power washing or hand washing to remove dirt, mildew, and debris, ensuring proper paint adhesion.",
      },
    ],
  },
  {
    title: "2. Preparation",
    image: "/process/2.png",
    description: "Proper prep is the foundation of a long-lasting finish.",
    panels: [
      {
        label: "Interior",
        text: "We repair minor imperfections, including cracks and holes, and smooth all surfaces. Stains are sealed to prevent bleed-through.",
      },
      {
        label: "Exterior",
        text: "Loose or peeling paint is removed, surfaces are sanded, and gaps are sealed with high-quality caulk to prevent moisture intrusion.",
      },
    ],
  },
  {
    title: "3. Painting",
    image: "/process/3.png",
    description: "This is where your vision comes to life.",
    panels: [
      {
        label: "Interior",
        text: "Repaired areas are primed, and premium-quality paint is applied evenly to achieve a smooth, consistent finish.",
      },
      {
        label: "Exterior",
        text: "We apply high-performance coatings designed to withstand Florida's climate, ensuring durability and a flawless appearance.",
      },
    ],
  },
  {
    title: "4. Clean-Up",
    image: "/process/4.png",
    description:
      "We maintain a clean, organized workspace throughout the project. Once the job is complete, we remove all materials, coverings, and debris, leaving your space spotless and ready to enjoy.",
    panels: [],
  },
  {
    title: "Final Inspection",
    image: "/process/5.png",
    description:
      "Your satisfaction is our priority. We conduct a detailed walkthrough with you to ensure every detail meets your expectations. Any final touch-ups are addressed promptly to guarantee a flawless result.",
    panels: [],
  },
];

const processGalleryImages = processSteps.map((step) => ({
  src: step.image,
  alt: `${step.title} painting process`,
  title: step.title,
  description: step.description,
}));

const faqs = [
  {
    q: "Why choose a professional painting contractor in Manatee & Sarasota County?",
    a: "Professional preparation, product selection, protection, and application help Florida homes handle UV exposure, humidity, rain cycles, and daily use better than rushed repainting.",
  },
  {
    q: "How often should I repaint my house in Florida?",
    a: "Exterior repaint timing depends on sun exposure, moisture, substrate condition, and prep quality. Interior repainting depends on room use, cleaning needs, color changes, and finish wear.",
  },
  {
    q: "Do you offer interior, exterior, and cabinet painting?",
    a: "Yes. Gold Lion Painting Inc provides interior painting, exterior house painting, cabinet painting, and cabinet refinishing for residential properties.",
  },
  {
    q: "Do you offer a warranty?",
    a: "Yes. Qualifying projects are backed by a 5-Year Limited Workmanship Warranty.",
  },
  {
    q: "How do I get started?",
    a: "Call 941-462-5894 or send an estimate request through the contact form. We will review the project scope and next steps.",
  },
];

export default function HomePage() {
  return (
    <main className="bg-white text-[#0c0d0e]">
      <FaqSchema faqs={faqs} id="home-faq-schema" />

      <section className="relative min-h-[420px] overflow-hidden px-4 py-8 sm:px-6 lg:px-8 lg:py-16">
        <video
          aria-hidden="true"
          autoPlay
          loop
          muted
          playsInline
          poster="/bradenton/professional-exterior-painters-bradenton-03.jpg.jpg"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/video_lading.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-linear-to-r from-[#0c0d0e]/82 via-[#0c0d0e]/45 to-[#0c0d0e]/15" />
        <div className="relative mx-auto max-w-6xl pt-6 lg:pt-10">
          <div className="reveal-up max-w-2xl">
            <p className="font-display text-base font-bold text-[#e4ad42] drop-shadow-[0_3px_12px_rgba(0,0,0,0.75)]">
              {businessName}
            </p>
            <h1 className="font-heading mt-2 text-3xl leading-[1.04] font-black text-white drop-shadow-[0_4px_18px_rgba(0,0,0,0.75)] sm:text-4xl lg:text-5xl">
              Expert House Painters in Manatee & Sarasota County
            </h1>
            <p className="mt-4 max-w-xl text-base leading-7 font-semibold text-white drop-shadow-[0_3px_14px_rgba(0,0,0,0.75)]">
              Clean Work. Professional Results. Built to Last.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-3 rounded-full bg-[#d90000] px-6 py-4 font-bold text-white shadow-[0_0_14px_rgba(0,0,0,0.45)] transition hover:bg-[#1f2124]"
              >
                <FaPaintRoller aria-hidden="true" />
                Schedule Your Free Estimate
              </Link>
              <a
                href="tel:9414625894"
                className="inline-flex items-center rounded-full border-2 border-white px-6 py-4 font-bold text-white transition hover:bg-white hover:text-[#0c0d0e]"
              >
                Call (941) 462-5894
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#dddddd] px-4 py-6 sm:px-6 lg:px-8">
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
            Homeowners across{" "}
            <strong>
              Bradenton, Sarasota, Lakewood Ranch, Anna Maria Island, and nearby
              service areas
            </strong>{" "}
            rely on Gold Lion Painting Inc for structured execution, clean job
            sites, and refined finishes. Our projects focus on residential
            properties where quality, presentation, and longevity matter most.
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

      <GoogleReviewsCarousel />

      <section
        id="bbb-accredited"
        className="relative min-h-[540px] overflow-hidden px-4 py-16 text-white sm:px-6 lg:px-8"
      >
        <video
          aria-hidden="true"
          autoPlay
          loop
          muted
          playsInline
          poster="/bbb_logo.png"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/video_mini_landing_bbb.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-linear-to-r from-[#0c0d0e]/84 via-[#0c0d0e]/48 to-[#0c0d0e]/16" />
        <div className="relative mx-auto flex min-h-[420px] max-w-6xl items-center">
          <div className="max-w-2xl">
            <a
              href={bbbProfileHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-2xl bg-white p-3 shadow-[0_16px_36px_rgba(0,0,0,0.35)] transition hover:scale-105"
              aria-label="Visit Gold Lion Painting Inc BBB profile"
            >
              <Image
                src="/bbb_logo.png"
                alt="BBB Accredited Business"
                width={160}
                height={160}
                className="h-24 w-24 object-contain"
              />
            </a>

            <p className="font-heading mt-6 text-base font-black tracking-[0.2em] text-[#e4ad42] uppercase drop-shadow-[0_3px_12px_rgba(0,0,0,0.8)]">
              Accredited Trust Signal
            </p>
            <h2 className="font-heading mt-3 text-5xl leading-tight font-black text-white drop-shadow-[0_5px_18px_rgba(0,0,0,0.75)] md:text-7xl">
              BBB Accredited Business
            </h2>
            <p className="mt-5 max-w-xl text-xl leading-8 font-semibold text-white drop-shadow-[0_4px_14px_rgba(0,0,0,0.78)]">
              {businessName} is listed by BBB with an A+ rating. Review the
              official profile for business trust details.
            </p>

            <a
              href={bbbProfileHref}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-3 rounded-full bg-[#d90000] px-6 py-4 font-black text-white shadow-[0_12px_26px_rgba(0,0,0,0.35)] transition hover:bg-[#e4ad42] hover:text-[#0c0d0e]"
            >
              Visit Official BBB Profile
              <FaExternalLinkAlt aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[#dddddd] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 md:grid-cols-2 lg:items-center">
            <div className="rounded-[2rem] border border-[#dfcfb5] bg-[#fffaf2] p-6 shadow-sm">
              <p className="text-sm font-semibold tracking-[0.18em] text-[#8f7d6a] uppercase">
                Warranty Snapshot
              </p>
              <h2 className="mt-2 text-4xl font-bold text-[#8f6220]">
                Gold Lion Painting Inc. 5-Year Limited Warranty
              </h2>
              <p className="mt-3 leading-7 text-[#64584c]">
                Subject to the terms and conditions outlined below, for a period
                of five (5) years from the project completion date, Gold Lion
                Painting Inc. will repair any areas where peeling, blistering,
                or chipping occurs as a direct result of defective workmanship.
              </p>
              <Link
                href="/warranty-service"
                className="mt-6 inline-flex items-center gap-3 rounded-2xl bg-[#d4a038] px-6 py-3 font-bold text-[#2f2a24] transition hover:bg-[#c7942f]"
              >
                <FaFileContract aria-hidden="true" />
                Review Warranty Details
              </Link>
            </div>

            <a
              href="/warranty-service"
              className="block overflow-hidden rounded-[2rem] shadow-[0_18px_45px_rgba(0,0,0,0.18)] transition hover:scale-[1.02]"
            >
              <Image
                src="/warranty service nueva imagen.jpeg"
                alt="Gold Lion Painting 5-year limited warranty"
                width={1024}
                height={683}
                className="h-auto w-full"
                priority
              />
            </a>
          </div>
        </div>
      </section>

      <SectionTitle title="House Painting Areas" />
      <CardGrid items={areaCards} icon={FaMapMarkedAlt} />

      <SectionTitle title="More Services In Our Florida Service Area" />
      <CardGrid items={services} icon={FaPaintRoller} />

      <section className="relative overflow-hidden bg-[#111214] px-4 py-16 text-[#dddddd] sm:px-6 lg:px-8">
        <div className="texture-grid absolute inset-0 opacity-45" />
        <div className="relative mx-auto max-w-6xl">
          <div className="scroll-reveal grid gap-8 lg:grid-cols-[0.36fr_0.64fr] lg:items-end">
            <div>
              <p className="font-display text-sm font-black tracking-[0.16em] text-[#e4ad42] uppercase">
                Step By Step
              </p>
              <h2 className="font-heading mt-3 text-4xl leading-tight font-black text-white md:text-5xl">
                Our Painting Process
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-[#dddddd]">
              At Gold Lion Painting Inc, every project follows a streamlined,
              detail-oriented process designed to deliver exceptional results
              with minimal disruption.
            </p>
          </div>

          <div className="scroll-reveal mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((step, index) => (
              <article
                key={step.title}
                className="process-card group flex h-full flex-col overflow-hidden border border-[#e4ad42]/35 bg-[#f8f5ed] text-[#0c0d0e] shadow-[0_18px_34px_rgba(0,0,0,0.3)] transition duration-300 hover:-translate-y-1 hover:border-[#e4ad42] hover:shadow-[0_24px_48px_rgba(0,0,0,0.42)]"
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <ProcessStepImage
                  images={processGalleryImages}
                  index={index}
                  number={String(index + 1).padStart(2, "0")}
                  title={step.title}
                  compact
                />
                <div className="flex flex-1 flex-col p-4">
                  <p className="border-l-4 border-[#e4ad42] pl-3 text-sm leading-6 font-semibold text-[#1f2124]">
                    {step.description}
                  </p>

                  {step.panels.length > 0 ? (
                    <div className="mt-4 grid gap-2">
                      {step.panels.map((panel, panelIndex) => (
                        <details
                          key={panel.label}
                          open={panelIndex === 0}
                          className="process-accordion group/accordion overflow-hidden border border-[#0c0d0e]/10 bg-white shadow-[0_10px_24px_rgba(0,0,0,0.08)]"
                        >
                          <summary className="flex cursor-pointer list-none items-center gap-2 bg-[#0c0d0e] px-3 py-2 text-sm font-bold text-white transition hover:bg-[#17191c] hover:text-[#e4ad42]">
                            <span className="process-toggle text-lg font-black text-[#e4ad42]" />
                            {panel.label}:
                          </summary>
                          <p className="bg-white px-4 py-4 text-sm leading-6 text-[#1f2124]">
                            {panel.text}
                          </p>
                        </details>
                      ))}
                    </div>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          {/* HERO Interior */}
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div className="space-y-5">
              <h2 className="font-heading text-4xl font-black text-[#0c0d0e]">
                Interior Painting Services in Manatee & Sarasota County
              </h2>
              <p className="text-xl font-semibold text-[#8f6220]">
                Clean, High-End Interior Finishes Built for Real Living
              </p>
              <p className="text-lg leading-8 text-[#1f2124]">
                We deliver smooth, consistent interior painting designed to look
                flawless under natural light and daily use — not rushed jobs or
                uneven finishes.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-[#d4a038]" />
                  5-Year Workmanship Warranty
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-[#d4a038]" />
                  Fully Insured (Liability + Workers' Comp)
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-[#d4a038]" />
                  Clean, Organized Job Sites
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-[#d4a038]" />
                  High-End Residential Focus
                </li>
              </ul>
              <Link
                href="/interior-painting-upgrade"
                className="inline-flex items-center gap-3 rounded-full bg-[#d90000] px-6 py-4 font-bold text-white transition hover:bg-[#1f2124]"
              >
                Request Your Free Estimate Today
              </Link>
            </div>
            <div>
              <Image
                src="/bradenton/luxury-interior-painting-bradenton-02.jpg.jpg"
                alt="Luxury interior transformation"
                width={800}
                height={600}
                className="rounded-[2rem] object-cover shadow-[0_18px_45px_rgba(0,0,0,0.18)]"
              />
            </div>
          </div>

          {/* H2: Professional Interior Painting Services */}
          <div className="mt-16 space-y-6">
            <h3 className="font-heading text-3xl font-black text-[#0c0d0e]">
              Professional Interior Painting Services
            </h3>
            <p className="text-lg leading-8 text-[#1f2124]">
              Interior painting is one of the most noticeable upgrades in any
              home.
            </p>
            <p className="text-lg leading-8 text-[#1f2124]">
              In Manatee and Sarasota County, where natural light is strong and
              open layouts are common, even minor imperfections become highly
              visible.
            </p>
            <p className="text-lg leading-8 text-[#1f2124]">
              A professional interior paint job requires more than just applying
              color. It requires proper preparation, attention to detail, and
              controlled application techniques to achieve a clean, consistent
              finish.
            </p>
            <p className="text-lg leading-8 text-[#1f2124]">
              At Gold Lion Painting, we are not a production painting company.
              We focus on delivering interiors that look smooth, sharp, and
              professionally finished — never rushed or uneven.
            </p>
            <p className="text-lg leading-8 font-semibold text-[#1f2124]">
              We provide:
            </p>
            <ul className="list-disc space-y-2 pl-5 text-lg leading-8 text-[#1f2124]">
              <li>Full interior repainting</li>
              <li>Accent walls and custom finishes</li>
              <li>Ceiling painting</li>
              <li>Trim, doors, and baseboards</li>
              <li>Drywall repair and surface preparation</li>
            </ul>
          </div>

          {/* H2: Why Interior Painting Requires Precision */}
          <div className="mt-16 space-y-6">
            <h3 className="font-heading text-3xl font-black text-[#0c0d0e]">
              Why Interior Painting Requires Precision
            </h3>
            <p className="text-lg leading-8 text-[#1f2124]">
              Modern homes are designed in a way that exposes poor workmanship.
            </p>
            <p className="text-lg leading-8 font-semibold text-[#1f2124]">
              Common features include:
            </p>
            <ul className="list-disc space-y-2 pl-5 text-lg leading-8 text-[#1f2124]">
              <li>Open floor plans</li>
              <li>Large windows with natural light</li>
              <li>Light or neutral color palettes</li>
              <li>High ceilings and detailed trim</li>
            </ul>
            <p className="text-lg leading-8 font-semibold text-[#1f2124]">
              These conditions make issues immediately visible, such as:
            </p>
            <ul className="list-disc space-y-2 pl-5 text-lg leading-8 text-[#1f2124]">
              <li>Roller marks</li>
              <li>Flashing (uneven sheen)</li>
              <li>Poor cut lines</li>
              <li>Inconsistent color coverage</li>
            </ul>
            <p className="text-lg leading-8 text-[#1f2124]">
              A low-quality paint job may look acceptable at first, but under
              real lighting conditions, defects become obvious quickly.
            </p>
            <p className="text-lg leading-8 font-semibold text-[#1f2124]">
              That's why we focus on:
            </p>
            <ul className="list-disc space-y-2 pl-5 text-lg leading-8 text-[#1f2124]">
              <li>Even application</li>
              <li>Uniform finish</li>
              <li>Clean, sharp transitions between surfaces</li>
            </ul>
          </div>

          {/* H2: High-End Interior Painting Standards */}
          <div className="mt-16 space-y-6">
            <h3 className="font-heading text-3xl font-black text-[#0c0d0e]">
              High-End Interior Painting Standards
            </h3>
            <p className="text-lg leading-8 text-[#1f2124]">
              Interior painting today requires more than basic coverage — it
              requires control, precision, and consistency.
            </p>
            <p className="text-lg leading-8 font-semibold text-[#1f2124]">
              We approach every project with a focus on:
            </p>
            <ul className="list-disc space-y-2 pl-5 text-lg leading-8 text-[#1f2124]">
              <li>Smooth, uniform finishes</li>
              <li>Clean, sharp lines at all transitions</li>
              <li>Even sheen across walls and ceilings</li>
              <li>Proper surface preparation before any paint is applied</li>
            </ul>
            <p className="text-lg leading-8 text-[#1f2124]">
              This level of detail is what separates a basic paint job from a
              professional result.
            </p>
            <p className="text-lg leading-8 text-[#1f2124] italic">
              👉 The difference is not the paint — it's the system behind it.
            </p>
          </div>

          {/* H2: Our Interior Painting Process */}
          <div className="mt-16 space-y-6">
            <h3 className="font-heading text-3xl font-black text-[#0c0d0e]">
              Our Interior Painting Process
            </h3>
            <p className="text-lg leading-8 text-[#1f2124]">
              Every project follows a structured system designed for consistent,
              high-quality results:
            </p>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-2xl border border-[#e4ad42]/35 bg-[#f7f7f7] p-5">
                <h4 className="mb-2 text-xl font-bold text-[#0c0d0e]">
                  Evaluation
                </h4>
                <p className="leading-7 text-[#1f2124]">
                  Inspection of walls, ceilings, trim, and existing paint
                  conditions
                </p>
              </div>
              <div className="rounded-2xl border border-[#e4ad42]/35 bg-[#f7f7f7] p-5">
                <h4 className="mb-2 text-xl font-bold text-[#0c0d0e]">
                  Preparation
                </h4>
                <p className="leading-7 text-[#1f2124]">
                  Protection of floors, furniture, and fixtures. Drywall
                  repairs, patching, sanding, and smoothing.
                </p>
              </div>
              <div className="rounded-2xl border border-[#e4ad42]/35 bg-[#f7f7f7] p-5">
                <h4 className="mb-2 text-xl font-bold text-[#0c0d0e]">
                  Priming
                </h4>
                <p className="leading-7 text-[#1f2124]">
                  Spot priming or full priming when required.
                </p>
              </div>
              <div className="rounded-2xl border border-[#e4ad42]/35 bg-[#f7f7f7] p-5">
                <h4 className="mb-2 text-xl font-bold text-[#0c0d0e]">
                  Application
                </h4>
                <p className="leading-7 text-[#1f2124]">
                  Professional paint application using controlled techniques.
                </p>
              </div>
              <div className="rounded-2xl border border-[#e4ad42]/35 bg-[#f7f7f7] p-5">
                <h4 className="mb-2 text-xl font-bold text-[#0c0d0e]">
                  Final Inspection
                </h4>
                <p className="leading-7 text-[#1f2124]">
                  Detailed walkthrough to ensure a clean and uniform finish.
                </p>
              </div>
            </div>
            <p className="text-lg leading-8 text-[#1f2124] italic">
              👉 Proper preparation and application control are what determine
              the final result.
            </p>
            <Link
              href="/interior-painting-upgrade"
              className="inline-flex items-center gap-3 rounded-full bg-[#d90000] px-6 py-4 font-bold text-white transition hover:bg-[#1f2124]"
            >
              Request Your Free Estimate Today
            </Link>
          </div>

          {/* H2: Clean, Controlled Work Environment */}
          <div className="mt-16 space-y-6">
            <h3 className="font-heading text-3xl font-black text-[#0c0d0e]">
              Clean, Controlled Work Environment
            </h3>
            <p className="text-lg leading-8 text-[#1f2124]">
              Interior painting takes place inside your home — cleanliness is
              critical.
            </p>
            <p className="text-lg leading-8 font-semibold text-[#1f2124]">
              We maintain:
            </p>
            <ul className="list-disc space-y-2 pl-5 text-lg leading-8 text-[#1f2124]">
              <li>Fully protected floors and furniture</li>
              <li>Masked and covered surfaces</li>
              <li>Organized work areas</li>
              <li>Daily cleanup throughout the project</li>
            </ul>
            <p className="text-lg leading-8 text-[#1f2124]">
              We also implement dust control measures during preparation,
              including controlled sanding and dust containment practices to
              minimize airborne particles inside your home.
            </p>
            <p className="text-lg leading-8 text-[#1f2124] italic">
              👉 One of the biggest concerns for homeowners is drywall dust —
              our process is designed to keep your space clean and livable
              during the project.
            </p>
            <p className="text-lg leading-8 text-[#1f2124] italic">
              👉 Leave your home clean — and your walls flawless
            </p>
          </div>

          {/* H2: Interior Finishes Built to Last */}
          <div className="mt-16 grid gap-8 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6">
              <h3 className="font-heading text-3xl font-black text-[#0c0d0e]">
                Interior Finishes Built to Last
              </h3>
              <p className="text-lg leading-8 text-[#1f2124]">
                Interior paint must do more than look good — it must perform
                under daily use.
              </p>
              <p className="text-lg leading-8 font-semibold text-[#1f2124]">
                Walls and surfaces are exposed to:
              </p>
              <ul className="list-disc space-y-2 pl-5 text-lg leading-8 text-[#1f2124]">
                <li>Regular contact and traffic</li>
                <li>Cleaning products</li>
                <li>Furniture movement</li>
                <li>Everyday wear and tear</li>
              </ul>
              <p className="text-lg leading-8 text-[#1f2124]">
                We use premium interior coatings from Sherwin-Williams,
                including Emerald® Interior and Cashmere®, selected for their
                durability, smooth finish, and ability to maintain a consistent
                appearance under natural light.
              </p>
              <p className="text-lg leading-8 font-semibold text-[#1f2124]">
                These products are designed for:
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-[#d4a038]" />
                  Superior washability
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-[#d4a038]" />
                  Long-term color retention
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-[#d4a038]" />
                  Smooth, uniform finish
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-[#d4a038]" />
                  Resistance to daily wear
                </li>
              </ul>
              <p className="text-lg leading-8 text-[#1f2124] italic">
                👉 The right product matters — but proper application is what
                makes it perform.
              </p>
            </div>
            <div>
              <Image
                src="/bradenton/luxury-interior-painting-bradenton-01.jpg.jpg"
                alt="Premium Sherwin-Williams interior coatings"
                width={800}
                height={600}
                className="rounded-[2rem] object-cover shadow-[0_18px_45px_rgba(0,0,0,0.18)]"
              />
            </div>
          </div>

          {/* H2: Common Interior Painting Problems We Fix */}
          <div className="mt-16 space-y-6">
            <h3 className="font-heading text-3xl font-black text-[#0c0d0e]">
              Common Interior Painting Problems We Fix
            </h3>
            <p className="text-lg leading-8 text-[#1f2124]">
              We regularly correct issues caused by poor preparation or improper
              application:
            </p>
            <ul className="list-disc space-y-2 pl-5 text-lg leading-8 text-[#1f2124]">
              <li>Visible roller marks</li>
              <li>Uneven sheen (flashing)</li>
              <li>Rough or poorly repaired drywall</li>
              <li>Inconsistent color coverage</li>
              <li>Messy or uneven cut lines</li>
            </ul>
            <p className="text-lg leading-8 text-[#1f2124]">
              By addressing these issues before painting, we ensure a clean,
              professional finish.
            </p>
          </div>

          {/* H2: Interior Painting for Occupied Homes */}
          <div className="mt-16 space-y-6">
            <h3 className="font-heading text-3xl font-black text-[#0c0d0e]">
              Interior Painting for Occupied Homes
            </h3>
            <p className="text-lg leading-8 text-[#1f2124]">
              We frequently work in homes that are:
            </p>
            <ul className="list-disc space-y-2 pl-5 text-lg leading-8 text-[#1f2124]">
              <li>Fully occupied</li>
              <li>Recently purchased</li>
              <li>Being prepared for sale</li>
              <li>Under renovation</li>
            </ul>
            <p className="text-lg leading-8 font-semibold text-[#1f2124]">
              We adjust our process to:
            </p>
            <ul className="list-disc space-y-2 pl-5 text-lg leading-8 text-[#1f2124]">
              <li>Minimize disruption</li>
              <li>Maintain a clean environment</li>
              <li>Work efficiently and on schedule</li>
            </ul>
          </div>

          {/* H2: Serving Manatee & Sarasota County */}
          <div className="mt-16 space-y-6">
            <h3 className="font-heading text-3xl font-black text-[#0c0d0e]">
              Serving Manatee & Sarasota County
            </h3>
            <p className="text-lg leading-8 text-[#1f2124]">
              We provide interior painting services throughout:
            </p>
            <ul className="list-disc space-y-2 pl-5 text-lg leading-8 text-[#1f2124]">
              <li>Bradenton</li>
              <li>Lakewood Ranch</li>
              <li>Sarasota</li>
              <li>Siesta Key</li>
              <li>Venice</li>
              <li>Anna Maria Island</li>
              <li>Holmes Beach</li>
            </ul>
            <p className="text-lg leading-8 text-[#1f2124]">
              Each home is different, but our process remains consistent —
              clean, controlled, and built for long-term results.
            </p>
          </div>

          {/* H2: Why Homeowners Choose Gold Lion Painting */}
          <div className="mt-16 space-y-6">
            <h3 className="font-heading text-3xl font-black text-[#0c0d0e]">
              Why Homeowners Choose Gold Lion Painting
            </h3>
            <p className="text-lg leading-8 text-[#1f2124]">
              Choosing the right painting company is about more than price —
              it's about results.
            </p>
            <p className="text-lg leading-8 font-semibold text-[#1f2124]">
              Homeowners choose us because they want:
            </p>
            <ul className="list-disc space-y-2 pl-5 text-lg leading-8 text-[#1f2124]">
              <li>Clean, professional finishes</li>
              <li>Proper preparation</li>
              <li>Reliable scheduling</li>
              <li>Respect for their home</li>
            </ul>
            <p className="text-lg leading-8 text-[#1f2124]">
              We focus on delivering results that look right the first time —
              and continue to perform over time.
            </p>
            <p className="text-lg leading-8 text-[#1f2124] italic">
              👉 We are not the cheapest option — we are the option for
              homeowners who want it done right the first time.
            </p>
          </div>

          {/* H2: Frequently Asked Questions */}
          <div className="mt-16 space-y-6">
            <h3 className="font-heading text-3xl font-black text-[#0c0d0e]">
              Frequently Asked Questions
            </h3>
            <div className="space-y-4">
              <details className="rounded-lg border border-[#0c0d0e]/10 bg-white p-4">
                <summary className="cursor-pointer font-bold text-[#0c0d0e]">
                  How long does interior painting last?
                </summary>
                <p className="mt-2 leading-7 text-[#1f2124]">
                  Interior paint typically lasts 5–10 years depending on usage
                  and maintenance.
                </p>
              </details>
              <details className="rounded-lg border border-[#0c0d0e]/10 bg-white p-4">
                <summary className="cursor-pointer font-bold text-[#0c0d0e]">
                  Do you move furniture?
                </summary>
                <p className="mt-2 leading-7 text-[#1f2124]">
                  Yes. We help move and protect furniture as needed.
                </p>
              </details>
              <details className="rounded-lg border border-[#0c0d0e]/10 bg-white p-4">
                <summary className="cursor-pointer font-bold text-[#0c0d0e]">
                  How long does a project take?
                </summary>
                <p className="mt-2 leading-7 text-[#1f2124]">
                  Most interior projects take 2–5 days depending on size and
                  scope.
                </p>
              </details>
              <details className="rounded-lg border border-[#0c0d0e]/10 bg-white p-4">
                <summary className="cursor-pointer font-bold text-[#0c0d0e]">
                  Do you repair walls before painting?
                </summary>
                <p className="mt-2 leading-7 text-[#1f2124]">
                  Yes. Surface preparation and repairs are included when needed.
                </p>
              </details>
              <details className="rounded-lg border border-[#0c0d0e]/10 bg-white p-4">
                <summary className="cursor-pointer font-bold text-[#0c0d0e]">
                  What paint do you use?
                </summary>
                <p className="mt-2 leading-7 text-[#1f2124]">
                  We use high-quality Sherwin-Williams coatings selected for
                  durability and finish quality.
                </p>
              </details>
            </div>
          </div>

          {/* H2: Get a Free Estimate for Interior Painting */}
          <div className="mx-auto mt-16 max-w-3xl space-y-6 text-center">
            <h3 className="font-heading text-3xl font-black text-[#0c0d0e]">
              Get a Free Estimate for Interior Painting
            </h3>
            <p className="text-lg leading-8 text-[#1f2124]">
              If your home needs interior painting, the difference between a
              basic job and a professional finish is immediately visible.
            </p>
            <p className="text-lg leading-8 font-semibold text-[#1f2124]">
              A properly executed paint job:
            </p>
            <ul className="inline-block list-disc pl-5 text-left text-lg leading-8 text-[#1f2124]">
              <li>Looks clean and uniform</li>
              <li>Lasts longer</li>
              <li>Improves the overall appearance of your home</li>
            </ul>
            <p className="text-lg leading-8 text-[#1f2124]">
              At Gold Lion Painting, we deliver finishes designed for real
              living conditions — not just day-one appearance.
            </p>
            <p className="text-lg leading-8 text-[#1f2124]">
              Our schedule fills quickly, especially during peak seasons.
            </p>
            <div className="space-y-4">
              <p className="text-lg font-bold text-[#0c0d0e]">
                📞 Call: (941) 462-5894
              </p>
              <p className="text-lg text-[#1f2124]">
                📍 Serving Manatee & Sarasota County
              </p>
              <Link
                href="/interior-painting-upgrade"
                className="inline-flex items-center gap-3 rounded-full bg-[#d90000] px-6 py-4 font-bold text-white transition hover:bg-[#1f2124]"
              >
                Request Your Free Estimate Today
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ServiceFeature
        title="Exterior Painting Services in Manatee & Sarasota County"
        href="/exterior-painting-upgrade"
        image="/services/house-exterior-painting-manatee-county.jpg"
        imageAlt="Exterior house painting"
        caption="Exterior House Painting"
        reverse
      >
        <p>
          Exterior painting is not just about appearance — it is about
          protecting your home. In Manatee and Sarasota County, homes are
          exposed to: Intense UV exposure, High humidity, Rain and moisture,
          Coastal salt air (in some areas). Without proper preparation, paint
          will fail quickly.
        </p>
        <p>
          At Gold Lion Painting, we focus on building complete systems — not
          just applying paint. Our goal is to reduce repaint cycles and protect
          your home long-term — not just improve appearance. We provide: Full
          exterior repainting, Stucco and siding painting, Trim, fascia, and
          soffit painting, Garage doors and entry doors, Surface repairs and
          preparation.
        </p>
      </ServiceFeature>

      <section className="relative overflow-hidden bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2 lg:items-center">
          <div className="space-y-5">
            <h2 className="font-heading text-4xl font-black text-[#0c0d0e]">
              Cabinet Painting & Refinishing in Manatee & Sarasota County
            </h2>
            <p className="text-lg leading-8">
              Cabinet painting is one of the most effective ways to upgrade your
              kitchen or bathroom without the cost of full replacement. However,
              cabinets are also one of the most demanding surfaces to refinish
              correctly.
            </p>
            <p className="text-lg leading-8">
              Without proper preparation and the right system, finishes can:
              Peel, Chip, Feel sticky, Wear down quickly. At Gold Lion Painting,
              we don't just paint cabinets — we refinish them using a system
              designed for durability and a true factory-like finish. We
              provide: Kitchen cabinet painting, Bathroom vanity refinishing,
              Cabinet color updates, Surface preparation and repairs,
              Professional spray-applied finishes.
            </p>
            <Link
              href="/cabinet-painting-mejor"
              className="inline-flex items-center gap-3 rounded-full bg-[#d90000] px-6 py-4 font-bold text-white transition hover:bg-[#1f2124]"
            >
              <FaPaintRoller aria-hidden="true" />
              Request Your Free Estimate Today
            </Link>
          </div>
          <Image
            src="/Cabinet painting/cabinet-painting-bradenton-01.jpg.jpg"
            alt="Cabinet painting and kitchen modernization in Bradenton"
            width={800}
            height={800}
            loading="eager"
            className="aspect-square w-full rounded-[2rem] object-cover shadow-[0_18px_45px_rgba(0,0,0,0.18)]"
          />
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#1f2124] py-6">
        <div className="mx-auto grid max-w-7xl gap-0 lg:grid-cols-2 lg:items-stretch">
          <div className="flex items-center px-4 py-16 sm:px-6 lg:px-8">
            <div className="max-w-xl space-y-5">
              <h2 className="font-heading text-4xl font-black text-[#e4ad42]">
                Color Consultation & Professional Guidance
              </h2>
              <p className="text-lg leading-8 text-[#dddddd]">
                Choosing the right colors can transform a space. Our color
                consultation helps homeowners select palettes that match their
                vision, lighting conditions, and architectural style. From
                single rooms to full home makeovers, we guide you toward
                finishes that last.
              </p>
              <Link
                href="/color-consultation"
                className="inline-flex items-center gap-3 rounded-full bg-[#d90000] px-6 py-4 font-bold text-white transition hover:bg-[#1f2124] hover:ring-2 hover:ring-[#e4ad42]"
              >
                <FaPaintRoller aria-hidden="true" />
                Request Your Color Consultation
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center p-6 lg:p-10">
            <div className="relative aspect-[4/3] w-full max-w-md overflow-hidden rounded-2xl lg:max-w-lg">
              <Image
                src="/consultation/color_consulation.png"
                alt="Free painting consultation"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-4 py-20 text-center text-white sm:px-6 lg:px-8">
        <Image
          src="/home/luxury-exterior-painting-anna-maria.jpg"
          alt="Luxury and standard residential painting projects"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0c0d0e]/70" />
        <div className="relative mx-auto max-w-4xl">
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-3 rounded-full bg-[#d90000] px-6 py-4 font-bold text-white transition hover:bg-[#1f2124]"
          >
            <FaPaintRoller aria-hidden="true" />
            Call Now for a Free Estimate
          </Link>
          <p className="mt-8 text-lg leading-8">
            We serve entry-level homes, mid-range residences, waterfront
            properties, and luxury estates with the same preparation standards
            and finish expectations.
          </p>
          <h2 className="font-heading mt-5 text-4xl font-black text-[#e4ad42]">
            Luxury & Standard Residential Projects
          </h2>
        </div>
      </section>

      <section id="contactus" className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.42fr_0.58fr]">
          <div>
            <h2 className="font-heading text-4xl font-black text-[#0c0d0e]">
              Schedule an Estimate
            </h2>
            <div className="mt-6 rounded-2xl bg-[#1f2124] p-6 text-[#dddddd]">
              <EstimateRequestForm
                className="space-y-4"
                buttonLabel="Send"
                helperText="Send your project details directly to our team."
                source="Home page estimate form"
                tone="dark"
              />
            </div>
          </div>
          <div className="bg-white p-6 shadow-[1px_1px_10px_rgba(0,0,0,0.18)]">
            <h2 className="font-heading text-4xl font-black text-[#0c0d0e]">
              Frequently Asked Questions
            </h2>
            <div className="mt-8 space-y-6">
              {faqs.map((faq) => (
                <div key={faq.q}>
                  <h3 className="font-heading text-xl font-black text-[#0c0d0e]">
                    {faq.q}
                  </h3>
                  <p className="mt-2 leading-7 text-[#1f2124]">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#dddddd] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-heading text-center text-4xl font-black text-[#0c0d0e]">
            Area Of Services
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {serviceAreaNames.map((area) => {
              const areaLink = areaLinks.find((link) => link.label === area);

              return (
                <Link
                  key={area}
                  href={areaLink?.href ?? "/contact-us"}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-[#0c0d0e] shadow-sm transition hover:bg-[#e4ad42]"
                >
                  <FaMapMarkedAlt aria-hidden="true" />
                  {area}
                </Link>
              );
            })}
          </div>
          <h3 className="font-heading mt-10 text-center text-2xl font-black">
            Residential Projects We Handle
          </h3>
          <ul className="mx-auto mt-6 grid max-w-2xl gap-3 text-base leading-7">
            {trustPoints.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <FaCheckCircle
                  aria-hidden="true"
                  className="mt-1 shrink-0 text-[#e4ad42]"
                />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[#d39620] px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <h2 className="font-heading text-3xl font-black text-[#0c0d0e]">
            Get Expert Painting Services from Gold Lion Painting Inc
          </h2>
          <a
            href="tel:9414625894"
            className="inline-flex shrink-0 justify-center rounded-lg bg-[#0c0d0e] px-6 py-4 font-bold text-white uppercase shadow-[0_0_10px_rgba(0,0,0,0.45)] transition hover:bg-[#a97a36]"
          >
            Give Us A Call! (941) 462-5894
          </a>
        </div>
      </section>
    </main>
  );
}

function SectionTitle({ title }: { title: string }) {
  return (
    <section className="px-4 pt-16 pb-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="font-heading text-4xl font-black text-[#0c0d0e]">
          {title}
        </h2>
        <div className="mx-auto mt-5 h-1.5 w-2/3 max-w-xl bg-[#e4ad42]" />
      </div>
    </section>
  );
}

function CardGrid({
  items,
  icon: Icon,
}: {
  items: {
    href: string;
    label?: string;
    title?: string;
    image: string;
    alt: string;
    description?: string;
  }[];
  icon: IconType;
}) {
  return (
    <section className="px-4 pb-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <article
            key={`${item.title ?? item.label}-${item.href}`}
            className="hover-lift relative bg-[#e4ad42] p-4 shadow-[1px_1px_10px_rgba(0,0,0,0.65)]"
          >
            <Link href={item.href} className="group block">
              <Image
                src={item.image}
                alt={item.alt}
                width={700}
                height={500}
                loading="eager"
                className="h-56 w-full rounded-xl object-cover"
              />
              <h3 className="font-heading mt-4 text-2xl font-black text-[#0c0d0e]">
                {item.title ?? item.label}
              </h3>
              {item.description ? (
                <p className="mt-3 text-sm leading-6 text-[#0c0d0e]">
                  {item.description}
                </p>
              ) : null}
              <span className="mt-5 inline-flex items-center gap-2 text-lg font-bold text-[#0c0d0e]">
                <FaChevronRight aria-hidden="true" />
                More
              </span>
              <Icon
                aria-hidden="true"
                className="pointer-events-none absolute right-[-10px] bottom-[-14px] hidden h-20 w-20 rounded-full bg-[#0c0d0e] p-4 text-[#e4ad42] opacity-90 transition group-hover:rotate-6 md:block"
              />
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}

function ServiceFeature({
  title,
  href,
  image,
  imageAlt,
  caption,
  reverse = false,
  children,
}: {
  title: string;
  href: string;
  image: string;
  imageAlt: string;
  caption: string;
  reverse?: boolean;
  children: ReactNode;
}) {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div
        className={`mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.35fr_0.65fr] lg:items-center ${
          reverse ? "lg:grid-cols-[0.65fr_0.35fr]" : ""
        }`}
      >
        <figure className={reverse ? "lg:order-2" : undefined}>
          <Image
            src={image}
            alt={imageAlt}
            width={800}
            height={900}
            loading="eager"
            className="h-auto w-full rounded-2xl shadow-[0_18px_45px_rgba(0,0,0,0.18)]"
          />
          <figcaption className="mt-3 text-center text-sm font-semibold">
            {caption}
          </figcaption>
        </figure>
        <div className="space-y-5">
          <h2 className="font-heading text-4xl font-black text-[#0c0d0e]">
            <Link href={href} className="transition hover:text-[#e4ad42]">
              {title}
            </Link>
          </h2>
          <div className="space-y-4 text-lg leading-8 text-[#1f2124]">
            {children}
          </div>
          <Link
            href={href}
            className="inline-flex items-center gap-3 rounded-full bg-[#d90000] px-6 py-4 font-bold text-white transition hover:bg-[#1f2124]"
          >
            <FaPaintRoller aria-hidden="true" />
            Call Now for a Free Estimate
          </Link>
        </div>
      </div>
    </section>
  );
}
