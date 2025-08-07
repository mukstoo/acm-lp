import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { SquareCheckBig } from "lucide-react";
import { CTAButton } from "@/components/cta-button";

export const dynamic = "error";

export default function LandingPage() {
  return (
    <>
      {/* Skip Navigation Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-yellow-400 focus:text-black focus:rounded focus:shadow-lg focus:outline-none"
      >
        Pular para o conteúdo principal
      </a>

      <main id="main-content" className="min-h-screen bg-white">
        {/* 1. Hero Section - Dark Plum Background with Desktop Two-Column Layout */}
        <section
          className="px-5 py-12 lg:px-0 lg:py-0"
          style={{ backgroundColor: "rgb(43, 24, 33)" }}
        >
          <div className="max-w-sm mx-auto xl:max-w-[1400px] lg:grid lg:grid-cols-2">
            {/* Left Column - Text Content */}
            <div className="lg:px-16 lg:flex lg:flex-col lg:justify-center">
              {/* Heading - Responsive sizing */}
              <h1
                className="text-left font-black leading-tight mb-8 lg:mt-20 lg:mb-12 text-[42px] lg:text-[56px]"
                style={{ color: "rgb(255, 222, 89)", lineHeight: "1.0" }}
              >
                Elimine gordura Abdominal em três semanas
              </h1>

              {/* Sub-heading - Responsive sizing */}
              <p className="text-white text-left mb-10 lg:mb-12 text-xl lg:text-3xl font-[900]">
                Com o exclusivo <strong>Método ACM</strong> - Aceleração do
                Ciclo Metabólico
              </p>

              {/* Benefits List - Responsive sizing */}
              <ul className="space-y-4 lg:space-y-2 mb-12 lg:mb-16">
                <li className="flex items-center gap-4 lg:gap-6">
                  <span className="text-white text-xl lg:text-3xl font-[900]">
                    Treino de 16 minutos
                  </span>
                  <span className="w-6 h-6 lg:w-8 lg:h-8 bg-green-500 rounded flex items-center justify-center text-white text-sm lg:text-base font-bold">
                    ✓
                  </span>
                </li>
                <li className="flex items-center gap-4 lg:gap-6">
                  <span className="text-white text-xl lg:text-3xl font-[900]">
                    Sem academia
                  </span>
                  <span className="w-6 h-6 lg:w-8 lg:h-8 bg-green-500 rounded flex items-center justify-center text-white text-sm lg:text-base font-bold">
                    ✓
                  </span>
                </li>
                <li className="flex items-center gap-4 lg:gap-6">
                  <span className="text-white text-xl lg:text-3xl font-[900]">
                    Sem dieta restritiva
                  </span>
                  <span className="w-6 h-6 lg:w-8 lg:h-8 bg-green-500 rounded flex items-center justify-center text-white text-sm lg:text-base font-bold">
                    ✓
                  </span>
                </li>
              </ul>

              {/* CTA Button - Centered on desktop */}
              <div className="text-center">
                <Suspense
                  fallback={
                    <div className="inline-flex flex-col items-center justify-center px-6 py-3 lg:px-8 lg:py-4 rounded-full font-bold text-black uppercase tracking-wide text-sm lg:text-base leading-tight bg-[rgb(255,222,89)] w-[200px] lg:w-[240px] h-[70px] lg:h-[80px]">
                      Carregando...
                    </div>
                  }
                >
                  <CTAButton
                    href="https://pay.hotmart.com/your-checkout-link"
                    section="hero"
                    className="inline-flex flex-col items-center justify-center px-6 py-3 lg:px-16 lg:py-8 rounded-full font-bold text-black uppercase tracking-widest transition-all duration-300 hover:scale-105 text-sm lg:text-lg leading-tight lg:leading-7 bg-[rgb(255,222,89)] w-[200px] lg:w-[335px] h-[70px] lg:h-[115px]"
                  >
                    <span>QUERO</span>
                    <span>COMEÇAR</span>
                    <span>AGORA</span>
                  </CTAButton>
                </Suspense>
              </div>
            </div>

            {/* Right Column - Hero Image (Desktop) / Hidden on Mobile */}
            <div className="hidden lg:block lg:relative">
              <Image
                src="/images/hero-man.webp"
                alt="Homem atlético demonstrando os resultados do método ACM de queima de gordura abdominal"
                width={1077}
                height={1095}
                className="object-cover object-center w-full h-full"
                sizes="50vw"
                priority
                fetchPriority="high"
                quality={85}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkrHB0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJIwUzkVahQBCLxqhz3tTxw="
              />
            </div>
          </div>
        </section>

        {/* Hero Image - Mobile Only (After the first button) */}
        <div
          className="lg:hidden relative aspect-square w-full border-4 border-t-0 overflow-hidden"
          style={{ borderColor: "rgb(43, 24, 33)" }}
        >
          <Image
            src="/images/hero-man.webp"
            alt="Homem atlético demonstrando os resultados do método ACM de queima de gordura abdominal"
            width={1077}
            height={1095}
            className="object-cover w-full h-full"
            sizes="(max-width: 640px) 100vw, (max-width: 1023px) 50vw, 33vw"
            priority
            fetchPriority="high"
            quality={70}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkrHB0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJIwUzkVahQBCLxqhz3tTxw="
          />
        </div>

        {/* 2. Problems Section - Responsive Layout */}
        <section
          className="px-5 py-12 lg:px-12 lg:py-16"
          style={{ backgroundColor: "rgb(43, 24, 33)" }}
        >
          <div className="max-w-sm mx-auto lg:max-w-7xl">
            {/* Heading - Responsive sizing - Single line on desktop */}
            <h2
              className="font-black leading-tight mb-10 lg:mb-16 text-center text-[32px] lg:text-[42px]"
              style={{ color: "rgb(255, 222, 89)", lineHeight: "1.1" }}
            >
              <div className="lg:hidden">Por que você</div>
              <div className="lg:hidden">ainda não conseguiu</div>
              <div className="lg:hidden">emagrecer</div>
              <div className="hidden lg:block">
                Por que você ainda não conseguiu emagrecer
              </div>
            </h2>

            {/* Problem List - Responsive grid layout */}
            <div className="space-y-5 lg:space-y-8">
              <div className="flex items-center gap-4 lg:gap-6">
                <div className="w-6 h-6 lg:w-8 lg:h-8 bg-white rounded-full border-2 border-red-500 flex items-center justify-center relative flex-shrink-0">
                  <div className="absolute w-6 lg:w-8 h-0.5 bg-red-500 rotate-45"></div>
                </div>
                <span className="text-white text-xl lg:text-4xl font-bold">
                  Falta de tempo
                </span>
              </div>
              <div className="flex items-center gap-4 lg:gap-6">
                <div className="w-6 h-6 lg:w-8 lg:h-8 bg-white rounded-full border-2 border-red-500 flex items-center justify-center relative flex-shrink-0">
                  <div className="absolute w-6 lg:w-8 h-0.5 bg-red-500 rotate-45"></div>
                </div>
                <span className="text-white text-xl lg:text-4xl font-bold">
                  Metabolismo lento
                </span>
              </div>
              <div className="flex items-center gap-4 lg:gap-6">
                <div className="w-6 h-6 lg:w-8 lg:h-8 bg-white rounded-full border-2 border-red-500 flex items-center justify-center relative flex-shrink-0">
                  <div className="absolute w-6 lg:w-8 h-0.5 bg-red-500 rotate-45"></div>
                </div>
                <span className="text-white text-xl lg:text-4xl font-bold">
                  Dietas e treinos que não se encaixam na sua rotina
                </span>
              </div>
              <div className="flex items-center gap-4 lg:gap-6">
                <div className="w-6 h-6 lg:w-8 lg:h-8 bg-white rounded-full border-2 border-red-500 flex items-center justify-center relative flex-shrink-0">
                  <div className="absolute w-6 lg:w-8 h-0.5 bg-red-500 rotate-45"></div>
                </div>
                <span className="text-white text-xl lg:text-4xl font-bold">
                  Métodos que não funcionam
                </span>
              </div>
            </div>

            {/* Solution Statement */}
            <div className="mt-12 lg:mt-20">
              <div className="flex items-center gap-4 lg:gap-6">
                <span className="text-2xl lg:text-4xl flex-shrink-0">🧠</span>
                <span className="text-white text-xl lg:text-4xl font-bold">
                  A culpa não é sua. O problema está no método, e eu tenho a
                  solução.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Method Section - Responsive Layout */}
        <section className="bg-white px-6 py-12 lg:px-12 lg:py-16">
          <div className="max-w-sm mx-auto lg:max-w-7xl">
            {/* Heading - Responsive sizing - Single line on desktop */}
            <h2
              className="font-black leading-tight mb-10 lg:mb-16 text-center text-[30px] lg:text-[42px]"
              style={{ color: "rgb(230, 189, 23)", lineHeight: "1.1" }}
            >
              <div className="lg:hidden">Conheça o método</div>
              <div className="lg:hidden">ACM – Aceleração</div>
              <div className="lg:hidden">do Ciclo</div>
              <div className="lg:hidden">Metabólico</div>
              <div className="hidden lg:block">
                Conheça o método ACM – Aceleração do Ciclo Metabólico
              </div>
            </h2>

            {/* Icon List - Responsive grid */}
            <div className="space-y-5 lg:space-y-8 mb-12 lg:mb-16">
              <div className="flex items-start gap-4 lg:gap-6">
                <span className="text-2xl lg:text-4xl">⚡</span>
                <span className="text-black text-xl lg:text-4xl font-medium">
                  Treino de 16 min por dia
                </span>
              </div>
              <div className="flex items-start gap-4 lg:gap-6">
                <span className="text-2xl lg:text-4xl">🔥</span>
                <span className="text-black text-xl lg:text-4xl font-medium">
                  Queima de gordura mesmo em repouso
                </span>
              </div>
              <div className="flex items-start gap-4 lg:gap-6">
                <span className="text-2xl lg:text-4xl">🏠</span>
                <span className="text-black text-xl lg:text-4xl font-medium">
                  Feito em casa, sem equipamentos
                </span>
              </div>
              <div className="flex items-start gap-4 lg:gap-6">
                <span className="text-2xl lg:text-4xl">🍰</span>
                <span className="text-black text-xl lg:text-4xl font-medium">
                  Sem abrir mão da comida que você gosta
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <Suspense
                fallback={
                  <div className="inline-flex flex-col items-center justify-center px-6 py-3 lg:px-8 lg:py-4 rounded-full font-bold text-black uppercase tracking-wide text-sm lg:text-base leading-tight bg-[rgb(255,222,89)] w-[200px] lg:w-[240px] h-[70px] lg:h-[80px]">
                    Carregando...
                  </div>
                }
              >
                <CTAButton
                  href="https://pay.hotmart.com/your-checkout-link"
                  section="method"
                  className="inline-flex flex-col items-center justify-center px-6 py-3 lg:px-16 lg:py-8 rounded-full font-bold text-black uppercase tracking-wide transition-all duration-300 hover:scale-105 text-sm lg:text-lg leading-tight lg:leading-7 bg-[rgb(255,222,89)] w-[200px] lg:w-[335px] h-[70px] lg:h-[115px]"
                >
                  <span>QUERO</span>
                  <span>COMEÇAR</span>
                  <span>AGORA</span>
                </CTAButton>
              </Suspense>
            </div>
          </div>
        </section>

        {/* 4. Testimonials Section - Responsive Layout */}
        <section className="bg-white px-6 py-12 lg:px-24 lg:py-16">
          <div className="max-w-sm mx-auto lg:max-w-7xl">
            {/* Section Label */}
            <h2
              className="font-bold text-center mb-10 lg:mb-16 text-[28px] lg:text-[42px]"
              style={{
                color: "rgb(230, 189, 23)",
              }}
            >
              Depoimentos
            </h2>

            {/* Testimonials - Responsive grid */}
            <div className="space-y-10 lg:grid lg:grid-cols-3 lg:gap-35 lg:space-y-0">
            <div className="flex flex-col justify-between">
                <p className="text-black text-base lg:text-xl leading-relaxed px-6">
                  Em poucas semanas, vi meu corpo mais tonificado e
                  definitivamente mais enxuto. As roupas são diferentes! Os
                  treinos são intensos e divertidos.
                </p>
                <p className="font-bold text-black text-lg lg:text-2xl p-6 pb-2">
                  Paula A.
                </p>
              </div>

              <div className="flex flex-col justify-between">
                <p className="text-black text-base lg:text-xl leading-relaxed px-6">
                  Sempre achei que precisava passar horas na academia para ver
                  resultados, mas com o método ACM, meu corpo mudou
                  completamente.
                </p>
                <p className="font-bold text-black text-lg lg:text-2xl p-6 pb-2">
                  Luiz F.
                </p>
              </div>

              <div className="flex flex-col justify-between">
                <p className="text-black text-base lg:text-xl leading-relaxed px-6">
                  Treinos intensos, divertidos e sem pressa de academia. O
                  método funciona mesmo e o mais importante: se adaptou ao meu
                  trabalho.
                </p>
                <p className="font-bold text-black text-lg lg:text-2xl p-6 pb-2">
                  Fernanda U.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Coach Photo + Método ACM Combined Section - Desktop Side by Side */}
        <section className="bg-black px-2 py-8 lg:px-12 lg:py-16">
          <div className="max-w-sm mx-auto lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-12">
            {/* Left Column - Coach Photo + CTA (Mobile: full width, Desktop: left side) */}
            <div className="relative mb-8 lg:mb-0">
              <div className="relative w-full overflow-hidden" style={{ lineHeight: 0 }}>
                <Image
                  src="/images/instructor.webp"
                  alt="Coach profissional do método ACM sorrindo em ambiente profissional"
                  width={942}
                  height={1387}
                  className="object-cover w-full h-full block"
                  sizes="(max-width: 640px) 100vw, (max-width: 1023px) 50vw, 384px"
                  loading="lazy"
                  quality={75}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkrHB0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJIwUzkVahQBCLxqhz3tTxw="
                />

                {/* SVG Overlay for geometric shapes */}
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                  style={{ fill: "#000000" }}
                >
                  {/* Top-right triangle */}
                  <path d="M100,0 L100,40 L60,0 Z" />

                  {/* Bottom-left triangle - extended to prevent gaps */}
                  <path d="M0,100.5 L0,60 L40,100.5 Z" />
                </svg>

                {/* CTA Button Overlay - Centered */}
                <div className="absolute inset-0 flex items-end justify-center my-16">
                  <Suspense
                    fallback={
                      <div className="inline-flex flex-col items-center justify-center px-6 py-3 lg:px-8 lg:py-4 rounded-full font-bold text-black uppercase tracking-wide text-sm lg:text-base leading-tight bg-[rgb(255,222,89)] w-[200px] lg:w-[240px] h-[70px] lg:h-[80px]">
                        Carregando...
                      </div>
                    }
                  >
                    <CTAButton
                      href="https://pay.hotmart.com/your-checkout-link"
                      section="final"
                      className="inline-flex flex-col items-center justify-center px-6 py-3 lg:px-16 lg:py-8 rounded-full font-bold text-black uppercase tracking-wide transition-all duration-300 hover:scale-105 text-sm lg:text-lg leading-tight lg:leading-7 bg-[rgb(255,222,89)] w-[200px] lg:w-[335px] h-[70px] lg:h-[115px]"
                    >
                      <span>QUERO</span>
                      <span>COMEÇAR</span>
                      <span>AGORA</span>
                    </CTAButton>
                  </Suspense>
                </div>
              </div>
            </div>

            {/* Right Column - Método ACM Card (Mobile: full width, Desktop: same height as image) */}
            <div className="bg-white rounded-2xl p-6 lg:p-12 lg:aspect-[4/5] lg:flex lg:flex-col lg:justify-between lg:max-w-lg lg:mx-auto">
              {/* Top padding for desktop */}
              <div className="lg:pt-8">
                {/* Heading with Icon - Mobile: vertical, Desktop: horizontal */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center lg:gap-4 mb-6 lg:mb-12">
                  <h3
                    className="font-bold text-center text-[28px] lg:text-[42px]"
                    style={{
                      color: "rgb(230, 189, 23)",
                    }}
                  >
                    Método ACM
                  </h3>

                  {/* Large Check Icon - Mobile: centered below title, Desktop: beside title */}
                  <div className="text-center mt-6 lg:mt-0">
                    {/* <div className="inline-flex items-center justify-center w-20 h-20 lg:w-16 lg:h-16 border-4 border-green-500 rounded-lg"> */}
                    <SquareCheckBig className="w-12 h-12 lg:w-20 lg:h-20 text-black-500 stroke-[3] mx-auto lg:mx-0" />
                    {/* </div> */}
                  </div>
                </div>

                {/* Checklist - Slightly smaller than other sections but still large */}
                <div className="space-y-4 lg:space-y-6">
                  <div className="flex items-start gap-4 lg:gap-6">
                    <span className="text-green-500 text-xl lg:text-2xl">
                      ✅
                    </span>
                    <span className="font-bold text-black text-base lg:text-3xl">
                      21 treinos em vídeo (1 por dia)
                    </span>
                  </div>
                  <div className="flex items-start gap-4 lg:gap-6">
                    <span className="text-green-500 text-xl lg:text-2xl">
                      ✅
                    </span>
                    <span className="font-bold text-black text-base lg:text-3xl">
                      PDFs com guias
                    </span>
                  </div>
                  <div className="flex items-start gap-4 lg:gap-6">
                    <span className="text-green-500 text-xl lg:text-2xl">
                      ✅
                    </span>
                    <span className="font-bold text-black text-base lg:text-3xl">
                      Comunidade exclusiva
                    </span>
                  </div>
                  <div className="flex items-start gap-4 lg:gap-6">
                    <span className="text-green-500 text-xl lg:text-2xl">
                      ✅
                    </span>
                    <span className="font-bold text-black text-base lg:text-3xl">
                      Feedbacks semanais
                    </span>
                  </div>
                  <div className="flex items-start gap-4 lg:gap-6">
                    <span className="text-green-500 text-xl lg:text-2xl">
                      ✅
                    </span>
                    <span className="font-bold text-black text-base lg:text-3xl">
                      Bônus: Módulo Anti-Procrastinação + Guia Vitamina D
                    </span>
                  </div>
                  <div className="flex items-start gap-4 lg:gap-6">
                    <span className="text-green-500 text-xl lg:text-2xl">
                      ✅
                    </span>
                    <span className="font-bold text-black text-base lg:text-3xl">
                      Garantia vitalícia de 7 dias
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Price & Trust Section - Responsive */}
        <section
          className="px-5 py-12 lg:px-12 lg:py-16"
          style={{ backgroundColor: "rgb(255, 49, 49)" }}
        >
          <div className="max-w-sm mx-auto lg:max-w-7xl text-center lg:grid lg:grid-cols-12 lg:gap-8 lg:items-center">
            {/* Trust Icons - Mobile: row, Desktop: column to the side */}
            <div className="flex justify-center items-center gap-6 mb-8 lg:mb-0 lg:flex-col lg:gap-8 lg:col-span-2">
              <div className="flex items-center justify-center">
                <Image
                  src="/images/medal.webp"
                  alt="Medalha de qualidade e excelência do método ACM"
                  width={160}
                  height={188}
                  className="w-20 h-auto lg:w-36 object-contain"
                  loading="lazy"
                />
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/images/shield.png"
                  alt="Escudo de segurança e garantia do método ACM"
                  width={160}
                  height={182}
                  className="w-20 h-auto lg:w-36 object-contain"
                  loading="lazy"
                />
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/images/satisfaction.webp"
                  alt="Selo de satisfação garantida do método ACM"
                  width={160}
                  height={160}
                  className="w-20 h-auto lg:w-36 object-contain"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Main Content - Desktop: takes remaining space */}
            <div className="lg:col-span-10 lg:text-left lg:pl-8 lg:pt-20">
              {/* Offer Line */}
              <div className="mb-6 lg:mb-16">
                <span className="text-black font-bold text-xl lg:text-4xl">
                  ⭐{" "}
                </span>
                <span className="text-black font-bold text-xl lg:text-4xl">
                  De <span className="line-through">R$497</span> por apenas{" "}
                  <span className="text-3xl lg:text-6xl">R$297</span>
                </span>
              </div>

              {/* Guarantee Line - Now in same row with separator */}
              <div className="mb-12 lg:mb-16">
                <div className="text-black text-base lg:text-3xl font-bold flex flex-col sm:flex-row sm:items-center sm:justify-center sm:gap-4 lg:justify-start">
                  <span>📜 Acesso completo imediato</span>
                  <span className="hidden sm:inline">•</span>
                  <span>🔒 100% online pelo Hotmart</span>
                </div>
              </div>

              {/* CTA Button */}
              <div className="lg:pt-20 lg:pl-56">
                <Suspense
                  fallback={
                    <div className="inline-flex flex-col items-center justify-center px-6 py-3 lg:px-8 lg:py-4 rounded-full font-bold text-black uppercase tracking-wide text-sm lg:text-base leading-tight bg-[rgb(255,222,89)] w-[200px] lg:w-[240px] h-[70px] lg:h-[80px]">
                      Carregando...
                    </div>
                  }
                >
                  <CTAButton
                    href="https://pay.hotmart.com/your-checkout-link"
                    section="final"
                    className="inline-flex flex-col items-center justify-center px-6 py-3 lg:px-16 lg:py-8 rounded-full font-bold text-black uppercase tracking-wide transition-all duration-300 hover:scale-105 text-sm lg:text-lg leading-tight lg:leading-7 bg-[rgb(255,222,89)] w-[200px] lg:w-[335px] h-[70px] lg:h-[115px]"
                  >
                    <span>QUERO</span>
                    <span>COMEÇAR</span>
                    <span>AGORA</span>
                  </CTAButton>
                </Suspense>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
