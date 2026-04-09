/**
 * Franchise-aware theming system.
 * Derives the franchise from the active theme ID and provides
 * per-franchise labels, decorations, and configuration.
 */

export type Franchise = "megaman" | "pokemon" | "overwatch";

export function getFranchise(themeId: string): Franchise {
  if (themeId.startsWith("pokemon-")) return "pokemon";
  if (["overwatch", "dva", "genji", "reaper"].includes(themeId)) return "overwatch";
  return "megaman";
}

export function getCurrentFranchise(): Franchise {
  const theme = document.documentElement.getAttribute("data-theme") || "megaman";
  return getFranchise(theme);
}

export interface FranchiseConfig {
  franchise: Franchise;
  // Header / nav
  mobileNavTitle: string;
  mobileNavHint: string;
  // Hero
  readyLabel: string;
  bioTitle: string;
  taglineFlavor: string;
  // Skills
  skillBarLabel: string;
  // Divider style
  dividerStyle: "diamond" | "pokeball" | "chevron";
  // List bullet prefixes
  listPrefix: string;
  achievementPrefix: string;
  // Footer flavor
  builtWithLabel: string;
}

const configs: Record<Franchise, FranchiseConfig> = {
  megaman: {
    franchise: "megaman",
    mobileNavTitle: "STAGE SELECT",
    mobileNavHint: "SELECT A STAGE",
    readyLabel: "READY",
    bioTitle: "MISSION BRIEF",
    taglineFlavor: "Mega Man",
    skillBarLabel: "HP",
    dividerStyle: "diamond",
    listPrefix: ">",
    achievementPrefix: "//",
    builtWithLabel: "BUILT WITH",
  },
  pokemon: {
    franchise: "pokemon",
    mobileNavTitle: "POKEMON CENTER",
    mobileNavHint: "CHOOSE YOUR PATH",
    readyLabel: "GO!",
    bioTitle: "TRAINER CARD",
    taglineFlavor: "Pokemon",
    skillBarLabel: "EXP",
    dividerStyle: "pokeball",
    listPrefix: "\u2605",
    achievementPrefix: "\u25cf",
    builtWithLabel: "CRAFTED WITH",
  },
  overwatch: {
    franchise: "overwatch",
    mobileNavTitle: "HERO SELECT",
    mobileNavHint: "CHOOSE YOUR HERO",
    readyLabel: "ONLINE",
    bioTitle: "HERO PROFILE",
    taglineFlavor: "Overwatch",
    skillBarLabel: "PWR",
    dividerStyle: "chevron",
    listPrefix: ">>",
    achievementPrefix: "//",
    builtWithLabel: "POWERED BY",
  },
};

export function getFranchiseConfig(franchise: Franchise): FranchiseConfig {
  return configs[franchise];
}
