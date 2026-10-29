import NavLink from "@/components/layout/NavLink";
import { navLinks } from "@/lib/navigation";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-carbon">
      <div className="mx-auto max-w-7xl px-4 pt-20 md:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-x-8">
          <p className="font-display text-[clamp(2.5rem,7vw,6rem)] uppercase leading-[0.9] md:col-span-7">
            Ready for
            <br />
            <span className="text-acid">glory</span>
          </p>

          <nav aria-label="Footer" className="md:col-span-4 md:col-start-9">
            <ul className="border-t border-white/10 font-mono text-xs uppercase tracking-[0.2em]">
              {navLinks.map((link) => (
                <li key={link.href} className="border-b border-white/10">
                  <NavLink
                    href={link.href}
                    className="group flex justify-between py-4 text-chrome-300 transition-colors hover:text-acid aria-[current=page]:text-acid"
                  >
                    {link.label}
                    <span className="text-acid/60 group-aria-[current=page]:text-acid">{link.index}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <p
          aria-hidden="true"
          className="text-outline mt-16 select-none font-display text-[clamp(6rem,30vw,28rem)] uppercase leading-[0.75] opacity-40"
        >
          Apex
        </p>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 font-mono text-[10px] uppercase tracking-[0.3em] text-chrome-500 sm:flex-row sm:justify-between md:px-8">
          <p>© 2026 Apex</p>
          <p>
            <span className="text-acid">●</span> All systems nominal // Build 0.1.0
          </p>
        </div>
      </div>
    </footer>
  );
}
