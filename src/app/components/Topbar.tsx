"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { type ReactNode, useState } from "react";
import {
  FaBars,
  FaCalendarAlt,
  FaChevronDown,
  FaFacebookF,
  FaTimes,
  FaWhatsapp,
} from "react-icons/fa";

import {
  areaLinks,
  companyLinks,
  contactLinks,
  serviceLinks,
} from "./navigationData";
import { businessName } from "../siteConfig";

function DesktopDropdown({
  active,
  label,
  links,
}: {
  active: boolean;
  label: string;
  links: { href: string; label: string }[];
}) {
  return (
    <li className="group relative">
      <button
        type="button"
        className={`font-heading flex items-center gap-2 text-sm font-black whitespace-nowrap transition group-focus-within:text-[#e4ad42] hover:text-[#e4ad42] ${
          active ? "text-[#e4ad42]" : "text-[#dddddd]"
        }`}
      >
        {label}
        <FaChevronDown aria-hidden="true" className="text-xs" />
      </button>
      <div className="invisible absolute left-0 z-50 mt-5 min-w-64 border-t-2 border-[#e4ad42] bg-[#0c0d0e] p-2 opacity-0 shadow-[0_18px_45px_rgba(0,0,0,0.32)] transition-all duration-200 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
        {links.map((link) => (
          <Link
            key={`${link.label}-${link.href}`}
            href={link.href}
            className="block px-4 py-3 text-sm font-semibold text-[#dddddd] transition hover:bg-[#1f2124] hover:text-[#e4ad42]"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </li>
  );
}

export default function Topbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const isHomeActive = pathname === "/";
  const isServiceActive = serviceLinks.some((link) => pathname === link.href);
  const isAreaActive = areaLinks.some((link) => pathname === link.href);
  const isCompanyActive = companyLinks.some((link) => pathname === link.href);
  const isContactActive = contactLinks.some((link) => pathname === link.href);

  return (
    <header className="sticky top-0 z-50 bg-[#0c0d0e] text-[#dddddd] shadow-[0_12px_32px_rgba(0,0,0,0.35)]">
      <div className="hidden border-b border-white/10 bg-[#1f2124] px-6 py-2 lg:block">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <p className="text-sm">Serving Clients Since 2014</p>
          <div className="flex items-center gap-4 text-[#e4ad42]">
            <a
              href="https://www.facebook.com/p/Gold-Lion-Painting-Inc-100094745400171/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="transition hover:text-[#dddddd]"
            >
              <FaFacebookF aria-hidden="true" />
            </a>
            <a
              href="https://wa.me/19414625894"
              target="_blank"
              rel="noreferrer"
              aria-label="Whatsapp"
              className="transition hover:text-[#dddddd]"
            >
              <FaWhatsapp aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      <nav className="px-4 py-3 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3">
          <Link
            href="/"
            className="flex w-[190px] shrink-0 items-center gap-2 xl:w-[230px]"
          >
            <Image
              src="/logo.jpg"
              alt="Gold Lion Painting Inc logo"
              width={96}
              height={96}
              priority
              className="h-12 w-12 rounded-full object-cover xl:h-14 xl:w-14"
            />
            <span className="font-heading text-xs leading-tight font-black text-[#e4ad42] uppercase xl:text-sm">
              {businessName}
            </span>
          </Link>

          <ul className="hidden items-center gap-5 lg:flex xl:gap-7">
            <li>
              <Link
                href="/"
                className={`font-heading text-sm font-black transition hover:text-[#e4ad42] ${
                  isHomeActive ? "text-[#e4ad42]" : "text-[#dddddd]"
                }`}
              >
                Home
              </Link>
            </li>
            <DesktopDropdown
              active={isServiceActive}
              label="Services"
              links={serviceLinks}
            />
            <DesktopDropdown
              active={isAreaActive}
              label="Areas"
              links={areaLinks}
            />
            <DesktopDropdown
              active={isCompanyActive}
              label="Company"
              links={companyLinks}
            />
            <DesktopDropdown
              active={isContactActive}
              label="Contact"
              links={contactLinks}
            />
          </ul>

          <div className="hidden items-center gap-3 lg:flex xl:gap-4">
            <Link
              href="/#bbb-accredited"
              aria-label="Go to BBB Accredited section"
              className="inline-flex shrink-0 items-center rounded-full border border-white/15 bg-white px-3 py-1.5 transition hover:border-[#e4ad42] hover:bg-[#f3f3f3]"
            >
              <Image
                src="/bbb_logo.png"
                alt="BBB Accredited Business"
                width={96}
                height={96}
                className="h-10 w-10 object-contain"
              />
            </Link>
            <Link
              href="/contact-us"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#d90000] px-4 py-3 text-sm font-bold whitespace-nowrap text-[#dddddd] shadow-[0_0_18px_rgba(0,0,0,0.45)] transition hover:bg-[#1f2124] xl:px-5"
            >
              <FaCalendarAlt aria-hidden="true" />
              Schedule an Estimate
            </Link>
            <a
              href="tel:9414625894"
              className="font-heading shrink-0 text-base font-black whitespace-nowrap text-[#dddddd] transition hover:text-[#e4ad42] xl:text-lg"
            >
              (941) 462-5894
            </a>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-[#e4ad42]/45 p-3 text-[#dddddd] transition hover:bg-[#1f2124] lg:hidden"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((value) => !value)}
          >
            {mobileOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
          </button>
        </div>
      </nav>

      {mobileOpen ? (
        <div className="max-h-[calc(100dvh-76px)] overflow-y-auto border-t border-white/10 bg-[#0c0d0e] px-4 py-5 sm:px-6 lg:hidden">
          <div className="mx-auto max-w-6xl space-y-6">
            <MobileSection title="Menu">
              <MobileLink
                href="/"
                label="Home"
                active={isHomeActive}
                onClick={() => setMobileOpen(false)}
              />
              <MobileLink
                href="/about-us"
                label="About Us"
                active={pathname === "/about-us"}
                onClick={() => setMobileOpen(false)}
              />
              <MobileLink
                href="/blog"
                label="Blog"
                active={pathname.startsWith("/blog")}
                onClick={() => setMobileOpen(false)}
              />
              <MobileLink
                href="/warranty-service"
                label="Warranty"
                active={pathname === "/warranty-service"}
                onClick={() => setMobileOpen(false)}
              />
            </MobileSection>

            <MobileSection title="Contact">
              <MobileLink
                href="/contact-us"
                label="Contact Us"
                active={pathname === "/contact-us"}
                onClick={() => setMobileOpen(false)}
              />
              <MobileLink
                href="/color-consultation"
                label="Color Consultation"
                active={pathname === "/color-consultation"}
                onClick={() => setMobileOpen(false)}
              />
              <MobileLink
                href="/#bbb-accredited"
                label="BBB Accredited"
                active={false}
                onClick={() => setMobileOpen(false)}
              />
            </MobileSection>

            <MobileSection title="Services">
              {serviceLinks.map((link) => (
                <MobileLink
                  key={`${link.label}-${link.href}`}
                  href={link.href}
                  label={link.label}
                  active={pathname === link.href}
                  onClick={() => setMobileOpen(false)}
                />
              ))}
            </MobileSection>

            <MobileSection title="Areas">
              {areaLinks.map((link) => (
                <MobileLink
                  key={`${link.label}-${link.href}`}
                  href={link.href}
                  label={link.label}
                  active={pathname === link.href}
                  onClick={() => setMobileOpen(false)}
                />
              ))}
            </MobileSection>

            <a
              href="tel:9414625894"
              className="block rounded-full bg-[#d90000] px-5 py-4 text-center font-bold text-[#dddddd]"
            >
              Call (941) 462-5894
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}

function MobileSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div>
      <p className="mb-3 text-xs font-bold text-[#e4ad42] uppercase">{title}</p>
      <div className="grid gap-2">{children}</div>
    </div>
  );
}

function MobileLink({
  active = false,
  href,
  label,
  onClick,
}: {
  active?: boolean;
  href: string;
  label: string;
  onClick: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`border bg-[#1f2124] px-4 py-3 text-sm font-semibold transition hover:border-[#e4ad42] hover:text-[#e4ad42] ${
        active
          ? "border-[#e4ad42] text-[#e4ad42]"
          : "border-white/10 text-[#dddddd]"
      }`}
    >
      {label}
    </Link>
  );
}
