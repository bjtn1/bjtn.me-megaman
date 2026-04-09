import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import MegaManSprite, { BusterShot } from "./MegaManSprite";
import { useFranchise } from "@/lib/useFranchise";

/**
 * Pokeball pixel art sprite (16x16 grid).
 */
function PokeballSprite({ size = 64 }: { size?: number }) {
  const [colors, setColors] = useState({
    outline: "#333",
    top: "#e03030",
    bottom: "#fff",
    band: "#333",
    button: "#fff",
    buttonRing: "#333",
  });

  useEffect(() => {
    const s = getComputedStyle(document.documentElement);
    const primary = s.getPropertyValue("--t-primary").trim() || "#e03030";
    setColors({
      outline: "#222",
      top: primary,
      bottom: "#f0f0f0",
      band: "#333",
      button: "#ffffff",
      buttonRing: "#555",
    });
  }, []);

  const O = colors.outline;
  const T = colors.top;
  const B = colors.bottom;
  const D = colors.band;
  const W = colors.button;
  const R = colors.buttonRing;

  // 16x16 pokeball pixel art
  const pixels: [number, number, string][] = [
    // Top curve
    [5,1,O],[6,1,O],[7,1,O],[8,1,O],[9,1,O],[10,1,O],
    [3,2,O],[4,2,T],[5,2,T],[6,2,T],[7,2,T],[8,2,T],[9,2,T],[10,2,T],[11,2,T],[12,2,O],
    [2,3,O],[3,3,T],[4,3,T],[5,3,T],[6,3,T],[7,3,T],[8,3,T],[9,3,T],[10,3,T],[11,3,T],[12,3,T],[13,3,O],
    [1,4,O],[2,4,T],[3,4,T],[4,4,T],[5,4,T],[6,4,T],[7,4,T],[8,4,T],[9,4,T],[10,4,T],[11,4,T],[12,4,T],[13,4,T],[14,4,O],
    [1,5,O],[2,5,T],[3,5,T],[4,5,T],[5,5,T],[6,5,T],[7,5,T],[8,5,T],[9,5,T],[10,5,T],[11,5,T],[12,5,T],[13,5,T],[14,5,O],
    [1,6,O],[2,6,T],[3,6,T],[4,6,T],[5,6,T],[6,6,T],[7,6,T],[8,6,T],[9,6,T],[10,6,T],[11,6,T],[12,6,T],[13,6,T],[14,6,O],
    // Band + button
    [1,7,O],[2,7,D],[3,7,D],[4,7,D],[5,7,D],[6,7,O],[7,7,R],[8,7,W],[9,7,R],[10,7,O],[11,7,D],[12,7,D],[13,7,D],[14,7,O],
    [1,8,O],[2,8,D],[3,8,D],[4,8,D],[5,8,D],[6,8,O],[7,8,R],[8,8,W],[9,8,R],[10,8,O],[11,8,D],[12,8,D],[13,8,D],[14,8,O],
    // Bottom half
    [1,9,O],[2,9,B],[3,9,B],[4,9,B],[5,9,B],[6,9,B],[7,9,B],[8,9,B],[9,9,B],[10,9,B],[11,9,B],[12,9,B],[13,9,B],[14,9,O],
    [1,10,O],[2,10,B],[3,10,B],[4,10,B],[5,10,B],[6,10,B],[7,10,B],[8,10,B],[9,10,B],[10,10,B],[11,10,B],[12,10,B],[13,10,B],[14,10,O],
    [1,11,O],[2,11,B],[3,11,B],[4,11,B],[5,11,B],[6,11,B],[7,11,B],[8,11,B],[9,11,B],[10,11,B],[11,11,B],[12,11,B],[13,11,B],[14,11,O],
    [2,12,O],[3,12,B],[4,12,B],[5,12,B],[6,12,B],[7,12,B],[8,12,B],[9,12,B],[10,12,B],[11,12,B],[12,12,B],[13,12,O],
    [3,13,O],[4,13,B],[5,13,B],[6,13,B],[7,13,B],[8,13,B],[9,13,B],[10,13,B],[11,13,B],[12,13,O],
    [5,14,O],[6,14,O],[7,14,O],[8,14,O],[9,14,O],[10,14,O],
  ];

  return (
    <div style={{ width: size, height: size }} aria-hidden="true">
      <svg width={size} height={size} viewBox="0 0 16 16" style={{ imageRendering: "pixelated" }}>
        {pixels.map(([x, y, color], i) => (
          <rect key={i} x={x} y={y} width={1} height={1} fill={color} />
        ))}
      </svg>
    </div>
  );
}

/**
 * Overwatch shield/logo pixel art (16x16 grid).
 */
