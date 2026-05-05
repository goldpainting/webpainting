"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FaCheckCircle,
  FaMapMarkedAlt,
  FaPaintRoller,
  FaPhone,
  FaShieldAlt,
  FaStar,
} from "react-icons/fa";
import Lightbox from "yet-another-react-lightbox";

import EstimateRequestForm from "../components/EstimateRequestForm";
import { areaLinks, serviceLinks } from "../components/navigationData";
import {
  businessName,
  googleRatingValue,
  googleReviewCount,
  googleReviewsHref,
} from "../siteConfig";

import "yet-another-react-lightbox/styles.css";

const trustPoints = [
  "Detailed preparation before every finish coat",
  "Clean job sites and careful surface protection",
  "Interior, exterior, and cabinet painting specialists",
  "Clear communication from estimate to walkthrough",
];

const companyStats = [
  { value: "10+", label: "Years serving local painting clients" },
  { value: "5-Year", label: "Workmanship warranty coverage" },
  { value: "4.9", label: "Google rating from verified reviews" },
];

const principles = [
  {
    title: "Prep First",
    description:
      "Every project starts with surface inspection, protection, repairs, sanding, cleaning, and the right coating plan.",
    icon: FaShieldAlt,
  },
  {
    title: "Built For Florida",
    description:
      "We plan paint systems around sun exposure, humidity, stucco movement, rain cycles, and daily wear.",
    icon: FaCheckCircle,
  },
  {
    title: "Clean Finish",
    description:
      "Our crews keep the work area organized and complete a final walkthrough before calling the job finished.",
    icon: FaPaintRoller,
  },
];

const galleryImages = [
  {
    src: "/services/house-exterior-painting-manatee-county.jpg",
    alt: "Gold Lion Painting exterior residential project",
  },
  {
    src: "/services/living-room-painting-manatee-county.jpg",
    alt: "Gold Lion Painting interior ceiling project",
  },
  {
    src: "/services/kitchen-cabinet-painting-manatee-county-fl.jpg",
    alt: "Gold Lion Painting cabinet refinishing project",
  },
];

