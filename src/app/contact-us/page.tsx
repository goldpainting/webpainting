import Image from "next/image";
import { type Metadata } from "next";
import Link from "next/link";
import {
  FaClock,
  FaEnvelope,
  FaHome,
  FaMapMarkedAlt,
  FaMapMarkerAlt,
  FaPaintRoller,
  FaPhone,
} from "react-icons/fa";

import EstimateRequestForm from "../components/EstimateRequestForm";
import { areaLinks, serviceLinks } from "../components/navigationData";
import {
  businessEmail,
  businessHours,
  businessName,
  googleDirectionsHref,
  googleMapsHref,
  googleReviewsHref,
  siteUrl,
} from "../siteConfig";

export const metadata: Metadata = {
  title: "Contact Us | Gold Lion Painting Inc",
  description:
    "Schedule an estimate with Gold Lion Painting Inc for interior painting, exterior painting, cabinet painting, and cabinet refinishing across Bradenton, Tampa, St. Petersburg, Sarasota, Venice, Parrish, Ellenton, Lakewood Ranch, Anna Maria, and nearby Florida areas.",
  alternates: {
    canonical: "/contact-us",
  },
  openGraph: {
    title: "Contact Us | Gold Lion Painting Inc",
    description:
      "Schedule an estimate with Gold Lion Painting Inc for residential interior painting, exterior painting, and cabinet refinishing.",
    url: `${siteUrl}/contact-us`,
    images: [
      {
        url: "/services/house-exterior-painting-manatee-county.jpg",
        width: 1200,
        height: 800,
        alt: "Gold Lion Painting Inc contact page",
      },
    ],
  },
};

const contactItems = [
  {
    icon: FaPhone,
    label: "Phone",
    value: "941-462-5894",
    href: "tel:9414625894",
  },
  {
    icon: FaEnvelope,
    label: "Email",
    value: businessEmail,
    href: `mailto:${businessEmail}`,
  },
  {
    icon: FaMapMarkerAlt,
    label: "Service Area",
    value: "Sarasota & Manatee County",
    href: googleMapsHref,
  },
  {
    icon: FaClock,
    label: "Hours Of Operation",
    value: businessHours,
  },
];

