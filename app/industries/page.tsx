"use client"

import { Button } from "@/components/ui/button"
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
  { title: "Fashion & Clothing", description: "Brands building lifestyle driven identities across channels.", icon: Shirt },
  { title: "Food & Beverage", description: "Restaurants and cloud kitchens boosting awareness and orders.", icon: Utensils },
  { title: "Events & Entertainment", description: "Artists and venues with standout promotions and coordination.", icon: Clapperboard },
  { title: "Health & Wellness", description: "Gyms, clinics, and wellness brands growing loyal communities.", icon: HeartPulse },
  { title: "Education & Training", description: "Institutes and e-learning platforms expanding reach online.", icon: GraduationCap },
  { title: "Travel & Tourism", description: "Agencies and tour operators strengthening digital footprint.", icon: Plane },
  { title: "E-Commerce & Retail", description: "Stores and retailers driving traffic and conversions.", icon: ShoppingBag },
  { title: "Lifestyle & Home Décor", description: "Modern brands telling visual stories that convert.", icon: Sofa },
  { title: "Automotive", description: "Dealers and auto brands with targeted, experiential marketing.", icon: Car },
  { title: "Corporate & Startups", description: "Businesses scaling identity, digital growth, and partnerships.", icon: Briefcase },
]

export default function IndustriesPage() {
  return (
    <div className="min-h-dvh bg-black text-foreground">
      <style jsx>{`
        .industries-section {
          --glow-x: 50%;
          --glow-y: 50%;
          --glow-intensity: 0;
          --glow-radius: 200px;
          --border-color: #392e4e;
          --background-dark: #060010;
        }
        
        .bento-industry-card {
          will-change: transform, box-shadow;
          transform: translateZ(0);
          backface-visibility: hidden;
        }
        
        .bento-industry-card::after {
          content: '';
          position: absolute;
          inset: 0;
          padding: 2px;
          background: radial-gradient(var(--glow-radius) circle at var(--glow-x) var(--glow-y),
              rgba(58, 41, 255, calc(var(--glow-intensity) * 0.8)) 0%,
              rgba(255, 148, 180, calc(var(--glow-intensity) * 0.6)) 40%,
              rgba(255, 50, 50, calc(var(--glow-intensity) * 0.4)) 60%,
              transparent 80%);
          border-radius: inherit;
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask-composite: exclude;
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          pointer-events: none;
          transition: opacity 0.3s ease;
          z-index: 1;
          opacity: 0;
        }
        
        .bento-industry-card:hover::after {
          opacity: 1;
        }
        
        .bento-industry-card:hover {
          box-shadow: 0 4px 20px rgba(58, 41, 255, 0.3), 0 0 30px rgba(255, 148, 180, 0.2), 0 0 40px rgba(255, 50, 50, 0.1);
        }
      `}</style>
      {/* Fixed glass header for consistency */}
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Soft background */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <Aurora colorStops={["#3A29FF", "#FF94B4", "#FF3232"]} amplitude={1.0} blend={0.5} speed={0.5} />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="mx-auto grid min-h-[40svh] max-w-7xl place-content-center gap-3 px-4 py-6 text-center sm:py-8">
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
            Industries We Serve
          </h1>
          <p className="text-pretty text-sm text-white/80 sm:text-base">
            Every industry has its story, and we help you tell it better.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section aria-labelledby="industries-title" className="industries-section mx-auto max-w-7xl px-4 py-12 sm:py-16">
        <h2 id="industries-title" className="sr-only">
          Industry categories
        </h2>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map(({ title, description, icon: Icon }) => (
            <article 
              key={title} 
              className="bento-industry-card flex flex-col justify-between relative h-full w-full p-5 rounded-[20px] border border-solid font-light overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-0.5"
              style={{
                backgroundColor: '#060010',
                borderColor: '#392e4e',
                color: '#ffffff',
                minHeight: '180px',
                '--glow-x': '50%',
                '--glow-y': '50%',
                '--glow-intensity': '0',
                '--glow-radius': '200px'
              } as React.CSSProperties}
              onMouseMove={(e) => {
                const card = e.currentTarget;
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const relativeX = (x / rect.width) * 100;
                const relativeY = (y / rect.height) * 100;
                
                card.style.setProperty('--glow-x', `${relativeX}%`);
                card.style.setProperty('--glow-y', `${relativeY}%`);
                card.style.setProperty('--glow-intensity', '1');
              }}
              onMouseLeave={(e) => {
                const card = e.currentTarget;
                card.style.setProperty('--glow-intensity', '0');
              }}
            >
              <div className="card__header flex items-center gap-3 relative text-white mb-4">
                <div className="rounded-md bg-white/10 p-2 text-white">
                  <Icon aria-hidden className="h-5 w-5" />
                </div>
                <span className="card__label text-base font-semibold">{title}</span>
              </div>
              <div className="card__content flex flex-col relative text-white flex-1">
                <p className="card__description text-sm leading-relaxed opacity-90">
                  {description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="industries-section mx-auto max-w-7xl px-4 pb-16 sm:pb-20">
        <div 
          className="bento-industry-card rounded-[20px] border border-solid p-8 text-center sm:p-12 transition-all duration-300 ease-in-out hover:-translate-y-0.5 relative overflow-hidden"
          style={{
            backgroundColor: '#060010',
            borderColor: '#392e4e',
            color: '#ffffff',
            '--glow-x': '50%',
            '--glow-y': '50%',
            '--glow-intensity': '0',
            '--glow-radius': '200px'
          } as React.CSSProperties}
          onMouseMove={(e) => {
            const card = e.currentTarget;
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const relativeX = (x / rect.width) * 100;
            const relativeY = (y / rect.height) * 100;
            
            card.style.setProperty('--glow-x', `${relativeX}%`);
            card.style.setProperty('--glow-y', `${relativeY}%`);
            card.style.setProperty('--glow-intensity', '1');
          }}
          onMouseLeave={(e) => {
            const card = e.currentTarget;
            card.style.setProperty('--glow-intensity', '0');
          }}
        >
          <h3 className="text-balance text-2xl font-semibold text-white sm:text-3xl md:text-4xl">
            Let's craft your industry story.
          </h3>
          <p className="mt-4 text-base text-white/80 sm:text-lg max-w-2xl mx-auto">
            Tell us your goals, and we'll tailor a plan that fits your audience and pace.
          </p>
          <div className="mt-6 flex justify-center">
            <Button asChild size="lg" className="bg-white text-black hover:bg-white/90 font-semibold">
              <Link href="/#contact">Get in touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}


