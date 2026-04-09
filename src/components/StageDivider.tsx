export default function StageDivider() {
  return (
    <div className="relative h-8 w-full my-4 flex items-center justify-center overflow-hidden">
      {/* Left line */}
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#00a8e8]/30 to-[#00a8e8]/50" />

      {/* Center diamond */}
      <div className="mx-4 flex items-center gap-1.5">
        <div className="w-1 h-1 bg-[#00a8e8]/40 rotate-45" />
        <div className="w-2 h-2 bg-[#00a8e8]/60 rotate-45 animate-glow-pulse" />
        <div className="w-1 h-1 bg-[#00a8e8]/40 rotate-45" />
      </div>

      {/* Right line */}
      <div className="flex-1 h-px bg-gradient-to-l from-transparent via-[#00a8e8]/30 to-[#00a8e8]/50" />
    </div>
  );
}
