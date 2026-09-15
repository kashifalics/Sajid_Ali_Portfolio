import { ChevronDown } from "lucide-react";

export function ProjectFlow({ steps }: { steps: string[] }) {
  return (
    <div className="rounded-2xl border border-hairline bg-raised p-6 sm:p-7">
      <p className="text-[11px] font-medium tracking-wide text-fg-faint uppercase">
        Conceptual System Flow
      </p>
      <ol className="mt-5 flex flex-col items-stretch">
        {steps.map((step, i) => (
          <li key={step}>
            <div className="rounded-lg border border-hairline bg-surface px-4 py-2.5 text-sm text-fg">
              {step}
            </div>
            {i < steps.length - 1 ? (
              <div className="flex justify-center py-1">
                <ChevronDown
                  size={14}
                  className="text-fg-faint"
                  aria-hidden="true"
                />
              </div>
            ) : null}
          </li>
        ))}
      </ol>
    </div>
  );
}
