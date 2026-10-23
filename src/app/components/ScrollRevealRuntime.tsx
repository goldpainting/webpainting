'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const revealSelector = [
  '.reveal-up',
  '.scroll-reveal',
  'main > section',
  'main article',
  'main figure',
  'main section a.group',
].join(',');

const mediaSelector = 'figure, picture, img, video';

/** Stagger steps are capped so a long group never queues a visible wait. */
const maxStaggerStep = 4;

/** How far below the fold, as a share of the viewport, a block starts moving. */
const revealAhead = 0.55;

/**
 * The observer root is extended far enough upward that a block which has been
 * scrolled past still counts as intersecting. Without it, jumping straight to
 * an anchor or a restored scroll position leaves everything above that point
 * stranded at opacity 0, because an element travelling from below the fold to
 * above it crosses no threshold and is never reported.
 */
const scrolledPastMargin = 100000;

type RevealDirection = 'rise' | 'up' | 'left' | 'right' | 'scale' | 'wipe';

function isMediaBlock(element: HTMLElement) {
  if (element.matches(mediaSelector)) return true;

  const media = element.querySelector(mediaSelector);

  return media !== null && element.childElementCount <= 2;
}

/**
 * Derives where a block travels from out of its own place on the page, so the
 * motion reads as the layout assembling itself: a left column arrives from the
 * left, a right column from the right, media settles into focus, and anything
 * full width simply rises. Narrow viewports stack into a single column, so they
 * resolve to vertical motion on their own.
 */
function resolveDirection(element: HTMLElement): RevealDirection {
  const explicit = element.dataset.reveal as RevealDirection | undefined;

  if (explicit) return explicit;

  const bounds = element.getBoundingClientRect();
  const viewportWidth = window.innerWidth;

  // A block spanning the page has no side to come from, and a gesture that wide
  // reads as noise once it repeats down a long page: it only rises. The roller
  // pass is kept for media itself, never for a section that merely holds some.
  if (bounds.width > viewportWidth * 0.72) {
    return element.matches(mediaSelector) ? 'wipe' : 'rise';
  }

  const offset = bounds.left + bounds.width / 2 - viewportWidth / 2;
  const sideThreshold = Math.max(viewportWidth * 0.06, 40);

  if (offset < -sideThreshold) return 'left';
  if (offset > sideThreshold) return 'right';

  return isMediaBlock(element) ? 'scale' : 'up';
}

export default function ScrollRevealRuntime() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      root.classList.remove('reveal-ready');
      return;
    }

    let observer: IntersectionObserver | undefined;
    let cancelled = false;

    // Tagging is deferred past the current frame on purpose. These nodes belong
    // to React, and Next streams the page in, so touching them while a Suspense
    // boundary is still hydrating makes React report an attribute mismatch it
    // will not patch up. By the next frame the tree has settled, and since every
    // hidden state is gated behind .reveal-ready, nothing is painted then hidden
    // in the meantime.
    const tag = () => {
      if (cancelled) return;

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

        element.dataset.reveal = resolveDirection(element);
        element.classList.add('js-reveal');

        groupElements.push(element);
        grouped.set(group, groupElements);
      }

      for (const groupElements of grouped.values()) {
        groupElements.forEach((element, index) => {
          element.style.setProperty(
            '--reveal-index',
            String(Math.min(index, maxStaggerStep))
          );
        });
      }

      // Armed only once the elements carry their hidden state, so the two land
      // in the same frame and no block is shown and then taken away.
      root.classList.add('reveal-ready');

      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue;

            entry.target.classList.add('is-visible');
            observer?.unobserve(entry.target);
          }
        },
        {
          rootMargin: `${scrolledPastMargin}px 0px ${revealAhead * 100}% 0px`,
          threshold: 0.01,
        }
      );

      const entranceLine = window.innerHeight * (1 + revealAhead);

      for (const element of elements) {
        // Whatever already sits at or above the current scroll position has
        // been read or scrolled past, so it is shown at once, not animated.
        if (element.getBoundingClientRect().top < entranceLine) {
          element.classList.add('is-visible');
          continue;
        }

        observer.observe(element);
      }
    };

    // Next hydrates the page segment well after the layout mounts, so the wait
    // runs until the document has finished loading and the main thread is idle.
    const schedule = () => {
      if (typeof requestIdleCallback === 'function') {
        requestIdleCallback(tag, { timeout: 600 });
        return;
      }

      setTimeout(tag, 120);
    };

    if (document.readyState === 'complete') {
      schedule();
    } else {
      window.addEventListener('load', schedule, { once: true });
    }

    return () => {
      cancelled = true;
      window.removeEventListener('load', schedule);
      observer?.disconnect();
    };
  }, [pathname]);

  return null;
}
