import { PageHeader } from "../components/PageHeader";
import { socials } from "../components/socials";

const links = [
  {
    label: "Email",
    value: socials.email,
    href: socials.emailHref,
  },
  {
    label: "Instagram",
    value: socials.instagram.handle,
    href: socials.instagram.href,
  },
  {
    label: "LinkedIn",
    value: socials.linkedin.label,
    href: socials.linkedin.href,
  },
  {
    label: "Discord",
    value: socials.linktree.label,
    href: socials.discord.href,
  },
] as const;

export default function ContactPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-14 sm:px-6">
      <PageHeader
        title="Contact"
        description="Questions about an event, sponsorship, or joining the team? Reach us here."
      />

      <div className="mt-8 rounded-3xl bg-white/80 p-6 ring-1 ring-black/5 shadow-md backdrop-blur-sm">
        <p className="text-xs font-semibold uppercase tracking-wider text-foreground/45">
          Get in touch
        </p>
        <ul className="mt-4 divide-y divide-black/8">
          {links.map((link) => (
            <li
              key={link.label}
              className="flex items-center justify-between gap-4 py-3 first:pt-0 last:pb-0"
            >
              <span className="shrink-0 font-mono text-xs uppercase tracking-wider text-foreground/45">
                {link.label}
              </span>
              <a
                href={link.href}
                className="text-right text-sm font-medium text-bwai-blue no-underline hover:underline"
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
              >
                {link.value}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <p className="mt-6 text-sm text-foreground/55">
        General meetings are held biweekly during the school year — check
        Instagram and Discord for the next date and location.
      </p>
    </main>
  );
}
