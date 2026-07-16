export function HomeBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 -top-20 -z-10 h-[480px]"
    >
      <div
        className="animate-blob absolute -left-10 top-0 h-96 w-96 rounded-full bg-bwai-pastel-blue opacity-80 blur-3xl"
        style={{ animationDelay: "0s" }}
      />
      <div
        className="animate-blob absolute left-[32%] -top-8 h-80 w-80 rounded-full bg-bwai-pastel-green opacity-70 blur-3xl"
        style={{ animationDelay: "3.5s" }}
      />
      <div
        className="animate-blob absolute right-0 top-12 h-72 w-72 rounded-full bg-bwai-pastel-yellow opacity-60 blur-3xl"
        style={{ animationDelay: "7s" }}
      />
    </div>
  );
}
