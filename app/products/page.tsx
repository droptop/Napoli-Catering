import { Container } from "@/components/ui/Container";
import { getMetadata } from "@/lib/seo";
import { CTASection } from "@/components/sections/CTASection";

export const metadata = getMetadata({
  title: "Our Products | Authentic Neapolitan Solutions",
  description: "Explore our range of authentic Neapolitan sourdough pizza bases, dough balls, specialized ovens, and premium Italian ingredients.",
  path: "/products",
});

const products = [
  {
    id: "dough-balls-bases",
    title: "Dough Balls & Pizza Bases",
    description: "Fresh, high-quality Neapolitan & sourdough options for artisan-style pizzas. Our dough is fermented for 24 hours to ensure perfect structure and digestibility.",
    image: "https://cdn.builder.io/api/v1/image/assets%2Fa81fac9c3bae4b51ace81c3349c8dc9d%2Fa6dc89c6e32041c6a517dcb956241527?format=webp&width=1600&height=1200", // Placeholder wood texture/context
    placeholder: true
  },
  {
    id: "specialised-ovens",
    title: "Specialised Ovens",
    description: "State-of-the-art equipment designed for the perfect Neapolitan pizza bake. Engineered to reach and maintain the high temperatures required for authentic leopard spotting and airy crusts.",
    image: "https://cdn.builder.io/api/v1/image/assets%2Fa81fac9c3bae4b51ace81c3349c8dc9d%2F4c350f0d3bb94fe2af8a18b297bfd5e8?format=webp&width=800&height=1200", // Placeholder oven icon
    placeholder: true
  },
  {
    id: "naples-map",
    title: "Naples Map",
    description: "Every product we supply is rooted in the tradition of Naples. We source directly from the heart of Italy to ensure your kitchen delivers an authentic experience.",
    image: "https://cdn.builder.io/api/v1/image/assets%2Fa81fac9c3bae4b51ace81c3349c8dc9d%2F911c671c9bd5429ca0699a0004064868?format=webp&width=1600&height=1200", // Placeholder sketch/map
    placeholder: true
  },
  {
    id: "neapolitan-ingredients",
    title: "Neapolitan Ingredients",
    description: "Full range of top-tier ingredients for an authentic Italian taste. From San Marzano tomatoes to DOP mozzarella and premium olive oils.",
    image: "https://cdn.builder.io/api/v1/image/assets%2Fa81fac9c3bae4b51ace81c3349c8dc9d%2F18969ee3770449bcbb0d955a4a2b5bdc?format=webp&width=800&height=1200", // Placeholder ingredients
    placeholder: true
  },
  {
    id: "premium-burger-buns",
    title: "Premium Burger Buns",
    description: "High-quality buns for the perfect complement to your menu. Soft, resilient, and designed to hold up to the most demanding burger builds.",
    image: "https://cdn.builder.io/api/v1/image/assets%2Fa81fac9c3bae4b51ace81c3349c8dc9d%2F0bcb4f97bcaf4d8cb8d248239d74092f?format=webp&width=800&height=1200", // Placeholder buns
    placeholder: true
  },
  {
    id: "pizza-bases-last",
    title: "Technical Sourdough Bases",
    description: "Our signature product. 24-hour fermented Neapolitan sourdough bases that provide a technical solution for high-volume hospitality without compromising quality.",
    image: "https://cdn.builder.io/api/v1/image/assets%2Fa81fac9c3bae4b51ace81c3349c8dc9d%2F4787c7b0109d4358ad91fbe68bd58fd0?format=webp&width=800&height=1200", // Placeholder bases
    placeholder: true
  }
];

export default function ProductsPage() {
  return (
    <main className="bg-zinc-950 text-white pt-32">
      {/* Header */}
      <section className="py-24 border-b border-white/5">
        <Container>
          <h1 className="text-4xl font-serif font-light tracking-tight text-white sm:text-6xl mb-8 uppercase tracking-widest text-center">
            Our Products
          </h1>
          <p className="text-xl text-zinc-400 leading-relaxed max-w-3xl mx-auto text-center font-light">
            We provide a complete ecosystem for high-end Italian catering. From our signature sourdough bases to specialized kitchen equipment.
          </p>
        </Container>
      </section>

      {/* Product List */}
      <div className="divide-y divide-white/5">
        {products.map((product, index) => (
          <section key={product.id} className="py-32 overflow-hidden">
            <Container>
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  {/* Image Hero Area */}
                  <div className="relative aspect-[4/3] bg-zinc-900 border border-white/10 group overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent z-10" />
                    <img
                      src={product.image}
                      alt={product.title}
                      className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    />
                    {/* Placeholder Badge */}
                    <div className="absolute top-4 right-4 z-20 bg-[#c5a059]/10 backdrop-blur-md border border-[#c5a059]/20 px-3 py-1">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#c5a059]">Product Showcase</span>
                    </div>
                  </div>
                </div>

                <div className={`flex flex-col ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <h2 className="text-3xl font-serif font-light tracking-tight text-[#c5a059] sm:text-4xl mb-6 uppercase tracking-widest">
                    {product.title}
                  </h2>
                  <p className="text-lg text-zinc-300 leading-relaxed font-light mb-8">
                    {product.description}
                  </p>
                  
                  {/* Decorative Italian Line */}
                  <div className="flex gap-2 mb-8">
                    <div className="h-1 w-8 bg-[#008C45]" />
                    <div className="h-1 w-8 bg-[#F4F5F0]" />
                    <div className="h-1 w-8 bg-[#CD212A]" />
                  </div>

                  {product.id === 'pizza-bases-last' && (
                    <div className="mt-4">
                      <a 
                        href="/pizza-bases"
                        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#c5a059] hover:text-white transition-colors"
                      >
                        Technical Specs &rarr;
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </Container>
          </section>
        ))}
      </div>

      <CTASection
        title="Ready to taste the difference?"
        subtitle="Contact our commercial team today for a live demo or request detailed product information."
        ctaLabel="Book a Tasting Demo"
        ctaLink="/book-a-demo"
        variant="flat"
        hideWavySeparators={true}
      />
    </main>
  );
}
