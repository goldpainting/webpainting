'use client';

import { useMemo, useState } from 'react';
import { ReactGoogleReviews } from 'react-google-reviews';
import {
  FaChevronLeft,
  FaChevronRight,
  FaGoogle,
  FaStar,
} from 'react-icons/fa';

import {
  googleRatingValue,
  googleReviewCount,
  googleReviewsHref,
  googleWriteReviewHref,
} from '../siteConfig';

type GoogleReview = {
  reviewId: string | null;
  reviewer: {
    profilePhotoUrl: string;
    displayName: string;
    isAnonymous: boolean;
  };
  starRating: number;
  comment: string;
  createTime: string | null;
  updateTime: string | null;
};

type GoogleReviewsCarouselProps = {
  areaName?: string;
  pageSize?: number;
};

const FEATURABLE_WIDGET_ID =
  process.env.NEXT_PUBLIC_FEATURABLE_WIDGET_ID ?? 'example';

function AvatarWithFallback({
  photoUri,
  name,
}: {
  photoUri: string;
  name: string;
}) {
  const [imgError, setImgError] = useState(false);
  const initial = (name?.charAt(0) ?? '?').toUpperCase();

  if (!photoUri || imgError) {
    return (
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1f5fec] text-sm font-bold text-white">
        {initial}
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={photoUri}
      alt={name}
      width={40}
      height={40}
      className="h-10 w-10 shrink-0 rounded-full object-cover"
      referrerPolicy="no-referrer"
      onError={() => setImgError(true)}
    />
  );
}

function formatDate(iso: string | null): string {
  if (!iso) return '';
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return '';
  return d.toLocaleDateString('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  });
}

function buildPager(current: number, total: number): (number | 'gap')[] {
  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }
  const pages: (number | 'gap')[] = [1];
  const left = Math.max(2, current - 1);
  const right = Math.min(total - 1, current + 1);
  if (left > 2) pages.push('gap');
  for (let i = left; i <= right; i++) pages.push(i);
  if (right < total - 1) pages.push('gap');
  pages.push(total);
  return pages;
}

function ReviewCard({ review }: { review: GoogleReview }) {
  const [expanded, setExpanded] = useState(false);
  const text = review.comment || '';
  const isLong = text.length > 220;
  const displayText = expanded || !isLong ? text : `${text.slice(0, 220)}…`;

  return (
    <article className="flex h-full flex-col rounded-2xl border border-[#e5e7eb] bg-[#f8fafc] p-6 transition hover:shadow-md">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-1">
          <span className="font-heading text-xl font-black text-[#0c0d0e]">
            {review.starRating}
          </span>
          <span className="ml-1 flex items-center gap-0.5 text-[#f5aa00]">
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar
                key={star}
                className={`h-3.5 w-3.5 ${
                  star <= review.starRating
                    ? 'text-[#f5aa00]'
                    : 'text-[#d1d5db]'
                }`}
                aria-hidden="true"
              />
            ))}
          </span>
        </div>
        <span className="text-xs text-[#5d646b]">
          {formatDate(review.createTime)}
        </span>
      </div>

      <p className="mt-4 text-sm leading-6 text-[#343b43]">
        {displayText}
        {isLong && (
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="ml-1 font-semibold text-[#1f5fec] hover:text-[#0c0d0e]"
          >
            {expanded ? 'Less' : 'More'}
          </button>
        )}
      </p>

      <div className="mt-auto flex items-center justify-between gap-3 pt-5">
        <div className="flex min-w-0 items-center gap-3">
          <AvatarWithFallback
            photoUri={review.reviewer.profilePhotoUrl}
            name={review.reviewer.displayName}
          />
          <p className="truncate text-sm font-semibold text-[#0c0d0e]">
            {review.reviewer.displayName}
          </p>
        </div>
        <FaGoogle className="h-5 w-5 shrink-0 text-[#4285f4]" aria-hidden="true" />
      </div>
    </article>
  );
}

