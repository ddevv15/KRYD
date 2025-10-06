"use client"

import * as React from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import acme from "@/../public/acme-corp-logo.png"
import globex from "@/../public/globex-inspired-logo.png"
import initech from "@/../public/generic-office-logo.png"
import umbrella from "@/../public/abstract-umbrella-logo.png"
import soylent from "@/../public/soylent-logo.jpg"
import hooli from "@/../public/hooli-logo.jpg"
import massive from "@/../public/massive-dynamic-logo.jpg"
import stark from "@/../public/stark-industries-inspired-logo.png"

type Client = {
  name: string
  src: any
}

const clients: Client[] = [
  { name: "Acme Corp", src: acme },
  { name: "Globex", src: globex },
  { name: "Initech", src: initech },
  { name: "Umbrella", src: umbrella },
  { name: "Soylent", src: soylent },
  { name: "Hooli", src: hooli },
  { name: "Massive Dynamic", src: massive },
  { name: "Stark Industries", src: stark },
]

export function ClientShowcase({
  className,
  title = "Trusted by forward‑thinking teams",
  speed = 40, // seconds for one loop
}: {
  className?: string
  title?: string
  speed?: number
}) {
  const row = React.useMemo(() => [...clients, ...clients], [])

  return (
    <section aria-label="Client showcase" className={cn("w-full py-12 md:py-16", className)}>
      <div className="container mx-auto">
        <h3 className="text-balance text-center text-xl md:text-2xl font-semibold text-foreground mb-6 md:mb-8">
          {title}
        </h3>

        {/* Marquee */}
        <div className="relative overflow-hidden">
          <div className="marquee track flex items-center gap-8 md:gap-12 will-change-transform" aria-hidden="true">
            {row.map((c, i) => (
              <div
                key={`${c.name}-${i}`}
                className="flex items-center justify-center shrink-0 opacity-80 hover:opacity-100 transition-opacity"
                role="img"
                aria-label={c.name}
                title={c.name}
              >
                <Image src={c.src} alt={c.name} width={160} height={40} className="h-8 md:h-10 w-auto" />
              </div>
            ))}
          </div>
        </div>

        {/* Reduced motion fallback: visible to screen readers via alt and title above; visually, users can pause by hovering */}
      </div>

      <style jsx>{`
        .track {
          animation: scroll ${speed}s linear infinite;
        }
        .track:hover {
          animation-play-state: paused;
        }
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .track {
            animation: none;
            transform: none;
          }
        }
      `}</style>
    </section>
  )
}
