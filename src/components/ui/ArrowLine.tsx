type ArrowLineProps = {
  className?: string;
};

// Thin "———→" used for directional CTAs. Inherits colour via currentColor.
export default function ArrowLine({ className = "" }: ArrowLineProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 96 10"
      fill="none"
      className={`h-2.5 w-24 ${className}`}
    >
      <path d="M0 5h95M90 1l5 4-5 4" stroke="currentColor" />
    </svg>
  );
}
