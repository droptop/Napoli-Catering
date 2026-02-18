import { Container } from "@/components/ui/Container";
import { ValueProps } from "@/components/sections/ValueProps";
import { CTASection } from "@/components/sections/CTASection";
import { getMetadata } from "@/lib/seo";

export const metadata = getMetadata({
  title: "Bulk & Recurring Order Management",
  description: "Automated inventory management and volume pricing for B2B accounts in the Netherlands.",
  path: "/services/bulk-orders",
});

export default function BulkOrdersPage() {
  return (
    <main>
      <section className="py-24 bg-zinc-50 border-b border-zinc-100">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-6xl mb-8">
              Bulk Orders
            </h1>
            <p className="text-xl text-zinc-600 leading-relaxed">
              We offer wholesale order management and recurring supply for your kitchen's essentials. Optimize your logistics and reduce administrative work with our B2B account features.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
             <div className="bg-zinc-100 aspect-square rounded-3xl flex items-center justify-center text-zinc-400 italic">
              Commercial Order Management
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Recurring Inventory Supply</h2>
              <p className="text-zinc-600 text-lg leading-relaxed mb-6">
                Never miss a service due to low inventory. Our recurring order service automates the supply of flour, ingredients, and packaging.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-red-600" />
                  <span className="text-zinc-800 font-medium">Weekly or bi-weekly automated delivery schedules.</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-red-600" />
                  <span className="text-zinc-800 font-medium">B2B account portal for order tracking and adjustments.</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-red-600" />
                  <span className="text-zinc-800 font-medium">Dedicated account manager for large-volume customers.</span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <ValueProps
        heading="Volume Advantages"
        items={[
          {
            title: "Competitive Pricing",
            description: "Deep wholesale discounts for bulk-buy B2B accounts.",
          },
          {
            title: "Predictable Logistics",
            description: "Scheduled dispatch providing consistency for your kitchen operations.",
          },
          {
            title: "Inventory Control",
            description: "Reduced stock-out risk with our automated recurring supply systems.",
          }
        ]}
      />

      <CTASection
        title="Ready to automate your supply chain?"
        subtitle="Contact us to discuss volume pricing and setup your recurring order schedule."
        ctaLabel="Enquire about Bulk Orders"
        ctaLink="/contact"
      />
    </main>
  );
}
