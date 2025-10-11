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
        "fixed left-1/2 top-3 z-50 w-[calc(100%-1rem)] sm:top-4 sm:w-[calc(100%-2rem)] max-w-6xl -translate-x-1/2 rounded-full border border-white/30 bg-white/10 text-white shadow-lg backdrop-blur supports-[backdrop-filter]:backdrop-blur",
      )}
    >
      <div id="site-header-inner" className={cn("mx-auto flex items-center justify-between px-3 py-2 sm:px-4")}> 
        <button 
          id="site-header-home" 
          onClick={() => {
            if (window.location.pathname === '/') {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
              window.location.href = '/';
            }
          }}
          className="inline-flex items-center gap-2 cursor-pointer"
        >
          <span className="sr-only">Home</span>
          <Logo className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 shrink-0" alt="" aria-hidden />
          <span className={cn("text-sm font-medium tracking-tight", "text-white")}>KRYD CoLabs</span>
        </button>

        <nav id="site-header-nav" aria-label="Primary" className="hidden items-center gap-6 sm:flex">
          <button 
            onClick={() => {
              if (window.location.pathname === '/') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              } else {
                window.location.href = '/';
              }
            }}
            className={cn("text-sm text-white/80 hover:text-white cursor-pointer")}
          >
            Home
          </button>
          <Link href="/#who-we-are" className={cn("text-sm text-white/80 hover:text-white")}>Who We Are</Link>
          <Link href="/#overview" className={cn("text-sm text-white/80 hover:text-white")}>Services</Link>
          <Link href="/industries" className={cn("text-sm text-white/80 hover:text-white")}>Industries</Link>
        </nav>

        {/* Desktop CTA */}
        <div id="site-header-cta" className="hidden items-center gap-2 sm:flex">
          <Button asChild size="sm" className="border-white/30 bg-white/10 text-white hover:bg-white/15">
            <Link href="/#contact">Get in touch</Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="sm:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" className="border-white/30 bg-white/10 text-white hover:bg-white/15">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-black/90 text-white border-white/30 p-5">
              <SheetHeader className="space-y-1">
                <SheetTitle className="text-white text-base">Menu</SheetTitle>
                {/* <SheetDescription className="text-white/70 text-sm">Navigate</SheetDescription> */}
              </SheetHeader>
              <nav className="mt-6 flex flex-col gap-3">
                <SheetClose asChild>
                  <button 
                    onClick={() => {
                      if (window.location.pathname === '/') {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      } else {
                        window.location.href = '/';
                      }
                    }}
                    className="rounded-md px-2 py-2 text-white/90 hover:text-white hover:bg-white/10 text-left"
                  >
                    Home
                  </button>
                </SheetClose>
                <SheetClose asChild>
                  <Link href="/#who-we-are" className="rounded-md px-2 py-2 text-white/90 hover:text-white hover:bg-white/10">Who We Are</Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link href="/#overview" className="rounded-md px-2 py-2 text-white/90 hover:text-white hover:bg-white/10">Services</Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link href="/industries" className="rounded-md px-2 py-2 text-white/90 hover:text-white hover:bg-white/10">Industries</Link>
                </SheetClose>
              </nav>
              <div className="mt-6">
                <SheetClose asChild>
                  <Button asChild className="w-full border-white/30 bg-white/10 text-white hover:bg-white/15">
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
