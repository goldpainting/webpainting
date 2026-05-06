import Image from 'next/image';
import Link from 'next/link';
import { type ReactNode } from 'react';
import {
  FaArrowRight,
  FaCheckCircle,
  FaPaintRoller,
} from 'react-icons/fa';

import {
  extractMarkdownFaqs,
  parseMarkdownContent,
  type MarkdownBlock,
} from '../content/markdownContent';
import { type PageImage } from '../content/pageImages';
import { businessPhone } from '../siteConfig';
import FaqSchema from './FaqSchema';
import MarkdownFaqAccordion from './MarkdownFaqAccordion';
import TrustSections from './TrustSections';

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
  interlinkType: 'areas' | 'services';
  pageImages?: PageImage[];
};

function getHeroAndContent(blocks: MarkdownBlock[]) {
  const h1Index = blocks.findIndex(
    (block) => block.type === 'heading' && block.level === 1
  );
  const firstH2Index = blocks.findIndex(
    (block, index) =>
      index > h1Index && block.type === 'heading' && block.level === 2
  );

  const titleBlock = blocks[h1Index];
  const title =
    titleBlock?.type === 'heading' ? titleBlock.text : 'Gold Lion Painting Inc';
  const heroBlocks = blocks.slice(
    h1Index + 1,
    firstH2Index === -1 ? undefined : firstH2Index
  );
  const contentBlocks = blocks.slice(
    firstH2Index === -1 ? h1Index + 1 : firstH2Index
  );

  return { title, heroBlocks, contentBlocks };
}

export default function MarkdownLandingPage({
  raw,
  eyebrow,
  heroImage,
  heroAlt,
  pageImages = [],
}: MarkdownLandingPageProps) {
  const blocks = parseMarkdownContent(raw);
  const faqs = extractMarkdownFaqs(raw);
  const { title, heroBlocks, contentBlocks } = getHeroAndContent(blocks);
  const schemaId = `${eyebrow.toLowerCase().replaceAll(/\s+/g, '-')}-faq-schema`;

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
            <h1 className="mt-3 max-w-4xl font-heading text-3xl leading-[1.02] font-black sm:text-4xl lg:text-5xl">
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
            {renderContentSections(contentBlocks, pageImages)}
          </div>
        </div>
      </section>

      <MarkdownFaqAccordion faqs={faqs} />

      <TrustSections />

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
  if (block.type === 'list') {
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

  if (block.type === 'cta') {
    return (
      <p className="font-black text-[#e4ad42]">
        {renderInlineLinks(block.text)}
      </p>
    );
  }

  if (block.type === 'heading') return null;

  return <p>{renderInlineLinks(block.text)}</p>;
}

function renderContentSections(
  blocks: MarkdownBlock[],
  pageImages: PageImage[]
) {
  const sections: { heading: string; blocks: MarkdownBlock[] }[] = [];

  for (const block of blocks) {
    if (block.type === 'heading' && block.level === 2) {
      sections.push({ heading: block.text, blocks: [] });
      continue;
    }

    const section = sections.at(-1);

    if (section) {
      section.blocks.push(block);
    }
  }

  const visibleSections = sections.filter(isNotFaqSection);
  const imageGroups = assignImagesToSections(visibleSections, pageImages);

  return visibleSections.map((section, index) => {
    const sectionImages = imageGroups[index] ?? [];

    return (
      <article
        key={section.heading}
        className="scroll-reveal overflow-hidden rounded-3xl border border-[#e4ad42]/25 bg-[#f8f8f8] shadow-[0_22px_55px_rgba(0,0,0,0.08)]"
        style={{ animationDelay: `${Math.min(index, 6) * 70}ms` }}
      >
        <div className="grid gap-8 p-5 sm:p-7 lg:p-8">
          <div className="rounded-2xl border border-[#e4ad42]/25 bg-white p-5 shadow-[0_18px_38px_rgba(0,0,0,0.06)] sm:p-7">
            <p className="font-display text-xs font-black tracking-[0.18em] text-[#e4ad42] uppercase">
              {String(index + 1).padStart(2, '0')}
            </p>
            <h2 className="mt-2 font-heading text-3xl leading-tight font-black text-[#0c0d0e] lg:text-4xl">
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
          </div>
          <SectionImageGrid
            images={sectionImages}
            sectionHeading={section.heading}
          />
        </div>
      </article>
    );
  });
}

function isNotFaqSection(section: { heading: string }) {
  return !/frequently asked questions/i.test(section.heading);
}

function ContentBlock({ block }: { block: MarkdownBlock }) {
  if (block.type === 'heading') {
    return (
      <h3 className="pt-2 font-heading text-2xl font-black text-[#a97a36]">
        {block.text}
      </h3>
    );
  }

  if (block.type === 'list') {
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
            <span>{renderInlineLinks(item)}</span>
          </li>
        ))}
      </ul>
    );
  }

  if (block.type === 'cta') {
    return (
      <p className="rounded-xl bg-[#0c0d0e] px-5 py-4 font-heading text-xl font-black text-[#e4ad42]">
        {renderInlineLinks(block.text)}
      </p>
    );
  }

  return <p>{renderInlineLinks(block.text)}</p>;
}

