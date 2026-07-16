import { PageHeader } from "../components/PageHeader";
import { toneToBg, toneToText } from "../components/tone";
import type { Tone } from "../components/tone";

const executiveBoard = [
  { name: "Amir Aunyasopon", role: "President", tone: "blue" as Tone },
  { name: "Anjena Raja", role: "Internal Vice President", tone: "green" as Tone },
  { name: "Mihir Mehta", role: "External President", tone: "yellow" as Tone },
  { name: "Jordan Shin", role: "Treasurer", tone: "red" as Tone },
  { name: "Jerica Yuan", role: "Secretary", tone: "blue" as Tone },
  {
    name: "Aurelia Juan Sindhunirmala",
    role: "Webmaster",
    tone: "green" as Tone,
  },
] as const;

const leads = [
  { name: "Steve Yang", role: "Technical Lead", tone: "red" as Tone },
  { name: "Ella Zhong", role: "Design Lead", tone: "yellow" as Tone },
  { name: "Daniel Heng Lu", role: "Media Lead", tone: "blue" as Tone },
  { name: "Kevin Chen", role: "Events Lead", tone: "green" as Tone },
  { name: "Allison Kim", role: "Outreach", tone: "yellow" as Tone },
] as const;

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("");
}

function MemberCard({
  name,
  role,
  tone,
}: {
  name: string;
  role: string;
  tone: Tone;
}) {
  return (
    <div className="rounded-2xl bg-white/80 p-5 ring-1 ring-black/5 shadow-sm backdrop-blur-sm">
      <div
        className={`flex h-11 w-11 items-center justify-center rounded-full text-sm font-semibold ${toneToBg(tone)} ${toneToText(tone)}`}
        aria-hidden="true"
      >
        {initials(name)}
      </div>
      <p className="mt-3 text-sm font-semibold">{name}</p>
      <p className="text-sm text-foreground/55">{role}</p>
    </div>
  );
}

export default function TeamPage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-14 sm:px-6">
      <PageHeader
        title="Team"
        description="The students who plan, organize, and run GDG on Campus @ UCI — from workshops to socials."
      />

      <section className="mt-10">
        <p className="text-xs font-semibold uppercase tracking-wider text-foreground/45">
          Executive Board
        </p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {executiveBoard.map((member) => (
            <MemberCard key={member.name} {...member} />
          ))}
        </div>
      </section>

      <section className="mt-12">
        <p className="text-xs font-semibold uppercase tracking-wider text-foreground/45">
          Leads & Committees
        </p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {leads.map((member) => (
            <MemberCard key={member.name} {...member} />
          ))}
        </div>
        <p className="mt-4 text-sm text-foreground/50">
          Bios, photos, and committee rosters will be added as roles are
          finalized.
        </p>
      </section>

      <div className="mt-10 rounded-3xl bg-white/80 p-6 ring-1 ring-black/5 shadow-md backdrop-blur-sm">
        <p className="text-xs font-semibold uppercase tracking-wider text-foreground/45">
          Want to join the team?
        </p>
        <p className="mt-2 max-w-xl text-sm leading-relaxed text-foreground/70">
          We open new committee roles at the start of every school year. Follow
          Instagram and Discord for applications.
        </p>
        <a
          href="/contact"
          className="mt-4 inline-flex items-center gap-2 rounded-full bg-bwai-blue px-5 py-2.5 text-sm font-medium text-white no-underline shadow-sm transition-all duration-150 hover:brightness-110 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-bwai-blue/40"
        >
          Get in touch
        </a>
      </div>
    </main>
  );
}
