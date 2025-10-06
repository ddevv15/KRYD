"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

type Client = {
  name: string
  src: string
}

const clients: Client[] = [
  { name: "Acme Corp", src: "/acme-corp-logo.png" },
  { name: "Globex", src: "/globex-inspired-logo.png" },
  { name: "Initech", src: "/generic-office-logo.png" },
  { name: "Umbrella", src: "/abstract-umbrella-logo.png" },
  { name: "Soylent", src: "/soylent-logo.jpg" },
  { name: "Hooli", src: "/hooli-logo.jpg" },
  { name: "Massive Dynamic", src: "/massive-dynamic-logo.jpg" },
  { name: "Stark Industries", src: "/stark-industries-inspired-logo.png" },
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
                <img src={c.src || "/placeholder.svg"} alt={c.name} className="h-8 md:h-10 w-auto" loading="lazy" />
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
