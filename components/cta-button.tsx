'use client'

import Link from "next/link"
import { trackAddToCart, trackInitiateCheckout } from "@/lib/analytics"
import { ErrorBoundary } from "./error-boundary"

interface CTAButtonProps {
  href: string
  section: 'hero' | 'method' | 'final'
  className?: string
  children: React.ReactNode
}

export function CTAButton({ href, section, className = "", children }: CTAButtonProps) {
  const handleCTAClick = () => {
    try {
      trackAddToCart()
      trackInitiateCheckout()
      
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'cta_click', {
          section,
          value: 297,
          currency: 'BRL'
        })
      }
    } catch (error) {
      console.error('Analytics tracking error:', error)
      // Continue with navigation even if analytics fails
    }
  }

  return (
    <ErrorBoundary>
      <Link
        href={href}
        onClick={handleCTAClick}
        className={className}
      >
        {children}
      </Link>
    </ErrorBoundary>
  )
} 