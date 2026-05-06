import Image from 'next/image';
import Link from 'next/link';
import { FaExternalLinkAlt, FaFileContract, FaStar } from 'react-icons/fa';

import {
  bbbProfileHref,
  businessName,
  googleRatingValue,
  googleReviewCount,
  googleReviewsHref,
} from '../siteConfig';
import GoogleReviewsCarousel from './GoogleReviewsCarousel';

export default function TrustSections() {
  return (
    <>
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
            Homeowners across{' '}
            <strong>
              Bradenton, Sarasota, Lakewood Ranch, Anna Maria Island, and nearby
              service areas
            </strong>{' '}
            rely on Gold Lion Painting Inc for structured execution, clean job
            sites, and refined finishes.
          </p>
          <a
            href={googleReviewsHref}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex font-heading text-2xl font-black text-[#0c0d0e] transition hover:text-[#e4ad42]"
          >
            {googleRatingValue} Google Rating From {googleReviewCount} Reviews
          </a>
        </div>
      </section>

      <GoogleReviewsCarousel
        maxReviews={3}
        randomizeOnLoad
        showDates={false}
      />

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

            <p className="mt-6 font-heading text-base font-black tracking-[0.2em] text-[#e4ad42] uppercase drop-shadow-[0_3px_12px_rgba(0,0,0,0.8)]">
              Accredited Trust Signal
            </p>
            <h2 className="mt-3 font-heading text-5xl leading-tight font-black text-white drop-shadow-[0_5px_18px_rgba(0,0,0,0.75)] md:text-7xl">
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
              <h2 className="mt-2 font-heading text-4xl font-black text-white">
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

            <Link
              href="/warranty-service"
              className="block overflow-hidden border border-[#e4ad42]/45 bg-[#1f2124] p-3 shadow-[0_18px_45px_rgba(0,0,0,0.38)] transition hover:scale-[1.02] hover:border-[#e4ad42]"
            >
              <Image
                src="/warranty service nueva imagen.jpeg"
                alt="Gold Lion Painting 5-year limited warranty"
                width={1024}
                height={683}
                className="h-auto w-full"
              />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
