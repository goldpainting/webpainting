type ReviewItem = {
  label: string;
  quote: string;
  note: string;
};

type ServiceReviewHighlightsProps = {
  title: string;
  description: string;
  reviews: ReviewItem[];
  googleReviewsHref: string;
};

export default function ServiceReviewHighlights({
  title,
  description,
  reviews,
  googleReviewsHref,
}: ServiceReviewHighlightsProps) {
  return (
    <section className="overflow-hidden rounded-[2.25rem] border border-[#d8c39f] bg-linear-to-br from-[#2a1f17] via-[#38281d] to-[#1f1712] shadow-[0_24px_60px_rgba(49,34,22,0.22)]">
      <div className="grid gap-0 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="space-y-6 p-8 text-[#f4e9d8] sm:p-10">
          <p className="text-sm font-semibold tracking-[0.2em] text-[#f0c776] uppercase">
            Google Reviews
          </p>
          <h2 className="text-3xl font-extrabold text-[#fff6ea] sm:text-4xl">
            {title}
          </h2>
          <p className="text-lg leading-8 text-[#ddcfbf]">{description}</p>
          <a
            href={googleReviewsHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex rounded-2xl bg-[#d4a038] px-6 py-4 font-bold text-[#1f1a14] transition hover:bg-[#c7942f]"
          >
            Open Google Reviews
          </a>
        </div>

        <div className="grid gap-5 bg-[#f7f0e5] p-8 sm:p-10">
          {reviews.map((review, index) => (
            <article
              key={`${review.label}-${review.quote}`}
              className={`hover-lift rounded-[1.75rem] border border-[#dec8aa] bg-[#fffaf2] p-6 shadow-[0_16px_35px_rgba(120,94,52,0.08)] ${index === 1 ? "md:translate-x-6" : ""}`}
            >
              <div className="flex items-center justify-between gap-4">
                <p className="text-xs font-semibold tracking-[0.18em] text-[#a36a14] uppercase">
                  {review.label}
                </p>
                <p className="text-lg font-bold text-[#8f6220]">
                  5-star review
                </p>
              </div>
              <p className="mt-4 text-xl leading-8 text-[#40342b]">
                &ldquo;{review.quote}&rdquo;
              </p>
              <p className="mt-4 text-sm leading-6 text-[#6a5d4f]">
                {review.note}
              </p>
              <div className="mt-5">
                <a
                  href={googleReviewsHref}
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-[#8f6220] underline underline-offset-4"
                >
                  Open Google profile
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
