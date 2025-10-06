import type * as React from "react"

type LogoProps = React.ImgHTMLAttributes<HTMLImageElement>

// Simple reusable team logo component
export function Logo({ alt = "KRYD logo", className, ...props }: LogoProps) {
  return <img src="/images/KRYD.png" alt={alt} className={className} {...props} />
}
