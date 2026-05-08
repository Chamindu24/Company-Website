import { useEffect, useRef } from 'react';
import Lenis from "@studio-freight/lenis";
import type { LenisOptions } from "@studio-freight/lenis";

/**
 * Balanced easing - smooth but responsive
 * Cubic ease-out: fast start, gentle deceleration
 */
const balancedEasing = (t: number) => {
  return 1 - Math.pow(1 - t, 3); // Power of 3, not 5
};

interface LenisConfig {
  duration?: number;
  easing?: (t: number) => number;
  smoothWheel?: boolean;
  smoothTouch?: boolean;
  touchMultiplier?: number;
  infinite?: boolean;
}

export function useLenis(config: LenisConfig = {}) {
  const lenisRef = useRef<Lenis | null>(null);
  const rafIdRef = useRef<number>(0);

  useEffect(() => {
    window.history.scrollRestoration = 'manual';

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    const lenisConfig: LenisOptions = {
      duration: config.duration ?? 1.2,       // ✅ Was 2.5 — this was your main problem
      easing: config.easing ?? balancedEasing, // ✅ Power 3 instead of 5
      smoothWheel: config.smoothWheel ?? true,
      syncTouch: false,                        // ✅ Always off — native touch is better
      touchMultiplier: config.touchMultiplier ?? (isMobile ? 1.5 : 1.2),
      infinite: config.infinite ?? false,
    };

    const lenis = new Lenis(lenisConfig);
    lenisRef.current = lenis;

    // ✅ Simplified RAF — no deltaTime check needed, Lenis handles this internally
    function raf(time: number) {
      lenis.raf(time);
      rafIdRef.current = requestAnimationFrame(raf);
    }

    rafIdRef.current = requestAnimationFrame(raf);

    const handleScrollToTop = () => {
      lenis.scrollTo(0, { duration: 0.8 }); // ✅ Was 1.0
    };

    window.addEventListener('lenis-scroll-to-top', handleScrollToTop);

    return () => {
      cancelAnimationFrame(rafIdRef.current);
      window.removeEventListener('lenis-scroll-to-top', handleScrollToTop);
      window.history.scrollRestoration = 'auto';
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []); // ✅ Empty deps — config object was causing re-init on every render
}