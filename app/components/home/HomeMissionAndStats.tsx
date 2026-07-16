import { toneToAccent, toneToBg } from "../tone";

const stats = [
  { label: "Focus", value: "Build", detail: "projects & workshops", tone: "blue" },
  { label: "Community", value: "Open", detail: "all majors welcome", tone: "green" },
  { label: "Founded", value: "2025", detail: "GDG on Campus @ UCI", tone: "yellow" },
] as const;

export function HomeMissionAndStats() {
  return (
    <div className="rounded-3xl bg-white/80 p-6 text-bwai-black-02 shadow-md ring-1 ring-black/5 backdrop-blur-sm">
      <p className="text-xs font-semibold uppercase tracking-wider text-bwai-black-02/45">
        Our Mission
      </p>
      <p className="mt-3 text-base leading-relaxed text-bwai-black-02/80">
        GDGUCI empowers students to unleash their potential through projects,
        hands-on workshops, and networking — welcoming anyone exploring
        technology, innovation, and collaboration.
      </p>

      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className={`relative overflow-hidden rounded-2xl ${toneToBg(stat.tone)} p-4 ring-1 ring-black/5`}
          >
            <div
              className={`absolute inset-x-0 top-0 h-[3px] ${toneToAccent(stat.tone)}`}
            />
            <p className="pt-1 font-mono text-xs font-medium uppercase tracking-wider text-bwai-black-02/50">
              {stat.label}
            </p>
            <p className="mt-2 text-3xl font-bold tracking-tight">{stat.value}</p>
            <p className="mt-0.5 text-sm text-bwai-black-02/65">{stat.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
