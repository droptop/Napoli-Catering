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
            title: "Professional Bake",
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
          },
          {
            title: "Storage Savings",
            description: "No freezer storage costs. Standard ambient shelving.",
          },
          {
            title: "Premium Pricing",
            description: "Command premium menu pricing with authentic quality.",
          },
          {
            title: "Consistency",
            description: "Consistent quality and structure every single service.",
          },
          {
            title: "Minimal Training",
            description: "Simple operational integration for existing staff.",
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
                title: "Golf Clubs", 
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
                <h3 className="text-xl font-bold text-zinc-900 mb-4 group-hover:text-red-700 transition-colors uppercase tracking-widest">{industry.title}</h3>
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
