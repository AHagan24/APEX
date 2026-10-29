import Link from "next/link";
import NavLink from "@/components/layout/NavLink";
import { navLinks } from "@/lib/navigation";

// Floats over the hero (absolute, not sticky) and scrolls away with it.
export default function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        aria-label="Primary"
        className="relative mx-auto flex h-20 max-w-384 items-center justify-between px-4 md:h-24 md:px-10"
      >
        <Link href="/" className="wordmark text-2xl md:text-3xl">
          Apex
          <span
            aria-hidden="true"
            className="ml-1 inline-block h-2 w-0.5 -translate-y-3 skew-x-[-30deg] bg-acid"
          />
        </Link>

        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-12 text-xs uppercase tracking-[0.18em] lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <NavLink
                href={link.href}
                className="group flex items-baseline gap-2 text-chrome-100 transition-colors hover:text-acid aria-[current=page]:text-acid"
              >
                <span className="font-mono text-[11px] text-chrome-500 group-aria-[current=page]:text-acid">
                  {link.index}
                </span>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <p className="hidden font-mono text-[10px] uppercase tracking-[0.3em] text-chrome-500 lg:block">
          [ Season <span className="text-acid">26</span> ]
        </p>

        {/* Native disclosure; NavLink closes it after navigation. */}
        <details className="group relative lg:hidden">
          <summary className="flex size-10 cursor-pointer list-none flex-col items-end justify-center gap-1.5 [&::-webkit-details-marker]:hidden">
            <span className="sr-only">Menu</span>
            <span aria-hidden="true" className="h-px w-7 bg-chrome-100" />
            <span
              aria-hidden="true"
              className="h-px w-7 bg-chrome-100 group-open:w-4 group-open:bg-acid motion-safe:transition-all"
            />
            <span aria-hidden="true" className="h-px w-7 bg-chrome-100" />
          </summary>
          <ul className="absolute right-0 top-full mt-3 w-60 border border-white/10 bg-carbon-900/95 p-2 text-sm uppercase tracking-[0.15em] backdrop-blur-md">
            {navLinks.map((link) => (
              <li key={link.href}>
                <NavLink
                  href={link.href}
                  className="group flex items-baseline gap-3 px-3 py-3 text-chrome-100 transition-colors hover:bg-carbon-800 hover:text-acid aria-[current=page]:text-acid"
                >
                  <span className="font-mono text-xs text-chrome-500 group-aria-[current=page]:text-acid">
                    {link.index}
                  </span>
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </details>
      </nav>
    </header>
  );
}
