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

      {/* Section 3 – The Product (Main Selling Block) */}
      <ValueProps
        heading="The Napoli Pizza Base"
        showSketchBackground
        items={[
          {
            title: "Authentic Sourdough",
            description: "24-hour fermentation using traditional Neapolitan methods.",
          },
          {
            title: "No Preservatives",
            description: "Fresh product protected by packaging technology, not additives.",
          },
          {
            title: "3-Month Ambient Shelf Life",
            description: "No freezer infrastructure required.",
          },
          {
            title: "Designed for Professional Kitchens",
            description: "Works in conventional ovens (240°C+) and high-heat pizza ovens.",
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
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2h2a2 2 0 002-2zm0 0h10a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2v12a2 2 0 002 2h2a2 2 0 002-2z" />
              </svg>
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
      <section className="py-24 bg-zinc-50 border-y border-zinc-100">
        <Container>
          <h2 className="text-3xl font-serif font-light tracking-tight text-zinc-900 sm:text-4xl text-center mb-16 uppercase tracking-widest">
            Designed for Operators
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Sports Clubs",
                description: "Optimise seasonal spikes and club catering with premium pizza offerings that don't stretch your team.",
                href: "/industries"
              },
              { 
                title: "Catering Companies", 
                description: "Deliver consistent quality at scale for events, weddings and corporate catering.",
                href: "/industries" 
              },
              { 
                title: "Bars & Hospitality", 
                description: "Add a high-margin food offering to your venue with minimal kitchen infrastructure.",
                href: "/industries" 
              }
            ].map((industry, index) => (
              <Link key={index} href={industry.href} className="group flex flex-col p-8 bg-white rounded-3xl border border-zinc-100 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-zinc-900 mb-4 group-hover:text-[#c5a059] transition-colors uppercase tracking-widest">{industry.title}</h3>
                <p className="text-zinc-600 font-light leading-relaxed">{industry.description}</p>
                <span className="mt-8 text-xs font-bold uppercase tracking-widest text-[#c5a059] group-hover:translate-x-1 transition-transform inline-flex items-center gap-2">
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
