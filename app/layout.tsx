import { Inter } from "next/font/google";
import { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "ACM - Elimine Gordura Abdominal em 3 Semanas | Método Comprovado",
  description: "Descubra o método ACM - Aceleração do Ciclo Metabólico. Elimine gordura abdominal em apenas 3 semanas com treinos de 16 minutos por dia. Sem dieta restritiva, sem equipamentos. Garantia de 7 dias.",
  keywords: ["eliminar gordura abdominal", "perder peso", "acelerar metabolismo", "treino em casa", "queimar gordura", "ACM", "ciclo metabólico", "emagrecer rápido", "queima de gordura", "método natural"],
  authors: [{ name: "ACM Method" }],
  creator: "ACM Method",
  publisher: "ACM Method",
  category: "Health & Fitness",
  classification: "Weight Loss Program",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://acm-method.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "ACM - Elimine Gordura Abdominal em 3 Semanas",
    description: "Método comprovado para eliminar gordura abdominal em 3 semanas. Treinos de 16 minutos, sem dieta restritiva, sem equipamentos.",
    url: "/",
    siteName: "ACM Method",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/hero-man.webp",
        width: 1200,
        height: 630,
        alt: "Homem em forma mostrando abdômen definido após usar o método ACM"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ACM - Elimine Gordura Abdominal em 3 Semanas",
    description: "Método comprovado para acelerar o metabolismo e queimar gordura abdominal rapidamente.",
    images: ["/images/hero-man.webp"],
    creator: "@acmmethod",
    site: "@acmmethod",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <head>
        <meta name="theme-color" content="#FFD700" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        
        {/* Critical resource hints */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://connect.facebook.net" />
        <link rel="preconnect" href="https://pay.hotmart.com" />
        <link rel="dns-prefetch" href="https://vercel.app" />
        
        {/* Font preloading */}
        <link
          rel="preload"
          href="https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        
        {/* Critical CSS inline to avoid render blocking */}
        <style dangerouslySetInnerHTML={{
          __html: `
            *,*::before,*::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}
            *::before,*::after{--tw-content:''}
            html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal}
            body{margin:0;line-height:inherit}
            .font-black{font-weight:900}
            .text-center{text-align:center}
            .bg-white{background-color:rgb(255 255 255)}
            .min-h-screen{min-height:100vh}
          `
        }} />
        
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID || 'GTM-XXXXXXX'}');
            `,
          }}
        />
        
        {/* Meta Pixel - Optimized loading */}
        <Script
          id="fb-pixel"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${process.env.NEXT_PUBLIC_FB_PIXEL_ID || 'XXXXXXXXXXXXXXXXX'}');
            fbq('track', 'PageView');
            `,
          }}
        />

        {/* Non-critical CSS - Load after initial render */}
        <Script
          id="load-non-critical-css"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              const link = document.createElement('link');
              link.rel = 'stylesheet';
              link.href = '/non-critical.css';
              link.media = 'print';
              link.onload = function() { this.media = 'all'; };
              document.head.appendChild(link);
            `
          }}
        />

        {/* JSON-LD Structured Data */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "ACM - Aceleração do Ciclo Metabólico",
              "description": "Método para eliminar gordura abdominal em 3 semanas com treinos de 16 minutos por dia",
              "image": [
                "https://acm-method.com/images/hero-man.webp"
              ],
              "brand": {
                "@type": "Brand",
                "name": "ACM Method"
              },
              "offers": {
                "@type": "Offer",
                "url": "https://acm-method.com",
                "priceCurrency": "BRL",
                "price": "297",
                "priceValidUntil": "2024-12-31",
                "itemCondition": "https://schema.org/NewCondition",
                "availability": "https://schema.org/InStock",
                "seller": {
                  "@type": "Organization",
                  "name": "ACM Method"
                }
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "1247"
              }
            })
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID || 'GTM-XXXXXXX'}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
} 