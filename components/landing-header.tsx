'use client'

import * as React from 'react'
import { SiteHeader } from '@/components/site-header'

export function LandingHeader() {
  const [solid, setSolid] = React.useState(false)
  React.useEffect(() => {
    const hero = document.getElementById('hero')
    if (!hero) return
    const io = new IntersectionObserver(
      ([entry]) => {
        setSolid(!entry.isIntersecting)
      },
      { threshold: 0, rootMargin: '-80px 0px 0px 0px' },
    )
    io.observe(hero)
    return () => io.disconnect()
  }, [])

  return <SiteHeader variant="landing" sticky solid={solid} />
}


