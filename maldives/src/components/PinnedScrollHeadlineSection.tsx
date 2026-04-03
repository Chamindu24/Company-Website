import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

type ScrollFillTextProps = {
  text: string;
  progress: number;
  baseClassName?: string;
  fillClassName?: string;
  className?: string;
};

export function ScrollFillText({
  text,
  progress,
  baseClassName = "text-stone-400",
  fillClassName = "bg-gradient-to-br from-primary to-primary-container bg-clip-text text-transparent",
  className = "",
}: ScrollFillTextProps) {
  const tokens = text.split(/(\s+)/);
  const clampedProgress = Math.min(Math.max(progress, 0), 1);
  const totalCharacters = Math.max(Array.from(text).length, 1);

  const renderCharacter = (char: string, index: number) => {
    const start = index / totalCharacters;
    const end = (index + 1) / totalCharacters;
    const charProgress = Math.min(
      Math.max((clampedProgress - start) / (end - start), 0),
      1,
    );

    return (
      <span
        key={`${index}-${char}`}
        className="relative inline-block whitespace-pre overflow-visible align-baseline"
        style={{
          lineHeight: "1.2",
          paddingBottom: "0.01em",
          paddingRight: "0.05em",
        }}
      >
        <span className={baseClassName}>{char}</span>

        <span
          className={`absolute inset-0 select-none pointer-events-none ${fillClassName}`}
          style={{
            opacity: charProgress,
            filter: `blur(${(1 - charProgress) * 4}px)`,
            transform: `translateY(${(1 - charProgress) * 5}px)`,
            transition: "all 0.2s cubic-bezier(0.22, 1, 0.36, 1)",
          }}
          aria-hidden="true"
        >
          {char}
        </span>
      </span>
    );
  };

  return (
    <span className={`relative inline ${className}`}>
      {tokens.map((token, tokenIndex) => {
        if (/^\s+$/.test(token)) {
          return (
            <span key={`space-${tokenIndex}`} className="whitespace-pre">
              {token}
            </span>
          );
        }

        const tokenCharacters = Array.from(token);
        const tokenStartIndex = tokens
          .slice(0, tokenIndex)
          .reduce((count, currentToken) => count + currentToken.length, 0);

        return (
          <span key={`word-${tokenIndex}`} className="inline-flex whitespace-pre">
            {tokenCharacters.map((char, charIndex) =>
              renderCharacter(char, tokenStartIndex + charIndex),
            )}
          </span>
        );
      })}
    </span>
  );
}

type PinnedScrollHeadlineSectionProps = {
  badge: string;
  titlePrefix: string;
  highlightText: string;
  titleSuffix: string;
  description: string;
  sectionClassName?: string;
  children?: ReactNode;
  media?: ReactNode;
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
      const scrollDistance = Math.max(
        section.offsetHeight - window.innerHeight,
        1,
      );
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
  className={`relative mx-auto mb-12 min-h-[170vh] max-w-7xl space-y-8 px-4 sm:px-6 md:mb-24 md:px-8 ${sectionClassName}`.trim()}
>
  <div className="sticky top-16 -mt-12 md:mt-0 md:top-28  mx-auto w-full md:max-w-4xl h-[100svh] md:h-auto flex flex-col items-center justify-center py-8 md:py-20 text-center">
    <span className="mb-5 inline-block rounded-full mb-8  border-2 border-secondary-container px-4 py-1.5 font-label text-xs font-bold uppercase tracking-widest text-on-secondary-container">
      {badge}
    </span>
    <h1 className="mb-4 font-headline text-4xl sm:text-5xl md:text-7xl font-black leading-[1.4] tracking-tighter text-on-surface hyphens-auto break-normal whitespace-normal w-full">
      {titlePrefix}{" "}
      <ScrollFillText
        text={highlightText}
        progress={headlineFillProgress}
      />{" "}
      {titleSuffix}
    </h1>
    <p className="w-full max-w-2xl text-lg sm:text-xl text-center mx-auto leading-relaxed text-on-surface-variant px-2 sm:px-0">
      {description}
    </p>
    {children ? (
      <div className="mt-8 flex justify-center w-full">{children}</div>
    ) : null}
  </div>
</section>
  );
}

export default PinnedScrollHeadlineSection;
