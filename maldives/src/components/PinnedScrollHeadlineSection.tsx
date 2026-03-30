import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import ScrollFillText from "./ScrollFillText";

type PinnedScrollHeadlineSectionProps = {
  badge: string;
  titlePrefix: string;
  highlightText: string;
  titleSuffix: string;
  description: string;
  sectionClassName?: string;
  children?: ReactNode;
};

function PinnedScrollHeadlineSection({
  badge,
  titlePrefix,
  highlightText,
  titleSuffix,
  description,
  sectionClassName = "",
  children,
}: PinnedScrollHeadlineSectionProps) {
  const headlineSectionRef = useRef<HTMLElement | null>(null);
  const [headlineFillProgress, setHeadlineFillProgress] = useState(0);

  useEffect(() => {
    const section = headlineSectionRef.current;

    if (!section) {
      return;
    }

    let animationFrame = 0;

    const updateProgress = () => {
      const rect = section.getBoundingClientRect();
      const scrollDistance = Math.max(section.offsetHeight - window.innerHeight, 1);
      const progress = Math.min(Math.max(-rect.top / scrollDistance, 0), 1);

      setHeadlineFillProgress(progress);
      animationFrame = 0;
    };

    const onScroll = () => {
      if (animationFrame !== 0) {
        return;
      }

      animationFrame = window.requestAnimationFrame(updateProgress);
    };

    updateProgress();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);

      if (animationFrame !== 0) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  return (
    <section
      ref={headlineSectionRef}
      className={`relative mx-auto mb-12 min-h-[170vh] max-w-7xl px-6 md:mb-24 md:px-8 ${sectionClassName}`.trim()}
    >
      <div className="sticky top-28">
        <div className="max-w-3xl py-12 md:py-20">
          <span className="mb-6 inline-block rounded-full border-2 border-secondary-container px-4 py-1.5 font-label text-xs font-bold uppercase tracking-widest text-on-secondary-container">
            {badge}
          </span>
          <h1 className="mb-8 font-headline text-5xl font-extrabold leading-[1.1] tracking-tighter text-on-surface md:text-7xl">
            {titlePrefix}{" "}
            <ScrollFillText text={highlightText} progress={headlineFillProgress} />{" "}
            {titleSuffix}
          </h1>
          <p className="max-w-2xl text-xl leading-relaxed text-on-surface-variant">
            {description}
          </p>
          {children ? <div className="mt-8">{children}</div> : null}
        </div>
      </div>
    </section>
  );
}

export default PinnedScrollHeadlineSection;
