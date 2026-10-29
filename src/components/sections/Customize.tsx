import HelmetPlaceholder from "@/components/ui/HelmetPlaceholder";
import SectionHeading from "@/components/ui/SectionHeading";

type Swatch = {
  name: string;
  className: string;
};

const swatchGroups: { label: string; swatches: Swatch[] }[] = [
  {
    label: "Shell",
    swatches: [
      { name: "Acid", className: "bg-acid" },
      { name: "Carbon", className: "bg-carbon" },
      { name: "Chrome", className: "bg-linear-to-br from-chrome-100 to-chrome-500" },
      { name: "Signal red", className: "bg-[#ff2a2a]" },
    ],
  },
  {
    label: "Visor",
    swatches: [
      { name: "Clear", className: "bg-chrome-100/20" },
      { name: "Smoke", className: "bg-carbon-700" },
      { name: "Iridium", className: "bg-linear-to-br from-fuchsia-500 via-cyan-400 to-acid" },
      { name: "Gold", className: "bg-linear-to-br from-amber-200 to-amber-600" },
    ],
  },
];

const finishes = ["Gloss", "Matte", "Satin", "Mirror"];

export default function Customize() {
  return (
    <section
      id="customize"
      aria-labelledby="customize-title"
      className="relative bg-carbon pb-24 pt-32 md:pb-36 md:pt-44"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-4 md:grid-cols-12 md:gap-x-8 md:px-8">
        <div className="md:col-span-6 md:col-start-7 md:row-start-1">
          <SectionHeading
            id="customize-title"
            index="03"
            eyebrow="Configurator"
            title={
              <>
                Make it
                <br />
                <span className="text-chrome">yours</span>
              </>
            }
          />
          <p className="mt-8 max-w-sm leading-relaxed text-chrome-300">
            Spec your own lid — shell color, visor tint, and finish. Live
            preview arrives with the 3D build.
          </p>

          <div className="mt-12 space-y-10">
            {swatchGroups.map((group) => (
              <div key={group.label}>
                <h3 className="font-mono text-xs uppercase tracking-[0.3em] text-chrome-500">
                  {group.label}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-5">
                  {group.swatches.map((swatch, i) => (
                    <li key={swatch.name} className="flex flex-col items-center gap-2">
                      <span
                        aria-hidden="true"
                        className={`size-12 rounded-full border border-white/20 ${swatch.className} ${
                          i === 0 ? "ring-2 ring-acid ring-offset-4 ring-offset-carbon-950" : ""
                        }`}
                      />
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-chrome-300">
                        {swatch.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <h3 className="font-mono text-xs uppercase tracking-[0.3em] text-chrome-500">
                Finish
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {finishes.map((finish, i) => (
                  <li
                    key={finish}
                    className={`border px-4 py-2 font-mono text-xs uppercase tracking-[0.2em] ${
                      i === 0
                        ? "border-acid text-acid"
                        : "border-white/15 text-chrome-300"
                    }`}
                  >
                    {finish}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="mt-12 inline-block border border-dashed border-white/20 px-4 py-3 font-mono text-xs uppercase tracking-[0.2em] text-chrome-500">
            Build code <span className="text-acid">APX-AC-CL-GL</span> {"//"} Configurator offline
          </p>
        </div>

        <HelmetPlaceholder
          label="Configurator preview // live materials"
          className="aspect-4/5 md:col-span-6 md:row-start-1 md:mt-32"
        />
      </div>
    </section>
  );
}
