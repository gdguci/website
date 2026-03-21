import { HomeBackground } from "./components/home/HomeBackground";
import { HomeEventsPreview } from "./components/home/HomeEventsPreview";
import { HomeHero } from "./components/home/HomeHero";
import { HomeMissionAndStats } from "./components/home/HomeMissionAndStats";

export default function Home() {
  return (
    <main className="relative mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
      <HomeBackground />

      <section className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <HomeHero />
        <HomeMissionAndStats />
      </section>

      <HomeEventsPreview />
    </main>
  );
}
