import { Container } from "@/components/ui/Container";
import { ValueProps } from "@/components/sections/ValueProps";
import { CTASection } from "@/components/sections/CTASection";
import { getMetadata } from "@/lib/seo";

export const metadata = getMetadata({
  title: "B2B Catering Services",
  description: "Beyond equipment and ingredients: Commercial supply, professional advice, and recurring order management for catering in the NL.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <main>
      <section className="py-24 bg-zinc-50 border-b border-zinc-100">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-6xl text-center mx-auto mb-8">
              Commercial Catering Services
            </h1>
            <p className="text-xl text-zinc-600 text-center leading-relaxed max-w-2xl mx-auto">
              We provide the strategic partnership needed to scale your catering or restaurant business. Our services are designed for operational efficiency and commercial growth.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-white p-10 rounded-3xl border border-zinc-100 shadow-sm flex flex-col">
              <div className="h-10 w-10 text-red-600 mb-6">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-4">Catering Supply</h2>
              <p className="text-zinc-600 text-sm leading-relaxed mb-8 flex-grow">
                Full-service supply of ingredients, packaging, and small tools. We manage the sourcing so you can focus on the food.
              </p>
              <ul className="space-y-2 text-xs font-bold text-zinc-500 uppercase tracking-widest mb-8">
                <li>Bulk Flour & Ingredients</li>
                <li>Commercial Packaging</li>
                <li>Small Prep Tools</li>
              </ul>
            </div>
            
            <div className="bg-white p-10 rounded-3xl border border-zinc-100 shadow-sm flex flex-col">
              <div className="h-10 w-10 text-red-600 mb-6">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-4">Advice & Setup Support</h2>
              <p className="text-zinc-600 text-sm leading-relaxed mb-8 flex-grow">
                Expert consultation on kitchen workflow, oven selection, and menu optimization for Neapolitan pizza operations.
              </p>
              <ul className="space-y-2 text-xs font-bold text-zinc-500 uppercase tracking-widest mb-8">
                <li>Kitchen Design Advice</li>
                <li>Equipment Selection</li>
                <li>Staff Training Support</li>
              </ul>
            </div>

            <div className="bg-white p-10 rounded-3xl border border-zinc-100 shadow-sm flex flex-col">
              <div className="h-10 w-10 text-red-600 mb-6">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-4">Recurring Orders</h2>
              <p className="text-zinc-600 text-sm leading-relaxed mb-8 flex-grow">
                Automated inventory management for your essentials. Never worry about running out of flour or boxes again.
              </p>
              <ul className="space-y-2 text-xs font-bold text-zinc-500 uppercase tracking-widest mb-8">
                <li>Automated Deliveries</li>
                <li>Inventory Forecasting</li>
                <li>B2B Account Portal</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <CTASection
        title="Ready to optimize your supply chain?"
        subtitle="Our specialists can help you set up a commercial supply account and scheduled deliveries."
        ctaLabel="Get Started"
        ctaLink="/contact"
      />
    </main>
  );
}
