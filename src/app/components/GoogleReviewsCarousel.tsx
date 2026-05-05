"use client";

import { useEffect, useState } from "react";

import { FaGoogle, FaStar } from "react-icons/fa";

import {
  googleRatingValue,
  googleReviewCount,
  googleReviewsHref,
  googleWriteReviewHref,
} from "../siteConfig";

type Review = {
  text: string;
  originalText: string;
  rating: number;
  authorName: string;
  authorUri: string;
  authorPhotoUri: string;
  relativeTime: string;
  publishTime: string;
  googleMapsUri: string;
};

type GoogleReviewsData = {
  placeId: string;
  rating: number;
  reviewCount: number;
  reviews: Review[];
};

type GoogleReviewsCarouselProps = {
  areaName?: string;
};

function AvatarWithFallback({
  photoUri,
  name,
}: {
  photoUri: string;
  name: string;
}) {
  const [imgError, setImgError] = useState(false);

  if (!photoUri || imgError) {
    return (
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1f5fec] text-sm font-bold text-white shrink-0">
        {name.charAt(0).toUpperCase()}
      </div>
    );
  }

  return (
    <img
      src={`/api/photo-proxy?url=${encodeURIComponent(photoUri)}`}
      alt={name}
      className="h-10 w-10 rounded-full object-cover shrink-0"
      onError={() => setImgError(true)}
    />
  );
}

