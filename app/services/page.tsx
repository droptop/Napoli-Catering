import { Container } from "@/components/ui/Container";
import { Categories } from "@/components/sections/Categories";
import { CTASection } from "@/components/sections/CTASection";
import { Button } from "@/components/ui/Button";
import { getMetadata } from "@/lib/seo";

export const metadata = getMetadata({
  title: "Commercial Catering Services",
  description: "Beyond equipment and ingredients: Catering supply, professional advice, and recurring order management for pizzerias in the NL.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <main>
      <section className="py-24 bg-zinc-50 border-b border-zinc-100">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-6xl text-center mx-auto mb-8">
              Catering Services
            </h1>
            <p className="text-xl text-zinc-600 text-center leading-relaxed max-w-2xl mx-auto">
              We provide the professional partnership needed to launch and scale your commercial catering operation. Our services are focused on operational consistency and commercial growth.
            </p>
          </div>
        </Container>
      </section>

      <Categories
        heading="Our Commercial Services"
        categories={[
          {
            title: "Catering Supply",
            description: "End-to-end procurement and logistics for your ingredients and packaging.",
            href: "/services/supply",
          },
          {
            title: "Advice & Support",
            description: "Technical consultation on equipment selection and kitchen workflow design.",
            href: "/services/advice",
          },
          {
            title: "Bulk Orders",
            description: "Automated recurring supply and volume pricing for B2B accounts.",
            href: "/services/bulk-orders",
          },
        ]}
      />

      <section className="py-24 bg-zinc-50 border-y border-zinc-100">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-zinc-900">Commercial Reliability</h2>
              <p className="text-zinc-600 text-lg leading-relaxed mb-6">
                Launching a professional pizzeria in the Netherlands requires more than just high-quality products. We provide the expertise and reliable logistics to support your commercial kitchen every day.
              </p>
            </div>
             <div className="bg-white p-8 rounded-3xl border border-zinc-100 shadow-sm flex flex-col justify-center">
                <h3 className="text-xl font-bold mb-4">Discuss Your Operation</h3>
                <p className="text-zinc-500 mb-8 text-sm leading-relaxed">Let's find the right service mix for your business.</p>
                <Button href="/contact" className="w-full">Book a Consultation</Button>
             </div>
          </div>
        </Container>
      </section>

      <CTASection
        title="Ready to optimize your service?"
        subtitle="Contact our commercial specialists to discuss a supply agreement or technical support."
        ctaLabel="Enquire Now"
        ctaLink="/contact"
      />
    </main>
  );
}
