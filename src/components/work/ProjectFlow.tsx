function FlowConnector() {
  return (
    <svg
      viewBox="0 0 24 32"
      width="24"
      height="32"
      className="text-accent"
      aria-hidden="true"
    >
      <line
        x1="12"
        y1="0"
        x2="12"
        y2="21"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path d="M5 19 L12 29 L19 19 Z" fill="currentColor" />
    </svg>
  );
}

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
                <FlowConnector />
              </div>
            ) : null}
          </li>
        ))}
      </ol>
    </div>
  );
}
