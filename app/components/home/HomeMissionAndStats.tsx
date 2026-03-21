const stats = [
  { label: "STAT 1", value: "Lorem", detail: "Ipsum dolor", tone: "blue" },
  { label: "STAT 2", value: "Lorem", detail: "Sit amet", tone: "green" },
  { label: "STAT 3", value: "Lorem", detail: "Consectetur", tone: "yellow" },
] as const;

function toneToClassName(tone: (typeof stats)[number]["tone"]) {
  switch (tone) {
    case "blue":
      return "bg-bwai-pastel-blue";
    case "green":
      return "bg-bwai-pastel-green";
    case "yellow":
      return "bg-bwai-pastel-yellow";
  }
}

export function HomeMissionAndStats() {
  return (
    <div className="rounded-3xl bg-bwai-off-white p-6 text-bwai-black-02 shadow-sm ring-1 ring-black/5">
      <p className="text-sm font-medium">Mission (short)</p>
      <p className="mt-3 text-base leading-relaxed text-bwai-black-02/80">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>

      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className={`rounded-2xl ${toneToClassName(stat.tone)} p-4 ring-1 ring-black/5`}
          >
            <p className="font-mono text-xs text-bwai-black-02/60">
              {stat.label}
            </p>
            <p className="mt-2 text-2xl font-bold">{stat.value}</p>
            <p className="mt-1 text-sm text-bwai-black-02/75">{stat.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

