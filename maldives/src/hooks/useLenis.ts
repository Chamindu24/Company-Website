import { useEffect } from 'react';
import Lenis from "@studio-freight/lenis";
import type { LenisOptions } from "@studio-freight/lenis";

/**
 * Ultra-Premium easing function - ultra smooth exponential decay
 * Creates a luxurious, butter-silk smooth scrolling experience
 */
const premiumEasing = (t: number) => {
  // Extended exponential ease-out for ultimate smoothness
  return 1 - Math.pow(1 - t, 5);
};

interface LenisConfig {
  duration?: number;
  easing?: (t: number) => number;
  smoothWheel?: boolean;
  smoothTouch?: boolean;
  touchMultiplier?: number;
  infinite?: boolean;
}

/**
 * useLenis Hook
 * Initialize smooth scrolling with Lenis
 * Provides premium, lag-free scrolling experience
 * Works seamlessly with animations and transitions
 * 
 * @param config - Optional Lenis configuration
 * @returns void
 */
export function useLenis(config: LenisConfig = {}) {
  useEffect(() => {
    window.history.scrollRestoration = 'manual';

    // Detect if device is mobile
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    // Initialize Lenis with ultra-premium smooth scrolling
    const lenisConfig: LenisOptions = {
      duration: config.duration ?? 2.5, // Extra long duration for ultra-smooth glided feel
      easing: config.easing ?? premiumEasing,
      smoothWheel: config.smoothWheel ?? true,
      // Disable smooth touch on mobile to avoid conflicts with native scroll
      syncTouch: isMobile ? false : (config.smoothTouch ?? false),
      touchMultiplier: config.touchMultiplier ?? (isMobile ? 2 : 1.5),
      infinite: config.infinite ?? false,
    };

    const lenis = new Lenis(lenisConfig);

    // Animation loop - runs continuously for smooth interpolation
    let lastTime = 0;
    function raf(time: number) {
      // Calculate delta for frame-rate independent timing
      const deltaTime = time - lastTime;
      lastTime = time;

      // Only update if delta is reasonable (avoid huge jumps on tab switch)
      if (deltaTime < 1000) {
        lenis.raf(time);
      }

      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    // Scroll to top handler for page navigation
    const handleScrollToTop = () => {
      lenis.scrollTo(0, { duration: 1.0 });
    };

    // Listen for scroll-to-top events (for navigation)
    window.addEventListener('lenis-scroll-to-top', handleScrollToTop);

    // Cleanup on unmount
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('lenis-scroll-to-top', handleScrollToTop);
      window.history.scrollRestoration = 'auto';
      lenis.destroy();
    };
  }, [config]);
}
