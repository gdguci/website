import Link from "next/link";
import { socials } from "./socials";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/events", label: "Events" },
  { href: "/sponsors", label: "Sponsors" },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  { label: "Instagram", href: socials.instagram.href },
  { label: "LinkedIn", href: socials.linkedin.href },
  { label: "Discord", href: socials.discord.href },
  { label: "GitHub", href: socials.github.href },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-black/8 bg-white/70 text-bwai-black-02 backdrop-blur-sm">
      <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
        <div
          aria-hidden="true"
          className="mb-8 h-[3px] w-full rounded-full bg-gradient-to-r from-bwai-blue via-bwai-green to-bwai-yellow"
        />

        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <p className="text-sm font-bold tracking-tight">
              GDG on Campus @ UCI
            </p>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-bwai-black-02/60">
              A student-run developer community at UC Irvine. Learn, build, and
              connect with fellow makers.
            </p>
            <a
              className="mt-3 inline-block text-sm text-bwai-black-02/55 underline decoration-black/20 underline-offset-4 transition hover:text-bwai-black-02 hover:decoration-black/50"
              href={socials.emailHref}
            >
              {socials.email}
            </a>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-bwai-black-02/40">
              Navigate
            </p>
            <ul className="mt-3 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-bwai-black-02/60 no-underline transition-colors hover:text-bwai-black-02"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-bwai-black-02/40">
              Connect
            </p>
            <ul className="mt-3 space-y-2">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-bwai-black-02/60 no-underline transition-colors hover:text-bwai-black-02"
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      link.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-black/8 pt-5 text-xs text-bwai-black-02/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} GDG on Campus @ UCI. All rights
            reserved.
          </p>
          <p className="font-mono">Built with Next.js + Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
