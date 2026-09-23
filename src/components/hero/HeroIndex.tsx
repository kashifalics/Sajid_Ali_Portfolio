import { EditorialNumber } from "@/components/ui/EditorialNumber";

const items = [
  { index: "01", title: "16+ Years", detail: "Enterprise delivery" },
  { index: "02", title: "Regulated Systems", detail: "Financial & insurance" },
  { index: "03", title: "Architecture", detail: "Cloud / APIs / microservices" },
  { index: "04", title: "Engineering", detail: "Full SDLC / .NET / DevOps" },
];

export function HeroIndex() {
  return (
    <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-7 border-t border-hairline pt-7 sm:grid-cols-4 lg:mt-16">
      {items.map((item) => (
        <div key={item.index}>
          <EditorialNumber value={item.index} className="text-xs" />
          <p className="mt-2 text-sm font-semibold text-fg">{item.title}</p>
          <p className="mt-0.5 text-xs text-fg-faint">{item.detail}</p>
        </div>
      ))}
    </div>
  );
}
