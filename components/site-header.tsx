"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"
import { cn } from "@/lib/utils"
import { Menu } from "lucide-react"
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from "@/components/ui/sheet"

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
      <div id="site-header-inner" className={cn("mx-auto flex items-center justify-between px-3 py-2 sm:px-4")}> 
        <Link id="site-header-home" href="/" className="inline-flex items-center gap-2">
          <span className="sr-only">Home</span>
          <Logo className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 shrink-0" alt="" aria-hidden />
          <span className={cn("text-sm font-medium tracking-tight", "text-white")}>KRYD</span>
        </Link>

        <nav id="site-header-nav" aria-label="Primary" className="hidden items-center gap-6 sm:flex">
          <a href="#overview" className={cn("text-sm text-white/80 hover:text-white")}>Overview</a>
          <a href="#services" className={cn("text-sm text-white/80 hover:text-white")}>Services</a>
          <a href="#contact" className={cn("text-sm text-white/80 hover:text-white")}>Contact</a>
        </nav>

        {/* Desktop CTA */}
        <div id="site-header-cta" className="hidden items-center gap-2 sm:flex">
          <Button asChild size="sm" className="border-white/20 bg-white/10 text-white hover:bg-white/15">
            <a href="#contact">Get in touch</a>
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="sm:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" className="border-white/20 bg-white/10 text-white hover:bg-white/15">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-black/90 text-white border-white/20">
              <SheetHeader>
                <SheetTitle className="text-white">Menu</SheetTitle>
                <SheetDescription className="text-white/70">Navigate</SheetDescription>
              </SheetHeader>
              <div className="mt-4 flex flex-col gap-4">
                <SheetClose asChild>
                  <a href="#overview" className="text-white/90 hover:text-white">Overview</a>
                </SheetClose>
                <SheetClose asChild>
                  <a href="#services" className="text-white/90 hover:text-white">Services</a>
                </SheetClose>
                <SheetClose asChild>
                  <a href="#contact" className="text-white/90 hover:text-white">Contact</a>
                </SheetClose>
                <SheetClose asChild>
                  <Button asChild className="mt-2 border-white/20 bg-white/10 text-white hover:bg-white/15">
                    <a href="#contact">Get in touch</a>
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
