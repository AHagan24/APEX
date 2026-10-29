import Link from "next/link";
import ArrowLine from "@/components/ui/ArrowLine";
import Crosshair from "@/components/ui/Crosshair";
import HelmetScene from "@/components/three/HelmetScene";

export default function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-svh flex-col overflow-hidden bg-carbon-950"
    >
      {/* Lighting: spotlight, floor glow, and vignette */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_45%_50%_at_50%_42%,rgb(255_255_255/0.10),transparent_70%)]" />
        <div className="absolute inset-x-0 bottom-0 h-2/5 bg-linear-to-t from-black via-black/70 to-transparent" />
        <div className="absolute bottom-[8%] left-1/2 h-24 w-1/2 -translate-x-1/2 rounded-[100%] bg-acid/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgb(0_0_0/0.75)_100%)]" />
      </div>

      {/* Technical detailing */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 hidden md:block">
        <span className="absolute left-1/2 top-0 h-[17%] w-px bg-white/20" />
        <span className="absolute left-0 top-[23%] h-px w-6 bg-white/30" />
        <span className="absolute right-0 top-[23%] h-px w-6 bg-white/30" />
        <Crosshair className="right-[22%] top-[20%]" />
        <Crosshair className="left-[7%] top-[62%]" />
      </div>

      <div className="relative mx-auto flex w-full max-w-384 flex-1 flex-col px-4 pb-6 pt-24 md:px-10 md:pb-16">
        <div className="md:absolute md:left-10 md:top-[20%]">
          <p className="max-w-[12ch] text-sm uppercase leading-tight tracking-[0.15em] text-chrome-100 md:text-lg">
            Engineered for what&apos;s next
          </p>
          <ArrowLine className="mt-4 text-chrome-300" />
        </div>

        {/* Stage: wordmark behind, helmet in front */}
        <div className="relative flex flex-1 items-center justify-center py-8 md:py-0">
          <h1
            id="hero-title"
            className="wordmark pointer-events-none absolute -inset-x-4 top-1/2 -translate-y-1/2 select-none whitespace-nowrap text-center text-[min(28vw,27rem)] md:-inset-x-10"
          >
            <span className="text-acid">Ap</span>
            <span className="text-chrome">ex</span>
          </h1>

          {/* Helmet + hero-only backdrop. By DOM order the backdrop paints
              above the wordmark and below the canvas — no z-index needed. */}
          <div className="relative">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0">
              {/* Dark halo: lifts the helmet off the letters behind it */}
              <div className="absolute inset-[-18%] rounded-full bg-[radial-gradient(closest-side,rgb(0_0_0/0.5),transparent)]" />
              {/* Lime haze, echoing the lime reflections on the shell */}
              <div className="absolute left-[-14%] top-[48%] h-1/2 w-3/5 rounded-full bg-acid/10 blur-3xl" />
              {/* Floor glow, then a contact shadow on top of it. The canvas
                  overscans, so the chin sits at ~104% of this box. */}
              <div className="absolute left-1/2 top-[97%] h-[14%] w-[90%] -translate-x-1/2 rounded-[100%] bg-acid/15 blur-2xl" />
              <div className="absolute left-1/2 top-[100%] h-[7%] w-[58%] -translate-x-1/2 rounded-[100%] bg-black/85 blur-xl" />
            </div>

            <HelmetScene
              label="APEX racing helmet"
              className="w-[min(72vw,32svh,40rem)] md:w-[min(50vw,66svh,46rem)]"
            >
              <p
                aria-hidden="true"
                className="absolute left-[56%] top-[66%] flex items-center gap-3 whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.25em] text-chrome-100"
              >
                <span className="flex size-6 items-center justify-center rounded-full bg-chrome-100 text-sm text-carbon-950">
                  +
                </span>
                Drag to reveal
              </p>
            </HelmetScene>
          </div>
        </div>

        <div className="mb-6 md:absolute md:right-10 md:top-[68%] md:mb-0">
          {/* Curved leader line pointing back toward the helmet */}
          <span
            aria-hidden="true"
            className="absolute right-full top-5 mr-6 hidden h-24 w-28 rounded-br-[2rem] border-b border-r border-white/20 lg:block"
          />
          <p className="max-w-[24ch] text-sm uppercase leading-snug tracking-[0.12em] text-chrome-100 md:text-base">
            A next generation motorsport experience
          </p>
          <span
            aria-hidden="true"
            className="mt-3 block h-2.5 w-16 bg-[repeating-linear-gradient(-60deg,var(--color-acid)_0_4px,transparent_4px_8px)]"
          />
        </div>

        <div className="flex items-end justify-between gap-6 md:absolute md:inset-x-10 md:bottom-10">
          <Link href="/customize" className="group flex items-center gap-5">
            <span className="flex size-16 shrink-0 items-center justify-center rounded-full border border-white/25 bg-carbon-900 bg-tech-grid font-mono text-[9px] uppercase tracking-[0.2em] text-chrome-500 transition-colors group-hover:border-acid md:size-28">
              Car
            </span>
            <span>
              <span className="block whitespace-nowrap text-xs uppercase tracking-[0.18em] text-chrome-100 transition-colors group-hover:text-acid">
                View collection
              </span>
              <ArrowLine className="mt-2 text-chrome-500 transition-colors group-hover:text-acid" />
            </span>
          </Link>

          <Link
            href="/explore"
            aria-label="Enter Explore"
            className="group flex items-center gap-5 text-xs uppercase tracking-[0.18em] text-chrome-100 transition-colors hover:text-acid"
          >
            Enter
            <ArrowLine className="hidden text-chrome-500 transition-colors group-hover:text-acid sm:block" />
            <span aria-hidden="true" className="text-acid sm:hidden">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
