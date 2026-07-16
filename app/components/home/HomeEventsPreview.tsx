const eventCategories = [
  {
    title: "Technical Workshops",
    description:
      "Hands-on sessions on AI/ML, web development, cloud platforms, and developer tools.",
    tone: "red",
  },
  {
    title: "Professional Dev",
    description:
      "Resume reviews, mock interviews, and tech talks from industry professionals.",
    tone: "blue",
  },
  {
    title: "Socials & Community",
    description:
      "Game nights, study halls, and events to connect with fellow builders.",
    tone: "green",
  },
] as const;

function toneToBg(tone: (typeof eventCategories)[number]["tone"]) {
  switch (tone) {
    case "red":   return "bg-bwai-pastel-red";
    case "blue":  return "bg-bwai-pastel-blue";
    case "green": return "bg-bwai-pastel-green";
  }
}

function toneToAccent(tone: (typeof eventCategories)[number]["tone"]) {
  switch (tone) {
    case "red":   return "bg-bwai-red";
    case "blue":  return "bg-bwai-blue";
    case "green": return "bg-bwai-green";
  }
}

export function HomeEventsPreview() {
  return (
    <section id="events" className="mt-14">
      <div className="rounded-3xl bg-white/80 p-6 text-bwai-black-02 shadow-md ring-1 ring-black/5 backdrop-blur-sm">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Events</h2>
            <p className="mt-1 text-sm text-bwai-black-02/55">
              Something for every kind of builder.
            </p>
          </div>
          <a
            href="/events"
            className="group inline-flex items-center gap-1 text-sm font-medium text-bwai-blue no-underline transition-all hover:underline"
          >
            Explore all events
            <span
              className="transition-transform duration-150 group-hover:translate-x-0.5"
              aria-hidden="true"
            >
              →
            </span>
          </a>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {eventCategories.map((category) => (
            <div
              key={category.title}
              className={`relative overflow-hidden rounded-2xl ${toneToBg(category.tone)} p-5 ring-1 ring-black/5 transition-all duration-200 hover:-translate-y-1 hover:shadow-md`}
            >
              <div
                className={`absolute inset-x-0 top-0 h-[3px] ${toneToAccent(category.tone)}`}
              />
              <p className="pt-1 text-sm font-semibold">{category.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-bwai-black-02/70">
                {category.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
