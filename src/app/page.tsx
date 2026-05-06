import Image from "next/image";
import Link from "next/link";
import { type Metadata } from "next";
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
    href: "/interior-painting",
    image: "/home/interior-house-painting-anna-maria-.jpg",
    alt: "Interior painting project by Gold Lion Painting Inc",
    description:
      "Full interior repainting for walls, ceilings, trim, doors, crown molding, accent walls, and occupied homes that need cleaner finishes.",
  },
  {
    title: "Exterior Painting",
    href: "/exterior-painting",
    image: "/home/luxury-exterior-painting-anna-maria.jpg",
    alt: "Exterior house painting project by Gold Lion Painting Inc",
    description:
      "Exterior repaint systems built for Florida sun, humidity, rain cycles, stucco movement, caulking, crack repair, and durable curb appeal.",
  },
  {
    title: "Cabinet Painting",
    href: "/cabinet-painting",
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

const serviceHighlights = [
  {
    title: "Exterior Systems",
    href: "/exterior-painting",
    image: "/services/house-exterior-painting-manatee-county.jpg",
    alt: "Exterior painting system for a Florida home",
    text: "Weather-aware exterior repainting for stucco, trim, doors, soffits, fascia, and coastal Florida exposure.",
  },
  {
    title: "Interior Finishes",
    href: "/interior-painting",
    image: "/bradenton/luxury-interior-painting-bradenton-02.jpg.jpg",
    alt: "Luxury interior painting finish in Bradenton",
    text: "Clean interior painting for walls, ceilings, trim, doors, occupied homes, and high-visibility living spaces.",
  },
  {
    title: "Cabinet Refinishing",
    href: "/cabinet-painting",
    image: "/Cabinet painting/cabinet-painting-bradenton-01.jpg.jpg",
    alt: "Kitchen cabinet painting and refinishing project",
    text: "Cabinet painting with proper degreasing, sanding, bonding primer, controlled finish coats, and careful reassembly.",
  },
];

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

      <GoogleReviewsCarousel maxReviews={3} showDates={false} />

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

      <section className="bg-[#0c0d0e] px-4 py-16 text-[#dddddd] sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 md:grid-cols-2 lg:items-center">
            <div className="border border-[#e4ad42]/45 bg-[#1f2124] p-6 shadow-[0_18px_42px_rgba(0,0,0,0.35)]">
              <p className="text-sm font-black tracking-[0.18em] text-[#e4ad42] uppercase">
                Warranty Snapshot
              </p>
              <h2 className="font-heading mt-2 text-4xl font-black text-white">
                Gold Lion Painting Inc. 5-Year Limited Warranty
              </h2>
              <p className="mt-3 leading-7 text-[#dddddd]">
                Subject to the terms and conditions outlined below, for a period
                of five (5) years from the project completion date, Gold Lion
                Painting Inc. will repair any areas where peeling, blistering,
                or chipping occurs as a direct result of defective workmanship.
              </p>
              <Link
                href="/warranty-service"
                className="mt-6 inline-flex items-center gap-3 rounded-full bg-[#d90000] px-6 py-3 font-black text-white transition hover:bg-[#e4ad42] hover:text-[#0c0d0e]"
              >
                <FaFileContract aria-hidden="true" />
                Review Warranty Details
              </Link>
            </div>

            <a
              href="/warranty-service"
              className="block overflow-hidden border border-[#e4ad42]/45 bg-[#1f2124] p-3 shadow-[0_18px_45px_rgba(0,0,0,0.38)] transition hover:scale-[1.02] hover:border-[#e4ad42]"
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
                <div className="flex items-center gap-3 bg-[#0c0d0e] px-4 py-3">
                  <span className="font-heading flex h-10 w-10 shrink-0 items-center justify-center border border-[#e4ad42]/55 bg-[#1f2124] text-sm font-black text-[#e4ad42]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-heading text-lg leading-tight font-black text-white">
                    {step.title.replace(/^\d+\.\s*/, "")}
                  </h3>
                </div>
                <ProcessStepImage
                  images={processGalleryImages}
                  index={index}
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

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-[0.34fr_0.66fr] lg:items-end">
            <div>
              <p className="font-display text-sm font-black tracking-[0.16em] text-[#e4ad42] uppercase">
                Service Focus
              </p>
              <h2 className="font-heading mt-3 text-4xl leading-tight font-black text-[#0c0d0e] md:text-5xl">
                Painting Services Built For Florida Homes
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-[#1f2124]">
              The home page stays focused: choose the service you need, then
              visit the dedicated page for full details, process, examples, and
              local SEO content.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {serviceHighlights.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group overflow-hidden border border-[#e4ad42]/45 bg-[#0c0d0e] text-white shadow-[0_18px_38px_rgba(0,0,0,0.25)] transition hover:-translate-y-1 hover:border-[#e4ad42]"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#0c0d0e]/78 via-transparent to-transparent" />
                  <span className="absolute right-4 bottom-4 rounded-full bg-[#e4ad42] px-4 py-2 text-sm font-black text-[#0c0d0e]">
                    View Service
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-2xl font-black text-[#e4ad42]">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[#dddddd]">
                    {service.text}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-4 py-20 text-white sm:px-6 lg:px-8">
        <Image
          src="/services/home-exterior-painting-manatee-county.jpg.jpg"
          alt="Exterior painting project in Manatee County"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0c0d0e]/72" />
        <div className="relative mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="font-display text-sm font-black tracking-[0.18em] text-[#e4ad42] uppercase">
              Exterior Protection
            </p>
            <h2 className="font-heading mt-3 text-4xl leading-tight font-black md:text-6xl">
              Built For Sun, Humidity, Rain, And Curb Appeal
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#dddddd]">
              Exterior painting protects the home first and upgrades appearance
              second. Our systems focus on prep, adhesion, caulking, and
              coatings selected for Florida exposure.
            </p>
            <Link
              href="/exterior-painting"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#d90000] px-6 py-4 font-bold text-white transition hover:bg-[#e4ad42] hover:text-[#0c0d0e]"
            >
              <FaPaintRoller aria-hidden="true" />
              View Exterior Painting
            </Link>
          </div>
        </div>
      </section>

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
              we don&apos;t just paint cabinets — we refinish them using a system
              designed for durability and a true factory-like finish. We
              provide: Kitchen cabinet painting, Bathroom vanity refinishing,
              Cabinet color updates, Surface preparation and repairs,
              Professional spray-applied finishes.
            </p>
            <Link
              href="/cabinet-painting"
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
                src="/bradenton/professional-exterior-painters-bradenton-03.jpg.jpg"
                alt="Exterior painting consultation for a Florida home"
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
            <div className="mt-8 space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.q}
                  className="group overflow-hidden rounded-xl border border-[#0c0d0e]/12 bg-[#f7f7f7] transition open:border-[#e4ad42] open:bg-white open:shadow-[0_14px_28px_rgba(0,0,0,0.08)]"
                >
                  <summary className="font-heading flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-base font-black text-[#0c0d0e] transition hover:bg-[#0c0d0e] hover:text-[#e4ad42]">
                    <span>{faq.q}</span>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0c0d0e] text-lg text-[#e4ad42] transition group-open:rotate-45 group-hover:bg-[#e4ad42] group-hover:text-[#0c0d0e]">
                      +
                    </span>
                  </summary>
                  <p className="border-t border-[#0c0d0e]/10 px-5 py-4 leading-7 text-[#1f2124]">
                    {faq.a}
                  </p>
                </details>
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
