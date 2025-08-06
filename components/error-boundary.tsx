'use client'

import { Component, ReactNode } from 'react'

interface ErrorBoundaryState {
  hasError: boolean
}

interface ErrorBoundaryProps {
  children: ReactNode
  fallback?: ReactNode
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: any) {
    console.error('Analytics Error Boundary caught an error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="inline-flex flex-col items-center justify-center px-6 py-3 lg:px-8 lg:py-4 rounded-full font-bold text-black uppercase tracking-wide text-sm lg:text-base leading-tight bg-[rgb(255,222,89)] w-[200px] lg:w-[240px] h-[70px] lg:h-[80px]">
          <span>QUERO</span>
          <span>COMEÇAR</span>
          <span>AGORA</span>
        </div>
      )
    }

    return this.props.children
  }
} 