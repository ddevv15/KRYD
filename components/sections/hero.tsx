import Aurora from "@/components/aurora"
import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section id="hero" className="relative border-b border-border bg-black min-h-dvh" aria-labelledby="hero-title">
      <SiteHeader />
      <div id="hero-aurora" className="pointer-events-none absolute inset-0 z-0">
        <Aurora colorStops={["#3A29FF", "#FF94B4", "#FF3232"]} amplitude={1.0} blend={0.5} speed={0.5} />
      </div>
      <div id="hero-content" className="relative z-10 mx-auto grid min-h-dvh max-w-6xl grid-cols-1 place-content-center place-items-center gap-6 px-4 py-24 text-center text-foreground md:py-32">
        <h1 id="hero-title" className="text-balance text-4xl font-semibold leading-tight md:text-6xl">
          From Clicks to Connections to Customers.
        </h1>
        <p id="hero-copy" className="text-pretty text-base text-muted-foreground md:text-lg lg:text-xl">
          creating stories, experiences, and impact
        </p>
        <div id="hero-cta-wrap" className="flex flex-wrap items-center justify-center gap-3">
          <Button size="lg" className="text-sm md:text-base" asChild>
            <a href="#contact">{"Let’s Colab"}</a>
          </Button>
          <Button size="lg" className="text-sm md:text-base" variant="outline" asChild>
            <a href="#overview">Why Us?</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
