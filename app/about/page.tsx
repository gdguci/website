export default function AboutPage() {
  return (
    <main className="min-h-dvh bg-background px-6 py-14 text-foreground">
      <div className="mx-auto w-full max-w-3xl">
        <a
          href="/"
          className="font-mono text-xs tracking-widest text-foreground/60 underline"
        >
          ← BACK TO HOME
        </a>
        <h1 className="mt-5 text-balance text-4xl font-bold leading-[1.15] tracking-tight">
          About
        </h1>
        <p className="mt-4 text-base leading-relaxed text-foreground/80">
          Draft page stub. Add your chapter story, what you build, and how new members can join.
        </p>
      </div>
    </main>
  );
}

