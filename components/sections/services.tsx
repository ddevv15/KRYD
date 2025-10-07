import { Logo } from "@/components/logo"
import { ClientShowcase } from "./client-showcase"

export function Services() {
  const services = [
    {
      title: "Event Management",
      body: "From intimate gatherings to large-scale experiences, we plan and execute events that leave lasting impressions.",
    },
    {
      title: "Digital Marketing",
      body: "Data-driven strategies and targeted campaigns to help your brand reach the right audience and achieve measurable results.",
    },
    {
      title: "Social Media Management",
      body: "Consistent, creative, and engaging social presence that builds community and strengthens your brand voice.",
    },
    {
      title: "Reputation Management",
      body: "We monitor, manage, and enhance your brand image across platforms to ensure you stay trusted and respected.",
    },
    {
      title: "Website Development",
      body: "Clean, modern, and functional websites that represent your brand and help you grow your digital presence.",
    },
  ]

  return (
    <section id="services" aria-labelledby="services-title" className="bg-black">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:py-16 md:py-20">
        <h2 id="services-title" className="text-balance text-2xl sm:text-3xl font-semibold flex items-center gap-2">
          <Logo className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12" alt="" aria-hidden />
          <span>Our Services</span>
        </h2>
        <p className="mt-3 text-sm sm:text-base text-muted-foreground">
          We combine creativity, strategy, and execution to help brands make a lasting impression.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-3">
          {services.map((s) => (
            <article key={s.title} className="rounded-lg border border-border bg-card p-5">
              <h3 className="text-sm font-medium">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
            </article>
          ))}
        </div>
        {/* Client Showcase Component */}
        {/* <ClientShowcase className="mt-12" /> */}
      </div>
    </section>
  )
}
