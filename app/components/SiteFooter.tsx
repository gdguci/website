export function SiteFooter() {
  return (
    <footer className="border-t border-black/10 bg-bwai-off-white text-bwai-black-02">
      <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6">
        <div
          aria-hidden="true"
          className="mb-6 h-1.5 w-full rounded-full bg-gradient-to-r from-bwai-blue via-bwai-green to-bwai-yellow"
        />
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-md">
            <p className="text-sm font-bold tracking-tight">
              Google Developer Group on Campus @ UCI
            </p>
            <p className="mt-2 text-sm leading-relaxed text-bwai-black-02/70">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          <div className="grid gap-2 text-sm text-bwai-black-02/70 sm:text-right">
            <a
              className="underline decoration-black/20 underline-offset-4 transition hover:decoration-black/50"
              href="mailto:gdg.ucirvine@gmail.com"
            >
              gdg.ucirvine@gmail.com
            </a>
            <div className="flex flex-wrap gap-x-4 gap-y-2 sm:justify-end">
              <a
                className="underline decoration-black/20 underline-offset-4 transition hover:decoration-black/50"
                href="#"
              >
                Instagram
              </a>
              <a
                className="underline decoration-black/20 underline-offset-4 transition hover:decoration-black/50"
                href="#"
              >
                LinkedIn
              </a>
              <a
                className="underline decoration-black/20 underline-offset-4 transition hover:decoration-black/50"
                href="#"
              >
                Discord
              </a>
              <a
                className="underline decoration-black/20 underline-offset-4 transition hover:decoration-black/50"
                href="#"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-2 border-t border-black/10 pt-5 text-xs text-bwai-black-02/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} GDG on Campus @ UCI</p>
          <p className="font-mono">Built with Next.js + Tailwind</p>
        </div>
      </div>
    </footer>
  );
}

