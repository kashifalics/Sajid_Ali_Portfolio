import { NetworkCanvas } from "@/components/background/NetworkCanvas";

export function SiteBackground() {
  return (
    <div className="animate-bg-fade-in pointer-events-none fixed inset-0 z-0 overflow-hidden bg-canvas">
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute -top-40 left-1/4 h-[560px] w-[560px] rounded-full bg-glow-a blur-3xl" />
      <div className="absolute top-1/3 -right-32 h-[480px] w-[480px] rounded-full bg-glow-b blur-3xl" />
      <div className="absolute bottom-0 left-0 h-[420px] w-[420px] rounded-full bg-glow-a opacity-60 blur-3xl" />
      <NetworkCanvas />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-canvas/20 to-canvas" />
    </div>
  );
}
