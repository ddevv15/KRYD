import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"
import Aurora from "@/components/aurora"
import {
  Hotel,
  Building2,
  Shirt,
  Utensils,
  Clapperboard,
  HeartPulse,
  GraduationCap,
  Plane,
  ShoppingBag,
  Sofa,
  Car,
  Briefcase,
} from "lucide-react"
import Link from "next/link"

type Industry = {
  title: string
  description: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

const industries: Industry[] = [
  { title: "Hospitality", description: "Hotels, cafés, and resorts enhancing guest experiences and visibility.", icon: Hotel },
  { title: "Real Estate", description: "Builders and brokers growing digital presence and quality leads.", icon: Building2 },
  { title: "Fashion & Clothing", description: "Brands building lifestyle‑driven identities across channels.", icon: Shirt },
  { title: "Food & Beverage", description: "Restaurants and cloud kitchens boosting awareness and orders.", icon: Utensils },
  { title: "Events & Entertainment", description: "Artists and venues with standout promotions and coordination.", icon: Clapperboard },
  { title: "Health & Wellness", description: "Gyms, clinics, and wellness brands growing loyal communities.", icon: HeartPulse },
  { title: "Education & Training", description: "Institutes and e‑learning platforms expanding reach online.", icon: GraduationCap },
  { title: "Travel & Tourism", description: "Agencies and tour operators strengthening digital footprint.", icon: Plane },
  { title: "E‑Commerce & Retail", description: "Stores and retailers driving traffic and conversions.", icon: ShoppingBag },
  { title: "Lifestyle & Home Décor", description: "Modern brands telling visual stories that convert.", icon: Sofa },
  { title: "Automotive", description: "Dealers and auto brands with targeted, experiential marketing.", icon: Car },
  { title: "Corporate & Startups", description: "Businesses scaling identity, digital growth, and partnerships.", icon: Briefcase },
]

export default function IndustriesPage() {
  return (
    <div className="min-h-dvh bg-black text-foreground">
      {/* Fixed glass header for consistency */}
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Soft background */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <Aurora colorStops={["#3A29FF", "#FF94B4", "#FF3232"]} amplitude={1.0} blend={0.5} speed={0.5} />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="mx-auto grid min-h-[40svh] max-w-6xl place-content-center gap-3 px-4 py-6 text-center sm:py-8">
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
            Industries We Serve
          </h1>
          <p className="text-pretty text-sm text-white/80 sm:text-base">
            Every industry has its story — we help you tell it better.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section aria-labelledby="industries-title" className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <h2 id="industries-title" className="sr-only">
          Industry categories
        </h2>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {industries.map(({ title, description, icon: Icon }) => (
            <article key={title} className="group">
              <Card className="border-white/10 bg-white/5 text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-md hover:bg-white/10">
                <CardHeader className="grid grid-cols-[auto_1fr] items-center gap-3">
                  <div className="rounded-md border border-white/20 bg-white/10 p-2 text-white">
                    <Icon aria-hidden className="h-5 w-5" />
                    <span className="sr-only">{title} icon</span>
                  </div>
                  <CardTitle className="text-base sm:text-lg">{title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-white/70">{description}</CardDescription>
                </CardContent>
              </Card>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 pb-16 sm:pb-20">
        <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-center sm:p-8">
          <h3 className="text-balance text-xl font-semibold text-white sm:text-2xl">
            Let’s craft your industry story.
          </h3>
          <p className="mt-2 text-sm text-white/70 sm:text-base">
            Tell us your goals, and we’ll tailor a plan that fits your audience and pace.
          </p>
          <div className="mt-5 flex justify-center">
            <Button asChild className="border-white/20 bg-white/10 text-white hover:bg-white/15">
              <Link href="/#contact">Get in touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}


