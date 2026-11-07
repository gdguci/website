import Image from "next/image"

import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { Calendar } from "@/components/ui/calendar"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const previousEvents = [
  {
    title: "Elevator Pitches",
    image: "/event_elevator_pitches.jpg",
  },
  {
    title: "Fireside Chat",
    image: "/event_fireside_chat.jpg",
  },
  {
    title: "Builder Series",
    image: "/event_builder_series.jpg",
  },
  {
    title: "Pictionary",
    image: "/event_pictionary.jpg",
  },
  {
    title: "Jeopardy",
    image: "/event_jeopardy.jpg",
  },
]

const upcomingEvents: {
  date: Date
  label: string
  description: string
}[] = []

export default function EventsPage() {
  const eventDates = upcomingEvents.map((event) => event.date)

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-4xl font-semibold tracking-tight">Events</h1>
          <div className="mt-16 grid gap-12 lg:grid-cols-3 lg:items-start">
            <section aria-labelledby="calendar-heading">
              <h2
                id="calendar-heading"
                className="text-2xl font-semibold tracking-tight"
              >
                Calendar
              </h2>
              <p className="mt-2 text-muted-foreground">
                Our calendar will sync with Google Calendar soon.
              </p>
              <Calendar
                mode="single"
                defaultMonth={new Date(2026, 10, 1)}
                today={new Date(2026, 10, 6)}
                modifiers={{ event: eventDates }}
                modifiersClassNames={{
                  event: "bg-accent font-semibold text-accent-foreground",
                }}
                className="mt-6 w-full rounded-lg border shadow-sm"
              />
            </section>

            <section aria-labelledby="upcoming-events-heading">
              <h2
                id="upcoming-events-heading"
                className="text-2xl font-semibold tracking-tight"
              >
                Upcoming events
              </h2>
              <div className="mt-6 max-h-[28rem] space-y-3 overflow-y-auto pr-2">
                {upcomingEvents.map((event) => (
                  <article
                    key={event.label}
                    className="rounded-lg border p-4"
                  >
                    <p className="text-sm text-muted-foreground">
                      {event.date.toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </p>
                    <h3 className="mt-1 font-semibold">{event.label}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {event.description}
                    </p>
                  </article>
                ))}
                {upcomingEvents.length === 0 && (
                  <p className="text-muted-foreground">
                    No upcoming events yet.
                  </p>
                )}
              </div>
            </section>

            <section aria-labelledby="previous-events-heading">
              <h2
                id="previous-events-heading"
                className="text-2xl font-semibold tracking-tight"
              >
                Previous events
              </h2>
              <Carousel className="mx-auto mt-6 max-w-md px-8">
                <CarouselContent>
                  {previousEvents.map((event) => (
                    <CarouselItem key={event.title}>
                      <div className="mx-auto w-fit max-w-full overflow-hidden rounded-lg">
                        <Image
                          src={event.image}
                          alt={event.title}
                          width={1200}
                          height={800}
                          className="mx-auto h-[26rem] w-auto object-contain"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="-left-4" />
                <CarouselNext className="-right-4" />
              </Carousel>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
