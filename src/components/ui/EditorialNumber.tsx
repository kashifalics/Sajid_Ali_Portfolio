import { cn } from "@/lib/utils";

export function EditorialNumber({
  value,
  className,
}: {
  value: string;
  className?: string;
}) {
  return (
    <span className={cn("font-mono text-fg-faint", className)} aria-hidden="true">
      {value}
    </span>
  );
}
