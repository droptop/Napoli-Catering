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
    <main className="bg-zinc-950 text-white">
      <section className="py-24 pt-32 relative overflow-hidden">
        {/* Premium Background: Wood Texture */}
        <div
          className="absolute inset-0 z-0 opacity-40 grayscale"
          style={{
            backgroundImage: `url('https://cdn.builder.io/api/v1/image/assets%2Fa81fac9c3bae4b51ace81c3349c8dc9d%2Fa6dc89c6e32041c6a517dcb956241527?format=webp&width=1600&height=1200')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        {/* Dark Vignette Overlay */}
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-zinc-950 via-zinc-950/40 to-transparent" />

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-4xl font-serif font-light tracking-tight text-white sm:text-6xl mb-8 uppercase tracking-widest leading-tight">
                Rooted in Napoli, serving the Netherlands.
              </h1>
              <p className="text-xl text-zinc-300 leading-relaxed font-light">
                Napoli Catering Co. was founded to bridge the gap between ancient Italian tradition and the modern Dutch hospitality industry. We specialize in providing the foundations for authentic Neapolitan pizza.
              </p>
              <p className="mt-8 text-2xl font-serif font-light italic text-[#c5a059] border-l-2 border-[#c5a059] pl-8">
                “Your one stop solution for Authentic Neapolitan Pizza”
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fa81fac9c3bae4b51ace81c3349c8dc9d%2F989e54cd20a049c1b8d9eb6dbd31e358?format=webp&width=800&height=1200"
                alt="Napalese illustration"
                className="h-52 sm:h-64 md:h-80 w-auto opacity-80 transition-opacity hover:opacity-100"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-24 relative overflow-hidden bg-white/5 backdrop-blur-sm border-y border-white/5">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative flex items-center justify-center">
               <img
                 src="https://cdn.builder.io/api/v1/image/assets%2Fa81fac9c3bae4b51ace81c3349c8dc9d%2Fcfdac20eee0749ec933ad9d776b0491d?format=webp&width=1600&height=1200"
                 alt="Naples Map"
                 className="max-w-[80%] h-auto grayscale opacity-60"
               />
            </div>
            <div className="lg:border-l lg:border-[#c5a059] lg:pl-16">
              <h2 className="text-3xl font-serif font-light text-white mb-6 uppercase tracking-widest">Our Mission</h2>
              <p className="text-zinc-400 text-lg leading-relaxed mb-6 font-light">
                We believe that authenticity shouldn't be a luxury reserved for the few. Our mission is to empower professional kitchens across the NL to serve true Neapolitan sourdough pizza without the complexity of traditional dough preparation.
              </p>
              <p className="text-zinc-400 text-lg leading-relaxed font-light">
                By sourcing our bases directly from artisanal producers in Naples and managing a specialized ambient supply chain, we ensure every kitchen has access to heritage-grade ingredients.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-24 bg-zinc-900 border-y border-white/5">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-serif font-light text-white mb-8 uppercase tracking-widest">Main Offering</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  {
                    title: "Dough Balls & Pizza Bases",
                    desc: "Fresh, high-quality Neapolitan & sourdough options for artisan-style pizzas."
                  },
                  {
                    title: "Specialised Ovens",
                    desc: "State-of-the-art equipment designed for the perfect Neapolitan pizza bake."
                  },
                  {
                    title: "Neapolitan Ingredients",
                    desc: "Full range of top-tier ingredients for an authentic Italian taste."
                  },
                  {
                    title: "Premium Burger Buns",
                    desc: "High-quality buns for the perfect complement to your menu."
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-white/5 p-6 border border-white/10 rounded-xl">
                    <h3 className="text-[#c5a059] font-bold text-sm uppercase tracking-widest mb-2">{item.title}</h3>
                    <p className="text-zinc-400 text-sm font-light leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-serif font-light text-white mb-8 uppercase tracking-widest">Complete Solutions</h2>
              <p className="text-zinc-400 font-light mb-8 leading-relaxed italic">From dough to delivery, we've got you covered. Trusted by businesses, pizzerias, restaurants & catering companies.</p>
              <ul className="space-y-6">
                {[
                  { title: "Expert Support", desc: "Helping you optimise your pizza-making process with technical guidance." },
                  { title: "Reliable Delivery", desc: "Fast & reliable logistics so your operations never miss a beat." },
                  { title: "Premium Ingredients", desc: "Access to the highest grade products sourced directly for professional use." },
                  { title: "State-of-the-Art Equipment", desc: "High-heat performance ovens and tools built for durability and precision." }
                ].map((point, index) => (
                  <li key={index} className="flex gap-4">
                    <div className="h-6 w-6 rounded-full bg-[#c5a059]/10 flex items-center justify-center shrink-0">
                      <svg className="h-3 w-3 text-[#c5a059]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-white uppercase tracking-widest text-xs mb-1">{point.title}</h4>
                      <p className="text-zinc-400 font-light text-sm">{point.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
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
