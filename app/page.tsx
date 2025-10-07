// Header is rendered from Hero per design
import { SiteFooter } from "@/components/site-footer"
import { Hero } from "@/components/sections/hero"
import { Overview } from "@/components/sections/overview"
import { Services } from "@/components/sections/services"
import { Contact } from "@/components/sections/contact"
import { WhoWeAre } from "@/components/sections/who-we-are"

export default function HomePage() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <main>
        <Hero />
        <Overview />
        <Services />
        <WhoWeAre />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  )
}
