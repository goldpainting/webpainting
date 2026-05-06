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
        className={`mb-4 w-[calc(100vw-2rem)] max-w-sm origin-bottom-right overflow-hidden rounded-[1.5rem] border border-[#e4ad42]/35 bg-white shadow-[0_28px_80px_rgba(0,0,0,0.32)] transition-all duration-300 sm:w-[380px] ${
          isOpen
            ? 'translate-y-0 scale-100 opacity-100'
            : 'pointer-events-none translate-y-4 scale-95 opacity-0'
        }`}
        aria-hidden={!isOpen}
      >
        <div className="relative overflow-hidden bg-[#0c0d0e] px-5 py-5 text-white">
          <div className="absolute top-0 right-0 h-28 w-28 rounded-full bg-[#e4ad42]/15 blur-2xl" />
          <div className="relative flex items-start justify-between gap-4">
            <div>
              <p className="font-display text-xs font-black tracking-[0.18em] text-[#e4ad42] uppercase">
                Gold Lion Assistant
              </p>
              <h2 className="mt-1 font-heading text-2xl font-black">
                How can we help?
              </h2>
              <p className="mt-2 text-sm leading-6 text-white/78">
                Ask about estimates, exterior painting, interior painting, or
                cabinet refinishing.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-[#e4ad42] hover:text-[#0c0d0e]"
              aria-label="Close chat"
            >
              <FaTimes aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="space-y-4 bg-[#f7f7f7] p-5">
          <div className="rounded-2xl border border-[#0c0d0e]/10 bg-white p-4 shadow-[0_12px_30px_rgba(0,0,0,0.06)]">
            <div className="flex items-start gap-3">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#e4ad42] text-[#0c0d0e]">
                <FaPaintRoller aria-hidden="true" />
              </span>
              <div>
                <p className="font-heading text-base font-black text-[#0c0d0e]">
                  Hi, I am your painting assistant.
                </p>
                <p className="mt-1 text-sm leading-6 text-[#343b43]">
                  This chat is being prepared for AI. For now, choose one of the
                  quick options below and our team will help you directly.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-3">
            {quickActions.map((action) => {
              const Icon = action.icon;

              return (
                <Link
                  key={action.href}
                  href={action.href}
                  className="group flex items-center justify-between gap-3 rounded-2xl border border-[#0c0d0e]/10 bg-white px-4 py-3 font-heading font-black text-[#0c0d0e] shadow-[0_10px_25px_rgba(0,0,0,0.05)] transition hover:border-[#e4ad42] hover:bg-[#0c0d0e] hover:text-white"
                >
                  <span className="flex items-center gap-3">
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-[#0c0d0e] text-[#e4ad42] transition group-hover:bg-[#e4ad42] group-hover:text-[#0c0d0e]">
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

          <p className="text-center text-xs font-semibold text-[#6b7280]">
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
