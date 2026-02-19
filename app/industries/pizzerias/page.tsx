import { Container } from "@/components/ui/Container";
import { ValueProps } from "@/components/sections/ValueProps";
import { CTASection } from "@/components/sections/CTASection";
import { getMetadata } from "@/lib/seo";

export const metadata = getMetadata({
  title: "Solutions for Pizzerias",
  description: "Professional equipment and artisanal supply for Neapolitan pizzerias. From wood-fired ovens to bulk flour delivery in the NL.",
  path: "/industries/pizzerias",
});

export default function PizzeriasPage() {
  return (
    <main>
      <section className="py-24 bg-zinc-50 border-b border-zinc-100">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-6xl mb-8">
              Empowering Pizzerias
            </h1>
            <p className="text-xl text-zinc-600 leading-relaxed">
              We provide the tools and ingredients that define high-volume pizzeria success. Our solutions focus on consistency, speed, and authentic results.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Optimized for Throughput</h2>
              <p className="text-zinc-600 text-lg leading-relaxed mb-6">
                Busy pizzerias need equipment that can keep up with peak demand. Our stationary wood and gas ovens are built for 24/7 commercial use, maintaining stable temperatures even during the busiest shifts.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-red-600" />
                  <p className="text-zinc-800 font-medium">Bulk supply of Caputo flour and San Marzano tomatoes.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-red-600" />
                  <p className="text-zinc-800 font-medium">Commercial-grade peels and dough management tools.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-red-600" />
                  <p className="text-zinc-800 font-medium">Nationwide pallet delivery and recurring order schedules.</p>
                </li>
              </ul>
            </div>
            <div className="bg-zinc-100 aspect-video rounded-3xl flex items-center justify-center text-zinc-400 italic">
              Pizzeria Setup Showcase
            </div>
          </div>
        </Container>
      </section>

      <ValueProps
        heading="Why Pizzerias Choose Us"
        items={[
          {
            title: "Consistency",
            description: "Uniform heat distribution in ovens and standardized ingredient quality.",
          },
          {
            title: "Scalability",
            description: "From single-deck to high-capacity modular systems for growing chains.",
          },
          {
            title: "Reliability",
            description: "Fast support and backup supply to ensure you never miss a service.",
          }
        ]}
      />

      <CTASection
        title="Planning a new pizzeria location?"
        subtitle="Consult with our experts for layout advice and equipment selection."
        ctaLabel="Get Expert Advice"
        ctaLink="/contact"
      />
    </main>
  );
}
