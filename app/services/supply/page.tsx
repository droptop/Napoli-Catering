import { Container } from "@/components/ui/Container";
import { ValueProps } from "@/components/sections/ValueProps";
import { CTASection } from "@/components/sections/CTASection";
import { getMetadata } from "@/lib/seo";

export const metadata = getMetadata({
  title: "Commercial Catering Supply Services",
  description: "End-to-end supply of ingredients, packaging, and tools for Neapolitan pizzerias in the NL.",
  path: "/services/supply",
});

export default function SupplyServicePage() {
  return (
    <main>
      <section className="py-24 bg-zinc-50 border-b border-zinc-100">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-6xl mb-8">
              Catering Supply
            </h1>
            <p className="text-xl text-zinc-600 leading-relaxed">
              We manage the procurement and logistics of your kitchen's most critical supplies. Our end-to-end service ensures you have a consistent flow of artisanal ingredients and commercial packaging.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Strategic Procurement</h2>
              <p className="text-zinc-600 text-lg leading-relaxed mb-6">
                Our supply service is designed to remove the operational burden of inventory management. We work directly with heritage producers in Italy to source premium products for the Dutch market.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-red-600" />
                  <span className="text-zinc-800 font-medium">Bulk flour and DOP tomato supply.</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-red-600" />
                  <span className="text-zinc-800 font-medium">Standard and custom branded packaging.</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-red-600" />
                  <span className="text-zinc-800 font-medium">Recurring dispatch on a schedule that fits your service.</span>
                </li>
              </ul>
            </div>
            <div className="bg-zinc-100 aspect-square rounded-3xl flex items-center justify-center text-zinc-400 italic">
              Logistics Showcase
            </div>
          </div>
        </Container>
      </section>

      <ValueProps
        heading="Why Outsource Your Supply?"
        items={[
          {
            title: "Consistency",
            description: "Uniform quality across all ingredient batches.",
          },
          {
            title: "Efficiency",
            description: "Consolidated deliveries to reduce administrative work.",
          },
          {
            title: "Scale",
            description: "Easily adjust volumes as your business grows.",
          }
        ]}
      />

      <CTASection
        title="Want to streamline your kitchen supply?"
        subtitle="Contact us to discuss a consolidated supply agreement for your restaurant."
        ctaLabel="Enquire about Supply"
        ctaLink="/contact"
      />
    </main>
  );
}
