import { Logo } from "@/components/logo"

export function Overview() {
  return (
    <section id="overview" aria-labelledby="overview-title" className="bg-background">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <h2 id="overview-title" className="text-balance text-2xl font-semibold md:text-3xl flex items-center gap-2">
          <Logo className="h-12 w-12" alt="" aria-hidden />
          <span>Why Us?</span>
        </h2>
        <p className="mt-3 text-sm text-muted-foreground md:text-base">
          Because your business deserves more than surface-level work. We deliver with intention and integrity:
        </p>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {[
            {
              title: "Authenticity at Core",
              body: "Bringing honesty, integrity, and real care to every project — because trust matters.",
            },
            {
              title: "End-to-End Solutions",
              body: "Social media, events, ads, promotions — all under one roof, so you save time, energy, and mental load.",
            },
            {
              title: "Growth Mindset",
              body: "We not only help you stand out — we help you scale smartly.",
            },
            {
              title: "Value Over Vanity",
              body: "No fluff. No empty metrics. Only meaningful results.",
            },
          ].map((item) => (
            <article key={item.title} className="rounded-lg border border-border bg-card p-5">
              <h3 className="text-sm font-medium">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
