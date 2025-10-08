// Header is rendered from Hero per design
import { SiteFooter } from "@/components/site-footer"
import { Hero } from "@/components/sections/hero"
import { Contact } from "@/components/sections/contact"
import { WhoWeAre } from "@/components/sections/who-we-are"
import { MagicBentoSection } from "@/components/sections/magic-bento-section"

export default function HomePage() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <main>
        <Hero />
        <WhoWeAre />
        <MagicBentoSection />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  )
}
