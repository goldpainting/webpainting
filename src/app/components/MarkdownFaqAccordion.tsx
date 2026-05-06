'use client';

import Link from 'next/link';
import { type ReactNode, useState } from 'react';
import { FaPlus } from 'react-icons/fa';

import { type MarkdownFaq } from '../content/markdownContent';

export default function MarkdownFaqAccordion({
  faqs,
}: {
  faqs: MarkdownFaq[];
}) {
  const [openIndex, setOpenIndex] = useState(0);

  if (faqs.length === 0) return null;

  return (
    <section className="bg-[#f5f5f5] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl rounded-3xl border border-[#e4ad42]/25 bg-white p-4 shadow-[0_18px_48px_rgba(0,0,0,0.1)] sm:p-6 lg:p-7">
        <div className="mb-6 max-w-3xl">
          <p className="font-display text-xs font-black tracking-[0.2em] text-[#e4ad42] uppercase">
            Help Center
          </p>
          <h2 className="mt-1 font-heading text-3xl leading-tight font-black text-[#0c0d0e] sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <article
                key={faq.q}
                className={`rounded-2xl border bg-[#f9f9f9] shadow-[0_10px_24px_rgba(0,0,0,0.05)] transition ${
                  isOpen ? 'border-[#e4ad42] bg-white' : 'border-[#0c0d0e]/12'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full cursor-pointer items-center justify-between gap-4 px-4 py-4 text-left font-heading text-base font-black text-[#0c0d0e] transition hover:text-[#a97a36] sm:px-5 sm:text-lg"
                  aria-expanded={isOpen}
                >
                  <span>{renderInlineLinks(faq.q)}</span>
                  <span
                    className={`grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#0c0d0e] text-sm text-[#e4ad42] shadow-[0_8px_18px_rgba(0,0,0,0.2)] transition hover:bg-[#e4ad42] hover:text-[#0c0d0e] ${
                      isOpen ? 'rotate-45' : ''
                    }`}
                  >
                    <FaPlus aria-hidden="true" />
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-[#0c0d0e]/10 px-4 pb-4 text-sm leading-7 text-[#1f2124] sm:px-5 sm:text-base">
                      {renderInlineLinks(faq.a)}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
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
