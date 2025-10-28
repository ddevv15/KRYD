"use client"

import type React from "react"
import { Logo } from "@/components/logo"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import emailjs from "@emailjs/browser"
import { getRandomItem, type Quote, type Fact } from "@/data/quotes-and-facts"

export function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const formRef = useRef<HTMLFormElement>(null)
  
  // Client-only random quote/fact to avoid hydration mismatch
  const [randomItem, setRandomItem] = useState<Quote | Fact | null>(null)
  
  useEffect(() => {
    // Set random item only on client-side after mount
    setRandomItem(getRandomItem())
  }, [])

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("loading")

    try {
      if (!formRef.current) {
        throw new Error("Form reference not found")
      }
      
      const result = await emailjs.sendForm(
        'service_thddmyk',  // Service ID
        'template_keixzan', // Template ID
        formRef.current,
        'a-UbED8iyoshDGU-Z' // Public Key
      )
      
      console.log("Email sent successfully:", result.text)
      setStatus("success")
      
      // Clear the form
      if (formRef.current) {
        formRef.current.reset()
      }
      
      // Reset success message after 5 seconds
      setTimeout(() => setStatus("idle"), 5000)
    } catch (error) {
      console.error("EmailJS Error:", error)
      setStatus("error")
      
      // Reset error message after 5 seconds
      setTimeout(() => setStatus("idle"), 5000)
    }
  }

  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-black">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:py-16 md:py-20">
        <h2 id="contact-title" className="text-balance text-2xl sm:text-3xl font-semibold flex items-center gap-2">
          <Logo className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12" alt="" aria-hidden />
          <span>Let’s collaborate</span>
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
          <form ref={formRef} onSubmit={handleSubmit} className="rounded-lg border border-border bg-card p-4 sm:p-5">
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="from_name">Name</Label>
                <Input id="from_name" name="from_name" placeholder="Your Name" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="from_email">Email</Label>
                <Input id="from_email" name="from_email" type="email" placeholder="Your Email" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" placeholder="What can we help you build?" required />
              </div>
              <div className="flex items-center justify-end">
                <Button type="submit" size="sm" disabled={status === "loading"}>
                  {status === "loading" ? "Sending..." : "Send"}
                </Button>
              </div>
              {status === "success" && (
                <p className="text-sm text-green-500">✓ Message sent successfully! We'll get back to you shortly.</p>
              )}
              {status === "error" && (
                <p className="text-sm text-red-500">✗ Failed to send message. Please try again.</p>
              )}
            </div>
          </form>

          <aside id="quote-fact-display" className="rounded-lg border border-border bg-card p-8 sm:p-10 flex items-center justify-center min-h-[300px]">
            {!randomItem ? (
              // Loading skeleton placeholder
              <div className="space-y-6 text-center max-w-2xl w-full animate-pulse">
                <div className="h-4 bg-muted rounded w-32 mx-auto" />
                <div className="space-y-3">
                  <div className="h-8 bg-muted rounded w-full" />
                  <div className="h-8 bg-muted rounded w-5/6 mx-auto" />
                  <div className="h-8 bg-muted rounded w-4/6 mx-auto" />
                </div>
                <div className="h-5 bg-muted rounded w-24 mx-auto" />
              </div>
            ) : 'author' in randomItem ? (
              // Display Quote
              <div className="space-y-6 text-center max-w-2xl">
                <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                  Quote Of The Day
                </h3>
                <blockquote className="space-y-4">
                  <p className="text-2xl sm:text-3xl font-medium italic leading-relaxed text-foreground">
                    "{randomItem.text}"
                  </p>
                  <footer className="text-base sm:text-lg text-muted-foreground font-medium">
                    — {randomItem.author}
                  </footer>
                </blockquote>
              </div>
            ) : (
              // Display Fact
              <div className="space-y-6 text-center max-w-2xl">
                <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                  Fact Of The Day
                </h3>
                <div className="relative px-6">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-full" />
                  <div className="absolute right-0 top-0 bottom-0 w-1 bg-primary rounded-full" />
                  <p className="text-xl sm:text-2xl leading-relaxed text-foreground font-medium">
                    {randomItem.text}
                  </p>
                </div>
              </div>
            )}
          </aside>
        </div>
      </div>
    </section>
  )
}
