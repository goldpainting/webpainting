'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { useChat } from '@ai-sdk/react';
import { DefaultChatTransport } from 'ai';
import {
  FaCalendarAlt,
  FaChevronDown,
  FaCommentDots,
  FaEnvelope,
  FaPaintRoller,
  FaPhoneAlt,
  FaTimes,
  FaPaperPlane,
} from 'react-icons/fa';

const quickActions = [
  {
    kind: 'prompt',
    label: 'Request service appointment',
    icon: FaCalendarAlt,
    prompt:
      'I want to schedule painting service. Please help me book an appointment.',
  },
  {
    kind: 'link',
    href: 'tel:9414625894',
    label: 'Call now',
    icon: FaPhoneAlt,
  },
  {
    kind: 'link',
    href: 'mailto:goldlionpainting@gmail.com',
    label: 'Send email',
    icon: FaEnvelope,
  },
] as const;

function extractText(parts: { type: string; text?: string }[]) {
  return parts
    .filter((p) => p.type === 'text')
    .map((p) => p.text)
    .join('');
}

export default function FloatingChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');

  const { messages, sendMessage, status, error } = useChat({
    transport: new DefaultChatTransport({
      api: '/api/chat',
    }),
  });

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const isLoading = status === 'submitted' || status === 'streaming';

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    const text = input;
    setInput('');
    try {
      await sendMessage({ text });
    } catch {
      // error is handled by the useChat error state
    }
  };

  const handleQuickPrompt = async (prompt: string) => {
    if (isLoading) return;

    try {
      await sendMessage({ text: prompt });
    } catch {
      // error is handled by the useChat error state
    }
  };

  return (
    <div className="fixed right-4 bottom-4 z-[80] sm:right-6 sm:bottom-6">
      <div
        className={`mb-3 flex w-[calc(100vw-2rem)] max-w-xs origin-bottom-right flex-col overflow-hidden rounded-2xl border border-[#e4ad42]/35 bg-white shadow-[0_22px_60px_rgba(0,0,0,0.3)] transition-all duration-300 sm:w-[350px] ${
          isOpen
            ? 'h-[520px] translate-y-0 scale-100 opacity-100'
            : 'pointer-events-none h-0 translate-y-4 scale-95 opacity-0'
        }`}
        aria-hidden={!isOpen}
      >
        <div className="relative shrink-0 overflow-hidden bg-[#0c0d0e] px-4 py-4 text-white">
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
                Chat with AI or choose a quick option.
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

        <div className="flex-1 overflow-y-auto bg-[#f7f7f7] p-4">
          {messages.length === 0 ? (
            <div className="space-y-4">
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
                      Hello! I can answer service questions and help send your
                      appointment request to our team.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid gap-2.5">
                {quickActions.map((action) => {
                  const Icon = action.icon;

                  if (action.kind === 'prompt') {
                    return (
                      <button
                        key={action.label}
                        type="button"
                        onClick={() => handleQuickPrompt(action.prompt)}
                        disabled={isLoading}
                        className="group flex items-center justify-between gap-3 rounded-xl border border-[#0c0d0e]/10 bg-white px-3 py-2.5 text-left font-heading text-sm font-black text-[#0c0d0e] shadow-[0_8px_20px_rgba(0,0,0,0.05)] transition hover:border-[#e4ad42] hover:bg-[#0c0d0e] hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
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
                      </button>
                    );
                  }

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
            </div>
          ) : (
            <div className="flex flex-col space-y-3">
              {messages.map((m) => {
                const messageText = extractText(m.parts);

                if (!messageText.trim()) return null;

                return (
                  <div
                    key={m.id}
                    className={`flex ${
                      m.role === 'user' ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                        m.role === 'user'
                          ? 'rounded-br-none bg-[#0c0d0e] text-white'
                          : 'rounded-bl-none border border-[#0c0d0e]/10 bg-white text-[#343b43] shadow-sm'
                      }`}
                    >
                      {messageText}
                    </div>
                  </div>
                );
              })}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="max-w-[85%] animate-pulse rounded-2xl rounded-bl-none border border-[#0c0d0e]/10 bg-white px-4 py-2.5 text-sm text-[#6b7280] shadow-sm">
                    Thinking...
                  </div>
                </div>
              )}
              {error && (
                <div className="rounded-xl border border-red-200 bg-red-50 p-3 text-xs text-red-700">
                  Something went wrong. Please try again or contact us directly
                  at{' '}
                  <a href="tel:9414625894" className="font-semibold underline">
                    (941) 462-5894
                  </a>
                  .
                </div>
              )}
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="shrink-0 border-t border-[#0c0d0e]/10 bg-white p-3">
          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-2 rounded-full border border-[#0c0d0e]/10 bg-[#f7f7f7] p-1 transition-colors focus-within:border-[#e4ad42]"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about our services..."
              className="w-full bg-transparent px-3 py-2 text-sm text-[#0c0d0e] placeholder:text-[#6b7280] focus:outline-none"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#e4ad42] text-[#0c0d0e] transition hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
              aria-label="Send message"
            >
              <FaPaperPlane className="text-xs" />
            </button>
          </form>
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
