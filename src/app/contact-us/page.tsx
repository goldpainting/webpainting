import { type Metadata } from "next";
import Link from "next/link";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

import EstimateRequestForm from "../components/EstimateRequestForm";
import { siteUrl } from "../siteConfig";

export const metadata: Metadata = {
  title: "Contact Us | Gold Lion Painting Inc",
  description:
    "Contact Gold Lion Painting Inc for interior painting, exterior painting, cabinet refinishing, and free estimates in Manatee County, Florida.",
  alternates: {
    canonical: "/contact-us",
  },
  openGraph: {
    title: "Contact Us | Gold Lion Painting Inc",
    description:
      "Contact Gold Lion Painting Inc for interior painting, exterior painting, cabinet refinishing, and free estimates in Manatee County, Florida.",
    url: `${siteUrl}/contact-us`,
    images: [
      {
        url: "/logo.jpg",
        width: 900,
        height: 900,
        alt: "Gold Lion Painting Inc logo",
      },
    ],
  },
};

export default function ContactUsPage() {
  const areas = [
    { name: "Ellenton", href: "/ellenton" },
    { name: "Bradenton", href: "/bradenton" },
    { name: "Lakewood Ranch", href: "/lakewood-ranch" },
    { name: "Parrish", href: "/parrish" },
    { name: "Palmetto", href: "/palmetto" },
    { name: "Anna Maria Island", href: "/ana-maria" },
    { name: "Holmes Beach", href: "/holmes-beach" },
  ];

  return (
    <main className="min-h-screen bg-[#f6f1e7] font-sans text-[#2f2a24]">
      <section className="relative flex w-full flex-col items-center justify-center border-b border-[#dfcfb5] bg-linear-to-b from-[#fffaf2] to-[#f4ecdf] py-20 text-center">
        <h1 className="mb-4 text-5xl font-bold text-[#8f6220] md:text-6xl">
          Contact Us For A Free Estimate
        </h1>
        <p className="text-xl text-[#64584c] md:text-2xl">
          Direct contact for interior, exterior, and cabinet painting projects
        </p>
      </section>

      <section className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-14 md:flex-row md:px-16">
        <div className="flex flex-1 flex-col gap-8">
          <p className="text-lg leading-relaxed text-[#615447]">
            Whether you&apos;re ready to book an estimate or just want to talk through the scope,
            <span className="font-bold text-[#2f2a24]"> Gold Lion Painting Inc</span> makes it easy to
            get in touch.
          </p>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-[#dfcfb5] bg-[#fffaf2] p-6 shadow-sm">
              <h2 className="mb-4 border-b border-[#dfcfb5] pb-2 text-2xl font-bold text-[#8f6220]">
                Contact Us
              </h2>
              <ul className="space-y-4">
                <li className="flex items-center gap-4">
                  <span className="rounded-full bg-[#d4a038] p-3 text-[#2f2a24]">
                    <FaPhone size={18} />
                  </span>
                  <div>
                    <p className="mb-0.5 text-xs uppercase tracking-wide text-[#8f7d6a]">Phone</p>
                    <a
                      href="tel:941-462-5894"
                      className="text-lg font-bold text-[#2f2a24] transition hover:text-[#8f6220]"
                    >
                      941-462-5894
                    </a>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <span className="rounded-full bg-[#d4a038] p-3 text-[#2f2a24]">
                    <FaEnvelope size={18} />
                  </span>
                  <div>
                    <p className="mb-0.5 text-xs uppercase tracking-wide text-[#8f7d6a]">Email</p>
                    <a
                      href="mailto:goldlionpainting@gmail.com"
                      className="text-lg font-bold text-[#2f2a24] transition hover:text-[#8f6220]"
                    >
                      goldlionpainting@gmail.com
                    </a>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <span className="rounded-full bg-[#d4a038] p-3 text-[#2f2a24]">
                    <FaMapMarkerAlt size={18} />
                  </span>
                  <div>
                    <p className="mb-0.5 text-xs uppercase tracking-wide text-[#8f7d6a]">Service Area</p>
                    <p className="text-lg font-bold text-[#2f2a24]">Manatee County, FL</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="rounded-3xl border border-[#dfcfb5] bg-[#fffaf2] p-6 shadow-sm">
              <h2 className="mb-4 border-b border-[#dfcfb5] pb-2 text-2xl font-bold text-[#8f6220]">
                Hours Of Operation
              </h2>
              <div className="flex h-32 flex-col items-center justify-center gap-2">
                <p className="text-xl font-bold text-[#2f2a24]">Monday - Sunday</p>
                <p className="text-3xl font-bold text-[#8f6220]">6:00 am - 10:00 pm</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-[#dfcfb5] bg-[#fffaf2] p-6 shadow-sm">
            <h2 className="mb-4 border-b border-[#dfcfb5] pb-2 text-center text-2xl font-bold text-[#8f6220]">
              Areas Of Service
            </h2>
            <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-3">
              {areas.map((area) => (
                <Link
                  key={area.href}
                  href={area.href}
                  className="group flex items-center gap-2 rounded-2xl border border-[#dfcfb5] bg-[#fff7eb] p-3 text-[#615447] transition hover:border-[#c7942f] hover:bg-[#f4ecdf] hover:text-[#8f6220]"
                >
                  <span className="text-xs font-semibold uppercase tracking-wide text-[#8f6220]">Area</span>
                  <span className="font-medium">{area.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full shrink-0 md:w-96">
          <div className="sticky top-24 rounded-3xl border border-[#d8c39f] bg-linear-to-b from-[#fffaf2] to-[#fff7eb] p-8 shadow-[0_18px_40px_rgba(120,94,52,0.12)]">
            <h2 className="mb-1 text-center text-3xl font-bold text-[#8f6220]">Get A Free Estimate!</h2>
            <p className="mb-6 text-center text-sm text-[#64584c]">
              Fill out the form and we will open your email app with a ready-to-send estimate request.
            </p>
            <EstimateRequestForm className="flex flex-col gap-4" buttonLabel="Prepare Estimate Email" />
          </div>
        </div>
      </section>
    </main>
  );
}
