'use client';

import Link from 'next/link';
import { useState } from 'react';
import {
  FaCalendarAlt,
  FaChevronDown,
  FaCommentDots,
  FaEnvelope,
  FaPaintRoller,
  FaPhoneAlt,
  FaTimes,
} from 'react-icons/fa';

const quickActions = [
  {
    href: '/contact-us',
    label: 'Schedule an estimate',
    icon: FaCalendarAlt,
  },
  {
    href: 'tel:9414625894',
    label: 'Call now',
    icon: FaPhoneAlt,
  },
  {
    href: 'mailto:goldlionpainting@gmail.com',
    label: 'Send email',
    icon: FaEnvelope,
  },
];

export default function FloatingChatbot() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed right-4 bottom-4 z-[80] sm:right-6 sm:bottom-6">
      <div
        className={`mb-3 w-[calc(100vw-2rem)] max-w-xs origin-bottom-right overflow-hidden rounded-2xl border border-[#e4ad42]/35 bg-white shadow-[0_22px_60px_rgba(0,0,0,0.3)] transition-all duration-300 sm:w-[320px] ${
          isOpen
            ? 'translate-y-0 scale-100 opacity-100'
            : 'pointer-events-none translate-y-4 scale-95 opacity-0'
        }`}
        aria-hidden={!isOpen}
      >
        <div className="relative overflow-hidden bg-[#0c0d0e] px-4 py-4 text-white">
          <div className="absolute top-0 right-0 h-20 w-20 rounded-full bg-[#e4ad42]/15 blur-2xl" />
          <div className="relative flex items-start justify-between gap-3">
            <div>
              <p className="font-display text-[10px] font-black tracking-[0.16em] text-[#e4ad42] uppercase">
                Gold Lion Assistant
              </p>
              <h2 className="mt-1 font-heading text-xl font-black">
                How can we help?
              </h2>
              <p className="mt-1.5 text-xs leading-5 text-white/78">
                Choose a quick option and our team will help.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-white/15 bg-white/10 text-sm text-white transition hover:bg-[#e4ad42] hover:text-[#0c0d0e]"
              aria-label="Close chat"
            >
              <FaTimes aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="space-y-3 bg-[#f7f7f7] p-4">
          <div className="rounded-xl border border-[#0c0d0e]/10 bg-white p-3 shadow-[0_10px_24px_rgba(0,0,0,0.06)]">
            <div className="flex items-start gap-2.5">
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#e4ad42] text-sm text-[#0c0d0e]">
                <FaPaintRoller aria-hidden="true" />
              </span>
              <div>
                <p className="font-heading text-sm font-black text-[#0c0d0e]">
                  Painting assistant
                </p>
                <p className="mt-1 text-xs leading-5 text-[#343b43]">
                  AI chat is coming soon. For now, contact the team directly.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-2.5">
            {quickActions.map((action) => {
              const Icon = action.icon;

              return (
                <Link
                  key={action.href}
                  href={action.href}
                  className="group flex items-center justify-between gap-3 rounded-xl border border-[#0c0d0e]/10 bg-white px-3 py-2.5 font-heading text-sm font-black text-[#0c0d0e] shadow-[0_8px_20px_rgba(0,0,0,0.05)] transition hover:border-[#e4ad42] hover:bg-[#0c0d0e] hover:text-white"
                >
                  <span className="flex items-center gap-2.5">
                    <span className="grid h-8 w-8 place-items-center rounded-full bg-[#0c0d0e] text-xs text-[#e4ad42] transition group-hover:bg-[#e4ad42] group-hover:text-[#0c0d0e]">
                      <Icon aria-hidden="true" />
                    </span>
                    {action.label}
                  </span>
                  <FaChevronDown
                    aria-hidden="true"
                    className="-rotate-90 text-[#e4ad42] transition group-hover:translate-x-1"
                  />
                </Link>
              );
            })}
          </div>

          <p className="text-center text-[11px] font-semibold text-[#6b7280]">
            Live AI chat coming soon.
          </p>
        </div>
      </div>

      <button
        type="button"
        onClick={() => setIsOpen((value) => !value)}
        className="group relative ml-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#d90000] text-white shadow-[0_18px_45px_rgba(0,0,0,0.36)] transition hover:scale-105 hover:bg-[#e4ad42] hover:text-[#0c0d0e] focus:ring-4 focus:ring-[#e4ad42]/35 focus:outline-none"
        aria-label={isOpen ? 'Close chat assistant' : 'Open chat assistant'}
        aria-expanded={isOpen}
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-[#d90000]/30 group-hover:bg-[#e4ad42]/25" />
        <span className="relative grid h-16 w-16 place-items-center rounded-full">
          {isOpen ? (
            <FaTimes className="text-2xl" aria-hidden="true" />
          ) : (
            <FaCommentDots className="text-2xl" aria-hidden="true" />
          )}
        </span>
      </button>
    </div>
  );
}
