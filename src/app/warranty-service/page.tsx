import { type Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  FaEnvelope,
  FaFileContract,
  FaInfoCircle,
  FaPhone,
} from "react-icons/fa";

import EstimateRequestForm from "../components/EstimateRequestForm";
import { siteUrl } from "../siteConfig";

export const metadata: Metadata = {
  title: "Warranty Service | Gold Lion Painting Inc",
  description:
    "Review warranty coverage, limitations, and support details for qualifying Gold Lion Painting Inc residential painting projects.",
  alternates: {
    canonical: "/warranty-service",
  },
  openGraph: {
    title: "Warranty Service | Gold Lion Painting Inc",
    description:
      "Review warranty coverage, limitations, and support details for qualifying Gold Lion Painting Inc residential painting projects.",
    url: `${siteUrl}/warranty-service`,
    images: [
      {
        url: "/warranty service nueva imagen.jpeg",
        width: 1152,
        height: 768,
        alt: "Gold Lion Painting 5-year limited warranty graphic",
      },
    ],
  },
};

const coverageHighlights = [
  {
    title: "5-year workmanship term",
    description:
      "Coverage is centered on workmanship-related peeling, blistering, or chipping tied to our application process.",
  },
  {
    title: "Clear claim process",
    description:
      "If an eligible issue appears, we review the project details, inspect the area, and outline the appropriate next step.",
  },
  {
    title: "Documented project support",
    description:
      "Your contract, final payment confirmation, and site access help us resolve warranty questions efficiently.",
  },
];

const claimSteps = [
  "Keep a copy of the original contract for the project.",
  "Provide proof that the project has been paid in full.",
  "Allow access for inspection and any approved repair work.",
  "Be prepared to cover material costs associated with warranty-related repairs.",
];

const exclusions = [
  "Projects where materials were not supplied by Gold Lion Painting Inc.",
  "Work that was not fully completed by our company.",
  "Varnished or stained surfaces, galvanized metals, and other excluded substrates.",
  "Natural fading, manufacturer defects, knot or rust bleed, and structural cracking.",
  "Damage tied to moisture, movement, abuse, chemical exposure, fire, flooding, or severe weather.",
];

