const eventCategories = [
  {
    title: "Technical Workshops",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tone: "red",
  },
  {
    title: "Professional Development",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tone: "blue",
  },
  {
    title: "Socials / Community",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tone: "green",
  },
] as const;

function toneToClassName(tone: (typeof eventCategories)[number]["tone"]) {
  switch (tone) {
    case "red":
      return "bg-bwai-pastel-red";
    case "blue":
      return "bg-bwai-pastel-blue";
    case "green":
      return "bg-bwai-pastel-green";
  }
}

export function HomeEventsPreview() {
  return (
    <section id="events" className="mt-14">
      <div className="rounded-3xl bg-bwai-off-white p-6 text-bwai-black-02 shadow-sm ring-1 ring-black/5">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="text-2xl font-bold tracking-tight">Events</h2>
          <p className="text-sm text-bwai-black-02/70">
            Lorem ipsum dolor sit amet.
          </p>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {eventCategories.map((category) => (
            <div
              key={category.title}
              className={`rounded-2xl ${toneToClassName(category.tone)} p-5 ring-1 ring-black/5`}
            >
              <p className="text-sm font-medium">{category.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-bwai-black-02/80">
                {category.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

