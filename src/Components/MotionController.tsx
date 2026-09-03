import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SELECTORS = [
  ".hero-copy",
  ".hero-note",
  ".index-mark",
  ".hero-identity",
  ".hero-statement",
  ".hero-metadata",
  ".section-heading",
  ".project-card",
  ".practice > *",
  ".ledger article",
  ".archive-list > a",
  ".recognition > *",
  ".page-header > *",
  ".about-header > *",
  ".principles > *",
  ".case-header > *",
  ".case-section > *",
].join(",");

export function MotionController() {
  const { pathname } = useLocation();
  useEffect(() => {
    const reduced =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !("IntersectionObserver" in window)) return;
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(SELECTORS),
    );
    elements.forEach((element, index) => {
      element.classList.add("reveal-ready");
      element.style.setProperty("--reveal-order", String(index % 4));
    });
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add("reveal-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8%", threshold: 0.08 },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [pathname]);
  return null;
}
