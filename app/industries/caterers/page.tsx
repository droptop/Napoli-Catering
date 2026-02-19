import { Container } from "@/components/ui/Container";
import { ValueProps } from "@/components/sections/ValueProps";
import { CTASection } from "@/components/sections/CTASection";
import { getMetadata } from "@/lib/seo";

export const metadata = getMetadata({
  title: "Solutions for Commercial Caterers",
  description: "Bespoke setups and wholesale supply for large-scale event catering and commercial food service in the NL.",
  path: "/industries/caterers",
});

export default function CaterersPage() {
  return (
    <main>
      <section className="py-24 bg-zinc-50 border-b border-zinc-100">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-6xl mb-8">
              Commercial Caterers
            </h1>
            <p className="text-xl text-zinc-600 leading-relaxed">
              We provide the scalable equipment and bulk supply needed for large-scale event catering. Our professional solutions are designed for reliability and high-volume output in any location.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Scalable Event Solutions</h2>
              <p className="text-zinc-600 text-lg leading-relaxed mb-6">
                Catering large events requires robust, high-throughput equipment. Our range of mobile and modular ovens can be scaled to meet any event size, ensuring consistent Neapolitan results for every guest.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-red-600" />
                  <p className="text-zinc-800 font-medium">Bulk wholesale pricing on ingredients and packaging.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-red-600" />
                  <p className="text-zinc-800 font-medium">Bespoke equipment setups for large-scale catering projects.</p>
                </li>
              </ul>
            </div>
             <div className="bg-zinc-100 aspect-video rounded-3xl flex items-center justify-center text-zinc-400 italic">
              Large-scale Catering Setup
            </div>
          </div>
        </Container>
      </section>

      <ValueProps
        heading="Why Caterers Choose Us"
        items={[
          {
            title: "Reliability",
            description: "Durable equipment that performs under high pressure and volume.",
          },
          {
            title: "Logistics",
            description: "Scheduled wholesale deliveries across the Netherlands.",
          },
          {
            title: "Support",
            description: "Expert advice on managing large-scale Neapolitan pizza operations.",
          }
        ]}
      />

      <CTASection
        title="Planning a large-scale event?"
        subtitle="Contact our commercial team to discuss bespoke equipment and supply solutions."
        ctaLabel="Enquire Now"
        ctaLink="/contact"
      />
    </main>
  );
}
