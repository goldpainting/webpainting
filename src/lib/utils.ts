import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const revealCycle = ["left", "up", "right"] as const;

/**
 * Picks where a grid item travels from out of its position in the grid, so the
 * row assembles from its edges inwards. Resolved while rendering, which keeps
 * the marker in the server HTML and leaves the DOM untouched after hydration.
 * The cycle lines up with the three-column layouts these grids use; narrower
 * breakpoints fall back to a vertical lift in CSS.
 */
export function revealDirection(index: number) {
  return revealCycle[index % revealCycle.length];
}