function PaginatedReviews({
  reviews,
  pageSize,
}: {
  reviews: GoogleReview[];
  pageSize: number;
}) {
  const [page, setPage] = useState(1);

  const sorted = useMemo(() => {
    const filtered = reviews.filter(
      (r) =>
        r.starRating >= 4 &&
        r.comment?.trim().length > 0 &&
        r.reviewer?.displayName &&
        !r.reviewer.isAnonymous
    );
    for (let i = filtered.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [filtered[i], filtered[j]] = [filtered[j]!, filtered[i]!];
    }
    return filtered;
  }, [reviews]);

  const totalPages = Math.max(1, Math.ceil(sorted.length / pageSize));
  const safePage = Math.min(page, totalPages);
  const start = (safePage - 1) * pageSize;
  const visible = sorted.slice(start, start + pageSize);
  const pagerItems = buildPager(safePage, totalPages);

  if (sorted.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-[#9aa3b5] bg-[#f8fafc] p-8 text-center text-[#343b43]">
        <FaGoogle aria-hidden="true" className="mx-auto text-4xl text-[#4285f4]" />
        <h3 className="mt-4 font-heading text-2xl font-black text-[#0c0d0e]">
          No reviews available yet
        </h3>
        <a
          href={googleReviewsHref}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex rounded-lg bg-[#0c0d0e] px-5 py-3 font-bold text-white transition hover:bg-[#e4ad42] hover:text-[#0c0d0e]"
        >
          Open Google Reviews
        </a>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((review, i) => (
          <ReviewCard key={review.reviewId ?? `${start}-${i}`} review={review} />
        ))}
      </div>

      {totalPages > 1 && (
        <nav
          aria-label="Reviews pagination"
          className="mt-8 flex items-center justify-center gap-1.5 text-sm"
        >
          <button
            type="button"
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={safePage === 1}
            className="flex h-9 w-9 items-center justify-center rounded-full text-[#9aa3b5] transition hover:text-white disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:text-[#9aa3b5]"
            aria-label="Previous page"
          >
            <FaChevronLeft className="h-4 w-4" />
          </button>

          {pagerItems.map((item, idx) =>
            item === 'gap' ? (
              <span
                key={`gap-${idx}`}
                className="px-1 text-[#9aa3b5] select-none"
              >
                …
              </span>
            ) : (
              <button
                key={item}
                type="button"
                onClick={() => setPage(item)}
                aria-current={item === safePage ? 'page' : undefined}
                className={`flex h-9 min-w-9 items-center justify-center rounded-full px-3 font-bold transition ${
                  item === safePage
                    ? 'text-white'
                    : 'text-[#9aa3b5] hover:text-white'
                }`}
              >
                {item}
              </button>
            )
          )}

          <button
            type="button"
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={safePage === totalPages}
            className="flex h-9 w-9 items-center justify-center rounded-full text-[#9aa3b5] transition hover:text-white disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:text-[#9aa3b5]"
            aria-label="Next page"
          >
            <FaChevronRight className="h-4 w-4" />
          </button>
        </nav>
      )}
    </>
  );
}

export default function GoogleReviewsCarousel({
  areaName,
  pageSize = 3,
}: GoogleReviewsCarouselProps) {
  const displayRating = Number(googleRatingValue);
  const displayReviewCount = Number(googleReviewCount);

  return (
    <section className="bg-[#0c0d0e] px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
          <h2 className="font-heading text-2xl font-black text-white sm:text-3xl">
            {areaName
              ? `What our clients near ${areaName} say about us`
              : 'What our clients say about us'}
          </h2>

          <div className="flex items-center gap-6">
            <div className="text-right">
              <p className="font-heading text-4xl font-black text-white sm:text-5xl">
                {displayRating.toFixed(2)}
              </p>
              <div className="mt-1 flex items-center justify-end gap-2">
                <span className="flex gap-0.5 text-[#f5aa00]">
                  {[0, 1, 2, 3, 4].map((star) => (
                    <FaStar key={star} aria-hidden="true" />
                  ))}
                </span>
                <span className="text-[#9aa3b5]">|</span>
                <a
                  href={googleReviewsHref}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium text-[#9aa3b5] transition hover:text-white"
                >
                  {displayReviewCount} reviews
                </a>
              </div>
            </div>

            <a
              href={googleWriteReviewHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex justify-center rounded-lg bg-[#e4ad42] px-5 py-3 text-base font-black text-white transition hover:bg-[#caa345] sm:px-7 sm:py-4 sm:text-lg"
            >
              Write a review
            </a>
          </div>
        </div>

        <div className="relative mt-8">
          <ReactGoogleReviews
            layout="custom"
            featurableId={FEATURABLE_WIDGET_ID}
            widgetVersion="v2"
            errorMessage="Could not load Google reviews. Please try again later."
            loadingMessage="Loading Google reviews..."
            errorClassName="text-center text-[#9aa3b5] py-8"
            loaderClassName="text-center text-[#9aa3b5] py-8"
            loaderLabelClassName="text-[#9aa3b5]"
            renderer={(reviews) => (
              <PaginatedReviews
                reviews={reviews as GoogleReview[]}
                pageSize={pageSize}
              />
            )}
          />
        </div>
      </div>
    </section>
  );
}
