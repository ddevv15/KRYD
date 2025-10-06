import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"

export function Hero() {
  return (
    <section id="hero" className="border-b border-border bg-background" aria-labelledby="hero-title">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-16 md:py-24 lg:grid-cols-2">
        <div className="flex flex-col justify-center gap-6">
          <h1 id="hero-title" className="text-balance text-3xl font-semibold leading-tight md:text-4xl">
            From Clicks to Connections to Customers.
          </h1>
          <p className="text-pretty text-base text-muted-foreground md:text-lg">
            creating stories, experiences, and impact
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Button size="sm" asChild>
              <a href="#contact">{"Let’s Colab"}</a>
            </Button>
            <Button size="sm" variant="outline" asChild>
              <a href="#overview">Why Us?</a>
            </Button>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <Logo alt="KRYD team logo" className="h-auto w-full max-w-md rounded-lg border border-border" />
        </div>
      </div>
    </section>
  )
}
