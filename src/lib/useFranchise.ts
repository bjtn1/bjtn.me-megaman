import { useState, useEffect } from "react";
import { getCurrentFranchise, getFranchiseConfig, type Franchise, type FranchiseConfig } from "./franchise";

/**
 * React hook that reactively tracks the current franchise.
 * Listens for data-theme attribute changes on <html> via MutationObserver.
 */
export function useFranchise(): FranchiseConfig {
  const [franchise, setFranchise] = useState<Franchise>(getCurrentFranchise);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setFranchise(getCurrentFranchise());
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });
    return () => observer.disconnect();
  }, []);

  return getFranchiseConfig(franchise);
}
