import { personalInfo } from "@/lib/data";

export default function Footer() {
  return (
    <footer
      className="py-8"
      style={{
        borderTop: "2px solid color-mix(in srgb, var(--t-primary) 20%, transparent)",
        backgroundColor: "color-mix(in srgb, var(--t-bg-deep) 80%, transparent)",
      }}
    >
      <div className="container max-w-5xl mx-auto px-4 sm:px-6 md:px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs font-mono" style={{ color: "var(--t-text-muted)" }}>
            &copy; {new Date().getFullYear()} {personalInfo.name}
          </p>
          <div className="flex items-center gap-2">
            <div className="flex gap-1" aria-hidden="true">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-sm" style={{ backgroundColor: "color-mix(in srgb, var(--t-primary) 40%, transparent)" }} />
              ))}
            </div>
            <p className="pixel-text text-[7px]" style={{ color: "var(--t-text-muted)" }}>
              BUILT WITH{" "}
              <a
                href="https://astro.build"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors"
                style={{ color: "var(--t-primary)" }}
                aria-label="Astro framework website (opens in new tab)"
              >
                ASTRO
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
