"use client"

import type React from "react"
import { Logo } from "@/components/logo"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import emailjs from "@emailjs/browser"

export function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const formRef = useRef<HTMLFormElement>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("loading")

    try {
      if (!formRef.current) {
        throw new Error("Form reference not found")
      }
      
      const result = await emailjs.sendForm(
        'service_5uefg5i',  // Service ID
        'template_xowosez', // Template ID
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
      <div className="mx-auto max-w-6xl px-4 py-14 sm:py-16 md:py-20">
        <h2 id="contact-title" className="text-balance text-2xl sm:text-3xl font-semibold flex items-center gap-2">
          <Logo className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12" alt="" aria-hidden />
          <span>Let’s collaborate</span>
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
          <form ref={formRef} onSubmit={handleSubmit} className="rounded-lg border border-border bg-card p-4 sm:p-5">
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="from_name">Name</Label>
                <Input id="from_name" name="from_name" placeholder="Jane Doe" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="from_email">Email</Label>
                <Input id="from_email" name="from_email" type="email" placeholder="jane@example.com" required />
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
