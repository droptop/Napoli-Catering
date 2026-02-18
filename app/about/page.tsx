import { Container } from "@/components/ui/Container";
import { ValueProps } from "@/components/sections/ValueProps";
import { CTASection } from "@/components/sections/CTASection";
import { getMetadata } from "@/lib/seo";

export const metadata = getMetadata({
  title: "About Napoli Catering Co. | Authentic Neapolitan Heritage",
  description: "Learn about our mission to bring authentic handmade sourdough pizza bases from Naples to Dutch professional kitchens.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <main>
      <section className="py-24 bg-[#fcfaf7] border-b border-zinc-100 overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(197,160,89,0.05),transparent_50%)]" />
        <Container>
          <div className="max-w-3xl relative z-10">
            <h1 className="text-4xl font-serif font-light tracking-tight text-zinc-900 sm:text-6xl mb-8">
              Rooted in Napoli, serving the Netherlands.
            </h1>
            <p className="text-xl text-zinc-600 leading-relaxed font-light">
              Napoli Catering Co. was founded to bridge the gap between ancient Italian tradition and the modern Dutch hospitality industry. We specialize in one thing: providing the foundations for authentic Neapolitan pizza.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="aspect-[4/3] bg-zinc-100 rounded-3xl overflow-hidden relative border border-zinc-200 shadow-inner grayscale opacity-20">
               {/* Placeholder for heritage imagery */}
               <div className="absolute inset-0 flex items-center justify-center text-zinc-400 font-serif italic text-xl">Handmade in Naples</div>
            </div>
            <div>
              <h2 className="text-3xl font-serif font-light text-zinc-900 mb-6">Our Mission</h2>
              <p className="text-zinc-600 text-lg leading-relaxed mb-6 font-light">
                We believe that authenticity shouldn't be a luxury reserved for the few. Our mission is to empower professional kitchens across the NL to serve true Neapolitan sourdough pizza without the complexity of traditional dough preparation.
              </p>
              <p className="text-zinc-600 text-lg leading-relaxed font-light">
                By sourcing our bases directly from artisanal producers in Naples and managing a specialized ambient supply chain, we ensure every kitchen has access to heritage-grade ingredients.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <ValueProps
        heading="Our Core Values"
        items={[
          {
            title: "Authenticity",
            description: "No compromises on origin. Our bases are made in Naples using 400-year-old sourdough methods.",
          },
          {
            title: "Simplicity",
            description: "Removing operational friction for hospitality managers through technical product solutions.",
          },
          {
            title: "Integrity",
            description: "Clean labels. No preservatives. Pure sourdough and DOP ingredients.",
          }
        ]}
      />

      <CTASection
        title="Ready to taste the difference?"
        subtitle="Experience our heritage sourdough bases firsthand with an on-site demonstration."
        ctaLabel="Book a Live Demo"
        ctaLink="/book-a-demo"
      />
    </main>
  );
}