function OverwatchSprite({ size = 64 }: { size?: number }) {
  const [colors, setColors] = useState({
    outline: "#b06c00",
    fill: "#f99e1a",
    highlight: "#ffbb44",
    accent: "#4a9eff",
  });

  useEffect(() => {
    const s = getComputedStyle(document.documentElement);
    setColors({
      outline: s.getPropertyValue("--t-sprite-outline").trim() || "#b06c00",
      fill: s.getPropertyValue("--t-sprite-body").trim() || "#f99e1a",
      highlight: s.getPropertyValue("--t-sprite-highlight").trim() || "#ffbb44",
      accent: s.getPropertyValue("--t-sprite-gem").trim() || "#4a9eff",
    });
  }, []);

  const O = colors.outline;
  const F = colors.fill;
  const H = colors.highlight;
  const A = colors.accent;

  // 16x16 shield shape
  const pixels: [number, number, string][] = [
    // Top
    [5,0,O],[6,0,O],[7,0,O],[8,0,O],[9,0,O],[10,0,O],
    [3,1,O],[4,1,F],[5,1,F],[6,1,H],[7,1,H],[8,1,H],[9,1,H],[10,1,F],[11,1,F],[12,1,O],
    [2,2,O],[3,2,F],[4,2,F],[5,2,H],[6,2,F],[7,2,F],[8,2,F],[9,2,F],[10,2,H],[11,2,F],[12,2,F],[13,2,O],
    [1,3,O],[2,3,F],[3,3,F],[4,3,F],[5,3,F],[6,3,F],[7,3,A],[8,3,A],[9,3,F],[10,3,F],[11,3,F],[12,3,F],[13,3,F],[14,3,O],
    [1,4,O],[2,4,F],[3,4,F],[4,4,F],[5,4,F],[6,4,A],[7,4,A],[8,4,A],[9,4,A],[10,4,F],[11,4,F],[12,4,F],[13,4,F],[14,4,O],
    [1,5,O],[2,5,F],[3,5,F],[4,5,F],[5,5,A],[6,5,A],[7,5,F],[8,5,F],[9,5,A],[10,5,A],[11,5,F],[12,5,F],[13,5,F],[14,5,O],
    [1,6,O],[2,6,F],[3,6,F],[4,6,F],[5,6,A],[6,6,F],[7,6,F],[8,6,F],[9,6,F],[10,6,A],[11,6,F],[12,6,F],[13,6,F],[14,6,O],
    // Middle
    [1,7,O],[2,7,F],[3,7,F],[4,7,F],[5,7,F],[6,7,F],[7,7,F],[8,7,F],[9,7,F],[10,7,F],[11,7,F],[12,7,F],[13,7,F],[14,7,O],
    [1,8,O],[2,8,F],[3,8,F],[4,8,F],[5,8,F],[6,8,F],[7,8,F],[8,8,F],[9,8,F],[10,8,F],[11,8,F],[12,8,F],[13,8,F],[14,8,O],
    // Narrowing
    [2,9,O],[3,9,F],[4,9,F],[5,9,F],[6,9,F],[7,9,F],[8,9,F],[9,9,F],[10,9,F],[11,9,F],[12,9,F],[13,9,O],
    [2,10,O],[3,10,F],[4,10,F],[5,10,F],[6,10,F],[7,10,F],[8,10,F],[9,10,F],[10,10,F],[11,10,F],[12,10,F],[13,10,O],
    [3,11,O],[4,11,F],[5,11,F],[6,11,F],[7,11,F],[8,11,F],[9,11,F],[10,11,F],[11,11,F],[12,11,O],
    [4,12,O],[5,12,F],[6,12,F],[7,12,F],[8,12,F],[9,12,F],[10,12,F],[11,12,O],
    [5,13,O],[6,13,F],[7,13,F],[8,13,F],[9,13,F],[10,13,O],
    [6,14,O],[7,14,F],[8,14,F],[9,14,O],
    [7,15,O],[8,15,O],
  ];

  return (
    <div style={{ width: size, height: size }} aria-hidden="true">
      <svg width={size} height={size} viewBox="0 0 16 16" style={{ imageRendering: "pixelated" }}>
        {pixels.map(([x, y, color], i) => (
          <rect key={i} x={x} y={y} width={1} height={1} fill={color} />
        ))}
      </svg>
    </div>
  );
}

/**
 * Franchise-specific projectile/accent animation.
 */
function PokeBounce({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`} aria-hidden="true">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="rounded-full"
          style={{
            width: 6,
            height: 6,
            backgroundColor: "var(--t-accent2)",
            boxShadow: `0 0 6px var(--t-accent2)`,
          }}
          animate={{ y: [0, -8, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15, ease: "easeInOut", repeatDelay: 1.2 }}
        />
      ))}
    </div>
  );
}

function OverwatchPulse({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-1.5 ${className}`} aria-hidden="true">
      {[0, 1, 2, 3].map((i) => (
        <motion.div
          key={i}
          style={{
            width: 3,
            height: 12 + i * 3,
            backgroundColor: "var(--t-accent)",
            borderRadius: 1,
            boxShadow: `0 0 8px var(--t-primary)`,
          }}
          animate={{ scaleY: [1, 1.5, 1], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.1, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

/**
 * Renders the correct sprite + accent animation for the active franchise.
 */
export default function FranchiseSprite({ size = 64 }: { size?: number }) {
  const config = useFranchise();

  if (config.franchise === "pokemon") {
    return (
      <div className="flex items-center gap-2">
        <div className="animate-float">
          <PokeballSprite size={size} />
        </div>
        <PokeBounce className="ml-1" />
      </div>
    );
  }

  if (config.franchise === "overwatch") {
    return (
      <div className="flex items-center gap-2">
        <div className="animate-float">
          <OverwatchSprite size={size} />
        </div>
        <OverwatchPulse className="ml-1" />
      </div>
    );
  }

  // Default: Mega Man
  return (
    <div className="flex items-center gap-2">
      <div className="animate-float">
        <MegaManSprite size={size} />
      </div>
      <BusterShot className="ml-1" />
    </div>
  );
}
