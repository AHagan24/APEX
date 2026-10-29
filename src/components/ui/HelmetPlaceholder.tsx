import type { ReactNode } from "react";

type HelmetPlaceholderProps = {
  label: string;
  /** "panel" = framed technical box; "stage" = free-standing hero silhouette. */
  variant?: "panel" | "stage";
  className?: string;
  children?: ReactNode;
};

type VariantProps = Omit<HelmetPlaceholderProps, "variant">;

// Stand-in for the future <HelmetViewer />. `children` lets sections layer
// overlays (e.g. hotspot markers) on top, the same way they will on the canvas.
export default function HelmetPlaceholder({
  variant = "panel",
  ...props
}: HelmetPlaceholderProps) {
  return variant === "stage" ? (
    <StagePlaceholder {...props} />
  ) : (
    <PanelPlaceholder {...props} />
  );
}

const corners = [
  "left-0 top-0 border-l-2 border-t-2",
  "right-0 top-0 border-r-2 border-t-2",
  "bottom-0 left-0 border-b-2 border-l-2",
  "bottom-0 right-0 border-b-2 border-r-2",
];

function PanelPlaceholder({ label, className = "", children }: VariantProps) {
  return (
    <div
      role="img"
      aria-label={`${label} — 3D helmet coming soon`}
      className={`relative isolate overflow-hidden border border-white/10 bg-carbon-900/60 bg-tech-grid backdrop-blur-sm ${className}`}
    >
      {corners.map((position) => (
        <span
          key={position}
          aria-hidden="true"
          className={`absolute size-5 border-acid ${position}`}
        />
      ))}

      <div
        aria-hidden="true"
        className="absolute inset-0 flex flex-col items-center justify-center gap-4"
      >
        <div className="relative flex aspect-square w-2/5 max-w-64 items-center justify-center rounded-full border border-dashed border-chrome-500/40">
          <span className="absolute h-px w-[140%] bg-acid/30" />
          <span className="absolute h-[140%] w-px bg-acid/30" />
          <span className="size-2 rounded-full bg-acid shadow-[0_0_24px_var(--color-acid)]" />
        </div>
        <p className="font-display text-2xl uppercase tracking-wide text-chrome-300">
          Helmet
        </p>
      </div>

      <p className="absolute left-4 top-4 font-mono text-[10px] uppercase tracking-[0.25em] text-acid">
        GLB // Pending
      </p>
      <p className="absolute bottom-4 left-4 right-4 font-mono text-[10px] uppercase tracking-[0.25em] text-chrome-500">
        {label}
      </p>

      {children}
    </div>
  );
}

// `@container` lets the visor text size itself with `cqw` units — relative
// to the helmet's width rather than the viewport's.
function StagePlaceholder({ label, className = "", children }: VariantProps) {
  return (
    <div
      role="img"
      aria-label={`${label} — 3D helmet coming soon`}
      className={`@container relative aspect-5/6 ${className}`}
    >
      <div className="absolute inset-0 overflow-hidden rounded-[50%_50%_44%_44%/54%_54%_46%_46%] border border-white/15 bg-[radial-gradient(circle_at_32%_20%,#50545a_0%,#16181b_36%,#050506_75%)] shadow-[0_50px_120px_-30px_rgb(0_0_0/0.95),inset_0_0_80px_rgb(255_255_255/0.05)]">
        {/* Acid livery stripe */}
        <span className="absolute -bottom-[6%] -left-[4%] h-1/2 w-1/3 -skew-x-12 bg-linear-to-t from-acid/80 to-transparent" />
        {/* Centre seam — where the future drag-to-reveal split will sit */}
        <span className="absolute inset-y-0 left-1/2 w-px bg-white/25" />

        <div className="absolute inset-x-[9%] top-[36%] flex h-[24%] items-center justify-center rounded-[45%/55%] border border-white/15 bg-linear-to-b from-carbon-700 via-black to-carbon-900">
          <span className="wordmark text-[9cqw] text-chrome-500">Apex</span>
        </div>
      </div>

      <p className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.3em] text-acid">
        GLB // Pending
      </p>

      {children}
    </div>
  );
}
