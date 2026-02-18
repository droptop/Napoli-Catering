import { Container } from "@/components/ui/Container";
import { UseCases } from "@/components/sections/UseCases";
import { CTASection } from "@/components/sections/CTASection";
import { Button } from "@/components/ui/Button";
import { getMetadata } from "@/lib/seo";

export const metadata = getMetadata({
  title: "Catering Industries & Solutions",
  description: "Specialized equipment and supply solutions for pizzerias, restaurants, food trucks, and commercial caterers in the NL.",
  path: "/industries",
});

export default function IndustriesOverviewPage() {
  return (
    <main>
      <section className="py-24 bg-zinc-50 border-b border-zinc-100">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-6xl mb-8">
              Sector Solutions
            </h1>
            <p className="text-xl text-zinc-600 leading-relaxed">
              We provide tailored equipment and supply solutions for different catering sectors. Every industry has unique requirements, and our products are selected to meet those specific commercial demands.
            </p>
          </div>
        </Container>
      </section>

      <UseCases
        heading="Our Core Industries"
        useCases={[
          {
            title: "Artisanal Pizzerias",
            description: "High-throughput ovens and heritage ingredients for dedicated pizzerias.",
            href: "/industries/pizzerias",
          },
          {
            title: "Full-Service Restaurants",
            description: "Versatile equipment and bulk supply for diverse restaurant operations.",
            href: "/industries/restaurants",
          },
          {
            title: "Mobile Food Trucks",
            description: "Compact, powerful ovens and mobile-ready packaging for event caterers.",
            href: "/industries/food-trucks",
          },
          {
            title: "Commercial Caterers",
            description: "Bespoke setups and wholesale supply for large-scale event catering.",
            href: "/industries/caterers",
          },
        ]}
      />

      <section className="py-24 bg-zinc-900 text-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Nationwide Support</h2>
              <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                Whether you're an independent pizzeria in Amsterdam or a large-scale catering firm in Rotterdam, we provide the logistics and expertise to support your growth.
              </p>
            </div>
            <div className="bg-zinc-800 p-8 rounded-2xl border border-zinc-700">
              <h3 className="text-xl font-bold mb-4">Discuss Your Industry Requirements</h3>
              <p className="text-zinc-400 mb-8 text-sm">Every business is different. Let's find the right setup for yours.</p>
              <Button href="/contact" className="w-full">Enquire Now</Button>
            </div>
          </div>
        </Container>
      </section>

      <CTASection
        title="Don't see your sector listed?"
        subtitle="We provide custom equipment and supply solutions for all types of commercial kitchens."
        ctaLabel="Custom Inquiry"
        ctaLink="/contact"
      />
    </main>
  );
}
