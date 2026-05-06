import Image from "next/image";
import Link from "next/link";
import { type Metadata } from "next";
import { type ReactNode } from "react";
import {
  FaCheckCircle,
  FaChevronRight,
  FaExternalLinkAlt,
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
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";
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
        alt: "Gold Lion Painting exterior painting project in Bradenton, Sarasota, and Tampa Bay",
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
    q: "Why choose a professional painting contractor in the Tampa Bay area?",
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
              Premium Painting For Florida Homes
            </h1>
            <p className="mt-4 max-w-xl text-base leading-7 font-semibold text-white drop-shadow-[0_3px_14px_rgba(0,0,0,0.75)]">
              Interior, exterior, and cabinet painting with clean prep, durable
              coatings, and refined finishes across Manatee County.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-3 rounded-full bg-[#d90000] px-6 py-4 font-bold text-white shadow-[0_0_14px_rgba(0,0,0,0.45)] transition hover:bg-[#1f2124]"
              >
                <FaPaintRoller aria-hidden="true" />
                Schedule your professional consultation today
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
              Bradenton, Sarasota, Tampa Bay, and nearby service areas
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

      <section className="relative overflow-hidden px-4 py-16 text-[#dddddd] sm:px-6 lg:px-8">
        <Image
          src="/services/house-exterior-painting-manatee-county.jpg"
          alt="Exterior painting background"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0c0d0e]/78" />
        <div className="relative mx-auto max-w-6xl">
          <h2 className="font-heading text-center text-4xl font-black text-[#e4ad42]">
            The Gold Lion Painting Warranty
          </h2>
          <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:items-center">
            <Image
              src="/warranty service.jpeg"
              alt="Gold Lion Painting warranty"
              width={1024}
              height={683}
              className="h-auto w-full rounded-2xl"
            />
            <div className="space-y-4">
              {[
                {
                  title: "How do I get started with my painting project?",
                  text: "Contact us to schedule a free estimate. We will guide you through the process from scope review to final walkthrough.",
                },
                {
                  title: "Do you offer a warranty?",
                  text: "Yes. We provide a 5-Year Limited Workmanship Warranty on qualifying residential painting work.",
                },
                {
                  title: "Is summer a good time to paint in Florida?",
                  text: "Painting can be done year-round when the project is scheduled around weather, humidity, drying time, and surface conditions.",
                },
              ].map((item, index) => (
                <details
                  key={item.title}
                  open={index === 0}
                  className="group border-b border-[#e4ad42]/35 py-4"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-bold text-[#dddddd]">
                    {item.title}
                    <span className="text-[#e4ad42] transition group-open:rotate-90">
                      <FaChevronRight aria-hidden="true" />
                    </span>
                  </summary>
                  <p className="mt-3 leading-7 text-[#dddddd]/85">
                    {item.text}
                  </p>
                </details>
              ))}
              <Image
                src="/logo.jpg"
                alt="Gold Lion Painting Inc logo"
                width={160}
                height={160}
                className="mx-auto mt-8 h-24 w-24 rounded-full object-cover opacity-75"
              />
            </div>
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
          <div className="scroll-reveal grid gap-8 lg:grid-cols-[0.44fr_0.56fr] lg:items-end">
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

          <Carousel
            opts={{
              align: "start",
              loop: false,
            }}
            className="scroll-reveal mt-10"
          >
            <CarouselContent className="-ml-5 items-stretch">
              {processSteps.map((step, index) => (
                <CarouselItem
                  key={step.title}
                  className="flex pl-5 md:basis-1/2 lg:basis-1/3"
                >
                  <article
                    className="process-card group flex min-h-[720px] w-full flex-col overflow-hidden border border-[#e4ad42]/35 bg-[#f7f7f7] text-[#0c0d0e] shadow-[0_22px_42px_rgba(0,0,0,0.32)] transition duration-300 hover:-translate-y-2 hover:border-[#e4ad42] hover:shadow-[0_28px_58px_rgba(0,0,0,0.46)]"
                    style={{ animationDelay: `${index * 90}ms` }}
                  >
                    <ProcessStepImage
                      images={processGalleryImages}
                      index={index}
                      number={String(index + 1).padStart(2, "0")}
                      title={step.title}
                    />
                    <div className="flex flex-1 flex-col p-5">
                      <p className="min-h-[112px] border-l-4 border-[#e4ad42] pl-4 leading-7 text-[#1f2124]">
                        {step.description}
                      </p>

                      {step.panels.length > 0 ? (
                        <div className="mt-5 grid gap-3">
                          {step.panels.map((panel, panelIndex) => (
                            <details
                              key={panel.label}
                              open={panelIndex === 0}
                              className="process-accordion group/accordion overflow-hidden border border-[#0c0d0e]/10 bg-white shadow-[0_10px_24px_rgba(0,0,0,0.08)]"
                            >
                              <summary className="flex cursor-pointer list-none items-center gap-3 bg-[#0c0d0e] px-4 py-3 font-bold text-white transition hover:bg-[#17191c] hover:text-[#e4ad42]">
                                <span className="process-toggle text-lg font-black text-[#e4ad42]" />
                                {panel.label}:
                              </summary>
                              <p className="bg-white px-5 py-5 leading-7 text-[#1f2124]">
                                {panel.text}
                              </p>
                            </details>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  </article>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious
              size="icon-lg"
              className="-left-4 size-12 border-2 border-[#e4ad42] bg-[#0c0d0e] text-[#e4ad42] shadow-[0_16px_35px_rgba(0,0,0,0.42)] hover:bg-[#e4ad42] hover:text-[#0c0d0e] active:-translate-y-1/2 active:scale-90 disabled:opacity-30 [&_svg]:size-6"
            />
            <CarouselNext
              size="icon-lg"
              className="-right-4 size-12 border-2 border-[#e4ad42] bg-[#0c0d0e] text-[#e4ad42] shadow-[0_16px_35px_rgba(0,0,0,0.42)] hover:bg-[#e4ad42] hover:text-[#0c0d0e] active:-translate-y-1/2 active:scale-90 disabled:opacity-30 [&_svg]:size-6"
            />
          </Carousel>
        </div>
      </section>

      <ServiceFeature
        title="Interior Painting Systems"
        href="/interior-painting-upgrade"
        image="/bradenton/luxury-interior-painting-bradenton-02.jpg.jpg"
        imageAlt="Luxury interior transformation"
        caption="Luxury Interior Transformation"
      >
        <p>
          Interior painting requires more than color selection. It involves
          surface evaluation, drywall preparation, sanding, caulking, priming,
          and controlled application.
        </p>
        <p>
          Our structured system supports smoother finishes, crisp transitions,
          balanced sheen, cleaner trim lines, and a polished look throughout the
          home.
        </p>
      </ServiceFeature>

      <ServiceFeature
        title="Exterior Repaint & Protection"
        href="/exterior-painting-upgrade"
        image="/services/house-exterior-painting-manatee-county.jpg"
        imageAlt="Exterior house painting"
        caption="Exterior House Painting"
        reverse
      >
        <p>
          Florida sun exposure, humidity, and rain cycles require durable
          exterior coating systems. Our process includes washing, stucco repair,
          bonding primers, caulking, and multi-coat application where the
          project needs it.
        </p>
      </ServiceFeature>

      <section className="relative overflow-hidden bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2 lg:items-center">
          <div className="space-y-5">
            <h2 className="font-heading text-4xl font-black text-[#0c0d0e]">
              Cabinet Refinishing & Kitchen Modernization
            </h2>
            <p className="text-lg leading-8">
              Cabinet refinishing delivers a dramatic transformation without
              demolition. Our process includes hardware removal, surface
              degreasing, sanding, bonding primer application, and controlled
              spray finishing for a cleaner, smoother kitchen update.
            </p>
            <Link
              href="/cabinet-painting-mejor"
              className="inline-flex items-center gap-3 rounded-full bg-[#d90000] px-6 py-4 font-bold text-white transition hover:bg-[#1f2124]"
            >
              <FaPaintRoller aria-hidden="true" />
              Book Your Service Today
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
