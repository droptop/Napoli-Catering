import { Hero } from "@/components/sections/Hero";
import { Partners } from "@/components/sections/Partners";
import { ValueProps } from "@/components/sections/ValueProps";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { ComparisonSection } from "@/components/sections/ComparisonSection";
import { StepProcess } from "@/components/sections/StepProcess";
import { DemoSection } from "@/components/sections/DemoSection";
import { HeritageSection } from "@/components/sections/HeritageSection";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { CTASection } from "@/components/sections/CTASection";
import { OrganizationJsonLd, LocalBusinessJsonLd } from "@/components/JsonLd";
import { Container } from "@/components/ui/Container";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <OrganizationJsonLd />
      <LocalBusinessJsonLd />

      {/* Section 1 – Hero */}
      <Hero
        title="Authentic Neapolitan Sourdough Pizza Bases For Professional Kitchens"
        subtitle="Handmade in Naples. Preservative-free. Ambient shelf life up to 3 months. Designed for hospitality operators."
        primaryCtaLabel="Book a Live Tasting Demo"
        primaryCtaLink="/book-a-demo"
      />

      {/* Section 2 – The Core Problem */}
      <ProblemSection />

      {/* Separator Bar */}
      <section className="relative py-8 bg-black overflow-hidden border-y border-white/5">
        <div
          className="absolute inset-0 z-0 opacity-30 grayscale"
          style={{
            backgroundImage: `url('https://cdn.builder.io/api/v1/image/assets%2Fa81fac9c3bae4b51ace81c3349c8dc9d%2Fa6dc89c6e32041c6a517dcb956241527?format=webp&width=1600&height=1200')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        <Container className="relative z-10">
          <p className="text-[#c5a059] text-center font-serif text-xl sm:text-2xl font-light italic tracking-wide">
            "We remove the friction without compromising authenticity"
          </p>
        </Container>
      </section>

      {/* Section 3 – The Product (Main Selling Block) */}
      <ValueProps
        heading="The Napoli Pizza Base"
        showSketchBackground
        items={[
          {
            title: "Authentic Sourdough",
            description: "24-hour fermentation using traditional Neapolitan methods.",
            icon: (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
              </svg>
            )
          },
          {
            title: "No Preservatives",
            description: "Fresh product protected by packaging technology, not additives.",
            icon: (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.034 11.942 11.942 0 00-1.175 4.58c0 5.692 4.023 10.52 9.435 11.75a11.952 11.952 0 009.435-11.75c0-1.567-.302-3.063-.854-4.438z" />
              </svg>
            )
          },
          {
            title: "3-Month Ambient Shelf Life",
            description: "No freezer infrastructure required.",
            icon: (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            )
          },
          {
            title: "Designed for Professional Kitchens",
            description: "Works in conventional ovens (240°C+) and high-heat pizza ovens.",
            icon: (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            )
          },
        ]}
      />
      
      {/* Section 4 – Why It’s Different */}
      <ComparisonSection />
      
      {/* Section 5 – How It Works */}
      <StepProcess
        heading="From Delivery to Service in Minutes"
        steps={[
          {
            title: "Ambient Delivery",
            description: "Delivered ambient to your venue, ready for use.",
          },
          {
            title: "Ambient Storage",
            description: "Store at room temperature. No freezer space required.",
          },
          {
            title: "Add Toppings",
            description: "Customise with your own ingredients and sauces.",
          },
          {
            title: "Oven Bake",
            description: "Bake at 240–360°C for authentic results.",
          },
          {
            title: "Authentic Service",
            description: "Serve authentic Neapolitan pizza to your guests.",
          },
        ]}
      />

      {/* Separator Bar */}
      <section className="relative py-8 bg-black overflow-hidden border-y border-white/5">
        <div
          className="absolute inset-0 z-0 opacity-30 grayscale"
          style={{
            backgroundImage: `url('https://cdn.builder.io/api/v1/image/assets%2Fa81fac9c3bae4b51ace81c3349c8dc9d%2Fa6dc89c6e32041c6a517dcb956241527?format=webp&width=1600&height=1200')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        <Container className="relative z-10">
          <p className="text-[#c5a059] text-center font-serif text-xl sm:text-2xl font-light italic tracking-wide">
            "Authenticity is origin, not marketing."
          </p>
        </Container>
      </section>

      {/* Section 6 – Commercial Advantage */}
      <ValueProps
        heading="Built for Hospitality Margins"
        showSketchBackground
        items={[
          {
            title: "Lower Labour",
            description: "No dough preparation or specialized skill required.",
            icon: (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            )
          },
          {
            title: "Storage Savings",
            description: "No freezer storage costs. Standard ambient shelving.",
            icon: (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            )
          },
          {
            title: "Premium Pricing",
            description: "Command premium menu pricing with authentic quality.",
            icon: (
              <span className="text-xl font-bold">€</span>
            )
          },
          {
            title: "Consistency",
            description: "Consistent quality and structure every single service.",
            icon: (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.034 11.942 11.942 0 00-1.175 4.58c0 5.692 4.023 10.52 9.435 11.75a11.952 11.952 0 009.435-11.75c0-1.567-.302-3.063-.854-4.438z" />
              </svg>
            )
          },
          {
            title: "Minimal Training",
            description: "Simple operational integration for existing staff.",
            icon: (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
              </svg>
            )
          },
        ]}
      />
      
      {/* Section 7 – Live Demonstration */}
      <DemoSection />
      
      {/* Section 8 – Who It’s For */}
      <section className="py-24 bg-zinc-950 border-y border-white/5">
        <Container>
          <h2 className="text-3xl font-serif font-light tracking-tight text-white sm:text-4xl text-center mb-16 uppercase tracking-widest">
            Designed for Operators
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Sports Clubs",
                description: "Optimise seasonal spikes and club catering with premium pizza offerings that don't stretch your team.",
                href: "/industries",
                icon: "https://cdn.builder.io/api/v1/image/assets%2Fa81fac9c3bae4b51ace81c3349c8dc9d%2F18969ee3770449bcbb0d955a4a2b5bdc?format=webp&width=800&height=1200"
              },
              {
                title: "Catering Companies",
                description: "Deliver consistent quality at scale for events, weddings and corporate catering.",
                href: "/industries",
                icon: "https://cdn.builder.io/api/v1/image/assets%2Fa81fac9c3bae4b51ace81c3349c8dc9d%2F6d3d9c2cd4cb49ad98e34fc5ff9a474b?format=webp&width=800&height=1200"
              },
              {
                title: "Bars & Hospitality",
                description: "Add a high-margin food offering to your venue with minimal kitchen infrastructure.",
                href: "/industries",
                icon: "https://cdn.builder.io/api/v1/image/assets%2Fa81fac9c3bae4b51ace81c3349c8dc9d%2F0bcb4f97bcaf4d8cb8d248239d74092f?format=webp&width=800&height=1200"
              }
            ].map((industry, index) => (
              <Link key={index} href={industry.href} className="group flex flex-col p-8 bg-white/5 rounded-3xl border border-white/10 shadow-sm hover:bg-white/10 transition-all">
                <div className="mb-8 flex justify-center">
                  <img src={industry.icon} className="h-32 w-auto grayscale brightness-125 transition-all group-hover:grayscale-0 group-hover:scale-110" alt={industry.title} />
                </div>
                <h3 className="text-xl font-bold text-[#c5a059] mb-4 uppercase tracking-widest text-center">{industry.title}</h3>
                <p className="text-zinc-400 font-light leading-relaxed text-center text-sm">{industry.description}</p>
                <span className="mt-8 text-xs font-bold uppercase tracking-widest text-[#c5a059] group-hover:translate-x-1 transition-transform inline-flex items-center gap-2 justify-center">
                  Learn more &rarr;
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>
      
      {/* Section 9 – Neapolitan Roots */}
      <HeritageSection />

      {/* Section 10 – Final CTA */}
      <CTASection
        title="Ready to Elevate Your Pizza Offering?"
        subtitle="Contact our commercial team today for a live demo or request detailed product information."
        ctaLabel="Book a Tasting Demo"
        ctaLink="/book-a-demo"
      />
    </main>
  );
}
