"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaChevronDown, FaTimes } from "react-icons/fa";

import { googleReviewsHref } from "../siteConfig";

const serviceLinks = [
  { href: "/interior-painting-upgrade", label: "Interior Painting" },
  { href: "/exterior-painting-upgrade", label: "Exterior Painting" },
  { href: "/cabinet-painting-mejor", label: "Cabinet Painting" },
];

const areaLinks = [
  { href: "/ellenton", label: "Ellenton" },
  { href: "/bradenton", label: "Bradenton" },
  { href: "/lakewood-ranch", label: "Lakewood Ranch" },
  { href: "/parrish", label: "Parrish" },
  { href: "/palmetto", label: "Palmetto" },
  { href: "/ana-maria", label: "Anna Maria Island" },
  { href: "/holmes-beach", label: "Holmes Beach" },
];

const companyLinks = [
  { href: "/about-us", label: "About Us" },
  { href: "/color-consultation", label: "Color Consultation" },
  { href: "/warranty-service", label: "Warranty Service" },
  { href: "/contact-us", label: "Contact Us" },
];

function DesktopDropdown({
  label,
  links,
}: {
  label: string;
  links: { href: string; label: string }[];
}) {
  return (
    <li className="group relative">
      <button
        type="button"
        className="flex items-center gap-2 transition hover:text-[#a36a14] group-focus-within:text-[#a36a14]"
      >
        {label}
        <FaChevronDown className="text-xs" />
      </button>
      <div className="invisible absolute left-0 z-50 mt-3 min-w-64 rounded-2xl border border-[#dfcfb5] bg-[#fffaf2] p-2 opacity-0 shadow-[0_16px_40px_rgba(120,94,52,0.14)] transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="block rounded-xl px-4 py-3 transition hover:bg-[#f4ecdf] hover:text-[#8f6220]"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </li>
  );
}

export default function Topbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-[#dfcfb5] bg-[#f6f1e7]/95 text-[#2f2a24] shadow-[0_10px_30px_rgba(120,94,52,0.08)] backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <Image
            src="/logo.jpg"
            alt="Gold Lion Painting Logo"
            width={56}
            height={56}
            className="rounded-full bg-white"
          />
          <div className="min-w-0">
            <p className="truncate text-lg font-bold tracking-wide text-[#8f6220] sm:text-xl">
              Gold Lion Painting Inc.
            </p>
            <p className="hidden text-sm text-[#6e604f] sm:block">
              Interior, exterior, and cabinet painting in Manatee County
            </p>
          </div>
        </Link>

        <ul className="hidden items-center gap-8 text-base font-medium lg:flex">
          <li>
            <Link href="/" className="transition hover:text-[#a36a14]">
              Home
            </Link>
          </li>
          <DesktopDropdown label="Services" links={serviceLinks} />
          <DesktopDropdown label="Areas" links={areaLinks} />
          <DesktopDropdown label="Company" links={companyLinks} />
          <li>
            <a
              href={googleReviewsHref}
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-[#a36a14]"
            >
              Reviews
            </a>
          </li>
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="mailto:goldlionpainting@gmail.com"
            className="rounded-xl border border-[#dfcfb5] bg-[#fffaf2] px-4 py-2 font-semibold transition hover:bg-[#f4ecdf] hover:text-[#8f6220]"
          >
            Email Us
          </a>
          <a
            href="tel:9414625894"
            className="rounded-xl bg-[#d4a038] px-4 py-2 font-bold text-[#2f2a24] transition hover:bg-[#c7942f]"
          >
            941-462-5894
          </a>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-xl border border-[#dfcfb5] bg-[#fffaf2] p-3 text-[#8f6220] transition hover:bg-[#f4ecdf] lg:hidden"
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((value) => !value)}
        >
          {mobileOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
        </button>
      </div>

      {mobileOpen ? (
        <div className="border-t border-[#dfcfb5] bg-[#fffaf2] px-4 py-5 sm:px-6 lg:hidden">
          <div className="mx-auto max-w-7xl space-y-5">
            <div className="grid gap-3">
              <Link href="/" className="rounded-xl bg-[#f7efe2] px-4 py-3 font-semibold" onClick={() => setMobileOpen(false)}>
                Home
              </Link>
              <Link href="/contact-us" className="rounded-xl bg-[#f7efe2] px-4 py-3 font-semibold" onClick={() => setMobileOpen(false)}>
                Contact Us
              </Link>
              <Link href="/about-us" className="rounded-xl bg-[#f7efe2] px-4 py-3 font-semibold" onClick={() => setMobileOpen(false)}>
                About Us
              </Link>
              <Link href="/color-consultation" className="rounded-xl bg-[#f7efe2] px-4 py-3 font-semibold" onClick={() => setMobileOpen(false)}>
                Color Consultation
              </Link>
              <Link href="/warranty-service" className="rounded-xl bg-[#f7efe2] px-4 py-3 font-semibold" onClick={() => setMobileOpen(false)}>
                Warranty Service
              </Link>
            </div>

            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#8f6220]">
                Services
              </p>
              <div className="grid gap-2">
                {serviceLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-xl border border-[#dfcfb5] px-4 py-3"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#8f6220]">
                Service Areas
              </p>
              <div className="grid grid-cols-2 gap-2">
                {areaLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-xl border border-[#dfcfb5] px-4 py-3"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="grid gap-3">
              <a
                href={googleReviewsHref}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-[#dfcfb5] bg-[#fffaf2] px-4 py-3 font-semibold"
              >
                Read Google Reviews
              </a>
              <a href="mailto:goldlionpainting@gmail.com" className="rounded-xl border border-[#dfcfb5] bg-[#fffaf2] px-4 py-3 font-semibold">
                goldlionpainting@gmail.com
              </a>
              <a href="tel:9414625894" className="rounded-xl bg-[#d4a038] px-4 py-3 text-center font-bold text-[#2f2a24]">
                Call 941-462-5894
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </nav>
  );
}
