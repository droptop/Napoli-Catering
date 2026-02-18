import { Container } from "@/components/ui/Container";
import { ValueProps } from "@/components/sections/ValueProps";
import { CTASection } from "@/components/sections/CTASection";
import { getMetadata } from "@/lib/seo";

export const metadata = getMetadata({
  title: "Professional Advice & Setup Support",
  description: "Expert consultation on kitchen workflow, oven selection, and operational setup for pizzerias in the NL.",
  path: "/services/advice",
});

export default function AdviceServicePage() {
  return (
    <main>
      <section className="py-24 bg-zinc-50 border-b border-zinc-100">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-6xl mb-8">
              Advice & Support
            </h1>
            <p className="text-xl text-zinc-600 leading-relaxed">
              We provide the technical expertise needed to launch and optimize professional Neapolitan pizza operations. From equipment selection to workflow design, our specialists support your kitchen's success.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                title: "Kitchen Workflow Design",
                description: "Optimizing the path from dough prep to the final bake for high-volume efficiency.",
              },
              {
                title: "Equipment Consultation",
                description: "Selecting the right fuel types and oven capacities for your specific location.",
              },
              {
                title: "Setup Coordination",
                description: "Working with certified installers in the NL to ensure professional equipment integration.",
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
        heading="Operational Excellence"
        items={[
          {
            title: "Commercial Insight",
            description: "Deep understanding of the Dutch catering market and business requirements.",
          },
          {
            title: "Technical Expertise",
            description: "Specialized knowledge of thermal dynamics and Neapolitan traditions.",
          },
          {
            title: "Long-term Support",
            description: "Ongoing advice as your business evolves and scales.",
          }
        ]}
      />

      <CTASection
        title="Launching a new project?"
        subtitle="Book a consultation with our equipment specialists to discuss your requirements."
        ctaLabel="Book a Consultation"
        ctaLink="/contact"
      />
    </main>
  );
}
