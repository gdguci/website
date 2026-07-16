import { PageHeader } from "../components/PageHeader";
import { toneToAccent, toneToBg } from "../components/tone";
import type { Tone } from "../components/tone";

const values = [
  {
    title: "Learn together",
    description:
      "Peer-to-peer workshops where students teach students — no prior experience required.",
    tone: "blue" as Tone,
  },
  {
    title: "Build in public",
    description:
      "Projects, hackathons, and demos that turn classroom theory into something you can show.",
    tone: "green" as Tone,
  },
  {
    title: "Connect widely",
    description:
      "Industry speakers, alumni mentors, and a community that shows up for each other.",
    tone: "yellow" as Tone,
  },
] as const;

export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-14 sm:px-6">
      <PageHeader
        title="About"
        description="Who we are, what we stand for, and how we fit into the Google Developer ecosystem at UCI."
      />

      <div className="mt-8 space-y-5 text-base leading-relaxed text-foreground/70">
        <p>
          Google Developer Groups (GDG) on Campus are student communities built
          around peer-to-peer learning. At UCI, we focus on coding skills,
          problem-solving, and professional development — bridging the gap
          between classroom theory and practice through workshops, projects, and
          collaborative builds.
        </p>
        <p>
          As part of the global Google Developer ecosystem, our chapter connects
          Anteaters to Google resources, mentors, and educational materials that
          reach far beyond campus. Locally, we&apos;re a student organization
          hosting info sessions, hands-on workshops, and community projects for
          anyone curious about technology — regardless of major or experience
          level.
        </p>
        <p>
          GDG on Campus @ UCI was founded in 2025 to support technical and
          professional student development at UC Irvine.
        </p>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        {values.map((value) => (
          <div
            key={value.title}
            className={`relative overflow-hidden rounded-2xl ${toneToBg(value.tone)} p-5 ring-1 ring-black/5`}
          >
            <div
              className={`absolute inset-x-0 top-0 h-[3px] ${toneToAccent(value.tone)}`}
            />
            <p className="pt-1 text-sm font-semibold">{value.title}</p>
            <p className="mt-2 text-sm leading-relaxed text-bwai-black-02/70">
              {value.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-3xl bg-white/80 p-6 ring-1 ring-black/5 shadow-md backdrop-blur-sm">
        <p className="text-xs font-semibold uppercase tracking-wider text-foreground/45">
          Affiliation
        </p>
        <p className="mt-2 text-sm leading-relaxed text-foreground/70">
          Officially recognized by Google Developers and by UCI campus
          organizations. We follow GDG on Campus community guidelines while
          staying student-led.
        </p>
      </div>

      <div className="mt-6 rounded-3xl bg-white/80 p-6 ring-1 ring-black/5 shadow-md backdrop-blur-sm">
        <p className="text-xs font-semibold uppercase tracking-wider text-foreground/45">
          How to join
        </p>
        <p className="mt-2 text-sm leading-relaxed text-foreground/70">
          No application and no dues. Follow us on Instagram, join Discord, come
          to a general meeting, and sign up for whichever events interest you.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <a
            href="https://www.instagram.com/gdguci/"
            className="inline-flex items-center gap-2 rounded-full bg-bwai-blue px-5 py-2.5 text-sm font-medium text-white no-underline shadow-sm transition-all duration-150 hover:brightness-110 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-bwai-blue/40"
          >
            Instagram @gdguci
          </a>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-bwai-blue/35 bg-white/70 px-5 py-2.5 text-sm font-medium text-bwai-blue no-underline shadow-sm transition-all duration-150 hover:border-bwai-blue/70 hover:bg-bwai-pastel-blue focus:outline-none focus:ring-2 focus:ring-bwai-blue/30"
          >
            Contact us
          </a>
        </div>
      </div>
    </main>
  );
}
