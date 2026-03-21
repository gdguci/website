import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/events", label: "Events" },
  { href: "/sponsors", label: "Sponsors" },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact" },
] as const;

export function SiteNavbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-bwai-off-white/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-4 py-4 sm:px-6">
        <Link href="/" className="flex items-baseline gap-2 no-underline">
          <span className="text-base font-bold tracking-tight">GDG</span>
          <span className="text-base font-bold tracking-tight text-bwai-blue">
            on Campus
          </span>
          <span className="text-sm text-foreground/70">@ UCI</span>
        </Link>

        <nav className="hidden items-center gap-5 text-sm sm:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-foreground/70 transition hover:text-bwai-blue hover:underline"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#join"
            className="rounded-full bg-bwai-blue px-4 py-2 text-sm font-medium text-white no-underline shadow-sm transition hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-bwai-blue/40"
          >
            Join
          </a>
        </div>
      </div>
    </header>
  );
}

