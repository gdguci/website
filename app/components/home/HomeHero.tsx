export function HomeHero() {
  return (
    <div className="space-y-5">
      <p className="font-mono text-xs tracking-widest text-foreground/60">
        GOOGLE DEVELOPER GROUP ON CAMPUS @ UCI
      </p>
      <h1 className="text-balance text-4xl font-bold leading-[1.1] tracking-tight sm:text-6xl">
        Empowering the next generation of tech leaders at{" "}
        <span className="text-bwai-blue">UCI</span>.
      </h1>
      <p className="max-w-xl text-pretty text-base leading-relaxed text-foreground/80 sm:text-lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>

      <div id="join" className="flex flex-wrap gap-3 pt-2">
        <a
          className="rounded-full bg-bwai-blue px-5 py-2.5 text-sm font-medium text-white no-underline shadow-sm transition hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-bwai-blue/40"
          href="#"
        >
          Join GDG@UCI
        </a>
        <a
          className="rounded-full border border-bwai-blue bg-surface px-5 py-2.5 text-sm font-medium text-bwai-blue no-underline shadow-sm transition hover:bg-bwai-pastel-blue focus:outline-none focus:ring-2 focus:ring-bwai-blue/30"
          href="#events"
        >
          See our events
        </a>
        <a
          className="rounded-full border border-bwai-green bg-surface px-5 py-2.5 text-sm font-medium text-bwai-green no-underline shadow-sm transition hover:bg-bwai-pastel-green focus:outline-none focus:ring-2 focus:ring-bwai-green/30"
          href="#"
        >
          Join the Discord
        </a>
      </div>
    </div>
  );
}

