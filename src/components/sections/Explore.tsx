import HelmetPlaceholder from "@/components/ui/HelmetPlaceholder";
import SectionHeading from "@/components/ui/SectionHeading";

// Positions are full class strings so Tailwind can detect them at build time.
const hotspots = [
  {
    id: "01",
    name: "Shell",
    detail: "Multi-layer carbon composite, built to FIA 8860 spec.",
    position: "left-[30%] top-[30%]",
  },
  {
    id: "02",
    name: "Aero spoiler",
    detail: "Rear wing that keeps the helmet stable above 300 km/h.",
    position: "left-[70%] top-[24%]",
  },
  {
    id: "03",
    name: "Visor",
    detail: "3 mm anti-fog polycarbonate with tear-off posts.",
    position: "left-[42%] top-[50%]",
  },
  {
    id: "04",
    name: "HANS anchors",
    detail: "Head and neck support mounting points.",
    position: "left-[72%] top-[70%]",
  },
];

export default function Explore() {
  return (
    <section
      id="explore"
      aria-labelledby="explore-title"
      className="relative bg-carbon-950 pb-24 pt-32 md:pb-36 md:pt-44"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-4 md:grid-cols-12 md:gap-x-8 md:px-8">
        <div className="md:col-span-5">
          <SectionHeading
            id="explore-title"
            index="02"
            eyebrow="360° inspection"
            title={
              <>
                Every
                <br />
                <span className="text-acid">detail</span>
              </>
            }
          />
          <p className="mt-8 max-w-sm leading-relaxed text-chrome-300">
            Rotate, zoom, and inspect the helmet from every angle. Hotspots
            break down the engineering behind each component.
          </p>

          <ol className="mt-12 border-t border-white/10">
            {hotspots.map((spot) => (
              <li
                key={spot.id}
                className="grid grid-cols-[3rem_1fr] gap-x-4 border-b border-white/10 py-5"
              >
                <span className="font-mono text-xs text-acid">{spot.id}</span>
                <div>
                  <h3 className="font-display text-xl uppercase tracking-wide">
                    {spot.name}
                  </h3>
                  <p className="mt-1 text-sm text-chrome-500">{spot.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="md:col-span-7 md:-mt-12">
          <HelmetPlaceholder
            label="Explore viewer // drag to rotate · scroll to zoom"
            className="aspect-square"
          >
            {hotspots.map((spot) => (
              <span
                key={spot.id}
                aria-hidden="true"
                className={`absolute flex size-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-acid bg-carbon-950/80 font-mono text-[10px] text-acid ${spot.position}`}
              >
                {spot.id}
              </span>
            ))}
          </HelmetPlaceholder>
        </div>
      </div>
    </section>
  );
}
