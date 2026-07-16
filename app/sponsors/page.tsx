import { PageHeader } from "../components/PageHeader";
import { socials } from "../components/socials";
import { toneToAccent, toneToBg, toneToText } from "../components/tone";
import type { Tone } from "../components/tone";

const tiers = [
  {
    name: "Champion",
    amount: "$2,500+",
    tone: "blue" as Tone,
    benefits: [
      "Logo on the website and all event banners",
      "Dedicated social media feature",
      "Recruiting table at 2 flagship events",
      "Access to our resume book",
    ],
  },
  {
    name: "Partner",
    amount: "$1,000+",
    tone: "green" as Tone,
    benefits: [
      "Logo on the website and event slides",
      "Social media shoutout",
      "Access to our resume book",
    ],
  },
  {
    name: "Friend",
    amount: "$250+",
    tone: "yellow" as Tone,
    benefits: ["Logo on the website", "Thank-you mention at events"],
  },
] as const;

export default function SponsorsPage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-14 sm:px-6">
      <PageHeader
        title="Sponsors"
        description="Partner with GDG on Campus @ UCI to support student innovation and connect with engineering talent across campus."
      />

      <p className="mt-6 max-w-2xl text-base leading-relaxed text-foreground/70">
        Sponsorship funds our workshops, hackathons, and speaker events — and
        puts your team in front of hundreds of UCI students who are actively
        learning and building with modern developer tools.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={`relative overflow-hidden rounded-2xl ${toneToBg(tier.tone)} p-5 ring-1 ring-black/5`}
          >
            <div
              className={`absolute inset-x-0 top-0 h-[3px] ${toneToAccent(tier.tone)}`}
            />
            <p className="pt-1 text-sm font-semibold">{tier.name}</p>
            <p
              className={`mt-1 text-2xl font-bold tracking-tight ${toneToText(tier.tone)}`}
            >
              {tier.amount}
            </p>
            <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-bwai-black-02/70">
              {tier.benefits.map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-3xl bg-white/80 p-6 ring-1 ring-black/5 shadow-md backdrop-blur-sm">
        <p className="text-xs font-semibold uppercase tracking-wider text-foreground/45">
          Become a sponsor
        </p>
        <p className="mt-2 max-w-xl text-sm leading-relaxed text-foreground/70">
          Interested in supporting student builders at UCI? Reach out and
          we&apos;ll share our sponsorship packet and upcoming event calendar.
        </p>
        <a
          href={socials.emailHref}
          className="mt-4 inline-flex items-center gap-2 rounded-full bg-bwai-blue px-5 py-2.5 text-sm font-medium text-white no-underline shadow-sm transition-all duration-150 hover:brightness-110 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-bwai-blue/40"
        >
          {socials.email}
        </a>
      </div>
    </main>
  );
}
