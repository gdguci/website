import Link from "next/link";

export function PageHeader({
  title,
  description,
  backHref = "/",
  backLabel = "Back to home",
}: {
  title: string;
  description?: string;
  backHref?: string;
  backLabel?: string;
}) {
  return (
    <div>
      <Link
        href={backHref}
        className="font-mono text-xs uppercase tracking-widest text-foreground/60 underline transition-colors hover:text-foreground"
      >
        ← {backLabel}
      </Link>
      <h1 className="mt-5 text-balance text-4xl font-bold leading-[1.15] tracking-tight">
        {title}
      </h1>
      {description && (
        <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-foreground/70">
          {description}
        </p>
      )}
    </div>
  );
}
