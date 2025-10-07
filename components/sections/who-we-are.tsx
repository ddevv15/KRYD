import Aurora from "@/components/aurora"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ShieldCheck, Sparkles, Handshake } from "lucide-react"
import Link from "next/link"

export function WhoWeAre() {
  return (
    <section id="who-we-are" className="relative bg-black" aria-labelledby="who-title">
      {/* Background layer */}
      <div id="who-aurora" className="pointer-events-none absolute inset-0 -z-10">
        <Aurora colorStops={["#3A29FF", "#FF94B4", "#FF3232"]} amplitude={0.8} blend={0.45} speed={0.5} />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div id="who-content" className="mx-auto max-w-6xl px-4 py-16 text-white sm:py-20">
        {/* Hero */}
        <div id="who-hero" className="mx-auto grid max-w-3xl place-items-center gap-3 text-center">
          <h2 id="who-title" className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            Who We Are
          </h2>
          <p id="who-subtitle" className="text-pretty text-sm text-white/80 sm:text-base">
            We’re a team of dreamers, doers, and storytellers who believe in the power of collaboration.
          </p>
        </div>

        {/* Origin Story */}
        <div id="who-origin" className="mx-auto mt-10 grid max-w-4xl gap-4 text-center md:text-left">
          <p className="text-pretty text-base text-white/85">
            KRYD CoLABs began as a shared vision between three individuals from different paths — hospitality,
            marketing, and real estate — united by one goal: to make creative growth accessible to every business.
          </p>
          <p className="text-pretty text-base text-white/85">
            What started as a simple idea has grown into a collective that helps brands tell their stories, connect
            with their audience, and build lasting impressions — both online and offline.
          </p>
          <p className="text-pretty text-base text-white/85">
            At our core, we value honesty, creativity, and relationships. We don’t just work for brands — we work with
            them, shaping ideas into experiences and challenges into opportunities.
          </p>
        </div>

        {/* Core Values */}
        <div id="who-values" className="mx-auto mt-12 max-w-6xl">
          <div id="who-values-grid" className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <Card className="border-white/10 bg-white/5 text-white p-6 text-center transition hover:bg-white/10">
              <CardHeader>
                <ShieldCheck aria-hidden className="mx-auto mb-3 h-6 w-6" />
                <CardTitle>Honesty</CardTitle>
                <CardDescription className="text-white/70">
                  Transparent communication and genuine partnerships.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-white/10 bg-white/5 text-white p-6 text-center transition hover:bg-white/10">
              <CardHeader>
                <Sparkles aria-hidden className="mx-auto mb-3 h-6 w-6" />
                <CardTitle>Creativity</CardTitle>
                <CardDescription className="text-white/70">
                  Ideas shaped into meaningful, memorable experiences.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-white/10 bg-white/5 text-white p-6 text-center transition hover:bg-white/10">
              <CardHeader>
                <Handshake aria-hidden className="mx-auto mb-3 h-6 w-6" />
                <CardTitle>Relationships</CardTitle>
                <CardDescription className="text-white/70">
                  Built on trust, respect, and shared outcomes.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>

        {/* CTA */}
        {/*<div id="who-cta" className="mx-auto mt-12 max-w-3xl text-center">
          <h3 className="text-balance text-xl font-semibold text-white sm:text-2xl">
            Ready to build your story with us?
          </h3>
          <Button asChild className="mt-6 border-white/20 bg-white/10 text-white hover:bg-white/15">
            <Link href="/#contact">Let’s Collaborate</Link>
          </Button>
        </div>*/}
      </div>
    </section>
  )
}


