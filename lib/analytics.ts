export const trackEvent = (name: string, properties?: Record<string, any>) => {
  // Placeholder for analytics tracking
  console.log(`[Analytics] ${name}`, properties);
  
  // Example of how to wire this to a real provider later:
  // if (typeof window !== 'undefined' && window.gtag) {
  //   window.gtag('event', name, properties);
  // }
};