function renderInlineLinks(text: string) {
  const linkPattern = /\[([^\]]+)\]\((\/[^)\s]+)\)/g;
  const parts: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = linkPattern.exec(text)) !== null) {
    const [fullMatch, label, href] = match;

    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }

    parts.push(
      <Link
        key={`${href}-${match.index}`}
        href={href}
        className="font-black text-[#a97a36] underline decoration-[#e4ad42] decoration-2 underline-offset-4 transition hover:text-[#d90000]"
      >
        {label}
      </Link>
    );

    lastIndex = match.index + fullMatch.length;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts.length > 0 ? parts : text;
}

function SectionImageGrid({
  images,
  sectionHeading,
}: {
  images: PageImage[];
  sectionHeading: string;
}) {
  if (images.length === 0) {
    return null;
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {images.map((image, index) => (
        <figure
          key={`${sectionHeading}-${image.src}`}
          className={`hover-lift group relative overflow-hidden rounded-2xl border border-[#e4ad42]/35 bg-[#0c0d0e] shadow-[0_20px_42px_rgba(0,0,0,0.18)] ${
            index === 0 && images.length % 3 === 1
              ? 'lg:col-span-2'
              : index === 0 && images.length % 2 === 1
                ? 'sm:col-span-2 lg:col-span-1'
                : ''
          }`}
        >
          <div className="relative aspect-[4/3]">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#0c0d0e]/82 via-[#0c0d0e]/10 to-transparent" />
            <figcaption className="absolute right-4 bottom-4 left-4">
              <span className="inline-flex rounded-full bg-[#e4ad42] px-3 py-1 font-display text-xs font-black text-[#0c0d0e] uppercase">
                {imageLabel(image.src)}
              </span>
            </figcaption>
          </div>
        </figure>
      ))}
    </div>
  );
}

function assignImagesToSections(
  sections: { heading: string; blocks: MarkdownBlock[] }[],
  images: PageImage[]
) {
  const groups = sections.map((): PageImage[] => []);

  if (sections.length === 0) return groups;

  const sectionText = sections.map((section) =>
    [
      section.heading,
      ...section.blocks.flatMap((block) =>
        block.type === 'list'
          ? block.items
          : 'text' in block
            ? [block.text]
            : []
      ),
    ]
      .join(' ')
      .toLowerCase()
  );

  images.forEach((image, imageIndex) => {
    const category = imageCategory(`${image.src} ${image.alt}`);
    const scores = sectionText.map((text) => scoreSection(text, category));
    const bestScore = Math.max(...scores);
    const bestIndex =
      bestScore > 0 ? scores.indexOf(bestScore) : imageIndex % sections.length;

    groups[bestIndex]?.push(image);
  });

  return groups;
}

function imageCategory(value: string) {
  const text = value.toLowerCase();

  if (/(cabinet|kitchen|vanity|refinish)/.test(text)) return 'cabinet';
  if (/(interior|living|room|wall|ceiling|trim|door)/.test(text)) {
    return 'interior';
  }
  if (/(prep|preparation|stucco|repair|setup|pressure|compress)/.test(text)) {
    return 'prep';
  }

  return 'exterior';
}

function scoreSection(text: string, category: string) {
  const keywords: Record<string, string[]> = {
    cabinet: ['cabinet', 'kitchen', 'vanity', 'refinish'],
    exterior: ['exterior', 'stucco', 'siding', 'coastal', 'hoa', 'weather'],
    interior: ['interior', 'wall', 'ceiling', 'trim', 'door', 'room'],
    prep: ['prep', 'preparation', 'repair', 'wash', 'primer', 'caulk'],
  };

  return (keywords[category] ?? []).reduce(
    (score, keyword) => score + (text.includes(keyword) ? 1 : 0),
    0
  );
}

function imageLabel(src: string) {
  return (
    src
      .split('/')
      .at(-1)
      ?.replace(/\.(jpg|jpeg|png|webp)$/i, '')
      .replace(/\.+/g, ' ')
      .replace(/[-_]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim() ?? 'Painting Project'
  );
}
