import Link from "next/link"

function DiscordIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-5"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M19.54 4.18A16.9 16.9 0 0 0 15.43 3l-.5 1.02a15.7 15.7 0 0 0-5.86 0L8.57 3a16.9 16.9 0 0 0-4.1 1.18C1.87 8.07 1.17 11.86 1.52 15.6a16.7 16.7 0 0 0 5.03 2.54l1.22-1.67a10.7 10.7 0 0 1-1.92-.92l.47-.36c3.7 1.72 7.72 1.72 11.38 0l.48.36c-.61.36-1.25.67-1.93.92l1.22 1.67a16.7 16.7 0 0 0 5.03-2.54c.41-4.34-.7-8.1-2.96-11.42ZM8.5 13.95c-1.1 0-2-1.01-2-2.25s.88-2.25 2-2.25 2.01 1.01 2 2.25c0 1.24-.89 2.25-2 2.25Zm7 0c-1.1 0-2-1.01-2-2.25s.88-2.25 2-2.25 2.01 1.01 2 2.25c0 1.24-.89 2.25-2 2.25Z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <rect width="18" height="18" x="3" y="3" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6 text-sm text-muted-foreground">
        <p>Copyright © 2026 GDGUCI. All Rights Reserved.</p>
        <div className="flex items-center gap-4">
          <Link
            href="https://discord.gg/AAqsYFWQY2"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GDGUCI on Discord"
            className="transition-colors hover:text-foreground"
          >
            <DiscordIcon />
          </Link>
          <Link
            href="https://www.instagram.com/gdguci"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GDGUCI on Instagram"
            className="transition-colors hover:text-foreground"
          >
            <InstagramIcon />
          </Link>
        </div>
      </div>
    </footer>
  )
}
