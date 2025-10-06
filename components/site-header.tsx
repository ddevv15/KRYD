"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"

export function SiteHeader() {
  return (
    <header className="w-full border-b border-border bg-background">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="inline-flex items-center gap-2">
          <span className="sr-only">Home</span>
          <Logo className="h-12 w-12 md:h-12 md:w-12 shrink-0" alt="" aria-hidden />
          <span className="text-sm font-medium tracking-tight text-foreground">KRYD</span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-6 sm:flex">
          <a href="#overview" className="text-sm text-muted-foreground hover:text-foreground">
            Overview
          </a>
          <a href="#services" className="text-sm text-muted-foreground hover:text-foreground">
            Services
          </a>
          <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground">
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild size="sm">
            <a href="#contact">Get in touch</a>
          </Button>
        </div>
      </div>
    </header>
  )
}
