import { NetworkCanvas } from "@/components/background/NetworkCanvas";

export function SiteBackground() {
  return (
    <div className="animate-bg-fade-in pointer-events-none fixed inset-0 z-0 overflow-hidden bg-canvas">
      <div className="absolute inset-0 bg-grid" />
      <NetworkCanvas />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-canvas/20 to-canvas" />
    </div>
  );
}
