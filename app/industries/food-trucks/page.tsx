import { Container } from "@/components/ui/Container";
import { ValueProps } from "@/components/sections/ValueProps";
import { CTASection } from "@/components/sections/CTASection";
import { getMetadata } from "@/lib/seo";

export const metadata = getMetadata({
  title: "Solutions for Food Trucks & Mobile Catering",
  description: "Lightweight, high-performance pizza ovens and mobile-ready supplies for food trucks and caterers in the NL.",
  path: "/industries/food-trucks",
});

export default function FoodTrucksPage() {
  return (
    <main>
      <section className="py-24 bg-zinc-50 border-b border-zinc-100">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-6xl mb-8">
              Mobile Catering Solutions
            </h1>
            <p className="text-xl text-zinc-600 leading-relaxed">
              We specialize in lightweight, high-performance ovens and mobile-ready supplies designed for food trucks and event caterers.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
             <div className="bg-zinc-100 aspect-video rounded-3xl flex items-center justify-center text-zinc-400 italic">
              Mobile Oven Setup
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Built for Mobility</h2>
              <p className="text-zinc-600 text-lg leading-relaxed mb-6">
                Our mobile oven range is vibration-resistant and features fast recovery times, ensuring you can deliver consistent results even in the most demanding outdoor events.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-red-600" />
                  <p className="text-zinc-800 font-medium">Space-efficient packaging and tools.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-red-600" />
                  <p className="text-zinc-800 font-medium">Fast-delivery ingredients for event-based demand.</p>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <ValueProps
        heading="Why Food Trucks Choose Us"
        items={[
          {
            title: "Performance",
            description: "Industrial heat in a compact, mobile footprint.",
          },
          {
            title: "Durability",
            description: "Built to withstand the rigors of frequent transport and temperature shifts.",
          },
          {
            title: "Support",
            description: "Logistics advice for managing mobile supply chains.",
          }
        ]}
      />

      <CTASection
        title="Scaling your mobile catering business?"
        subtitle="Consult with our experts for equipment and logistics support."
        ctaLabel="Get Expert Advice"
        ctaLink="/contact"
      />
    </main>
  );
}
