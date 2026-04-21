"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";

import EstimateRequestForm from "../components/EstimateRequestForm";

import "yet-another-react-lightbox/styles.css";

const trustPoints = [
  "Residential, commercial, and cabinet painting expertise",
  "Insured crews with detail-focused prep and cleanup",
  "Premium materials selected for Florida homes and weather",
  "Straightforward communication from estimate to final walkthrough",
];

const companyStats = [
  { value: "10+", label: "Years across our painting team" },
  { value: "5-Year", label: "Workmanship warranty coverage" },
  { value: "7", label: "Local service areas across Manatee County" },
];

const principles = [
  {
    title: "Clean, organized job sites",
    description: "We protect surfaces carefully and keep projects orderly from prep through final touch-ups.",
  },
  {
    title: "Premium paint systems",
    description: "We use durable products and application methods built for everyday wear and Florida conditions.",
  },
  {
    title: "Detailed written estimates",
    description: "Every proposal is clear about scope, expectations, and the steps needed for a lasting finish.",
  },
  {
    title: "A team that communicates",
    description: "Homeowners and property managers always know what is happening, when we are arriving, and what comes next.",
  },
];

const serviceLinks = [
  { name: "Interior Painting", href: "/interior-painting-upgrade" },
  { name: "Exterior Painting", href: "/exterior-painting-upgrade" },
  { name: "Cabinet Painting", href: "/cabinet-painting-mejor" },
];

const areaLinks = [
  { name: "Ellenton", href: "/ellenton" },
  { name: "Bradenton", href: "/bradenton" },
  { name: "Lakewood Ranch", href: "/lakewood-ranch" },
  { name: "Parrish", href: "/parrish" },
  { name: "Palmetto", href: "/palmetto" },
  { name: "Anna Maria Island", href: "/ana-maria" },
  { name: "Holmes Beach", href: "/holmes-beach" },
];