export default function WarrantyServicePage() {
  return (
    <main className="min-h-screen bg-white font-sans text-[#0c0d0e]">
      <section className="relative overflow-hidden border-b border-[#e4ad42]/35 bg-[#0c0d0e]">
        <div className="texture-grid absolute inset-0 opacity-35" />
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-[minmax(0,1.05fr)_24rem] md:items-center md:px-10 lg:grid-cols-[minmax(0,1.05fr)_27rem]">
          <div className="relative">
            <p className="mb-4 inline-flex rounded-full border border-[#e4ad42]/45 bg-[#1f2124] px-4 py-2 text-xs font-black tracking-[0.24em] text-[#e4ad42] uppercase shadow-sm">
              Warranty Service
            </p>
            <h1 className="font-heading max-w-4xl text-5xl leading-tight font-black text-white md:text-6xl">
              Warranty support that is clear, professional, and easy to
              understand.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#dddddd] md:text-xl">
              Our 5-year limited workmanship warranty is designed to give
              clients confidence after the project is complete, with
              straightforward expectations around what is covered and how to
              request help.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {coverageHighlights.map((item) => (
                <article
                  key={item.title}
                  className="border border-[#e4ad42]/35 bg-[#1f2124] p-5 shadow-[0_16px_32px_rgba(0,0,0,0.22)]"
                >
                  <p className="text-lg font-black text-[#e4ad42]">
                    {item.title}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[#dddddd]">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="relative border border-[#e4ad42]/45 bg-white p-7 text-[#0c0d0e] shadow-[0_22px_50px_rgba(0,0,0,0.35)]">
            <p className="text-sm font-black tracking-[0.18em] text-[#a97a36] uppercase">
              Need Assistance?
            </p>
            <h2 className="font-heading mt-2 text-3xl font-black text-[#0c0d0e]">
              Talk with our team about coverage or service.
            </h2>
            <p className="mt-3 text-sm leading-6 text-[#1f2124]">
              If you are unsure whether an issue is covered, we can help you
              understand the next step and point you to the right contact path.
            </p>
            <div className="mt-5 flex flex-col gap-3">
              <a
                href="tel:9414625894"
                className="rounded-full bg-[#d90000] px-5 py-3 text-center font-black text-white transition hover:bg-[#e4ad42] hover:text-[#0c0d0e]"
              >
                <FaPhone className="mr-2" />
                Call 941-462-5894
              </a>
              <Link
                href="/contact-us"
                className="rounded-full border border-[#0c0d0e] bg-white px-5 py-3 text-center font-black text-[#0c0d0e] transition hover:bg-[#0c0d0e] hover:text-white"
              >
                Visit Contact Page
              </Link>
            </div>
            <div className="mt-6 border border-[#e4ad42]/45 bg-[#f7f7f7] p-4">
              <p className="text-sm font-black tracking-[0.18em] text-[#a97a36] uppercase">
                Best For
              </p>
              <p className="mt-2 text-sm leading-6 text-[#1f2124]">
                Coverage questions, workmanship concerns, and general support
                related to previously completed projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:px-10 lg:grid-cols-[minmax(0,1fr)_27rem]">
          <div className="space-y-8">
            <section className="overflow-hidden border border-[#e4ad42]/45 bg-[#1f2124] shadow-[0_20px_50px_rgba(0,0,0,0.22)]">
              <div className="bg-[#0c0d0e] p-4">
                <Image
                  src="/warranty service nueva imagen.jpeg"
                  alt="Gold Lion Painting 5-year limited warranty"
                  width={1152}
                  height={768}
                  priority
                  className="h-auto w-full object-contain"
                />
              </div>
              <div className="border-t border-[#e4ad42]/35 px-6 py-6">
                <p className="text-sm font-black tracking-[0.18em] text-[#e4ad42] uppercase">
                  Warranty Snapshot
                </p>
                <p className="mt-2 text-base leading-7 text-[#dddddd]">
                  This page summarizes the structure of our 5-year limited
                  workmanship warranty while preserving the official terms below
                  for reference.
                </p>
              </div>
            </section>

            <section className="grid gap-6 md:grid-cols-2">
              <article className="border border-[#e4ad42]/45 bg-[#f7f7f7] p-6 shadow-sm">
                <h2 className="font-heading text-2xl font-black text-[#0c0d0e]">
                  How To Submit A Claim
                </h2>
                <ol className="mt-5 space-y-4">
                  {claimSteps.map((step, index) => (
                    <li key={step} className="flex gap-4">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#e4ad42] font-black text-[#0c0d0e]">
                        {index + 1}
                      </span>
                      <p className="pt-1 text-sm leading-6 text-[#1f2124]">
                        {step}
                      </p>
                    </li>
                  ))}
                </ol>
              </article>

              <article className="border border-[#e4ad42]/45 bg-[#0c0d0e] p-6 shadow-[0_18px_35px_rgba(0,0,0,0.22)]">
                <h2 className="font-heading text-2xl font-black text-[#e4ad42]">
                  Common Exclusions
                </h2>
                <ul className="mt-5 space-y-3">
                  {exclusions.map((item) => (
                    <li
                      key={item}
                      className="border border-white/10 bg-[#1f2124] px-4 py-3 text-sm leading-6 text-[#dddddd]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </section>

            <section className="border border-[#e4ad42]/45 bg-white p-8 shadow-[0_20px_50px_rgba(0,0,0,0.12)]">
              <p className="text-sm font-black tracking-[0.18em] text-[#a97a36] uppercase">
                Official Terms
              </p>
              <h2 className="font-heading mt-2 text-4xl font-black text-[#0c0d0e]">
                Gold Lion Painting Inc. 5-Year Limited Warranty
              </h2>

              <div className="mt-8 space-y-7 text-[#1f2124]">
                <section>
                  <p className="border-l-4 border-[#e4ad42] pl-4 text-base leading-7 font-semibold text-[#0c0d0e]">
                    At Gold Lion Painting Inc., we are committed to delivering
                    exceptional craftsmanship and a stress-free experience from
                    start to finish. To support our quality and professionalism,
                    we proudly offer a 5-year limited workmanship warranty,
                    giving our clients long-term confidence in our work.
                  </p>
                </section>

                <section>
                  <h3 className="font-heading text-xl font-black text-[#0c0d0e]">
                    Warranty Coverage
                  </h3>
                  <p className="mt-3 leading-7">
                    Subject to the terms and conditions outlined below, for a
                    period of five (5) years from the project completion date,
                    Gold Lion Painting Inc. will repair any areas where peeling,
                    blistering, or chipping occurs as a direct result of
                    defective workmanship.
                  </p>
                </section>

                <section>
                  <h3 className="font-heading text-xl font-black text-[#0c0d0e]">
                    How to Submit a Warranty Claim
                  </h3>
                  <p className="mt-3 leading-7">
                    To ensure a valid warranty claim, the customer must:
                  </p>
                  <ul className="mt-3 list-disc space-y-2 pl-5 leading-7">
                    <li>Retain a copy of the original contract</li>
                    <li>Provide proof of full payment</li>
                    <li>
                      Allow access to the property for inspection and necessary
                      repairs
                    </li>
                    <li>
                      Cover the cost of materials required for warranty-related
                      repairs
                    </li>
                  </ul>
                  <p className="mt-4 leading-7">
                    If any issue covered under this warranty is detected, please
                    contact Gold Lion Painting Inc. promptly to schedule an
                    inspection.
                  </p>
                </section>

                <section>
                  <h3 className="font-heading text-xl font-black text-[#0c0d0e]">
                    Warranty Limitations
                  </h3>
                  <p className="mt-3 leading-7">
                    This warranty does not apply under the following conditions:
                  </p>
                  <ul className="mt-3 list-disc space-y-2 pl-5 leading-7">
                    <li>
                      Projects where paint or materials were not supplied by
                      Gold Lion Painting Inc.
                    </li>
                    <li>Work not fully completed by our company</li>
                    <li>Varnished or stained surfaces</li>
                    <li>Galvanized metal surfaces</li>
                    <li>Cost of materials required for repairs</li>
                  </ul>
                  <p className="mt-4 leading-7">
                    Additionally, this warranty excludes:
                  </p>
                  <ul className="mt-3 list-disc space-y-2 pl-5 leading-7">
                    <li>
                      Horizontal surfaces or areas that allow moisture
                      accumulation (decks, railings, porches, roofs, patios,
                      gutters, etc.)
                    </li>
                    <li>
                      Natural color changes or fading due to environmental
                      conditions
                    </li>
                    <li>Manufacturer defects in paint, stain, or coatings</li>
                    <li>Bleeding caused by wood knots, rust, or cedar</li>
                    <li>Cracks in drywall, plaster, or wood</li>
                  </ul>
                </section>

                <section>
                  <h3 className="font-heading text-xl font-black text-[#0c0d0e]">
                    Exclusions Due to External Factors
                  </h3>
                  <p className="mt-3 leading-7">
                    This warranty does not cover damage or failure caused by:
                  </p>
                  <ul className="mt-3 list-disc space-y-2 pl-5 leading-7">
                    <li>Normal wear and tear</li>
                    <li>Improper use, neglect, or misuse</li>
                    <li>Pre-existing coating failures</li>
                    <li>Structural defects or design issues</li>
                    <li>Movement or settling of the structure</li>
                    <li>Moisture-related problems</li>
                    <li>Nail pops or surface imperfections</li>
                    <li>Abrasion, mechanical damage, or chemical exposure</li>
                    <li>Fire, flooding, extreme weather, or acts of nature</li>
                    <li>
                      Vandalism, abuse, or external causes beyond our control
                    </li>
                  </ul>
                </section>

                <section>
                  <h3 className="font-heading text-xl font-black text-[#0c0d0e]">
                    Additional Terms & Conditions
                  </h3>
                  <ul className="mt-3 list-disc space-y-2 pl-5 leading-7">
                    <li>
                      This warranty is non-transferable and applies only to the
                      original customer listed in the contract
                    </li>
                    <li>
                      This is the sole express warranty provided by Gold Lion
                      Painting Inc.
                    </li>
                    <li>
                      We are not responsible for incidental or consequential
                      damages
                    </li>
                    <li>
                      Liability is limited and will not exceed the original
                      contract value
                    </li>
                    <li>
                      Any modifications to this warranty must be in writing and
                      signed by all parties
                    </li>
                  </ul>
                </section>
              </div>
            </section>
          </div>

          <aside className="space-y-6">
            <div className="border border-[#e4ad42]/45 bg-[#1f2124] p-7 text-[#dddddd] shadow-[0_20px_45px_rgba(0,0,0,0.28)]">
              <p className="text-sm font-black tracking-[0.18em] text-[#e4ad42] uppercase">
                Estimate Support
              </p>
              <h2 className="font-heading mt-2 text-3xl font-black text-white">
                Planning a new project too?
              </h2>
              <p className="mt-3 text-sm leading-6 text-[#dddddd]">
                If you are reaching out about a past project and also want
                pricing for new work, we can help with both.
              </p>
              <EstimateRequestForm
                className="mt-6 flex flex-col gap-4"
                buttonLabel="Send"
                helperText="Use this if you want to request a new painting estimate while reviewing warranty information."
                source="Warranty page estimate form"
              />
            </div>

            <div className="border border-[#e4ad42]/45 bg-white p-6 shadow-sm">
              <h3 className="font-heading text-2xl font-black text-[#0c0d0e]">
                Quick Contact Options
              </h3>
              <div className="mt-5 flex flex-col gap-3">
                <a
                  href="tel:9414625894"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-[#d90000] px-5 py-3 text-center font-black text-white transition hover:bg-[#e4ad42] hover:text-[#0c0d0e]"
                >
                  <FaPhone className="shrink-0" />
                  Call 941-462-5894
                </a>
                <a
                  href="mailto:goldlionpainting@gmail.com"
                  className="inline-flex items-center justify-center gap-3 rounded-full border border-[#0c0d0e] bg-white px-5 py-3 text-center font-black text-[#0c0d0e] transition hover:bg-[#0c0d0e] hover:text-white"
                >
                  <FaEnvelope className="shrink-0" />
                  Email Gold Lion Painting
                </a>
                <Link
                  href="/about-us"
                  className="inline-flex items-center justify-center gap-3 rounded-full border border-[#0c0d0e] bg-white px-5 py-3 text-center font-black text-[#0c0d0e] transition hover:bg-[#0c0d0e] hover:text-white"
                >
                  <FaInfoCircle className="shrink-0" />
                  Learn More About Us
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
