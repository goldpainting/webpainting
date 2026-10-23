"use client";

import { useEffect } from "react";

const SIDE_TRAVEL = 72;
const SIDE_DRIFT = 16;
const RISE = 44;
const SIDE_BREAKPOINT = 768;
const STYLE_ID = "scroll-reveal-direction";

/**
 * A block wider than this share of the viewport straddles both halves, so it
 * has no outer edge to come from and rises instead.
 */
const FULL_WIDTH_SHARE = 0.72;

/**
 * How far off the centre line a block must sit before it reads as belonging to
 * one half rather than the middle.
 */
const HALF_MARGIN = 0.05;

/** Builds a selector that reaches exactly one element, rooted at `main`. */
function selectorFor(element: Element) {
  const steps: string[] = [];
  let node: Element | null = element;

  while (node && node.localName !== "main") {
    const parent: HTMLElement | null = node.parentElement;
    if (!parent) return null;
    const index = Array.prototype.indexOf.call(parent.children, node) + 1;
    steps.unshift(`${node.localName}:nth-child(${index})`);
    node = parent;
  }

  return node ? `main>${steps.join(">")}` : null;
}

/**
 * Points each revealing block at the nearer edge of the screen, so the left
 * half travels in from the left and the right half from the right.
 *
 * A stylesheet cannot ask where an element sits horizontally, and the grids
 * here run two, three and asymmetric columns across three breakpoints, so no
 * `nth-child` rule answers it. This measures the resting position instead.
 *
 * It writes one stylesheet into `<head>` rather than setting styles on the
 * blocks themselves. Mutating them is what breaks: effects in the root layout
 * run while the streamed tree below is still hydrating, so React compares its
 * own output against elements this had already changed and reports a mismatch.
 * A stylesheet is not part of the hydrated tree, so there is nothing to
 * compare. Without it the stylesheet's own guess still applies and the page
 * still animates; this refines the direction rather than supplying it.
 */
export function ScrollRevealDirection() {
  useEffect(() => {
    if (!CSS.supports("animation-timeline: view()")) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const apply = () => {
      const viewportWidth = window.innerWidth;
      const rules: string[] = [];

      if (viewportWidth >= SIDE_BREAKPOINT) {
        for (const animation of document.getAnimations()) {
          if (!(animation instanceof CSSAnimation)) continue;
          if (animation.animationName !== "revealIn") continue;

          const effect = animation.effect;
          if (!(effect instanceof KeyframeEffect)) continue;
          const target = effect.target;
          if (!(target instanceof HTMLElement)) continue;

          // The block may already be part-way through its entrance, so its
          // rendered box carries that offset. Subtract the live transform to
          // get back to where it comes to rest.
          const box = target.getBoundingClientRect();
          const shift = new DOMMatrixReadOnly(
            getComputedStyle(target).transform,
          );
          const centre = box.left - shift.m41 + box.width / 2;

          let travel = 0;
          if (box.width <= viewportWidth * FULL_WIDTH_SHARE) {
            if (centre < viewportWidth * (0.5 - HALF_MARGIN)) travel = -SIDE_TRAVEL;
            else if (centre > viewportWidth * (0.5 + HALF_MARGIN)) travel = SIDE_TRAVEL;
          }

          const selector = selectorFor(target);
          if (!selector) continue;
          // A block that spans both halves, or sits on the centre line, has no
          // outer edge to come from. It still needs a rule of its own, or the
          // stylesheet's sibling-parity guess would send it sideways anyway.
          rules.push(
            travel === 0
              ? `${selector}{--reveal-x:0px;--reveal-y:${RISE}px}`
              : `${selector}{--reveal-x:${travel}px;--reveal-y:${SIDE_DRIFT}px}`,
          );
        }
      }

      let sheet = document.getElementById(STYLE_ID);
      if (!sheet) {
        sheet = document.createElement("style");
        sheet.id = STYLE_ID;
        document.head.appendChild(sheet);
      }
      sheet.textContent = rules.join("\n");
    };

    apply();

    // Blocks behind a Suspense boundary can settle after this first pass.
    if (document.readyState !== "complete") {
      window.addEventListener("load", apply, { once: true });
    }

    let pending = 0;
    const onResize = () => {
      window.clearTimeout(pending);
      pending = window.setTimeout(apply, 150);
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.clearTimeout(pending);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("load", apply);
      document.getElementById(STYLE_ID)?.remove();
    };
  }, []);

  return null;
}
