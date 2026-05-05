import Link from "next/link";

import EstimateRequestForm from "./EstimateRequestForm";

type ServiceEstimateCardProps = {
  title: string;
  description: string;
};

export default function ServiceEstimateCard({
  title,
  description,
}: ServiceEstimateCardProps) {
  return (
    <div className="lux-panel shimmer-panel rounded-[2rem] p-6 md:p-8">
      <div className="mb-5 flex flex-wrap gap-2">
        <span className="rounded-full border border-[#dcc7a8] bg-[#fff8ef] px-3 py-1 text-xs font-semibold tracking-[0.16em] text-[#8f6220] uppercase">
          Free Estimate
        </span>
        <span className="rounded-full border border-[#dcc7a8] bg-[#fff8ef] px-3 py-1 text-xs font-semibold tracking-[0.16em] text-[#8f6220] uppercase">
          Residential Focus
        </span>
      </div>
      <p className="text-sm font-semibold tracking-[0.2em] text-[#a36a14] uppercase">
        Request An Estimate
      </p>
      <h2 className="mt-3 max-w-sm text-3xl leading-tight font-extrabold text-[#34261b]">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-[#65584a]">{description}</p>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <div className="rounded-2xl border border-[#e6d5ba] bg-[#fffdf8] px-4 py-4 text-sm leading-6 text-[#5d4f42]">
          Clear scope, prep expectations, and next-step guidance before work
          begins.
        </div>
        <div className="rounded-2xl border border-[#e6d5ba] bg-[#fffdf8] px-4 py-4 text-sm leading-6 text-[#5d4f42]">
          A smoother first conversation for homeowners comparing timelines,
          finishes, and service options.
        </div>
      </div>
      <EstimateRequestForm
        className="mt-6 space-y-4"
        buttonLabel="Send"
        source={`${title} service estimate form`}
      />
      <div className="mt-5 rounded-2xl border border-[#e0cfb4] bg-[#f4ecdf] p-4 text-sm leading-6 text-[#6a5d4f]">
        Prefer to talk directly? Call{" "}
        <a
          href="tel:9414625894"
          className="font-semibold text-[#8f6220] underline underline-offset-4"
        >
          941-462-5894
        </a>{" "}
        or visit{" "}
        <Link
          href="/contact-us"
          className="font-semibold text-[#8f6220] underline underline-offset-4"
        >
          Contact Us
        </Link>
        .
      </div>
    </div>
  );
}
