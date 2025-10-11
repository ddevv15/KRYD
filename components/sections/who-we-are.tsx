import Aurora from "@/components/aurora"
import { Logo } from "@/components/logo"
import { ShieldCheck, Sparkles, Handshake } from "lucide-react"

export function WhoWeAre() {
  return (
    <section id="who-we-are" className="relative bg-black" aria-labelledby="who-title">
      {/* Background layer */}
      <div id="who-aurora" className="pointer-events-none absolute inset-0 -z-10">
        <Aurora colorStops={["#3A29FF", "#FF94B4", "#FF3232"]} amplitude={0.8} blend={0.45} speed={0.5} />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div id="who-content" className="mx-auto max-w-7xl px-4 py-16 text-white sm:py-20">
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Side - Text Content */}
          <div id="who-text-content" className="space-y-6">
            <div id="who-hero" className="space-y-4">
              <h2 id="who-title" className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                Who We Are
              </h2>
              <p id="who-subtitle" className="text-pretty text-base text-white/80 sm:text-lg">
                We're a team of dreamers, doers, and storytellers who believe in the power of collaboration.
              </p>
            </div>

            {/* Origin Story */}
            <div id="who-origin" className="space-y-4">
              <p className="text-pretty text-sm sm:text-base text-white/85 leading-relaxed">
                KRYD CoLABs began as a shared vision between three individuals from different paths: hospitality,
                marketing, and real estate, all united by one goal: to make creative growth accessible to every business.
              </p>
              <p className="text-pretty text-sm sm:text-base text-white/85 leading-relaxed">
                What started as a simple idea has grown into a collective that helps brands tell their stories, connect
                with their audience, and build lasting impressions, both online and offline.
              </p>
              <p className="text-pretty text-sm sm:text-base text-white/85 leading-relaxed">
                At our core, we value honesty, creativity, and relationships. We don't just work for brands; we work with
                them, shaping ideas into experiences and challenges into opportunities.
              </p>
            </div>
          </div>

          {/* Right Side - 2x2 Grid with Values + Logo */}
          <div id="who-values" className="grid grid-cols-2 gap-4">
            {/* Transparency Card */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center transition-all hover:bg-white/10 hover:border-white/20 flex flex-col items-center justify-center h-[220px]">
              <ShieldCheck aria-hidden className="mx-auto mb-3 h-8 w-8 text-white/80" />
              <h3 className="text-lg font-semibold mb-2">Transparency</h3>
              <p className="text-xs text-white/70 leading-relaxed">
                Transparent communication and genuine partnerships.
              </p>
            </div>

            {/* Relationships Card */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center transition-all hover:bg-white/10 hover:border-white/20 flex flex-col items-center justify-center h-[220px]">
              <Handshake aria-hidden className="mx-auto mb-3 h-8 w-8 text-white/80" />
              <h3 className="text-lg font-semibold mb-2">Relationships</h3>
              <p className="text-xs text-white/70 leading-relaxed">
                Built on trust, respect, and shared outcomes.
              </p>
            </div>

            {/* Creativity Card */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center transition-all hover:bg-white/10 hover:border-white/20 flex flex-col items-center justify-center h-[220px]">
              <Sparkles aria-hidden className="mx-auto mb-3 h-8 w-8 text-white/80" />
              <h3 className="text-lg font-semibold mb-2">Creativity</h3>
              <p className="text-xs text-white/70 leading-relaxed">
                Ideas shaped into meaningful, memorable experiences.
              </p>
            </div>

            {/* KRYD Logo Card */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 transition-all hover:bg-white/10 hover:border-white/20 flex items-center justify-center h-[220px]">
              <Logo className="w-auto h-auto max-w-full max-h-full object-contain" alt="KRYD Logo" />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}