export default function ContactUsPage() {
  return (
    <main className="min-h-screen bg-white font-sans text-[#0c0d0e]">
      <section className="relative min-h-[380px] overflow-hidden px-4 py-20 text-white sm:px-6 lg:px-8">
        <Image
          src="/services/house-exterior-painting-manatee-county.jpg"
          alt="Gold Lion Painting exterior painting project"
          fill
          loading="eager"
          sizes="100vw"
          className="object-cover"
        />
        <div className="relative mx-auto flex min-h-[240px] max-w-6xl flex-col justify-center rounded-2xl bg-[#0c0d0e]/58 p-5 shadow-[0_22px_55px_rgba(0,0,0,0.32)] sm:p-7">
          <div className="mb-5 flex flex-wrap items-center gap-2 text-sm font-bold text-[#dddddd]">
            <Link href="/" className="transition hover:text-[#e4ad42]">
              Home
            </Link>
            <span>-</span>
            <span className="text-[#e4ad42]">Contact Us</span>
          </div>
          <p className="font-display text-lg font-bold text-[#e4ad42]">
            {businessName}
          </p>
          <h1 className="font-heading mt-3 text-5xl leading-tight font-black md:text-7xl">
            Schedule an Estimate
          </h1>
          <a
            href="tel:9414625894"
            className="mt-7 inline-flex w-fit items-center gap-3 rounded-full bg-[#d90000] px-6 py-4 text-xl font-black text-white shadow-[0_14px_28px_rgba(0,0,0,0.35)] transition hover:bg-[#e4ad42] hover:text-[#0c0d0e]"
          >
            <FaPhone aria-hidden="true" />
            (941) 462-5894
          </a>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.56fr_0.44fr] lg:items-start">
          <div>
            <h2 className="font-heading text-5xl font-black text-[#d90000]">
              Schedule an Estimate!
            </h2>
            <h3 className="font-heading mt-6 text-3xl font-black text-[#0c0d0e]">
              Leave us a Message
            </h3>
            <div className="mt-8 bg-white">
              <EstimateRequestForm
                className="flex flex-col gap-4"
                buttonLabel="Send"
                helperText={null}
                showContactLinks={false}
                source="Contact page estimate form"
              />
            </div>
          </div>

          <aside className="space-y-8">
            <div className="border-t-4 border-[#e4ad42] bg-[#0c0d0e] p-7 text-[#dddddd] shadow-[1px_1px_16px_rgba(0,0,0,0.28)]">
              <h2 className="font-heading text-3xl font-black text-[#e4ad42]">
                Contact Information
              </h2>
              <ul className="mt-7 space-y-5">
                {contactItems.map((item) => {
                  const Icon = item.icon;
                  const content = (
                    <>
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#e4ad42] text-[#0c0d0e]">
                        <Icon aria-hidden="true" />
                      </span>
                      <span>
                        <span className="block text-xs font-black tracking-[0.16em] text-[#e4ad42] uppercase">
                          {item.label}
                        </span>
                        <span className="mt-1 block text-base leading-6 font-semibold">
                          {item.value}
                        </span>
                      </span>
                    </>
                  );

                  return (
                    <li key={item.label}>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="flex items-center gap-4 transition hover:text-[#e4ad42]"
                        >
                          {content}
                        </a>
                      ) : (
                        <div className="flex items-center gap-4">{content}</div>
                      )}
                    </li>
                  );
                })}
              </ul>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                <a
                  href={googleMapsHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#e4ad42] px-4 py-3 text-sm font-black text-[#0c0d0e] transition hover:bg-white"
                >
                  <FaMapMarkedAlt aria-hidden="true" />
                  Open Google Maps
                </a>
                <a
                  href={googleDirectionsHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 border border-[#e4ad42] px-4 py-3 text-sm font-black text-[#e4ad42] transition hover:bg-[#e4ad42] hover:text-[#0c0d0e]"
                >
                  <FaMapMarkerAlt aria-hidden="true" />
                  Get Directions
                </a>
                <a
                  href={googleReviewsHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 border border-[#e4ad42] px-4 py-3 text-sm font-black text-[#e4ad42] transition hover:bg-[#e4ad42] hover:text-[#0c0d0e] sm:col-span-2"
                >
                  Read Google Reviews
                </a>
              </div>
            </div>

            <div className="border-t-4 border-[#d90000] bg-[#f3f3f3] p-7 shadow-[1px_1px_16px_rgba(0,0,0,0.16)]">
              <h2 className="font-heading text-3xl font-black text-[#0c0d0e]">
                Area Of Services
              </h2>
              <div className="mt-6 flex flex-wrap gap-3">
                {areaLinks.map((area) => (
                  <Link
                    key={area.href}
                    href={area.href}
                    className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-3 text-sm font-bold text-[#0c0d0e] shadow-sm transition hover:bg-[#e4ad42]"
                  >
                    <FaMapMarkedAlt
                      aria-hidden="true"
                      className="text-[#d90000]"
                    />
                    {area.label}
                  </Link>
                ))}
              </div>
              <p className="mt-6 leading-7 text-[#1f2124]">
                We plan painting systems around Florida heat, humidity, rain
                cycles, stucco movement, and the finish expectations of each
                home.
              </p>
            </div>

            <div className="border-t-4 border-[#e4ad42] bg-white p-7 shadow-[1px_1px_16px_rgba(0,0,0,0.16)]">
              <h2 className="font-heading text-3xl font-black text-[#0c0d0e]">
                Our Services
              </h2>
              <div className="mt-6 grid gap-3">
                {serviceLinks.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="flex items-center justify-between gap-4 border border-[#e4ad42]/40 px-4 py-3 font-bold text-[#0c0d0e] transition hover:bg-[#e4ad42]"
                  >
                    <span className="inline-flex items-center gap-3">
                      <FaPaintRoller
                        aria-hidden="true"
                        className="text-[#d90000]"
                      />
                      {service.label}
                    </span>
                    <FaHome aria-hidden="true" className="text-[#a97a36]" />
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
