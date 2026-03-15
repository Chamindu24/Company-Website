import { useEffect, useRef, useState } from "react";

export type SolutionTopicStep = {
  title: React.ReactNode;
  desc: string;
  badge?: string;
};

type SolutionTopicStepperProps = {
  steps: SolutionTopicStep[];
  title?: React.ReactNode;
  description?: string;
  threshold?: number;
  initialActiveStep?: number;
};

// Scroll per step scales with viewport height.
// On tall screens each step needs more physical scroll,
// on short screens (mobile landscape) less.
// SCROLL_PER_STEP controls how many "screens" each step takes.
const SCROLL_PER_STEP = 1; // 1 = one full viewport height per step

export default function RoyalFoldStepper({
  steps,
  title,
  description,
  threshold = 0.5,
  initialActiveStep = 0,
}: SolutionTopicStepperProps) {
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Total height = enough sticky room for each step × viewport height.
  // Re-calculated whenever viewport resizes.
  const totalSteps = steps.length;
  const [containerHeight, setContainerHeight] = useState("500vh");

  useEffect(() => {
    const calcHeight = () => {
      // (steps - 1) transitions + 1 screen to show the last step fully
      const vh = window.innerHeight;
      const total = (totalSteps - 1) * SCROLL_PER_STEP * vh + vh;
      setContainerHeight(`${total}px`);
    };

    calcHeight();
    window.addEventListener("resize", calcHeight);
    return () => window.removeEventListener("resize", calcHeight);
  }, [totalSteps]);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      const progress = Math.abs(Math.min(rect.top, 0)) / scrollable;
      setScrollY(Math.min(Math.max(progress, 0), 1));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const maxIndex = Math.max(steps.length - 1, 0);
  const safeInitialIndex = Math.min(Math.max(initialActiveStep, 0), maxIndex);
  const activeIndex = Math.min(
    Math.max(Math.round(scrollY * maxIndex + (threshold - 0.5)), 0),
    maxIndex,
  );

  return (
    <div className="relative bg-[#ffffff] mb-16">
      {(title || description) && (
        <div className="max-w-5xl mx-auto px-6 text-center mb-10 md:mb-14">
          {title && (
            <h2
              className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#0a0a0a] tracking-tight leading-[1.05]"
              style={{ fontFamily: "'DM Serif Display', serif" }}
            >
              {title}
            </h2>
          )}
          {description && (
            <p className="mt-4 text-slate-600 text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto">
              {description}
            </p>
          )}
        </div>
      )}

      <div
        ref={containerRef}
        className="relative perspective-[2000px]"
        style={{ height: containerHeight }}
      >
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background Large Step Number */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span
            className="text-[40vw] font-serif italic text-black/[0.03] select-none transition-all duration-700 ease-in-out"
            style={{ fontFamily: "'DM Serif Display', serif" }}
          >
            {Math.max(activeIndex, safeInitialIndex) + 1}
          </span>
        </div>

        <div className="relative w-full max-w-5xl px-6 h-[250px]">
          {steps.map((step, i) => {
            const stepProgress = i / (steps.length - 1);
            const distance = scrollY - stepProgress;

            const opacity = 1 - Math.abs(distance) * 4;
            const rotationY = distance * -45;
            const translateZ = Math.abs(distance) * -500;
            const translateX = distance * -100;

            return (
              <div
                key={i}
                className="absolute inset-0 flex flex-col items-center text-center px-6 transition-all duration-300 ease-out"
                style={{
                  opacity: Math.max(opacity, 0),
                  transform: `translateX(${translateX}%) translateZ(${translateZ}px) rotateY(${rotationY}deg)`,
                  zIndex: i === activeIndex ? 10 : 1,
                  pointerEvents: opacity > 0.8 ? "auto" : "none",
                }}
              >
                <div className="mb-8">
                  <span
                    className={`
                        text-emerald-600 font-black tracking-[0.4em]  uppercase
                        ${step.badge ? "border border-emerald-600 px-2 text-xs py-1 rounded-xs" : "text-[16px]"}
                      `}
                  >
                    {step.badge || `Step 0${i + 1}`}
                  </span>
                </div>

                <h3
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-[#0a0a0a] mb-8 tracking-tighter"
                  style={{ fontFamily: "'DM Serif Display', serif" }}
                >
                  {step.title}
                </h3>

                <p className="text-slate-800 text-lg sm:text-xl md:text-xl lg:text-2xl font-light leading-relaxed max-w-2xl mx-auto">
                  {step.desc}
                </p>

                <div className="mt-12 h-[1px] w-24 bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
              </div>
            );
          })}
        </div>

        {/* Bottom Navigation Dots */}
        <div className="absolute bottom-20 flex gap-3">
          {steps.map((_, i) => (
            <div
              key={i}
              className={`h-1 transition-all duration-500 ${
                activeIndex === i ? "w-8 bg-emerald-500" : "w-2 bg-black/20"
              }`}
            />
          ))}
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        .perspective-2000 { perspective: 2000px; }
      `,
        }}
      />
      </div>
    </div>
  );
}
