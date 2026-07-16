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
    <header className="sticky top-0 z-50 border-b border-black/8 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-4 py-3.5 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5 no-underline">
          {/* Google 2×2 colour dots */}
          <div className="grid grid-cols-2 gap-[3px]" aria-hidden="true">
            <div className="h-2.5 w-2.5 rounded-[3px] bg-bwai-blue" />
            <div className="h-2.5 w-2.5 rounded-[3px] bg-bwai-red" />
            <div className="h-2.5 w-2.5 rounded-[3px] bg-bwai-yellow" />
            <div className="h-2.5 w-2.5 rounded-[3px] bg-bwai-green" />
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="text-sm font-bold tracking-tight">GDG on Campus</span>
            <span className="hidden text-xs text-foreground/45 sm:inline">@ UCI</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-5 text-sm sm:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-foreground/60 no-underline transition-colors duration-150 hover:text-bwai-blue"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="rounded-full bg-bwai-blue px-4 py-2 text-sm font-medium text-white no-underline shadow-sm transition-all duration-150 hover:brightness-110 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-bwai-blue/40"
          >
            Join
          </Link>
        </div>
      </div>
    </header>
  );
}
