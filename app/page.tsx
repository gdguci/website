import Image from "next/image"
import Link from "next/link"

import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="relative mx-auto flex min-h-[calc(100vh-12rem)] w-full max-w-5xl items-center justify-center overflow-hidden px-6 py-24 text-center">
          <blockquote className="max-w-3xl">
            <p className="text-2xl font-semibold leading-tight tracking-tight md:text-3xl">
              &ldquo;To empower students of UC Irvine to connect, learn, and
              grow by fostering an inclusive developer community, bridging the
              gap between academic theory and industry practice, and creating
              opportunities for collaboration among students, faculty, industry
              professionals, and the broader Google developer ecosystem.&rdquo;
            </p>
            <cite className="mt-8 block text-lg not-italic text-muted-foreground">
              Our Mission
            </cite>
          </blockquote>
          <Image
            src="/petr_gdg.png"
            alt="GDG UCI Petr mascot"
            width={4000}
            height={4000}
            className="absolute bottom-12 right-4 h-32 w-32 object-contain md:right-12 md:h-40 md:w-40"
          />
        </section>

        <section className="border-t px-6 py-20">
          <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-2 md:items-start">
            <div>
              <h2 className="text-4xl font-semibold tracking-tight">
                Overview
              </h2>

              <div className="mt-12 space-y-12">
                <section>
                  <h3 className="text-2xl font-semibold tracking-tight">
                    Events
                  </h3>
                  <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
                    <li>Technical workshops led by students and industry guests</li>
                    <li>Community events for learning, networking, and fun</li>
                    <li>Opportunities to explore Google technologies</li>
                  </ul>
                  <Link
                    href="/events"
                    className="mt-4 inline-block text-sm underline underline-offset-4 hover:text-muted-foreground"
                  >
                    Learn more about Events
                  </Link>
                </section>

                <section>
                  <h3 className="text-2xl font-semibold tracking-tight">
                    Mentorship
                  </h3>
                  <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
                    <li>Guidance from peers, faculty, and industry professionals</li>
                    <li>Support for personal and technical growth</li>
                    <li>A welcoming space to ask questions and share knowledge</li>
                  </ul>
                  <Link
                    href="/mentorship"
                    className="mt-4 inline-block text-sm underline underline-offset-4 hover:text-muted-foreground"
                  >
                    Learn more about Mentorship
                  </Link>
                </section>

                <section>
                  <h3 className="text-2xl font-semibold tracking-tight">
                    Projects
                  </h3>
                  <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
                    <li>Collaborative projects that turn ideas into impact</li>
                    <li>Hands-on experience building with real-world tools</li>
                    <li>Teams that learn, create, and grow together</li>
                  </ul>
                  <Link
                    href="/projects"
                    className="mt-4 inline-block text-sm underline underline-offset-4 hover:text-muted-foreground"
                  >
                    Learn more about Projects
                  </Link>
                </section>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <Image
                src="/highlight1.png"
                alt="GDG UCI community event"
                width={2114}
                height={1586}
                className="aspect-[4/3] w-full rounded-lg object-cover sm:col-span-2"
              />
              <Image
                src="/highlight2.png"
                alt="GDG UCI members collaborating"
                width={2114}
                height={1586}
                className="aspect-[4/3] w-full rounded-lg object-cover"
              />
              <Image
                src="/highlight3.png"
                alt="GDG UCI student developers"
                width={2114}
                height={1586}
                className="aspect-[4/3] w-full rounded-lg object-cover"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
