"use client"

import Aurora from "@/components/aurora"
import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import TextType from "@/components/ui/text-type"

export function Hero() {
  return (
    <section id="hero" className="relative bg-black min-h-dvh" aria-labelledby="hero-title">
      <SiteHeader />
      <div id="hero-aurora" className="pointer-events-none absolute inset-0 z-0">
        <Aurora colorStops={["#3A29FF", "#FF94B4", "#FF3232"]} amplitude={1.0} blend={0.5} speed={0.5} />
      </div>
      <div id="hero-content" className="relative z-10 mx-auto grid min-h-dvh max-w-7xl grid-cols-1 place-content-center place-items-center gap-5 px-4 py-20 text-center text-foreground sm:gap-6 sm:py-24 md:py-28">
        <h1 id="hero-title" className="text-balance text-3xl font-semibold leading-tight sm:text-4xl md:text-6xl">
          <TextType 
            text={["From Clicks to Connections to Customers.", "Creating Stories, Experiences, and Impact.", "Building Brands That Matter."]}
            typingSpeed={75}
            pauseDuration={2000}
            showCursor={true}
            cursorCharacter="|"
            className="text-balance text-3xl font-semibold leading-tight sm:text-4xl md:text-6xl"
            as="span"
          />
        </h1>
        <p id="hero-copy" className="text-pretty text-sm text-muted-foreground sm:text-base md:text-lg lg:text-xl">
          creating stories, experiences, and impact
        </p>
        <div id="hero-cta-wrap" className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          <Button 
            size="sm" 
            className="text-xs sm:text-sm md:text-base"
            onClick={() => {
              const element = document.getElementById('contact');
              element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
          >
            {"Let's Colab"}
          </Button>
          <Button 
            size="sm" 
            className="text-xs sm:text-sm md:text-base" 
            variant="outline"
            onClick={() => {
              const element = document.getElementById('overview');
              element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
          >
            Why Us?
          </Button>
        </div>
      </div>
    </section>
  )
}
