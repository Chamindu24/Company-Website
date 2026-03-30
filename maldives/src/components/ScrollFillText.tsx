type ScrollFillTextProps = {
  text: string;
  progress: number;
  baseClassName?: string;
  fillClassName?: string;
  className?: string;
};

function ScrollFillText({
  text,
  progress,
  baseClassName = "text-on-surface",
  fillClassName =
    "bg-gradient-to-br from-primary to-primary-container bg-clip-text text-transparent",
  className = "",
}: ScrollFillTextProps) {
  const clampedProgress = Math.min(Math.max(progress, 0), 1);

  return (
    <span className={`relative inline-block ${className}`.trim()}>
      <span className={baseClassName}>{text}</span>
      <span
        className={`absolute inset-0 overflow-hidden whitespace-nowrap ${fillClassName}`.trim()}
        style={{ width: `${clampedProgress * 100}%` }}
        aria-hidden="true"
      >
        {text}
      </span>
    </span>
  );
}

export default ScrollFillText;
