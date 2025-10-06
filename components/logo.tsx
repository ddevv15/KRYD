import type * as React from "react"
import Image from "next/image"

type LogoProps = Omit<React.ComponentProps<typeof Image>, "src">

export function Logo({ alt = "KRYD logo", className, ...props }: LogoProps) {
  return (
    <Image
      src="/images/KRYD.png"
      alt={alt}
      className={className}
      width={512}
      height={512}
      {...props}
    />
  )
}
