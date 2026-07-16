export function HomeHero() {
  return (
    <div className="space-y-6">
      <div className="inline-flex items-center gap-1.5 rounded-full border border-bwai-blue/20 bg-white/70 px-3 py-1 text-xs font-medium text-bwai-blue shadow-sm backdrop-blur-sm">
        <span className="h-1.5 w-1.5 rounded-full bg-bwai-blue" aria-hidden="true" />
        Google Developer Group on Campus @ UCI
      </div>

      <h1 className="text-balance text-4xl font-bold leading-[1.1] tracking-tight sm:text-6xl">
        Empowering the next generation of tech leaders at{" "}
        <span className="bg-gradient-to-r from-bwai-blue to-bwai-green bg-clip-text text-transparent">
          UCI
        </span>
        .
      </h1>

      <p className="max-w-xl text-pretty text-base leading-relaxed text-foreground/70 sm:text-lg">
        A student-run community for peer-to-peer learning — bridging classroom
        theory with real projects, mentors, and the global Google Developer
        ecosystem.
      </p>

      <div id="join" className="flex flex-wrap gap-3 pt-1">
        <a
          className="group inline-flex items-center gap-2 rounded-full bg-bwai-blue px-5 py-2.5 text-sm font-medium text-white no-underline shadow-sm transition-all duration-150 hover:brightness-110 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-bwai-blue/40"
          href="/contact"
        >
          Join GDG@UCI
          <span
            className="transition-transform duration-150 group-hover:translate-x-0.5"
            aria-hidden="true"
          >
            →
          </span>
        </a>
        <a
          className="inline-flex items-center gap-2 rounded-full border border-bwai-blue/35 bg-white/70 px-5 py-2.5 text-sm font-medium text-bwai-blue no-underline shadow-sm backdrop-blur-sm transition-all duration-150 hover:border-bwai-blue/70 hover:bg-bwai-pastel-blue focus:outline-none focus:ring-2 focus:ring-bwai-blue/30"
          href="/events"
        >
          See our events
        </a>
        <a
          className="inline-flex items-center gap-2 rounded-full border border-bwai-green/35 bg-white/70 px-5 py-2.5 text-sm font-medium text-bwai-green no-underline shadow-sm backdrop-blur-sm transition-all duration-150 hover:border-bwai-green/70 hover:bg-bwai-pastel-green focus:outline-none focus:ring-2 focus:ring-bwai-green/30"
          href="https://linktr.ee/gdguci"
          target="_blank"
          rel="noopener noreferrer"
        >
          Join the Discord
        </a>
      </div>

      <p className="text-xs text-foreground/45">
        Workshops · Projects · Networking · Founded 2025
      </p>
    </div>
  );
}
