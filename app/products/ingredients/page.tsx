import { Container } from "@/components/ui/Container";
import { CTASection } from "@/components/sections/CTASection";
import { Button } from "@/components/ui/Button";
import { getMetadata } from "@/lib/seo";

export const metadata = getMetadata({
  title: "Premium Pizza Ingredients & Flour",
  description: "Authentic Neapolitan ingredients: Tipo 00 flour, San Marzano tomatoes, and artisanal toppings for commercial kitchens in the NL.",
  path: "/products/ingredients",
});

const ingredientCategories = [
  {
    title: "Artisanal Flour",
    description: "Premium Tipo 00 and specialty blends for high-hydration doughs.",
    items: ["Caputo Blue (Pizzeria)", "Caputo Red (Cuoco)", "Specialty Whole Wheat", "High Protein Blends"]
  },
  {
    title: "San Marzano Tomatoes",
    description: "D.O.P. certified tomatoes for the authentic Neapolitan base.",
    items: ["D.O.P. Whole Peeled", "Crushed Commercial Packs", "Specialty Cherry Tomatoes"]
  },
  {
    title: "Oils & Spices",
    description: "Cold-pressed olive oils and curated spices for finishing.",
    items: ["Extra Virgin Olive Oil", "Infused Finishing Oils", "Mediterranean Herbs"]
  },
  {
    title: "Toppings & Specialty",
    description: "Cured meats and specialty items sourced from Italian producers.",
    items: ["Spianata Calabra", "Artisanal Anchovies", "Olives & Capers"]
  }
];

export default function IngredientsPage() {
  return (
    <main>
      <section className="py-24 bg-zinc-50 border-b border-zinc-100">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-6xl">
              Ingredients & Flour
            </h1>
            <p className="mt-6 text-xl text-zinc-600 leading-relaxed">
              We supply the foundations of excellence. Our ingredients are sourced from heritage producers in Italy, ensuring your restaurant delivers a consistent, authentic flavor profile.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {ingredientCategories.map((cat, index) => (
              <div key={index} className="bg-white p-10 rounded-3xl border border-zinc-100 shadow-sm">
                <h2 className="text-2xl font-bold text-zinc-900 mb-4">{cat.title}</h2>
                <p className="text-zinc-600 mb-8">{cat.description}</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {cat.items.map((item, iIndex) => (
                    <li key={iIndex} className="flex items-center gap-2 text-sm text-zinc-800 font-medium">
                      <div className="h-1.5 w-1.5 rounded-full bg-red-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24 bg-zinc-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(185,28,28,0.15),transparent_50%)]" />
        <Container>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Bulk Supply for Commercial Use</h2>
              <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
                We specialize in pallets and bulk recurring orders. Optimize your kitchen's logistics with our scheduled delivery service tailored for Dutch restaurants and caterers.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-4xl font-extrabold text-red-600 mb-2">2-3</div>
                  <div className="text-sm font-bold uppercase tracking-wider text-zinc-500">Day Delivery</div>
                </div>
                <div>
                  <div className="text-4xl font-extrabold text-red-600 mb-2">100+</div>
                  <div className="text-sm font-bold uppercase tracking-wider text-zinc-500">Italian Suppliers</div>
                </div>
              </div>
            </div>
            <div className="bg-zinc-800 p-8 rounded-2xl border border-zinc-700">
              <h3 className="text-xl font-bold mb-6">Setup a Commercial Supply Schedule</h3>
              <p className="text-zinc-400 mb-8 text-sm leading-relaxed">
                Register for a B2B account to view bulk pricing and schedule recurring deliveries.
              </p>
              <Button href="/contact" className="w-full">Enquire about Wholesale</Button>
            </div>
          </div>
        </Container>
      </section>

      <CTASection
        title="Looking for a specific flour or brand?"
        subtitle="We can source specialty items and specific brands for large volume customers."
        ctaLabel="Contact Sourcing Team"
        ctaLink="/contact"
      />
    </main>
  );
}
