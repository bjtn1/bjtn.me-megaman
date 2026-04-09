export default function StageDivider() {
  return (
    <div className="relative h-8 w-full my-4 flex items-center justify-center overflow-hidden" role="separator" aria-hidden="true">
      <div className="flex-1 h-px" style={{ background: `linear-gradient(to right, transparent, color-mix(in srgb, var(--t-primary) 30%, transparent), color-mix(in srgb, var(--t-primary) 50%, transparent))` }} />
      <div className="mx-4 flex items-center gap-1.5">
        <div className="w-1 h-1 rotate-45" style={{ backgroundColor: "color-mix(in srgb, var(--t-primary) 40%, transparent)" }} />
        <div className="w-2 h-2 rotate-45 animate-glow-pulse" style={{ backgroundColor: "color-mix(in srgb, var(--t-primary) 60%, transparent)" }} />
        <div className="w-1 h-1 rotate-45" style={{ backgroundColor: "color-mix(in srgb, var(--t-primary) 40%, transparent)" }} />
      </div>
      <div className="flex-1 h-px" style={{ background: `linear-gradient(to left, transparent, color-mix(in srgb, var(--t-primary) 30%, transparent), color-mix(in srgb, var(--t-primary) 50%, transparent))` }} />
    </div>
  );
}
