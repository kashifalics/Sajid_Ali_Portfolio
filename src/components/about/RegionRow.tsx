import { MapPin } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

// Countries and context pulled directly from experience/education data —
// see src/data/experience.ts and src/data/content.ts (education). No new
// facts introduced here.
const regions = [
  {
    country: "United Arab Emirates",
    context: "Central Bank of the UAE · Abu Dhabi Insurance Authority · Evento Solutions",
  },
  {
    country: "Saudi Arabia",
    context: "RAL International",
  },
  {
    country: "Pakistan",
    context: "Education — NUCES, Islamabad",
  },
];

export function RegionRow() {
  return (
    <Reveal className="mt-10">
      <p className="text-xs font-semibold tracking-[0.14em] text-fg-faint uppercase">
        Works Internationally
      </p>
      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        {regions.map((region) => (
          <div
            key={region.country}
            className="flex items-start gap-3 rounded-xl border border-hairline bg-surface p-4"
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-3 text-accent">
              <MapPin size={15} aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm font-semibold text-fg">{region.country}</p>
              <p className="mt-0.5 text-xs leading-relaxed text-fg-muted">
                {region.context}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Reveal>
  );
}
