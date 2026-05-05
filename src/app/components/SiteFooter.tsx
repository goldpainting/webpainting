import Image from "next/image";
import Link from "next/link";
import { type ReactNode } from "react";
import { type IconType } from "react-icons";
import {
  FaCheckCircle,
  FaFacebookF,
  FaMapMarkedAlt,
  FaPaintRoller,
  FaWhatsapp,
} from "react-icons/fa";

import {
  businessEmail,
  businessHours,
  businessName,
  googleRatingValue,
  googleReviewCount,
  googleReviewsHref,
} from "../siteConfig";
import { companyLinks, serviceAreaNames, serviceLinks } from "./navigationData";

const socialLinks = [
  {
    href: "https://www.facebook.com/p/Gold-Lion-Painting-Inc-100094745400171/",
    label: "Facebook",
    icon: FaFacebookF,
  },
  {
    href: "https://wa.me/19414625894",
    label: "Whatsapp",
    icon: FaWhatsapp,
  },
];

export default function SiteFooter() {
  return (
    <footer className="bg-[#1f2124] px-6 py-16 text-[#dddddd] lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-5 text-center lg:text-left">
          <Link href="/" className="mx-auto block max-w-[260px] lg:mx-0">
            <span className="inline-flex items-center justify-center gap-3 lg:justify-start">
              <Image
                src="/logo.jpg"
                alt={`${businessName} logo`}
                width={96}
                height={96}
                className="h-16 w-16 rounded-full object-cover"
              />
              <span className="font-heading text-sm font-black uppercase leading-tight text-[#e4ad42]">
                {businessName}
              </span>
            </span>
          </Link>
          <a
            href="tel:9414625894"
            className="font-display block text-lg font-bold text-[#dddddd] transition hover:text-[#e4ad42]"
          >
            (941) 462-5894
          </a>
          <a
            href={`mailto:${businessEmail}`}
            className="block text-sm transition hover:text-[#e4ad42]"
          >
            {businessEmail}
          </a>
          <div className="flex justify-center gap-3 lg:justify-start">
            {socialLinks.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#e4ad42]/35 text-[#e4ad42] transition hover:bg-[#e4ad42] hover:text-[#0c0d0e]"
                >
                  <Icon aria-hidden="true" />
                </a>
              );
            })}
          </div>
          <a
            href={googleReviewsHref}
            target="_blank"
            rel="noreferrer"
            className="mx-auto block max-w-[180px] text-center lg:mx-0 lg:text-left"
          >
            <span className="font-heading block text-3xl font-black text-[#e4ad42]">
              {googleRatingValue}
            </span>
            <span className="block text-sm">Google rating from {googleReviewCount} reviews</span>
          </a>
          <div className="text-sm leading-7">
            <p className="font-display font-bold text-[#e4ad42]">Hours Of Operation</p>
            <p>{businessHours}</p>
          </div>
        </div>

        <FooterColumn title="Our Services">
          {serviceLinks.map((link, index) => (
            <FooterLink
              key={`${link.label}-${link.href}`}
              href={link.href}
              icon={index === 1 ? FaMapMarkedAlt : FaPaintRoller}
            >
              {link.label}
            </FooterLink>
          ))}
        </FooterColumn>

        <FooterColumn title="Quick Links">
          <FooterLink href="/" icon={FaCheckCircle}>
            Homepage
          </FooterLink>
          {companyLinks.map((link) => (
            <FooterLink key={`${link.label}-${link.href}`} href={link.href} icon={FaCheckCircle}>
              {link.label}
            </FooterLink>
          ))}
        </FooterColumn>

        <FooterColumn title="Locations">
          {serviceAreaNames.map((area) => (
            <FooterItem key={area} icon={FaMapMarkedAlt}>
              {area}
            </FooterItem>
          ))}
        </FooterColumn>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div>
      <h2 className="font-display text-center text-lg font-bold text-[#e4ad42] lg:text-left">
        {title}
      </h2>
      <div className="mx-auto mt-3 h-px w-24 bg-[#dddddd]/70 lg:mx-0" />
      <ul className="mt-5 space-y-3">{children}</ul>
    </div>
  );
}

function FooterLink({
  href,
  icon: Icon,
  children,
}: {
  href: string;
  icon: IconType;
  children: ReactNode;
}) {
  return (
    <li>
      <Link
        href={href}
        className="flex items-center justify-center gap-3 text-sm text-[#dddddd] transition hover:text-[#e4ad42] lg:justify-start"
      >
        <Icon aria-hidden="true" className="shrink-0 text-[#e4ad42]" />
        <span>{children}</span>
      </Link>
    </li>
  );
}

function FooterItem({
  icon: Icon,
  children,
}: {
  icon: IconType;
  children: ReactNode;
}) {
  return (
    <li className="flex items-center justify-center gap-3 text-sm lg:justify-start">
      <Icon aria-hidden="true" className="shrink-0 text-[#e4ad42]" />
      <span>{children}</span>
    </li>
  );
}
