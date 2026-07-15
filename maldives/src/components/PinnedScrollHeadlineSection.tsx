import type { ReactNode } from "react";

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
  return (
    <section
      className={`relative mx-auto mt-6 mb-12 max-w-7xl space-y-8 px-4 sm:px-6 md:mb-24 md:px-8 ${sectionClassName}`}
    >
      <div className="mx-auto w-full md:max-w-4xl flex flex-col items-center justify-center py-8 md:py-20 text-center">
        <span className="mb-5 inline-block rounded-full border-2 border-secondary-container px-4 py-1.5 font-label text-xs font-bold uppercase tracking-widest text-on-secondary-container">
          {badge}
        </span>
        <h1 className="mb-4 font-headline mt-4 text-5xl sm:text-5xl md:text-7xl font-black leading-[1.2] tracking-tighter text-on-surface hyphens-auto break-normal whitespace-normal w-full">
          <span className="block mb-2">{titlePrefix}</span>
          <span className="block bg-gradient-to-br from-primary to-primary-container bg-clip-text text-transparent">
            {highlightText}
          </span>
          <span className="block mt-2">{titleSuffix}</span>
        </h1>
        <p className="w-full max-w-2xl text-lg sm:text-xl text-center mx-auto leading-relaxed text-on-surface-variant px-2 sm:px-0">
          {description}
        </p>
        {children && <div className="mt-8 flex justify-center w-full">{children}</div>}
      </div>
    </section>
  );
}

export default PinnedScrollHeadlineSection;