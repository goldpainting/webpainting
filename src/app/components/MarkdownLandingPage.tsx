import Image from "next/image";
import Link from "next/link";
import {
  FaArrowRight,
  FaCheckCircle,
  FaChevronRight,
  FaMapMarkedAlt,
  FaPaintRoller,
} from "react-icons/fa";

import {
  extractMarkdownFaqs,
  parseMarkdownContent,
  type MarkdownBlock,
} from "../content/markdownContent";
import { businessPhone } from "../siteConfig";
import FaqSchema from "./FaqSchema";

type InterlinkCard = {
  href: string;
  title: string;
  image: string;
  alt: string;
};

type MarkdownLandingPageProps = {
  raw: string;
  eyebrow: string;
  heroImage: string;
  heroAlt: string;
  interlinkTitle: string;
  interlinks: InterlinkCard[];
  interlinkType: "areas" | "services";
};

function getHeroAndContent(blocks: MarkdownBlock[]) {
  const h1Index = blocks.findIndex(
    (block) => block.type === "heading" && block.level === 1,
  );
  const firstH2Index = blocks.findIndex(
    (block, index) =>
      index > h1Index && block.type === "heading" && block.level === 2,
  );

  const titleBlock = blocks[h1Index];
  const title =
    titleBlock?.type === "heading" ? titleBlock.text : "Gold Lion Painting Inc";
  const heroBlocks = blocks.slice(
    h1Index + 1,
    firstH2Index === -1 ? undefined : firstH2Index,
  );
  const contentBlocks = blocks.slice(
    firstH2Index === -1 ? h1Index + 1 : firstH2Index,
  );

  return { title, heroBlocks, contentBlocks };
}

