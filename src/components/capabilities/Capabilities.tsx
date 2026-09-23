import { capabilityGroups } from "@/data/capabilities";
import { StaggerGroup, StaggerItem } from "@/components/ui/Reveal";
import { CapabilityCard } from "@/components/capabilities/CapabilityCard";

export function Capabilities() {
  return (
    <StaggerGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {capabilityGroups.map((group) => (
        <StaggerItem key={group.label} className="h-full">
          <CapabilityCard group={group} items={group.items} />
        </StaggerItem>
      ))}
    </StaggerGroup>
  );
}
