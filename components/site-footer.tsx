import Link from "next/link"
import { Logo } from "@/components/logo"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row">
        <div className="flex items-center gap-2">
          <Logo className="h-12 w-12" alt="" aria-hidden />
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Team Site. All rights reserved.</p>
        </div>
        <nav aria-label="Footer" className="flex items-center gap-4">
          <Link href="#" className="text-xs text-muted-foreground hover:text-foreground">
            Privacy
          </Link>
          <Link href="#" className="text-xs text-muted-foreground hover:text-foreground">
            Terms
          </Link>
          <Link href="#contact" className="text-xs text-muted-foreground hover:text-foreground">
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  )
}
