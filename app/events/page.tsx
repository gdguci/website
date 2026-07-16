import { PageHeader } from "../components/PageHeader";
import { eventCategories } from "../components/eventCategories";
import { socials } from "../components/socials";
import { toneToAccent, toneToBg } from "../components/tone";

const pastEvents = [
  { title: "React Workshop (Pt. 1)", date: "2026" },
  { title: "Kickoff & Scripts Workshop", date: "2026" },
] as const;

export default function EventsPage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-14 sm:px-6">
      <PageHeader
        title="Events"
        description="Workshops, talks, hackathons, and socials — most events are free and open to all majors."
      />

      <div className="mt-8">
        <p className="text-xs font-semibold uppercase tracking-wider text-foreground/45">
          Categories
        </p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {eventCategories.map((category) => (
            <div
              key={category.slug}
              className={`relative overflow-hidden rounded-2xl ${toneToBg(category.tone)} p-5 ring-1 ring-black/5`}
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

      <div className="mt-12 rounded-3xl bg-white/80 p-6 ring-1 ring-black/5 shadow-md backdrop-blur-sm">
        <p className="text-xs font-semibold uppercase tracking-wider text-foreground/45">
          Where to find events
        </p>
        <p className="mt-2 text-sm leading-relaxed text-foreground/70">
          Upcoming dates are posted on Instagram and Discord. You can also
          browse the official GDG community page for RSVPs.
        </p>
        <ul className="mt-4 divide-y divide-black/8">
          <li className="flex items-center justify-between py-3 first:pt-0">
            <span className="font-mono text-xs uppercase tracking-wider text-foreground/45">
              Instagram
            </span>
            <a
              href={socials.instagram.href}
              className="text-sm font-medium text-bwai-blue no-underline hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {socials.instagram.handle}
            </a>
          </li>
          <li className="flex items-center justify-between py-3">
            <span className="font-mono text-xs uppercase tracking-wider text-foreground/45">
              Discord
            </span>
            <a
              href={socials.discord.href}
              className="text-sm font-medium text-bwai-blue no-underline hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {socials.linktree.label}
            </a>
          </li>
          <li className="flex items-center justify-between py-3 last:pb-0">
            <span className="font-mono text-xs uppercase tracking-wider text-foreground/45">
              Community
            </span>
            <a
              href={socials.community.href}
              className="text-sm font-medium text-bwai-blue no-underline hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              gdg.community.dev
            </a>
          </li>
        </ul>
      </div>

      <div className="mt-6 rounded-3xl bg-white/80 p-6 ring-1 ring-black/5 shadow-md backdrop-blur-sm">
        <p className="text-xs font-semibold uppercase tracking-wider text-foreground/45">
          Past events
        </p>
        <ul className="mt-4 divide-y divide-black/8">
          {pastEvents.map((event) => (
            <li
              key={event.title}
              className="flex items-center justify-between py-3 first:pt-0 last:pb-0"
            >
              <span className="text-sm text-foreground/70">{event.title}</span>
              <span className="font-mono text-xs text-foreground/40">
                {event.date}
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-foreground/50">
          Photo galleries and slides for past events will live here.
        </p>
      </div>
    </main>
  );
}