export default function MarkdownLandingPage({
  raw,
  eyebrow,
  heroImage,
  heroAlt,
  interlinkTitle,
  interlinks,
  interlinkType,
}: MarkdownLandingPageProps) {
  const blocks = parseMarkdownContent(raw);
  const faqs = extractMarkdownFaqs(raw);
  const { title, heroBlocks, contentBlocks } = getHeroAndContent(blocks);
  const schemaId = `${eyebrow.toLowerCase().replaceAll(/\s+/g, "-")}-faq-schema`;

  return (
    <main className="bg-white text-[#0c0d0e]">
      {faqs.length > 0 ? <FaqSchema faqs={faqs} id={schemaId} /> : null}

      <section className="relative min-h-[430px] overflow-hidden px-4 py-8 text-white sm:px-6 lg:px-8 lg:py-10">
        <Image
          src={heroImage}
          alt={heroAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c0d0e]/90 via-[#0c0d0e]/58 to-[#0c0d0e]/18" />
        <div className="relative mx-auto flex max-w-6xl items-center py-4 lg:min-h-[330px]">
          <div className="reveal-up max-w-4xl">
            <p className="font-display text-xs font-black tracking-[0.18em] text-[#e4ad42] uppercase">
              {eyebrow}
            </p>
            <h1 className="font-heading mt-3 max-w-4xl text-3xl leading-[1.02] font-black sm:text-4xl lg:text-5xl">
              {title}
            </h1>
            <div className="mt-4 max-w-3xl space-y-3 text-sm leading-6 text-[#f3f3f3] sm:text-base">
              {heroBlocks.map((block, index) => (
                <HeroBlock key={`${block.type}-${index}`} block={block} />
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-3 rounded-full bg-[#d90000] px-5 py-3 text-sm font-black text-white shadow-[0_18px_35px_rgba(0,0,0,0.42)] transition hover:bg-[#e4ad42] hover:text-[#0c0d0e]"
              >
                <FaPaintRoller aria-hidden="true" />
                Request Your Free Estimate
              </Link>
              <a
                href={`tel:${businessPhone}`}
                className="inline-flex items-center rounded-full border-2 border-white px-5 py-3 text-sm font-black text-white transition hover:border-[#e4ad42] hover:bg-[#e4ad42] hover:text-[#0c0d0e]"
              >
                Call (941) 462-5894
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="space-y-12">
            {renderContentSections(contentBlocks)}
          </div>
        </div>
      </section>

      <section className="bg-[#f3f3f3] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="font-heading text-4xl font-black text-[#0c0d0e]">
              {interlinkTitle}
            </h2>
            <div className="mx-auto mt-5 h-1.5 w-2/3 max-w-xl bg-[#e4ad42]" />
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {interlinks.map((card) => (
              <Link
                key={`${card.title}-${card.href}`}
                href={card.href}
                className="hover-lift group relative bg-[#e4ad42] p-4 shadow-[1px_1px_10px_rgba(0,0,0,0.5)]"
              >
                <Image
                  src={card.image}
                  alt={card.alt}
                  width={700}
                  height={500}
                  className="h-56 w-full rounded-xl object-cover"
                />
                <h3 className="font-heading mt-4 text-2xl font-black text-[#0c0d0e]">
                  {card.title}
                </h3>
                <span className="mt-5 inline-flex items-center gap-2 text-base font-black text-[#0c0d0e]">
                  More
                  <FaChevronRight
                    aria-hidden="true"
                    className="transition group-hover:translate-x-1"
                  />
                </span>
                {interlinkType === "areas" ? (
                  <FaMapMarkedAlt
                    aria-hidden="true"
                    className="pointer-events-none absolute right-[-10px] bottom-[-14px] hidden h-20 w-20 rounded-full bg-[#0c0d0e] p-4 text-[#e4ad42] opacity-90 md:block"
                  />
                ) : (
                  <FaPaintRoller
                    aria-hidden="true"
                    className="pointer-events-none absolute right-[-10px] bottom-[-14px] hidden h-20 w-20 rounded-full bg-[#0c0d0e] p-4 text-[#e4ad42] opacity-90 md:block"
                  />
                )}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#d39620] px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <h2 className="font-heading text-3xl font-black text-[#0c0d0e]">
            Request Your Free Estimate Today
          </h2>
          <Link
            href="/contact-us"
            className="inline-flex shrink-0 items-center justify-center gap-3 rounded-lg bg-[#0c0d0e] px-6 py-4 font-bold text-white uppercase shadow-[0_0_10px_rgba(0,0,0,0.45)] transition hover:bg-[#d90000]"
          >
            Contact Gold Lion Painting
            <FaArrowRight aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}

function HeroBlock({ block }: { block: MarkdownBlock }) {
  if (block.type === "list") {
    return (
      <div className="flex flex-wrap gap-2">
        {block.items.map((item) => (
          <span
            key={item}
            className="inline-flex items-center gap-2 border border-white/20 bg-[#0c0d0e]/60 px-3 py-1.5 text-xs font-bold text-white backdrop-blur-sm"
          >
            <FaCheckCircle aria-hidden="true" className="text-[#e4ad42]" />
            {item}
          </span>
        ))}
      </div>
    );
  }

  if (block.type === "cta") {
    return <p className="font-black text-[#e4ad42]">{block.text}</p>;
  }

  if (block.type === "heading") return null;

  return <p>{block.text}</p>;
}

function renderContentSections(blocks: MarkdownBlock[]) {
  const sections: { heading: string; blocks: MarkdownBlock[] }[] = [];

  for (const block of blocks) {
    if (block.type === "heading" && block.level === 2) {
      sections.push({ heading: block.text, blocks: [] });
      continue;
    }

    const section = sections.at(-1);

    if (section) {
      section.blocks.push(block);
    }
  }

  return sections.map((section, index) => (
    <article
      key={section.heading}
      className="scroll-reveal border-b border-[#0c0d0e]/12 pb-10"
      style={{ animationDelay: `${Math.min(index, 6) * 70}ms` }}
    >
      <h2 className="font-heading text-3xl leading-tight font-black text-[#0c0d0e] lg:text-4xl">
        {section.heading}
      </h2>
      <div className="mt-6 space-y-5 text-lg leading-8 text-[#1f2124]">
        {section.blocks.map((block, blockIndex) => (
          <ContentBlock
            key={`${section.heading}-${block.type}-${blockIndex}`}
            block={block}
          />
        ))}
      </div>
    </article>
  ));
}

function ContentBlock({ block }: { block: MarkdownBlock }) {
  if (block.type === "heading") {
    return (
      <h3 className="font-heading pt-2 text-2xl font-black text-[#a97a36]">
        {block.text}
      </h3>
    );
  }

  if (block.type === "list") {
    return (
      <ul className="grid gap-3 sm:grid-cols-2">
        {block.items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3 border-l-4 border-[#e4ad42] bg-[#f7f7f7] p-4 font-semibold"
          >
            <FaCheckCircle
              aria-hidden="true"
              className="mt-1 shrink-0 text-[#e4ad42]"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    );
  }

  if (block.type === "cta") {
    return (
      <p className="font-heading rounded-xl bg-[#0c0d0e] px-5 py-4 text-xl font-black text-[#e4ad42]">
        {block.text}
      </p>
    );
  }

  return <p>{block.text}</p>;
}
