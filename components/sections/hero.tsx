import Aurora from "@/components/aurora"
import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section id="hero" className="relative border-b border-border bg-white" aria-labelledby="hero-title">
      <SiteHeader />
      <div id="hero-aurora" className="pointer-events-none absolute inset-0 z-0">
        <Aurora colorStops={["#3A29FF", "#FF94B4", "#FF3232"]} amplitude={1.0} blend={0.5} speed={0.5} />
      </div>
      <div id="hero-content" className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 place-items-center gap-6 px-4 py-20 text-center text-foreground md:py-28">
        <h1 id="hero-title" className="text-balance text-3xl font-semibold leading-tight md:text-4xl">
          From Clicks to Connections to Customers.
        </h1>
        <p id="hero-copy" className="text-pretty text-base text-muted-foreground md:text-lg">
          creating stories, experiences, and impact
        </p>
        <div id="hero-cta-wrap" className="flex flex-wrap items-center justify-center gap-3">
          <Button size="sm" asChild>
            <a href="#contact">{"Let’s Colab"}</a>
          </Button>
          <Button size="sm" variant="outline" asChild>
            <a href="#overview">Why Us?</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
