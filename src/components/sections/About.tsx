import SectionHeading from "@/components/ui/SectionHeading";

const driverCard = [
  { label: "Driver", value: "[ Your name ]" },
  { label: "Role", value: "Creative developer" },
  { label: "Base", value: "[ City, Country ]" },
  { label: "Status", value: "Open to work" },
];

const stats = [
  { value: "04", label: "Seasons building" },
  { value: "23", label: "Projects shipped" },
  { value: "3D", label: "Web specialist" },
];

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="relative bg-carbon-950 pb-24 pt-32 md:pb-36 md:pt-44"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          id="about-title"
          index="04"
          eyebrow="Driver profile"
          title={
            <>
              Behind <span className="text-outline">the</span>
              <br />
              <span className="text-acid">visor</span>
            </>
          }
        />

        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-x-8">
          <dl className="h-fit border border-white/10 bg-carbon-900 bg-tech-grid md:col-span-4">
            {driverCard.map((row) => (
              <div
                key={row.label}
                className="flex justify-between gap-4 border-b border-white/10 px-5 py-4 last:border-b-0"
              >
                <dt className="font-mono text-[10px] uppercase tracking-[0.3em] text-chrome-500">
                  {row.label}
                </dt>
                <dd className="text-right font-mono text-xs uppercase tracking-[0.15em] text-chrome-100">
                  {row.value}
                </dd>
              </div>
            ))}
          </dl>

          <div className="space-y-6 text-lg leading-relaxed text-chrome-300 md:col-span-7 md:col-start-6">
            <p>
              I build digital experiences the way race teams build cars —
              obsessing over every millisecond, every surface, and every detail
              that separates a podium from the pack.
            </p>
            <p>
              APEX is my proving ground: a place to push real-time 3D,
              motion, and interface design while keeping performance and
              accessibility on the racing line.
            </p>
          </div>
        </div>

        <ul className="mt-20 grid grid-cols-3 border-y border-white/10">
          {stats.map((stat) => (
            <li
              key={stat.label}
              className="border-white/10 px-3 py-8 first:pl-0 not-last:border-r sm:px-8"
            >
              <p className="font-display text-5xl text-acid sm:text-7xl">{stat.value}</p>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.25em] text-chrome-500 sm:text-xs">
                {stat.label}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
