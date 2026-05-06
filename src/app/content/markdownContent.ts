import { readFileSync } from "node:fs";
import { join } from "node:path";
import { type Metadata } from "next";

import { siteUrl } from "../siteConfig";

export type MarkdownBlock =
  | {
      type: "heading";
      level: 1 | 2 | 3;
      text: string;
    }
  | {
      type: "paragraph" | "cta";
      text: string;
    }
  | {
      type: "list";
      items: string[];
    };

export type MarkdownFaq = {
  q: string;
  a: string;
};

type HeadingBlock = Extract<MarkdownBlock, { type: "heading" }>;
type ParagraphBlock = {
  type: "paragraph";
  text: string;
};

const ignoredLines = new Set([
  "🔥 HERO",
  "H1",
  "H2",
  "H3",
  "Subheadline",
  "Texto corto",
  "---",
]);

function isMetaLine(line: string) {
  return (
    /^landing\b/i.test(line) ||
    /^landing page\b/i.test(line) ||
    /^LANDING PAGE\b/.test(line)
  );
}

function cleanLine(line: string) {
  return line.trim().replace(/\s+/g, " ");
}

function isListItem(line: string) {
  return /^[•✔-]\s+/.test(line) || /^\d+\.\s+/.test(line);
}

function stripListMarker(line: string) {
  return line.replace(/^[•✔-]\s+/, "").replace(/^\d+\.\s+/, "");
}

function isHeadingBlock(block: MarkdownBlock): block is HeadingBlock {
  return block.type === "heading";
}

function isParagraphBlock(block: MarkdownBlock): block is ParagraphBlock {
  return block.type === "paragraph";
}

export function readMarkdownContent(relativePath: string) {
  const docPath = relativePath.replace(/^doc[\\/]/, "").split(/[\\/]/);

  return readFileSync(join(process.cwd(), "doc", ...docPath), "utf8");
}

export function parseMarkdownContent(raw: string): MarkdownBlock[] {
  const blocks: MarkdownBlock[] = [];
  let pendingHeading: 1 | 2 | 3 | null = null;

  for (const originalLine of raw.split(/\r?\n/)) {
    const line = cleanLine(originalLine);

    if (!line || ignoredLines.has(line) || isMetaLine(line)) {
      continue;
    }

    const inlineHeading = line.match(/^H([123]):\s*(.+)$/);
    if (inlineHeading) {
      blocks.push({
        type: "heading",
        level: Number(inlineHeading[1]) as 1 | 2 | 3,
        text: inlineHeading[2] ?? "",
      });
      pendingHeading = null;
      continue;
    }

    const headingMarker = line.match(/^H([123])$/);
    if (headingMarker) {
      pendingHeading = Number(headingMarker[1]) as 1 | 2 | 3;
      continue;
    }

    if (pendingHeading) {
      blocks.push({
        type: "heading",
        level: pendingHeading,
        text: line,
      });
      pendingHeading = null;
      continue;
    }

    if (isListItem(line)) {
      const previous = blocks.at(-1);
      const item = stripListMarker(line);

      if (previous?.type === "list") {
        previous.items.push(item);
      } else {
        blocks.push({ type: "list", items: [item] });
      }

      continue;
    }

    blocks.push({
      type:
        line.startsWith("👉") || line.startsWith("📞") || line.startsWith("📍")
          ? "cta"
          : "paragraph",
      text: line,
    });
  }

  return blocks;
}

export function getMarkdownTitle(raw: string) {
  return (
    parseMarkdownContent(raw).find(
      (block): block is HeadingBlock =>
        isHeadingBlock(block) && block.level === 1,
    )?.text ?? "Gold Lion Painting Inc"
  );
}

export function getMarkdownDescription(raw: string) {
  const blocks = parseMarkdownContent(raw);
  const firstHeadingIndex = blocks.findIndex(
    (block) => block.type === "heading" && block.level === 1,
  );
  const description = blocks
    .slice(firstHeadingIndex + 1)
    .find((block): block is ParagraphBlock => isParagraphBlock(block))?.text;

  return (
    description ?? "Professional painting services by Gold Lion Painting Inc."
  );
}

export function extractMarkdownFaqs(raw: string): MarkdownFaq[] {
  const lines = raw.split(/\r?\n/).map(cleanLine).filter(Boolean);
  const faqIndex = lines.findIndex((line) =>
    /frequently asked questions/i.test(line),
  );

  if (faqIndex === -1) return [];

  const faqs: MarkdownFaq[] = [];

  for (let index = faqIndex + 1; index < lines.length; index += 1) {
    const line = lines[index];

    if (!line || /^H2:/.test(line) || /^H2$/.test(line)) {
      if (faqs.length > 0) break;
      continue;
    }

    if (!line.endsWith("?")) continue;

    const answer = lines
      .slice(index + 1)
      .find(
        (candidate) =>
          candidate &&
          !candidate.endsWith("?") &&
          !candidate.startsWith("H2:") &&
          !candidate.startsWith("H3:"),
      );

    if (answer) {
      faqs.push({ q: line, a: answer });
    }
  }

  return faqs;
}

export function buildMarkdownMetadata({
  raw,
  canonical,
  image,
  imageAlt,
}: {
  raw: string;
  canonical: string;
  image: string;
  imageAlt: string;
}): Metadata {
  const title = getMarkdownTitle(raw);
  const description = getMarkdownDescription(raw);

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: `${siteUrl}${canonical}`,
      images: [
        {
          url: image,
          alt: imageAlt,
        },
      ],
    },
  };
}