export default function GoogleReviewsCarousel({
  areaName,
}: GoogleReviewsCarouselProps) {
  const [data, setData] = useState<GoogleReviewsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchReviews() {
      try {
        const res = await fetch("/api/google-reviews");
        if (!res.ok) {
          const body = await res.json().catch(() => null);
          throw new Error(body?.error || "Failed to fetch reviews");
        }
        const json = await res.json();
        if (!cancelled) {
          const sorted = (json.reviews ?? [])
            .sort((a: Review, b: Review) => {
              if (b.rating !== a.rating) return b.rating - a.rating;
              return new Date(b.publishTime).getTime() - new Date(a.publishTime).getTime();
            })
            .slice(0, 3);
          setData({ ...json, reviews: sorted });
          setError(null);
        }
      } catch (e) {
        if (!cancelled) {
          setError(e instanceof Error ? e.message : "Unknown error");
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    void fetchReviews();
    return () => {
      cancelled = true;
    };
  }, []);

  const displayRating = data?.rating ?? Number(googleRatingValue);
  const displayReviewCount = data?.reviewCount ?? Number(googleReviewCount);
  const reviews = data?.reviews ?? [];

  return (
    <section className="bg-[#dddddd] px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[24px] bg-white px-4 py-6 shadow-[0_18px_38px_rgba(0,0,0,0.12)] sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto_auto] lg:items-center">
          <div>
            <h2 className="font-heading text-3xl font-black text-[#0c0d0e]">
              {areaName
                ? `Real Google reviews from clients near ${areaName}`
                : "Real Google reviews from our clients"}
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-[#5d646b]">
              These reviews load directly from the Google Business Profile
              connected to Gold Lion Painting Inc. No manual or invented review
              text is used.
            </p>
          </div>

          <div className="text-center lg:text-left">
            <p className="font-heading text-5xl font-black text-[#1f2830]">
              {displayRating.toFixed(1)}
            </p>
            <div className="mt-2 flex justify-center gap-1 text-[#f5aa00] lg:justify-start">
              {[0, 1, 2, 3, 4].map((star) => (
                <FaStar key={star} aria-hidden="true" />
              ))}
            </div>
            <a
              href={googleReviewsHref}
              target="_blank"
              rel="noreferrer"
              className="mt-1 block text-lg font-semibold text-[#8993aa] transition hover:text-[#1f5fec]"
            >
              {displayReviewCount} reviews
            </a>
          </div>

          <a
            href={googleWriteReviewHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex justify-center rounded-lg bg-[#1f5fec] px-6 py-4 text-xl font-black text-white transition hover:bg-[#0c0d0e]"
          >
            Write a review
          </a>
        </div>

        <div className="mt-8">
          {loading ? (
            <div className="flex items-center justify-center gap-3 rounded-2xl border border-[#e5e7eb] bg-[#f8fafc] p-8">
              <div className="h-5 w-5 animate-spin rounded-full border-2 border-[#1f5fec] border-t-transparent" />
              <span className="text-sm text-[#5d646b]">
                Loading Google reviews...
              </span>
            </div>
          ) : error ? (
            <div className="rounded-2xl border border-dashed border-[#9aa3b5] bg-[#f8fafc] p-8 text-center text-[#343b43]">
              <FaGoogle
                aria-hidden="true"
                className="mx-auto text-4xl text-[#4285f4]"
              />
              <h3 className="font-heading mt-4 text-2xl font-black text-[#0c0d0e]">
                Google Reviews not available
              </h3>
              <p className="mx-auto mt-3 max-w-2xl text-sm leading-6">
                Configure{" "}
                <code className="mx-1 rounded bg-white px-2 py-1">
                  GOOGLE_PLACES_API_KEY
                </code>{" "}
                in your environment variables to display real reviews.
              </p>
              <a
                href={googleReviewsHref}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex rounded-lg bg-[#0c0d0e] px-5 py-3 font-bold text-white transition hover:bg-[#e4ad42] hover:text-[#0c0d0e]"
              >
                Open Google Reviews
              </a>
            </div>
          ) : reviews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reviews.map((review, index) => (
                <article
                  key={`${review.authorName}-${review.publishTime}-${index}`}
                  className="rounded-2xl border border-[#e5e7eb] bg-[#f8fafc] p-6 transition hover:shadow-md"
                >
                  <div className="flex items-center gap-3">
                    <AvatarWithFallback
                      photoUri={review.authorPhotoUri}
                      name={review.authorName}
                    />
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-[#0c0d0e] truncate">
                        {review.authorName}
                      </p>
                      <p className="text-xs text-[#5d646b]">
                        {review.relativeTime}
                      </p>
                    </div>
                    <FaGoogle
                      className="h-5 w-5 text-[#4285f4] flex-shrink-0"
                      aria-hidden="true"
                    />
                  </div>

                  <div className="mt-3 flex items-center gap-0.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <FaStar
                        key={star}
                        className={`h-3.5 w-3.5 ${star <= review.rating ? "text-[#f5aa00]" : "text-[#d1d5db]"}`}
                        aria-hidden="true"
                      />
                    ))}
                    <span className="ml-1.5 text-xs font-medium text-[#5d646b]">
                      {review.rating.toFixed(1)}
                    </span>
                  </div>

                  <p className="mt-3 text-sm leading-6 text-[#343b43] line-clamp-5">
                    {review.originalText || review.text}
                  </p>

                  <a
                    href={review.googleMapsUri}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-[#1f5fec] transition hover:text-[#0c0d0e]"
                  >
                    <FaGoogle className="h-3 w-3" />
                    View on Google
                  </a>
                </article>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-[#9aa3b5] bg-[#f8fafc] p-8 text-center text-[#343b43]">
              <FaGoogle
                aria-hidden="true"
                className="mx-auto text-4xl text-[#4285f4]"
              />
              <h3 className="font-heading mt-4 text-2xl font-black text-[#0c0d0e]">
                No reviews available
              </h3>
              <p className="mx-auto mt-3 max-w-2xl text-sm leading-6">
                Google Places API returned no reviews for this business.
              </p>
              <a
                href={googleReviewsHref}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex rounded-lg bg-[#0c0d0e] px-5 py-3 font-bold text-white transition hover:bg-[#e4ad42] hover:text-[#0c0d0e]"
              >
                Open Google Reviews
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
