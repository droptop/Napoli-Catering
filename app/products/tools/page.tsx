import { Container } from "@/components/ui/Container";
import { ValueProps } from "@/components/sections/ValueProps";
import { CTASection } from "@/components/sections/CTASection";
import { getMetadata } from "@/lib/seo";

export const metadata = getMetadata({
  title: "Professional Pizza Tools & Accessories",
  description: "Commercial-grade pizza peels, cutters, dough prep tools, and kitchen essentials for Neapolitan pizzerias in the NL.",
  path: "/products/tools",
});

export default function ToolsPage() {
  return (
    <main>
      <section className="py-24 bg-zinc-50 border-b border-zinc-100">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-6xl mb-8">
              Commercial Tools
            </h1>
            <p className="text-xl text-zinc-600 leading-relaxed">
              We supply professional-grade tools that define efficient kitchen workflow. From artisanal peels to heavy-duty prep equipment, every item is selected for commercial durability.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                title: "Professional Peels",
                description: "Lightweight, anodized aluminum and stainless steel peels for loading and turning.",
              },
              {
                title: "Prep & Dough Tools",
                description: "Commercial dough trays, scrapers, and high-precision temperature probes.",
              },
              {
                title: "Kitchen Essentials",
                description: "Specialized cutters, topping ladles, and ergonomic utensil sets.",
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-10 rounded-3xl border border-zinc-100 shadow-sm">
                <h2 className="text-2xl font-bold mb-4">{item.title}</h2>
                <p className="text-zinc-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <ValueProps
        heading="Built for High Volume"
        items={[
          {
            title: "Durability",
            description: "Materials selected for the rigors of commercial pizzeria environments.",
          },
          {
            title: "Ergonomics",
            description: "Designed for comfort and efficiency during long services.",
          },
          {
            title: "Hygiene",
            description: "Easy-to-clean designs meeting all food safety standards in the NL.",
          }
        ]}
      />

      <CTASection
        title="Scaling your kitchen inventory?"
        subtitle="Contact us for bulk tool pricing and custom equipment bundles for new pizzerias."
        ctaLabel="Enquire about Bulk Tools"
        ctaLink="/contact"
      />
    </main>
  );
}
