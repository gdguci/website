export default function ContactPage() {
  return (
    <main className="min-h-dvh bg-background px-6 py-14 text-foreground">
      <div className="mx-auto w-full max-w-3xl">
        <a
          href="/"
          className="font-mono text-xs tracking-widest text-foreground/60 underline"
        >
          ← BACK TO MAP
        </a>
        <h1 className="mt-5 text-balance text-4xl font-bold leading-[1.15] tracking-tight">
          Contact
        </h1>
        <div className="mt-6 rounded-3xl bg-surface p-6 text-surface-foreground shadow-sm">
          <p className="text-sm font-medium">Suggested links</p>
          <ul className="mt-3 space-y-2 text-sm text-surface-foreground/80">
            <li>
              <span className="font-mono text-xs text-surface-foreground/60">
                Email:
              </span>{" "}
              gdg-uci@example.com
            </li>
            <li>
              <span className="font-mono text-xs text-surface-foreground/60">
                Instagram:
              </span>{" "}
              @gdg.uci
            </li>
            <li>
              <span className="font-mono text-xs text-surface-foreground/60">
                Discord:
              </span>{" "}
              invite link here
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}

