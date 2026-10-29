import type { ReactNode } from "react";

type SectionHeadingProps = {
  id: string;
  index: string;
  eyebrow: string;
  title: ReactNode;
};

export default function SectionHeading({
  id,
  index,
  eyebrow,
  title,
}: SectionHeadingProps) {
  return (
    <div>
      <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-chrome-500">
        <span className="text-acid">{index}</span>
        <span aria-hidden="true" className="h-px w-10 bg-acid/60" />
        {eyebrow}
      </p>
      <h1
        id={id}
        className="mt-4 font-display text-[clamp(3rem,9vw,8rem)] uppercase leading-[0.85]"
      >
        {title}
      </h1>
    </div>
  );
}
