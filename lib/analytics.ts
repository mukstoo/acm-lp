// Analytics tracking functions
declare global {
  interface Window {
    gtag: (command: string, trackingId: string, config?: Record<string, any>) => void;
    fbq: (command: string, eventName: string, parameters?: Record<string, any>) => void;
    dataLayer: any[];
  }
}

export function trackEvent(eventName: string, parameters?: Record<string, any>) {
  // Google Analytics 4
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
  }
  
  // Meta Pixel
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, parameters);
  }
}

export function trackPurchase(value: number, currency: string = 'BRL') {
  trackEvent('Purchase', {
    value,
    currency,
    content_name: 'ACM - Aceleração do Ciclo Metabólico',
    content_category: 'Health & Fitness Course',
  });
}

export function trackAddToCart() {
  trackEvent('AddToCart', {
    content_name: 'ACM - Aceleração do Ciclo Metabólico',
    content_category: 'Health & Fitness Course',
    value: 297,
    currency: 'BRL',
  });
}

export function trackInitiateCheckout() {
  trackEvent('InitiateCheckout', {
    content_name: 'ACM - Aceleração do Ciclo Metabólico',
    value: 297,
    currency: 'BRL',
  });
} 