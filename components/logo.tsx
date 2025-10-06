import type * as React from "react"
import Image from "next/image"
import krydLogo from "@/../public/images/KRYD.png"

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
