import { Container } from "@/components/ui/Container";
import { ValueProps } from "@/components/sections/ValueProps";
import { CTASection } from "@/components/sections/CTASection";
import { getMetadata } from "@/lib/seo";

export const metadata = getMetadata({
  title: "About Us",
  description: "Learn about Napoli Catering Co. and our mission to provide authentic Neapolitan equipment and ingredients to the Dutch B2B market.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <main>
      <section className="py-24 bg-zinc-50 border-b border-zinc-100 overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(185,28,28,0.05),transparent_50%)]" />
        <Container>
          <div className="max-w-3xl relative z-10">
            <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-6xl mb-8">
              Rooted in Napoli, serving the Netherlands.
            </h1>
            <p className="text-xl text-zinc-600 leading-relaxed">
              Napoli Catering Co. was founded on a simple principle: every kitchen deserves access to the authentic tools and ingredients that define Neapolitan excellence. We bridge the gap between Italian tradition and Dutch commercial kitchens.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="aspect-[4/3] bg-zinc-100 rounded-3xl overflow-hidden relative border border-zinc-200 shadow-inner">
               {/* Placeholder for imagery */}
               <div className="absolute inset-0 flex items-center justify-center text-zinc-400 font-bold uppercase tracking-widest italic">Authentic Sourcing</div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-zinc-900 mb-6">Our Mission</h2>
              <p className="text-zinc-600 text-lg leading-relaxed mb-6">
                We believe that the best food starts with the best foundations. Our mission is to be the one-stop shop for commercial pizza operations, offering not just equipment, but the expertise and reliable supply chain needed for success.
              </p>
              <p className="text-zinc-600 text-lg leading-relaxed">
                By maintaining direct relationships with manufacturers in Italy and managing our own logistics in the NL, we ensure quality control and competitive pricing for our B2B partners.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <ValueProps
        heading="Our Core Values"
        items={[
          {
            title: "Expertise",
            description: "Deep knowledge of Neapolitan traditions and commercial kitchen requirements.",
          },
          {
            title: "Reliability",
            description: "A consistent supply chain that pizzerias can depend on every day.",
          },
          {
            title: "Quality",
            description: "Only sourcing products that meet our high standards for performance and taste.",
          }
        ]}
      />

      <CTASection
        title="Want to see our equipment in action?"
        subtitle="Contact us to arrange a demonstration or visit our showcase of professional ovens."
        ctaLabel="Book a Demo"
        ctaLink="/contact"
      />
    </main>
  );
}
