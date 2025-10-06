import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Hero } from "@/components/sections/hero"
import { Overview } from "@/components/sections/overview"
import { Services } from "@/components/sections/services"
import { Contact } from "@/components/sections/contact"

export default function HomePage() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <SiteHeader />
      <main>
        <Hero />
        <Overview />
        <Services />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  )
}
