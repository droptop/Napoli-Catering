import { Container } from "@/components/ui/Container";
import { CTASection } from "@/components/sections/CTASection";
import { Button } from "@/components/ui/Button";
import { getMetadata } from "@/lib/seo";

export const metadata = getMetadata({
  title: "Solutions for Hospitality Operators | Golf Clubs, Catering & Venues",
  description: "Authentic Neapolitan pizza solutions for professional operators. Problem/Solution focus for golf clubs, catering companies, and bars in the NL.",
  path: "/industries",
});

const industries = [
  {
    title: "Golf Clubs",
    problem: "Limited kitchen staff. Seasonal traffic spikes. Need for premium offerings without high labor costs.",
    solution: "Ambient bases allow for instant response to traffic spikes. No specialized dough skill required. Premium sourdough perception increases club satisfaction and margins."
  },
  {
    title: "Catering Companies",
    problem: "High labor pressure during events. Event-based demand fluctuations. Logistics complexity of frozen products.",
    solution: "Consistent, high-quality output regardless of event scale. Ambient storage removes the need for refrigerated transport. High margin potential for corporate and private events."
  },
  {
    title: "Bars & Hospitality Venues",
    problem: "Minimal kitchen infrastructure. Desire to add a food offering without full kitchen renovations or trained chefs.",
    solution: "Turn any bar into a premium pizza venue. Our bases work in standard ovens. Add a high-margin food category with minimal operational friction and no freezer space needed."
  }
];

export default function IndustriesPage() {
  return (
    <main>
      <section className="py-24 bg-zinc-50 border-b border-zinc-100">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl font-serif font-light tracking-tight text-zinc-900 sm:text-6xl mb-8">
              Sector Solutions
            </h1>
            <p className="text-xl text-zinc-600 leading-relaxed font-light">
              We provide tailored solutions for different hospitality segments. Our sourdough bases are designed to solve the specific operational challenges of high-volume and resource-constrained kitchens.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <div className="space-y-32">
            {industries.map((item, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                <div>
                  <h2 className="text-3xl font-serif font-light tracking-tight text-[#c5a059] sm:text-4xl mb-6 uppercase tracking-widest">
                    Pizza for {item.title}
                  </h2>
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-2">The Problem</h3>
                      <p className="text-xl text-zinc-800 font-light leading-relaxed">{item.problem}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold uppercase tracking-widest text-green-600 mb-2">The Solution</h3>
                      <p className="text-xl text-zinc-600 font-light leading-relaxed">{item.solution}</p>
                    </div>
                  </div>
                </div>
                <div className="bg-zinc-50 aspect-video rounded-3xl border border-zinc-100 flex items-center justify-center text-zinc-300 font-serif italic">
                  {item.title} Solution Context
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24 bg-zinc-950 text-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-serif font-light mb-6">Designed for Operators</h2>
              <p className="text-zinc-400 text-lg leading-relaxed mb-6 font-light">
                Everything we do is focused on hospitality margins and operational simplicity. We don't just sell pizza bases; we sell a more efficient business model for your kitchen.
              </p>
            </div>
            <div className="bg-zinc-900 p-10 rounded-3xl border border-zinc-800 shadow-xl">
              <h3 className="text-xl font-serif font-light mb-4 text-[#c5a059]">Ready to see the difference?</h3>
              <p className="text-zinc-500 mb-8 text-sm font-light">Experience the quality and operational ease firsthand with a live tasting demo.</p>
              <Button href="/book-a-demo" variant="premium" className="w-full">Book a Demo</Button>
            </div>
          </div>
        </Container>
      </section>

      <CTASection
        title="Custom Industry Solutions"
        subtitle="We provide bespoke equipment and supply packages for specialized catering projects across the NL."
        ctaLabel="Custom Inquiry"
        ctaLink="/contact"
      />
    </main>
  );
}
