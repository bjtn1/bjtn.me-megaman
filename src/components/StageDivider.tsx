import { useFranchise } from "@/lib/useFranchise";

function DiamondCenter() {
  return (
    <div className="mx-4 flex items-center gap-1.5">
      <div className="w-1 h-1 rotate-45" style={{ backgroundColor: "color-mix(in srgb, var(--t-primary) 40%, transparent)" }} />
      <div className="w-2 h-2 rotate-45 animate-glow-pulse" style={{ backgroundColor: "color-mix(in srgb, var(--t-primary) 60%, transparent)" }} />
      <div className="w-1 h-1 rotate-45" style={{ backgroundColor: "color-mix(in srgb, var(--t-primary) 40%, transparent)" }} />
    </div>
  );
}

function PokeballCenter() {
  return (
    <div className="mx-4 flex items-center gap-2">
      <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "color-mix(in srgb, var(--t-primary) 30%, transparent)" }} />
      <div
        className="w-4 h-4 rounded-full border-2 relative animate-glow-pulse"
        style={{ borderColor: "color-mix(in srgb, var(--t-primary) 60%, transparent)", backgroundColor: "transparent" }}
      >
        <div
          className="absolute top-1/2 left-0 right-0 h-[2px] -translate-y-1/2"
          style={{ backgroundColor: "color-mix(in srgb, var(--t-primary) 60%, transparent)" }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-1.5 h-1.5 rounded-full -translate-x-1/2 -translate-y-1/2"
          style={{ backgroundColor: "var(--t-primary)" }}
        />
      </div>
      <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "color-mix(in srgb, var(--t-primary) 30%, transparent)" }} />
    </div>
  );
}

function ChevronCenter() {
  return (
    <div className="mx-4 flex items-center gap-0.5">
      {[0.3, 0.5, 0.7, 0.5, 0.3].map((opacity, i) => (
        <div
          key={i}
          className="w-2 h-3"
          style={{
            clipPath: "polygon(0% 0%, 100% 50%, 0% 100%)",
            backgroundColor: `color-mix(in srgb, var(--t-primary) ${opacity * 100}%, transparent)`,
          }}
        />
      ))}
    </div>
  );
}

export default function StageDivider() {
  const config = useFranchise();

  const center =
    config.dividerStyle === "pokeball" ? <PokeballCenter /> :
    config.dividerStyle === "chevron" ? <ChevronCenter /> :
    <DiamondCenter />;

  return (
    <div className="relative h-8 w-full my-4 flex items-center justify-center overflow-hidden" role="separator" aria-hidden="true">
      <div className="flex-1 h-px" style={{ background: `linear-gradient(to right, transparent, color-mix(in srgb, var(--t-primary) 30%, transparent), color-mix(in srgb, var(--t-primary) 50%, transparent))` }} />
      {center}
      <div className="flex-1 h-px" style={{ background: `linear-gradient(to left, transparent, color-mix(in srgb, var(--t-primary) 30%, transparent), color-mix(in srgb, var(--t-primary) 50%, transparent))` }} />
    </div>
  );
}
