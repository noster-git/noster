'use client'
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// The one Lenis instance while <SmoothScroll /> is mounted (null with reduced motion).
let lenis = null;

/** Smoothly scrolls to a selector or element; falls back to a native jump without Lenis. */
export function scrollToTarget(target) {
  if (lenis) lenis.scrollTo(target);
  else (typeof target === "string" ? document.querySelector(target) : target)?.scrollIntoView();
}

/** Freeze/unfreeze smooth scrolling, e.g. while a modal locks the page. */
export function pauseScroll() { lenis?.stop(); }
export function resumeScroll() { lenis?.start(); }

/**
 * Site-wide smooth scrolling (Lenis), mounted once in the root layout.
 * Lenis runs on GSAP's ticker and updates ScrollTrigger on every scroll, so the
 * existing scroll animations stay in sync. Touch keeps native scrolling, and
 * people who ask for reduced motion get the browser's normal scroll.
 */
export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    lenis = new Lenis({ lerp: 0.1, wheelMultiplier: 0.9 });
    lenis.on("scroll", ScrollTrigger.update);

    const tick = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tick);
      gsap.ticker.lagSmoothing(500, 33);
      lenis.destroy();
      lenis = null;
    };
  }, []);

  return null;
}
