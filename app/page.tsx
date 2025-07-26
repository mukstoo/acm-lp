'use client'

import Image from "next/image"
import Link from "next/link"
import { Check, Shield, Pizza } from "lucide-react"
import { trackAddToCart, trackInitiateCheckout } from "@/lib/analytics"

export default function LandingPage() {
  const handleCTAClick = (section: 'hero' | 'method' | 'final') => {
    trackAddToCart()
    trackInitiateCheckout()
    
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'cta_click', {
        section,
        value: 297,
        currency: 'BRL'
      })
    }
  }

  return (
    <main className="min-h-screen bg-white">
      {/* 1. Hero Section - Dark Plum Background with Desktop Two-Column Layout */}
      <section className="px-5 py-12 lg:px-12 lg:py-16" style={{ backgroundColor: 'rgb(43, 24, 33)' }}>
        <div className="max-w-sm mx-auto lg:max-w-6xl lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
          {/* Left Column - Text Content */}
          <div className="lg:order-1">
            {/* Heading - Responsive sizing */}
            <h1 className="text-left font-black leading-tight mb-8 lg:mb-12 text-[42px] lg:text-[56px]"
                style={{ color: 'rgb(255, 222, 89)', lineHeight: '1.0' }}>
              <div>Elimine</div>
              <div>gordura</div>
              <div>Abdominal</div>
              <div>em três semanas</div>
            </h1>

            {/* Sub-heading - Responsive sizing */}
            <p className="text-white text-center lg:text-left mb-10 lg:mb-12 text-xl lg:text-3xl font-bold">
              Com o exclusivo <strong>Método ACM</strong> - Aceleração do Ciclo Metabólico
            </p>

            {/* Benefits List - Responsive sizing */}
            <div className="space-y-4 lg:space-y-6 mb-12 lg:mb-16">
              <div className="flex items-center gap-4 lg:gap-6">
                <span className="text-white text-xl lg:text-3xl font-bold">Treino de 16 minutos</span>
                <div className="w-6 h-6 lg:w-8 lg:h-8 bg-green-500 rounded flex items-center justify-center">
                  <span className="text-white text-sm lg:text-base font-bold">✓</span>
                </div>
              </div>
              <div className="flex items-center gap-4 lg:gap-6">
                <span className="text-white text-xl lg:text-3xl font-bold">Sem academia</span>
                <div className="w-6 h-6 lg:w-8 lg:h-8 bg-green-500 rounded flex items-center justify-center">
                  <span className="text-white text-sm lg:text-base font-bold">✓</span>
                </div>
              </div>
              <div className="flex items-center gap-4 lg:gap-6">
                <span className="text-white text-xl lg:text-3xl font-bold">Sem dieta restritiva</span>
                <div className="w-6 h-6 lg:w-8 lg:h-8 bg-green-500 rounded flex items-center justify-center">
                  <span className="text-white text-sm lg:text-base font-bold">✓</span>
                </div>
              </div>
            </div>

            {/* CTA Button - Centered on desktop */}
            <div className="text-center">
              <Link
                href="https://pay.hotmart.com/your-checkout-link"
                onClick={() => handleCTAClick('hero')}
                className="inline-flex flex-col items-center justify-center px-6 py-3 lg:px-8 lg:py-4 rounded-full font-bold text-black uppercase tracking-wide transition-all duration-300 hover:scale-105 text-sm lg:text-base leading-tight bg-[rgb(255,222,89)] w-[200px] lg:w-[240px] h-[70px] lg:h-[80px]"
              >
                <span>QUERO</span>
                <span>COMEÇAR</span>
                <span>AGORA</span>
              </Link>
            </div>
          </div>

          {/* Right Column - Hero Image (Desktop) / Hidden on Mobile */}
          <div className="hidden lg:block lg:order-2">
            <div className="relative w-full h-[500px] lg:h-[600px] overflow-hidden rounded-lg">
              <Image
                src="/images/hero-man.jpg"
                alt="Homem atlético sem camisa se alongando ao ar livre"
                fill
                className="object-cover object-center"
                sizes="50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image - Mobile Only (After the first button) */}
      <div className="lg:hidden relative aspect-square w-full border-4 border-t-0 overflow-hidden" 
           style={{ borderColor: 'rgb(43, 24, 33)' }}>
        <Image
          src="/images/hero-man.jpg"
          alt="Homem atlético sem camisa se alongando ao ar livre"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
      </div>

      {/* 2. Problems Section - Responsive Layout */}
      <section className="px-5 py-12 lg:px-12 lg:py-16" style={{ backgroundColor: 'rgb(43, 24, 33)' }}>
        <div className="max-w-sm mx-auto lg:max-w-6xl">
          {/* Heading - Responsive sizing */}
          <h2 className="font-black leading-tight mb-10 lg:mb-16 text-center text-[32px] lg:text-[42px]" 
              style={{ color: 'rgb(255, 222, 89)', lineHeight: '1.1' }}>
            <div>Por que você</div>
            <div>ainda não conseguiu</div>
            <div>emagrecer</div>
          </h2>

          {/* Problem List - Responsive grid layout */}
          <div className="space-y-5 lg:space-y-8">
            <div className="flex items-center gap-4 lg:gap-6">
              <div className="w-6 h-6 lg:w-8 lg:h-8 bg-white rounded-full border-2 border-red-500 flex items-center justify-center relative flex-shrink-0">
                <div className="absolute w-4 lg:w-6 h-0.5 bg-red-500 rotate-45"></div>
              </div>
              <span className="text-white text-xl lg:text-3xl font-bold">Falta de tempo</span>
            </div>
            <div className="flex items-center gap-4 lg:gap-6">
              <div className="w-6 h-6 lg:w-8 lg:h-8 bg-white rounded-full border-2 border-red-500 flex items-center justify-center relative flex-shrink-0">
                <div className="absolute w-4 lg:w-6 h-0.5 bg-red-500 rotate-45"></div>
              </div>
              <span className="text-white text-xl lg:text-3xl font-bold">Metabolismo lento</span>
            </div>
            <div className="flex items-center gap-4 lg:gap-6">
              <div className="w-6 h-6 lg:w-8 lg:h-8 bg-white rounded-full border-2 border-red-500 flex items-center justify-center relative flex-shrink-0">
                <div className="absolute w-4 lg:w-6 h-0.5 bg-red-500 rotate-45"></div>
              </div>
              <span className="text-white text-xl lg:text-3xl font-bold">Dietas e treinos que não se encaixam na sua rotina</span>
            </div>
            <div className="flex items-center gap-4 lg:gap-6">
              <div className="w-6 h-6 lg:w-8 lg:h-8 bg-white rounded-full border-2 border-red-500 flex items-center justify-center relative flex-shrink-0">
                <div className="absolute w-4 lg:w-6 h-0.5 bg-red-500 rotate-45"></div>
              </div>
              <span className="text-white text-xl lg:text-3xl font-bold">Métodos que não funcionam</span>
            </div>
          </div>

          {/* Solution Statement */}
          <div className="mt-12 lg:mt-20">
            <div className="flex items-center gap-4 lg:gap-6">
              <span className="text-2xl lg:text-4xl flex-shrink-0">🧠</span>
              <span className="text-white text-xl lg:text-3xl font-bold">A culpa não é sua. O problema está no método, e eu tenho a solução.</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Method Section - Responsive Layout */}
      <section className="bg-white px-6 py-12 lg:px-12 lg:py-16">
        <div className="max-w-sm mx-auto lg:max-w-6xl">
          {/* Heading - Responsive sizing */}
          <h2 className="font-black leading-tight mb-10 lg:mb-16 text-center text-[30px] lg:text-[40px]" 
              style={{ color: 'rgb(255, 222, 89)', lineHeight: '1.1' }}>
            <div>Conheça o método</div>
            <div>ACM – Aceleração</div>
            <div>do Ciclo</div>
            <div>Metabólico</div>
          </h2>

          {/* Icon List - Responsive grid */}
          <div className="space-y-5 lg:space-y-8 mb-12 lg:mb-16">
            <div className="flex items-start gap-4 lg:gap-6">
              <span className="text-2xl lg:text-4xl">⚡</span>
              <span className="text-black text-xl lg:text-3xl font-medium">Treino de 16 min por dia</span>
            </div>
            <div className="flex items-start gap-4 lg:gap-6">
              <span className="text-2xl lg:text-4xl">🔥</span>
              <span className="text-black text-xl lg:text-3xl font-medium">Queima de gordura mesmo em repouso</span>
            </div>
            <div className="flex items-start gap-4 lg:gap-6">
              <span className="text-2xl lg:text-4xl">🏠</span>
              <span className="text-black text-xl lg:text-3xl font-medium">Feito em casa, sem equipamentos</span>
            </div>
            <div className="flex items-start gap-4 lg:gap-6">
              <Pizza className="text-2xl lg:text-4xl w-6 h-6 lg:w-8 lg:h-8 text-orange-500" />
              <span className="text-black text-xl lg:text-3xl font-medium">Sem abrir mão da comida que você gosta</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Link
              href="https://pay.hotmart.com/your-checkout-link"
              onClick={() => handleCTAClick('method')}
              className="inline-flex flex-col items-center justify-center px-6 py-3 lg:px-8 lg:py-4 rounded-full font-bold text-black uppercase tracking-wide transition-all duration-300 hover:scale-105 text-sm lg:text-base leading-tight bg-[rgb(255,222,89)] w-[200px] lg:w-[240px] h-[70px] lg:h-[80px]"
            >
              <span>QUERO</span>
              <span>COMEÇAR</span>
              <span>AGORA</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Testimonials Section - Responsive Layout */}
      <section className="bg-white px-6 py-12 lg:px-12 lg:py-16">
        <div className="max-w-sm mx-auto lg:max-w-6xl">
          {/* Section Label */}
          <h2 className="font-bold text-center mb-10 lg:mb-16 text-[28px] lg:text-[36px]" 
              style={{ 
                color: 'rgb(255, 222, 89)'
              }}>
            Depoimentos
          </h2>

          {/* Testimonials - Responsive grid */}
          <div className="space-y-10 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
            <div>
              <p className="text-black text-base lg:text-lg leading-relaxed mb-3">
                Em poucas semanas, vi meu corpo mais tonificado e definitivamente mais enxuto. As roupas são diferentes! Os treinos são intensos e divertidos.
              </p>
              <p className="font-bold text-black text-lg lg:text-xl">Paula A.</p>
            </div>

            <div>
              <p className="text-black text-base lg:text-lg leading-relaxed mb-3">
                Sempre achei que precisava passar horas na academia para ver resultados, mas com o método ACM, meu corpo mudou completamente.
              </p>
              <p className="font-bold text-black text-lg lg:text-xl">Luiz F.</p>
            </div>

            <div>
              <p className="text-black text-base lg:text-lg leading-relaxed mb-3">
                Treinos intensos, divertidos e sem pressa de academia. O método funciona mesmo e o mais importante: se adaptou ao meu trabalho.
              </p>
              <p className="font-bold text-black text-lg lg:text-xl">Fernanda U.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Coach Photo + Método ACM Combined Section - Desktop Side by Side */}
      <section className="bg-black px-2 py-8 lg:px-12 lg:py-16">
        <div className="max-w-sm mx-auto lg:max-w-6xl lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
          
          {/* Left Column - Coach Photo + CTA (Mobile: full width, Desktop: left side) */}
          <div className="relative mb-8 lg:mb-0">
            <div className="relative aspect-[4/5] w-full">
              <Image
                src="/images/instructor.jpg"
                alt="Coach sorrindo com camisa preta esportiva"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
              
              {/* Black Triangle Overlay - Top Right */}
              <div 
                className="absolute top-0 right-0 w-0 h-0"
                style={{
                  borderLeft: '120px solid transparent',
                  borderTop: '120px solid black'
                }}
              />
              
              {/* CTA Button Overlay */}
              <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-full px-5">
                <Link
                  href="https://pay.hotmart.com/your-checkout-link"
                  onClick={() => handleCTAClick('final')}
                  className="flex flex-col items-center justify-center w-full max-w-xs mx-auto px-6 py-3 lg:px-8 lg:py-4 rounded-full font-bold text-black uppercase tracking-wide text-center transition-all duration-300 hover:scale-105 text-sm lg:text-base leading-tight bg-[rgb(255,222,89)] h-[70px] lg:h-[80px]"
                >
                  <span>QUERO</span>
                  <span>COMEÇAR</span>
                  <span>AGORA</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column - Método ACM Card (Mobile: full width, Desktop: right side) */}
          <div className="bg-white rounded-2xl p-6 lg:p-12">
            {/* Heading */}
            <h3 className="font-bold text-center mb-6 lg:mb-8 text-[28px] lg:text-[36px]" 
                style={{ 
                  color: 'rgb(255, 222, 89)'
                }}>
              Método ACM
            </h3>

            {/* Large Check Icon */}
            <div className="text-center mb-8 lg:mb-10">
              <div className="inline-flex items-center justify-center w-20 h-20 lg:w-24 lg:h-24 border-4 border-green-500 rounded-lg">
                <Check className="w-12 h-12 lg:w-16 lg:h-16 text-green-500 stroke-[3]" />
              </div>
            </div>

                         {/* Checklist - Vertical layout like mobile */}
             <div className="space-y-4 lg:space-y-6">
               <div className="flex items-start gap-4 lg:gap-6">
                 <span className="text-green-500 text-xl lg:text-2xl">✅</span>
                 <span className="font-bold text-black text-base lg:text-xl">21 treinos em vídeo (1 por dia)</span>
               </div>
               <div className="flex items-start gap-4 lg:gap-6">
                 <span className="text-green-500 text-xl lg:text-2xl">✅</span>
                 <span className="font-bold text-black text-base lg:text-xl">PDFs com guias</span>
               </div>
               <div className="flex items-start gap-4 lg:gap-6">
                 <span className="text-green-500 text-xl lg:text-2xl">✅</span>
                 <span className="font-bold text-black text-base lg:text-xl">Comunidade exclusiva</span>
               </div>
               <div className="flex items-start gap-4 lg:gap-6">
                 <span className="text-green-500 text-xl lg:text-2xl">✅</span>
                 <span className="font-bold text-black text-base lg:text-xl">Feedbacks semanais</span>
               </div>
               <div className="flex items-start gap-4 lg:gap-6">
                 <span className="text-green-500 text-xl lg:text-2xl">✅</span>
                 <span className="font-bold text-black text-base lg:text-xl">Bônus: Módulo Anti-Procrastinação + Guia Vitamina D</span>
               </div>
               <div className="flex items-start gap-4 lg:gap-6">
                 <span className="text-green-500 text-xl lg:text-2xl">✅</span>
                 <span className="font-bold text-black text-base lg:text-xl">Garantia vitalícia de 7 dias</span>
               </div>
             </div>
          </div>

        </div>
      </section>

      {/* 7. Price & Trust Section - Responsive */}
      <section className="px-5 py-12 lg:px-12 lg:py-16" style={{ backgroundColor: 'rgb(255, 49, 49)' }}>
        <div className="max-w-sm mx-auto lg:max-w-6xl text-center lg:grid lg:grid-cols-12 lg:gap-8 lg:items-center">
          
          {/* Trust Icons - Mobile: row, Desktop: column to the side */}
          <div className="flex justify-center items-center gap-6 mb-8 lg:mb-0 lg:flex-col lg:gap-8 lg:col-span-2">
            <div className="w-16 h-16 lg:w-20 lg:h-20 bg-yellow-400 rounded-full flex items-center justify-center">
              <span className="text-3xl lg:text-4xl">🥇</span>
            </div>
            <div className="w-16 h-16 lg:w-20 lg:h-20 bg-red-600 rounded-full flex items-center justify-center border-4 border-green-500">
              <Shield className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
            </div>
            <div className="w-16 h-16 lg:w-20 lg:h-20 bg-yellow-400 rounded-full flex items-center justify-center">
              <span className="text-black font-bold text-sm lg:text-base">100%</span>
            </div>
          </div>

          {/* Main Content - Desktop: takes remaining space */}
          <div className="lg:col-span-10">
            {/* Offer Line */}
            <div className="mb-6 lg:mb-8">
              <span className="text-black font-bold text-xl lg:text-4xl">⭐ </span>
              <span className="text-black font-bold text-xl lg:text-4xl">
                De <span className="line-through">R$497</span> por apenas <span className="text-3xl lg:text-6xl">R$297</span>
              </span>
            </div>

            {/* Guarantee Line */}
            <div className="mb-12 lg:mb-16">
              <div className="text-black text-base lg:text-2xl font-medium">📜 Acesso completo imediato</div>
              <div className="text-black text-base lg:text-2xl font-medium">🔒 100% online pelo Hotmart</div>
            </div>

            {/* CTA Button */}
            <div className="pt-10">
              <Link
                href="https://pay.hotmart.com/your-checkout-link"
                onClick={() => handleCTAClick('final')}
                className="inline-flex flex-col items-center justify-center px-6 py-3 lg:px-8 lg:py-4 rounded-full font-bold text-black uppercase tracking-wide transition-all duration-300 hover:scale-105 text-sm lg:text-base leading-tight bg-[rgb(255,222,89)] w-[200px] lg:w-[240px] h-[70px] lg:h-[80px]"
              >
                <span>QUERO</span>
                <span>COMEÇAR</span>
                <span>AGORA</span>
              </Link>
            </div>
          </div>

        </div>
      </section>


    </main>
  )
} 