export default function AboutUsPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxSlide, setLightboxSlide] = useState(0);

  return (
    <>
      <main className="min-h-screen bg-white font-sans text-[#0c0d0e]">
        <section className="relative overflow-hidden bg-[#0c0d0e] px-4 py-20 text-white sm:px-6 lg:px-8">
          <Image
            src="/services/house-exterior-painting-manatee-county.jpg"
            alt="Gold Lion Painting completed exterior project"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-linear-to-r from-[#0c0d0e] via-[#0c0d0e]/82 to-[#0c0d0e]/42" />
          <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_360px] lg:items-center">
            <div>
              <p className="font-display text-lg font-bold text-[#e4ad42]">
                About {businessName}
              </p>
              <h1 className="font-heading mt-4 max-w-4xl text-5xl leading-tight font-black md:text-7xl">
                Professional painting with sharp prep, clean work, and durable
                finishes.
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-[#dddddd]">
                Gold Lion Painting Inc helps Florida homeowners improve curb
                appeal, refresh interiors, and modernize cabinets with a
                process built around communication, protection, and lasting
                results.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="tel:9414625894"
                  className="inline-flex items-center gap-3 rounded-full bg-[#d90000] px-6 py-4 font-black text-white transition hover:bg-[#e4ad42] hover:text-[#0c0d0e]"
                >
                  <FaPhone aria-hidden="true" />
                  Call 941-462-5894
                </a>
                <Link
                  href="/contact-us"
                  className="inline-flex items-center rounded-full border border-[#e4ad42] px-6 py-4 font-black text-[#e4ad42] transition hover:bg-[#e4ad42] hover:text-[#0c0d0e]"
                >
                  Request A Free Estimate
                </Link>
              </div>
            </div>

            <a
              href={googleReviewsHref}
              target="_blank"
              rel="noreferrer"
              className="border-t-4 border-[#e4ad42] bg-white p-7 text-[#0c0d0e] shadow-[0_20px_45px_rgba(0,0,0,0.32)] transition hover:-translate-y-1"
            >
              <p className="font-heading text-6xl font-black">
                {googleRatingValue}
              </p>
              <div className="mt-3 flex gap-1 text-2xl text-[#f5aa00]">
                {[0, 1, 2, 3, 4].map((star) => (
                  <FaStar key={star} aria-hidden="true" />
                ))}
              </div>
              <p className="mt-4 text-lg font-black">
                Google rating from {googleReviewCount} reviews
              </p>
              <p className="mt-3 text-sm leading-6 text-[#5d646b]">
                Read client feedback from the Google profile connected to
                lionpaintingservicesfl.com.
              </p>
            </a>
          </div>
        </section>

        <section className="bg-[#f3f3f3] px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">
            {companyStats.map((stat) => (
              <article
                key={stat.label}
                className="border-t-4 border-[#e4ad42] bg-white p-6 text-center shadow-[1px_1px_16px_rgba(0,0,0,0.14)]"
              >
                <p className="font-heading text-5xl font-black text-[#d90000]">
                  {stat.value}
                </p>
                <p className="mt-3 text-sm font-black tracking-[0.16em] text-[#1f2124] uppercase">
                  {stat.label}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.58fr_0.42fr] lg:items-start">
            <div>
              <p className="font-display text-lg font-bold text-[#e4ad42]">
                Who We Are
              </p>
              <h2 className="font-heading mt-3 text-5xl font-black text-[#0c0d0e]">
                A local painting team built around trust and follow-through.
              </h2>
              <div className="mt-6 space-y-5 text-lg leading-8 text-[#343b43]">
                <p>
                  We focus on the parts of painting that homeowners notice long
                  after the crew leaves: smooth prep, clean edges, protected
                  spaces, balanced color, and finishes that hold up in Florida
                  conditions.
                </p>
                <p>
                  Our team handles interior painting, exterior painting, cabinet
                  painting, and refinishing with a clear process from estimate
                  to final walkthrough.
                </p>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {trustPoints.map((point) => (
                  <div
                    key={point}
                    className="flex items-start gap-3 border-l-4 border-[#e4ad42] bg-[#f3f3f3] p-4 text-sm font-bold text-[#1f2124]"
                  >
                    <FaCheckCircle
                      aria-hidden="true"
                      className="mt-1 shrink-0 text-[#d90000]"
                    />
                    {point}
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t-4 border-[#d90000] bg-[#0c0d0e] p-7 text-white shadow-[1px_1px_18px_rgba(0,0,0,0.25)]">
              <h2 className="font-heading text-3xl font-black text-[#e4ad42]">
                Start Your Project
              </h2>
              <p className="mt-3 text-sm leading-6 text-[#dddddd]">
                Send the details and the request goes directly to the painting
                team.
              </p>
              <EstimateRequestForm
                className="mt-6 flex flex-col gap-4"
                buttonLabel="Send"
                helperText={null}
                showContactLinks={false}
                source="About page estimate form"
                tone="dark"
              />
            </div>
          </div>
        </section>

        <section className="bg-[#0c0d0e] px-4 py-16 text-white sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-5 md:grid-cols-3">
              {principles.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className="border border-[#e4ad42]/35 bg-[#1f2124] p-6"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e4ad42] text-[#0c0d0e]">
                      <Icon aria-hidden="true" />
                    </span>
                    <h3 className="font-heading mt-5 text-2xl font-black text-[#e4ad42]">
                      {item.title}
                    </h3>
                    <p className="mt-3 leading-7 text-[#dddddd]">
                      {item.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.42fr_0.58fr]">
            <div className="space-y-8">
              <div className="border-t-4 border-[#e4ad42] bg-white p-7 shadow-[1px_1px_16px_rgba(0,0,0,0.16)]">
                <h2 className="font-heading text-3xl font-black">
                  Our Services
                </h2>
                <div className="mt-6 grid gap-3">
                  {serviceLinks.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="flex items-center gap-3 border border-[#e4ad42]/40 px-4 py-3 font-black transition hover:bg-[#e4ad42]"
                    >
                      <FaPaintRoller
                        aria-hidden="true"
                        className="text-[#d90000]"
                      />
                      {service.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="border-t-4 border-[#d90000] bg-[#f3f3f3] p-7 shadow-[1px_1px_16px_rgba(0,0,0,0.12)]">
                <h2 className="font-heading text-3xl font-black">
                  Service Areas
                </h2>
                <div className="mt-6 flex flex-wrap gap-3">
                  {areaLinks.map((area) => (
                    <Link
                      key={area.href}
                      href={area.href}
                      className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-3 text-sm font-bold transition hover:bg-[#e4ad42]"
                    >
                      <FaMapMarkedAlt
                        aria-hidden="true"
                        className="text-[#d90000]"
                      />
                      {area.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {galleryImages.map((image, index) => (
                <button
                  key={image.src}
                  type="button"
                  onClick={() => {
                    setLightboxSlide(index);
                    setLightboxOpen(true);
                  }}
                  className={
                    index === 0
                      ? "group relative min-h-[360px] overflow-hidden bg-[#0c0d0e] text-left shadow-[1px_1px_18px_rgba(0,0,0,0.18)] sm:col-span-2"
                      : "group relative min-h-[260px] overflow-hidden bg-[#0c0d0e] text-left shadow-[1px_1px_18px_rgba(0,0,0,0.18)]"
                  }
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes={index === 0 ? "720px" : "360px"}
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <span className="absolute inset-0 bg-linear-to-t from-[#0c0d0e]/75 to-transparent" />
                  <span className="absolute bottom-5 left-5 right-5 font-heading text-2xl font-black text-white">
                    Recent Painting Work
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={galleryImages}
        index={lightboxSlide}
      />
    </>
  );
}
