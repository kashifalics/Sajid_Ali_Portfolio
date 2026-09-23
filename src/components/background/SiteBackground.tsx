export function SiteBackground() {
  return (
    <div className="animate-bg-fade-in pointer-events-none fixed inset-0 z-0 overflow-hidden bg-canvas">
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute inset-0 bg-grid-major" />
    </div>
  );
}
