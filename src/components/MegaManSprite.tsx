import { motion } from "framer-motion";
import { useState, useEffect } from "react";

/**
 * Pixel art character sprite that adapts to the active theme.
 * Colors are read from CSS variables so the sprite matches
 * Mega Man (blue), Proto Man (red), Bass (purple), Zero (crimson), or Roll (pink).
 */
export default function MegaManSprite({
  size = 120,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  const [colors, setColors] = useState({
    outline: "#0070c0",
    body: "#00a8e8",
    highlight: "#00d4ff",
    gem: "#00e5ff",
  });

  useEffect(() => {
    const styles = getComputedStyle(document.documentElement);
    setColors({
      outline: styles.getPropertyValue("--t-sprite-outline").trim() || "#0070c0",
      body: styles.getPropertyValue("--t-sprite-body").trim() || "#00a8e8",
      highlight: styles.getPropertyValue("--t-sprite-highlight").trim() || "#00d4ff",
      gem: styles.getPropertyValue("--t-sprite-gem").trim() || "#00e5ff",
    });
  }, []);

  const O = colors.outline;
  const B = colors.body;
  const H = colors.highlight;
  const G = colors.gem;
  const S = "#f5c6a0"; // skin
  const M = "#d4956a"; // mouth
  const W = "#ffffff"; // eye white
  const E = "#0a0e1a"; // eye dark

  const pixels: [number, number, string][] = [
    // Helmet top
    [5,0,O],[6,0,O],[7,0,O],[8,0,O],[9,0,O],[10,0,O],
    [4,1,O],[5,1,B],[6,1,B],[7,1,B],[8,1,B],[9,1,B],[10,1,B],[11,1,O],
    [3,2,O],[4,2,B],[5,2,H],[6,2,H],[7,2,B],[8,2,B],[9,2,B],[10,2,B],[11,2,B],[12,2,O],
    [3,3,O],[4,3,B],[5,3,H],[6,3,G],[7,3,B],[8,3,B],[9,3,B],[10,3,B],[11,3,B],[12,3,O],
    // Face
    [3,4,O],[4,4,S],[5,4,S],[6,4,S],[7,4,S],[8,4,S],[9,4,S],[10,4,S],[11,4,S],[12,4,O],
    [3,5,O],[4,5,S],[5,5,W],[6,5,E],[7,5,S],[8,5,S],[9,5,W],[10,5,E],[11,5,S],[12,5,O],
    [4,6,S],[5,6,S],[6,6,S],[7,6,S],[8,6,S],[9,6,S],[10,6,S],[11,6,S],
    [4,7,S],[5,7,S],[6,7,M],[7,7,M],[8,7,M],[9,7,S],[10,7,S],[11,7,S],
    // Body
    [4,8,O],[5,8,B],[6,8,B],[7,8,B],[8,8,B],[9,8,B],[10,8,B],[11,8,O],
    [3,9,O],[4,9,B],[5,9,H],[6,9,B],[7,9,B],[8,9,B],[9,9,B],[10,9,B],[11,9,B],[12,9,O],
    // Buster arm
    [12,8,O],[13,8,B],[14,8,B],[15,8,O],
    [12,9,B],[13,9,H],[14,9,H],[15,9,O],
    [12,10,O],[13,10,B],[14,10,B],[15,10,O],
    // Waist
    [5,10,O],[6,10,B],[7,10,B],[8,10,B],[9,10,B],[10,10,O],
    [4,11,O],[5,11,B],[6,11,B],[7,11,O],[8,11,O],[9,11,B],[10,11,B],[11,11,O],
    // Legs
    [3,12,O],[4,12,B],[5,12,B],[6,12,O],[9,12,O],[10,12,B],[11,12,B],[12,12,O],
    [2,13,O],[3,13,B],[4,13,B],[5,13,O],[10,13,O],[11,13,B],[12,13,B],[13,13,O],
    // Boots
    [1,14,O],[2,14,B],[3,14,B],[4,14,B],[5,14,O],[10,14,O],[11,14,B],[12,14,B],[13,14,B],[14,14,O],
    [1,15,O],[2,15,O],[3,15,O],[4,15,O],[5,15,O],[10,15,O],[11,15,O],[12,15,O],[13,15,O],[14,15,O],
  ];

  return (
    <div className={className} style={{ width: size, height: size }} aria-hidden="true" role="img">
      <svg width={size} height={size} viewBox="0 0 16 16" style={{ imageRendering: "pixelated" }} focusable="false">
        {pixels.map(([x, y, color], i) => (
          <rect key={i} x={x} y={y} width={1} height={1} fill={color} />
        ))}
      </svg>
    </div>
  );
}

export function BusterShot({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-1 ${className}`} aria-hidden="true">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="rounded-full"
          style={{
            width: 4 + i * 2,
            height: 4 + i * 2,
            backgroundColor: "var(--t-accent)",
            boxShadow: `0 0 ${4 + i * 3}px var(--t-accent), 0 0 ${8 + i * 4}px var(--t-primary)`,
          }}
          animate={{ x: [0, 30 + i * 10], opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.2, ease: "easeOut", repeatDelay: 1.5 }}
        />
      ))}
    </div>
  );
}
