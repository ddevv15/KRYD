import type * as React from "react"
import Image from "next/image"
// <CHANGE> Fix static image import to use '@/public/...'
import krydLogo from "@/public/images/KRYD.png"

type LogoProps = Omit<React.ComponentProps<typeof Image>, "src">

export function Logo({ alt = "KRYD logo", className, ...props }: LogoProps) {
  return (
    <Image
      src={krydLogo}
      alt={alt}
      className={className}
      {...props}
    />
  )
}
