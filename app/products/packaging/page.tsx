import { Container } from "@/components/ui/Container";
import { ValueProps } from "@/components/sections/ValueProps";
import { CTASection } from "@/components/sections/CTASection";
import { getMetadata } from "@/lib/seo";

export const metadata = getMetadata({
  title: "Commercial Pizza Packaging & Service Items",
  description: "High-quality pizza boxes, napkins, and takeaway packaging for professional catering in the Netherlands.",
  path: "/products/packaging",
});

export default function PackagingPage() {
  return (
    <main>
      <section className="py-24 bg-zinc-50 border-b border-zinc-100">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-6xl mb-8">
              Bulk Packaging
            </h1>
            <p className="text-xl text-zinc-600 leading-relaxed">
              We provide professional packaging solutions that maintain food quality during transit. Our range is optimized for high-volume takeout and commercial delivery services in the NL.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: "Premium Pizza Boxes",
                description: "Corrugated cardboard boxes designed for heat retention and moisture control.",
              },
              {
                title: "Service Items",
                description: "High-quality napkins, greaseproof paper, and artisanal branded service liners.",
              },
              {
                title: "Sustainable Options",
                description: "Eco-friendly, compostable packaging materials for modern catering businesses.",
              },
              {
                title: "Custom Branding",
                description: "Bespoke packaging design and printing for large-volume B2B accounts.",
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
        heading="Wholesale Packaging Benefits"
        items={[
          {
            title: "Volume Discounts",
            description: "Significant cost savings on recurring pallet-sized packaging orders.",
          },
          {
            title: "Quality Control",
            description: "Rigid materials that prevent collapsing during stacked deliveries.",
          },
          {
            title: "Rapid Dispatch",
            description: "Reliable inventory of standard sizes for fast delivery in the Netherlands.",
          }
        ]}
      />

      <CTASection
        title="Ready to automate your packaging supply?"
        subtitle="Discuss recurring pallet orders and volume pricing with our sales team."
        ctaLabel="Get a Packaging Quote"
        ctaLink="/contact"
      />
    </main>
  );
}
