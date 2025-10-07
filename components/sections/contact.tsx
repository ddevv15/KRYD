"use client"

import type React from "react"
import { Logo } from "@/components/logo"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function Contact() {
  const [status, setStatus] = useState<"idle" | "submitted">("idle")

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("submitted")
  }

  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-black">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:py-16 md:py-20">
        <h2 id="contact-title" className="text-balance text-2xl sm:text-3xl font-semibold flex items-center gap-2">
          <Logo className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12" alt="" aria-hidden />
          <span>Let’s collaborate</span>
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
          <form onSubmit={handleSubmit} className="rounded-lg border border-border bg-card p-4 sm:p-5">
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" placeholder="Jane Doe" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" placeholder="jane@example.com" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" placeholder="What can we help you build?" required />
              </div>
              <div className="flex items-center justify-end">
                <Button type="submit" size="sm">
                  Send
                </Button>
              </div>
              {status === "submitted" && (
                <p className="text-sm text-muted-foreground">Thanks! We’ll get back to you shortly.</p>
              )}
            </div>
          </form>

          <aside className="rounded-lg border border-border bg-card p-4 sm:p-5">
            <h3 className="text-sm font-medium">How we work</h3>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
              <li>Start with a solid, accessible foundation.</li>
              <li>Iterate quickly with clear milestones.</li>
              <li>Scale features as your needs evolve.</li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  )
}
