import { capabilityGroups } from "@/data/capabilities";
import { StaggerGroup, StaggerItem } from "@/components/ui/Reveal";
import { EditorialNumber } from "@/components/ui/EditorialNumber";

export function Capabilities() {
  return (
    <StaggerGroup className="grid gap-x-10 gap-y-10 border-t border-hairline pt-10 sm:grid-cols-2 lg:grid-cols-4">
      {capabilityGroups.map((group) => (
        <StaggerItem key={group.label}>
          <EditorialNumber value={group.index} className="text-xs" />
          <h3 className="mt-3 text-sm font-semibold tracking-wide text-fg">
            {group.label}
          </h3>
          <ul className="mt-4 flex flex-col gap-1.5">
            {group.items.map((item) => (
              <li key={item} className="text-sm text-fg-muted">
                {item}
              </li>
            ))}
          </ul>
        </StaggerItem>
      ))}
    </StaggerGroup>
  );
}
