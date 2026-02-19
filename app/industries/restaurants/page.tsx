import { Container } from "@/components/ui/Container";
import { ValueProps } from "@/components/sections/ValueProps";
import { CTASection } from "@/components/sections/CTASection";
import { getMetadata } from "@/lib/seo";

export const metadata = getMetadata({
  title: "Solutions for Full-Service Restaurants",
  description: "Commercial pizza equipment and premium ingredients for restaurants adding Neapolitan options to their menu in the NL.",
  path: "/industries/restaurants",
});

export default function RestaurantsPage() {
  return (
    <main>
      <section className="py-24 bg-zinc-50 border-b border-zinc-100">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-6xl mb-8">
              Full-Service Restaurants
            </h1>
            <p className="text-xl text-zinc-600 leading-relaxed">
              Enhance your restaurant's menu with authentic Neapolitan pizza. We provide the compact, high-performance equipment and premium supply chain needed for high-volume service.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
             <div className="bg-zinc-100 aspect-video rounded-3xl flex items-center justify-center text-zinc-400 italic">
              Restaurant Kitchen Integration
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Menu Diversification</h2>
              <p className="text-zinc-600 text-lg leading-relaxed mb-6">
                Integrating a pizza operation into a full-service restaurant requires strategic equipment selection. Our modular and compact ovens deliver authentic results without taking up excessive floor space.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-red-600" />
                  <p className="text-zinc-800 font-medium">Hybrid gas/wood ovens for operational flexibility.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-red-600" />
                  <p className="text-zinc-800 font-medium">Recurring ingredient supply tailored to your menu volume.</p>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <ValueProps
        heading="Why Restaurants Choose Us"
        items={[
          {
            title: "Versatility",
            description: "Equipment that fits within existing kitchen layouts and workflows.",
          },
          {
            title: "Consistency",
            description: "Standardized ingredient quality ensuring every pizza meets your standards.",
          },
          {
            title: "Efficiency",
            description: "High-throughput ovens designed for fast-paced commercial kitchens.",
          }
        ]}
      />

      <CTASection
        title="Ready to add pizza to your menu?"
        subtitle="Discuss equipment integration and supply options with our restaurant specialists."
        ctaLabel="Get Started"
        ctaLink="/contact"
      />
    </main>
  );
}
