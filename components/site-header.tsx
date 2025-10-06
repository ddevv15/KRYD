"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"
import { cn } from "@/lib/utils"

type SiteHeaderProps = {
  variant?: "landing" | "default"
  sticky?: boolean
  solid?: boolean
}

export function SiteHeader({}: SiteHeaderProps = {}) {
  return (
    <header
      id="site-header"
      className={cn(
        "fixed left-1/2 top-4 z-50 w-[calc(100%-2rem)] max-w-6xl -translate-x-1/2 rounded-full border border-white/20 bg-white/10 text-white shadow-lg backdrop-blur supports-[backdrop-filter]:backdrop-blur",
      )}
    >
      <div id="site-header-inner" className={cn("mx-auto flex items-center justify-between px-4 py-2")}> 
        <Link id="site-header-home" href="/" className="inline-flex items-center gap-2">
          <span className="sr-only">Home</span>
          <Logo className="h-10 w-10 md:h-12 md:w-12 shrink-0" alt="" aria-hidden />
          <span className={cn("text-sm font-medium tracking-tight", "text-black")}>KRYD</span>
        </Link>

        <nav id="site-header-nav" aria-label="Primary" className="hidden items-center gap-6 sm:flex">
          <a href="#overview" className={cn("text-sm text-black/80 hover:text-white")}>Overview</a>
          <a href="#services" className={cn("text-sm text-black/80 hover:text-white")}>Services</a>
          <a href="#contact" className={cn("text-sm text-black/80 hover:text-white")}>Contact</a>
        </nav>

        <div id="site-header-cta" className="flex items-center gap-2">
          <Button asChild size="sm" className="border-white/20 bg-white/10 text-black hover:bg-white/15">
            <a href="#contact">Get in touch</a>
          </Button>
        </div>
      </div>
    </header>
  )
}
