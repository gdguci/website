import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"

export default function TeamPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex flex-1 items-center justify-center px-6 py-24">
        <h1 className="text-center text-4xl font-semibold tracking-tight">
          Work in progress
        </h1>
      </main>
      <Footer />
    </div>
  )
}
