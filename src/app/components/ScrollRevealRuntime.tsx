'use client';

import { useLayoutEffect } from 'react';
import { usePathname } from 'next/navigation';

const revealSelector = [
  '.reveal-up',
  '.scroll-reveal',
  'main > section',
  'main article',
  'main figure',
  'main section a.group',
].join(',');

export default function ScrollRevealRuntime() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(revealSelector)
    ).filter((element) => !element.closest('[data-no-scroll-reveal]'));

    const grouped = new Map<Element, HTMLElement[]>();

    for (const element of elements) {
      const group =
        element.closest('section') ??
        element.closest('main') ??
        document.documentElement;
      const groupElements = grouped.get(group) ?? [];

      if (!element.classList.contains('js-reveal')) {
        element.classList.add('js-reveal');
      }

      groupElements.push(element);
      grouped.set(group, groupElements);
    }

    for (const groupElements of grouped.values()) {
      groupElements.forEach((element, index) => {
        element.style.setProperty('--reveal-index', String(index % 8));
      });
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;

          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      },
      {
        rootMargin: '0px 0px -12% 0px',
        threshold: 0.12,
      }
    );

    for (const element of elements) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