export default function AboutUsPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxSlide, setLightboxSlide] = useState(0);

  const teamImages = [
    {
      src: "/anamaria/professional-exterior-painters-anna-maria-03.jpg",
      alt: "Gold Lion Painting team at a project site",
      title: "Our team on site at a recent project",
    },
  ];

  return (
    <>
      <main className="min-h-screen bg-[#f6f1e7] font-sans text-[#2f2a24]">
        <section className="relative overflow-hidden border-b border-[#dfcfb5] bg-[radial-gradient(circle_at_top_left,_rgba(212,160,56,0.18),_transparent_30%),linear-gradient(180deg,_#fffaf2_0%,_#f5ecde_100%)]">
          <div className="absolute inset-x-0 top-0 h-40 bg-[linear-gradient(90deg,rgba(212,160,56,0.08),transparent_35%,rgba(143,98,32,0.08))]" />
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-[minmax(0,1.1fr)_24rem] md:items-start md:px-10 lg:grid-cols-[minmax(0,1.1fr)_27rem]">
            <div>
              <p className="mb-4 inline-flex rounded-full border border-[#d8c39f] bg-[#fffaf2]/85 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#8f6220] shadow-sm">
                About Gold Lion Painting Inc
              </p>
              <h1 className="max-w-4xl text-5xl font-bold leading-tight text-[#8f6220] md:text-6xl">
                Local painters focused on craftsmanship, communication, and long-term value.
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-[#615447] md:text-xl">
                We help homeowners and businesses across Manatee County refresh interiors, protect exteriors,
                and upgrade cabinets with clean execution and durable finishes.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {trustPoints.map((point) => (
                  <div
                    key={point}
                    className="rounded-2xl border border-[#e3d3b7] bg-[#fffaf2]/90 px-4 py-4 text-sm font-medium text-[#4d4135] shadow-sm"
                  >
                    <span className="mr-2 text-[#a36a14]">+</span>
                    {point}
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="tel:9414625894"
                  className="rounded-2xl bg-[#d4a038] px-6 py-3 text-base font-bold text-[#2f2a24] transition hover:bg-[#c7942f]"
                >
                  Call 941-462-5894
                </a>
                <Link
                  href="/contact-us"
                  className="rounded-2xl border border-[#d8c39f] bg-[#fffaf2] px-6 py-3 text-base font-bold text-[#8f6220] transition hover:bg-[#f4ecdf]"
                >
                  Request A Free Estimate
                </Link>
              </div>
            </div>

            <div className="rounded-[2rem] border border-[#d8c39f] bg-[#fffaf2]/95 p-7 shadow-[0_22px_50px_rgba(120,94,52,0.14)]">
              <h2 className="text-center text-3xl font-bold text-[#8f6220]">Start Your Project</h2>
              <p className="mt-2 text-center text-sm leading-6 text-[#64584c]">
                Tell us about the space and we will prepare a ready-to-send estimate request for your email app.
              </p>
              <EstimateRequestForm
                className="mt-6 flex flex-col gap-4"
                buttonLabel="Prepare Estimate Email"
                helperText="Fastest path to a detailed estimate request for interior, exterior, or cabinet painting."
              />
            </div>
          </div>
        </section>

        <section className="border-b border-[#e2d5bf] bg-[#fffaf2] py-16">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-3 md:px-10">
            {companyStats.map((stat) => (
              <article
                key={stat.label}
                className="rounded-3xl border border-[#dfcfb5] bg-[#fff7eb] p-6 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_35px_rgba(120,94,52,0.10)]"
              >
                <p className="text-4xl font-bold text-[#8f6220]">{stat.value}</p>
                <p className="mt-2 text-sm uppercase tracking-[0.18em] text-[#8f7d6a]">{stat.label}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 md:px-10 lg:grid-cols-[minmax(0,1fr)_30rem]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#a36a14]">Who We Are</p>
              <h2 className="mt-3 text-4xl font-bold text-[#8f6220]">A painting company built around trust and follow-through.</h2>
              <div className="mt-6 space-y-5 text-lg leading-8 text-[#615447]">
                <p>
                  Gold Lion Painting Inc has earned its reputation by treating each project with the same care we
                  would expect in our own homes. From prep and protection to the final walkthrough, we focus on
                  delivering work that feels polished, reliable, and worth the investment.
                </p>
                <p>
                  Our team works across residential and commercial spaces, helping clients improve curb appeal,
                  brighten interiors, and modernize cabinets with finishes designed to last. We value preparation,
                  product selection, and communication just as much as the final coat of paint.
                </p>
                <p>
                  That approach matters in Florida, where humidity, sunlight, and weather can test any finish.
                  We tailor our process to the space, use durable materials, and keep our clients informed so the
                  experience feels as professional as the results look.
                </p>
              </div>

              <div className="mt-10">
                <h3 className="text-2xl font-bold text-[#8f6220]">What Clients Can Expect</h3>
                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  {principles.map((principle) => (
                    <article
                      key={principle.title}
                      className="rounded-3xl border border-[#dfcfb5] bg-[#fff7eb] p-5 shadow-sm"
                    >
                      <p className="text-lg font-semibold text-[#2f2a24]">{principle.title}</p>
                      <p className="mt-2 text-sm leading-6 text-[#64584c]">{principle.description}</p>
                    </article>
                  ))}
                </div>
              </div>

              <div className="mt-10 grid gap-6 lg:grid-cols-2">
                <div className="rounded-3xl border border-[#dfcfb5] bg-[#fff7eb] p-6 shadow-sm">
                  <h3 className="text-2xl font-bold text-[#8f6220]">Our Services</h3>
                  <div className="mt-5 grid gap-3">
                    {serviceLinks.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="rounded-2xl border border-[#dfcfb5] bg-[#fffaf2] px-4 py-4 font-semibold text-[#8f6220] transition hover:border-[#c7942f] hover:bg-[#f4ecdf]"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="rounded-3xl border border-[#dfcfb5] bg-[#fff7eb] p-6 shadow-sm">
                  <h3 className="text-2xl font-bold text-[#8f6220]">Service Areas</h3>
                  <div className="mt-5 grid grid-cols-2 gap-3">
                    {areaLinks.map((area) => (
                      <Link
                        key={area.href}
                        href={area.href}
                        className="rounded-2xl border border-[#dfcfb5] bg-[#fffaf2] px-3 py-3 text-center text-sm font-medium text-[#615447] transition hover:border-[#c7942f] hover:bg-[#f4ecdf] hover:text-[#8f6220]"
                      >
                        {area.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="overflow-hidden rounded-[2rem] border border-[#d8c39f] bg-[#fff7eb] shadow-[0_18px_40px_rgba(120,94,52,0.14)]">
                <Image src="/logo.jpg" alt="Gold Lion Painting Inc logo" width={900} height={900} className="w-full object-cover" />
              </div>

              <div className="overflow-hidden rounded-[2rem] border border-[#d8c39f] bg-[#fffaf2] shadow-[0_18px_40px_rgba(120,94,52,0.14)]">
                <Image
                  src="/anamaria/professional-exterior-painters-anna-maria-03.jpg"
                  alt="Gold Lion Painting team at a project site"
                  width={1024}
                  height={768}
                  className="w-full cursor-pointer object-cover transition duration-300 hover:scale-[1.02]"
                  onClick={() => {
                    setLightboxSlide(0);
                    setLightboxOpen(true);
                  }}
                />
                <div className="border-t border-[#eadfcf] px-5 py-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#8f7d6a]">On The Job</p>
                  <p className="mt-1 text-sm leading-6 text-[#64584c]">
                    Our crew at a recent project, showing the kind of coordination and site presence clients can expect.
                  </p>
                </div>
              </div>

              <div className="overflow-hidden rounded-[2rem] border border-[#d8c39f] bg-[#fff7eb] shadow-[0_20px_48px_rgba(120,94,52,0.15)]">
                <Image
                  src="/services/exterior-painting-manatee-county.jpg"
                  alt="Gold Lion Painting exterior painting project in Manatee County"
                  width={1365}
                  height={768}
                  className="h-[22rem] w-full object-cover md:h-[28rem]"
                />
                <div className="grid gap-3 border-t border-[#eadfcf] bg-[#fffaf2] px-5 py-5 sm:grid-cols-2">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#8f7d6a]">Project Focus</p>
                    <p className="mt-1 text-sm leading-6 text-[#64584c]">
                      Exterior work planned for durability, curb appeal, and a cleaner finish from the street.
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#8f7d6a]">Next Step</p>
                    <p className="mt-1 text-sm leading-6 text-[#64584c]">
                      We can review your project goals and help you choose the right service path for the property.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-[2rem] border border-[#d8c39f] bg-linear-to-br from-[#fffaf2] to-[#f3e4c4] p-7 shadow-[0_20px_45px_rgba(120,94,52,0.14)]">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#8f7d6a]">Ready To Talk?</p>
                <h3 className="mt-2 text-3xl font-bold text-[#8f6220]">Book a free estimate and get a clear next step.</h3>
                <p className="mt-3 text-sm leading-6 text-[#64584c]">
                  Whether you are planning one room or a full exterior, we can help you scope the project and move it forward with confidence.
                </p>
                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="tel:9414625894"
                    className="rounded-2xl bg-[#d4a038] px-5 py-3 text-center font-bold text-[#2f2a24] transition hover:bg-[#c7942f]"
                  >
                    Call 941-462-5894
                  </a>
                  <Link
                    href="/contact-us"
                    className="rounded-2xl border border-[#d8c39f] bg-[#fffaf2] px-5 py-3 text-center font-bold text-[#8f6220] transition hover:bg-[#f4ecdf]"
                  >
                    Visit Contact Page
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Lightbox open={lightboxOpen} close={() => setLightboxOpen(false)} slides={teamImages} index={lightboxSlide} />
    </>
  );
}

