import { Container } from "@/components/ui/Container";
import { ValueProps } from "@/components/sections/ValueProps";
import { CTASection } from "@/components/sections/CTASection";
import { Button } from "@/components/ui/Button";
import { getMetadata } from "@/lib/seo";

export const metadata = getMetadata({
  title: "Professional Neapolitan Ovens",
  description: "Commercial wood, gas, and electric pizza ovens for restaurants, pizzerias, and mobile catering in the Netherlands.",
  path: "/products/ovens",
});

const ovens = [
  {
    name: "Classic Wood-Fired Stationary",
    description: "Traditional Neapolitan refractory stone ovens for permanent installation.",
    specs: ["High thermal mass", "Bespoke finishing", "Commercial grade"],
    price: "From €5,400"
  },
  {
    name: "Commercial Gas/Hybrid Series",
    description: "Modern efficiency with the results of a traditional oven.",
    specs: ["Fast heat-up", "Dual fuel options", "Precise control"],
    price: "From €6,200"
  },
  {
    name: "Mobile Oven Series",
    description: "Lightweight and powerful ovens designed for food trucks and caterers.",
    specs: ["Vibration resistant", "Fast recovery", "Sleek portable design"],
    price: "From €3,800"
  },
  {
    name: "Modular Oven Solutions",
    description: "Scalable oven units for high-volume commercial kitchens.",
    specs: ["Stackable units", "Electric options", "Space efficient"],
    price: "From €4,100"
  }
];

export default function OvensPage() {
  return (
    <main>
      <section className="py-24 bg-zinc-50 border-b border-zinc-100">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-6xl">
              Professional Ovens
            </h1>
            <p className="mt-6 text-xl text-zinc-600 leading-relaxed">
              Precision-engineered ovens that deliver the authentic Neapolitan 60-90 second bake. High thermal efficiency and robust construction for consistent commercial output.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {ovens.map((oven, index) => (
              <div key={index} className="flex flex-col p-8 rounded-2xl border border-zinc-200 bg-white hover:border-red-200 transition-colors shadow-sm">
                <h2 className="text-2xl font-bold text-zinc-900 mb-4">{oven.name}</h2>
                <p className="text-zinc-600 mb-6 leading-relaxed">{oven.description}</p>
                <div className="mb-8 flex flex-wrap gap-2">
                  {oven.specs.map((spec, sIndex) => (
                    <span key={sIndex} className="px-3 py-1 bg-zinc-100 text-zinc-700 text-xs font-bold rounded-full uppercase tracking-wider">{spec}</span>
                  ))}
                </div>
                <div className="mt-auto pt-6 border-t border-zinc-100 flex items-center justify-between">
                  <span className="text-sm font-bold text-zinc-400 italic lowercase">{oven.price} (B2B excl. VAT)</span>
                  <Button href="/contact" size="sm">Get a Quote</Button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <ValueProps
        heading="Built for Performance"
        items={[
          {
            title: "Thermal Stability",
            description: "Exceptional heat retention ensuring consistent bakes during peak hours.",
          },
          {
            title: "Rapid Recovery",
            description: "Fast recovery times to maintain high throughput in busy pizzerias.",
          },
          {
            title: "Expert Support",
            description: "Setup advice and installation coordination across the NL.",
          }
        ]}
      />

      <CTASection
        title="Need help choosing the right oven?"
        subtitle="Our specialists can help you determine the best fuel type and size for your commercial kitchen."
        ctaLabel="Consult an Expert"
        ctaLink="/contact"
      />
    </main>
  );
}
