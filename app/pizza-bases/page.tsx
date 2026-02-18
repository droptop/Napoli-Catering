import { Container } from "@/components/ui/Container";
import { ValueProps } from "@/components/sections/ValueProps";
import { FAQ } from "@/components/sections/FAQ";
import { CTASection } from "@/components/sections/CTASection";
import { getMetadata } from "@/lib/seo";

export const metadata = getMetadata({
  title: "Neapolitan Sourdough Pizza Bases | Technical Overview",
  description: "Authentic handmade sourdough pizza bases from Naples. 3-month ambient shelf life, preservative-free. Technical specs for professional hospitality operators.",
  path: "/pizza-bases",
});

export default function PizzaBasesPage() {
  return (
    <main className="bg-zinc-950 text-white">
      {/* Overview Section */}
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
                Technical Overview
              </h1>
              <p className="text-xl text-zinc-300 leading-relaxed mb-8 font-light">
                Our bases are not just another convenience product. They are a technical solution for kitchens that demand authenticity without the traditional labour and skill requirements of dough management.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-md p-8 sm:p-12 rounded-3xl shadow-2xl border border-white/10">
              <h2 className="text-2xl font-serif font-light text-[#c5a059] mb-8 border-b border-white/5 pb-4 uppercase tracking-widest">Specifications</h2>
              <dl className="space-y-4">
                {[
                  { label: "Fermentation", value: "24 hours" },
                  { label: "Style", value: "Neapolitan sourdough" },
                  { label: "Preservatives", value: "None" },
                  { label: "Shelf life", value: "Up to 3 months ambient" },
                  { label: "Storage", value: "Room temperature" },
                  { label: "Recommended bake temp", value: "240–360°C" },
                  { label: "Origin", value: "Naples, Italy" }
                ].map((spec, index) => (
                  <div key={index} className="flex justify-between border-b border-white/5 pb-2 last:border-0">
                    <dt className="text-zinc-400 font-light">{spec.label}</dt>
                    <dd className="text-white font-medium">{spec.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Container>
      </section>

      {/* Structure & Performance */}
      <section className="py-24 relative overflow-hidden bg-zinc-900 border-y border-white/5">
        <div
          className="absolute inset-0 z-0 opacity-50 pointer-events-none"
          style={{
            backgroundImage: `url('https://cdn.builder.io/api/v1/image/assets%2Fa81fac9c3bae4b51ace81c3349c8dc9d%2F911c671c9bd5429ca0699a0004064868?format=webp&width=1600&height=1200')`,
            backgroundRepeat: 'repeat',
            backgroundSize: '800px',
            filter: 'invert(1)'
          }}
        />
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-serif font-light tracking-tight text-[#c5a059] sm:text-4xl mb-12 uppercase tracking-widest">
              Structure & Performance
            </h2>
            <div className="space-y-12">
              {[
                {
                  title: "Crust Structure",
                  content: "The characteristic 'cornicione' is achieved through high-hydration dough and a 24-hour fermentation process. Upon baking, it develops the signature airy structure and leopard spotting of an authentic Neapolitan pizza."
                },
                {
                  title: "Texture & Mouthfeel",
                  content: "Soft, elastic, and light. The sourdough process ensures a base that is crisp on the outside while remaining tender and moist on the inside."
                },
                {
                  title: "Superior Digestibility",
                  content: "Extended fermentation breaks down complex starches and gluten proteins, resulting in a product that is significantly easier to digest than rapid-yeast alternatives."
                },
                {
                  title: "High-Heat Performance",
                  content: "Our bases are engineered to withstand the intense heat of professional pizza ovens (up to 450°C) without burning or losing structural integrity, while still performing exceptionally in standard 240°C convection ovens."
                }
              ].map((item, index) => (
                <div key={index}>
                  <h3 className="text-xl font-bold text-[#c5a059] mb-3 uppercase tracking-widest">{item.title}</h3>
                  <p className="text-white font-light leading-relaxed">{item.content}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Operational Integration */}
      <section className="py-24 bg-zinc-950">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-serif font-light tracking-tight text-white sm:text-4xl mb-8 uppercase tracking-widest">
                Operational Integration
              </h2>
              <p className="text-zinc-400 font-light mb-8 leading-relaxed">
                We design our products for service. Integration into your existing kitchen is seamless, requiring no new infrastructure or specialized staff.
              </p>
            </div>
            <ul className="space-y-8">
              {[
                { title: "Staff Training Simplicity", desc: "Consistency is built into the product. Any team member can produce a premium pizza in minutes." },
                { title: "Existing Ovens", desc: "No need for a dedicated pizza oven. Exceptional results are achieved in standard commercial convection ovens." },
                { title: "Upgrade Path", desc: "We provide advice and supply paths for those looking to upgrade to high-heat pizza ovens." },
                { title: "Daily Delivery Availability", desc: "Reliable logistics ensure your inventory is maintained without the need for large storage footprints." }
              ].map((point, index) => (
                <li key={index}>
                  <h4 className="font-bold text-[#c5a059] mb-1 uppercase tracking-widest text-sm">{point.title}</h4>
                  <p className="text-zinc-400 font-light text-sm">{point.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <FAQ
        heading="Technical FAQ"
        items={[
          {
            question: "Do the bases require freezing?",
            answer: "No. Our bases are stored at ambient temperature (room temperature). This removes the need for expensive freezer storage and allows for immediate use.",
          },
          {
            question: "Are preservatives used to achieve the shelf life?",
            answer: "No. The 3-month shelf life is achieved through advanced packaging technology and the natural acidity of the sourdough process, not through chemical additives.",
          },
          {
            question: "Do they work in standard ovens?",
            answer: "Yes. While they thrive in high-heat pizza ovens, they are designed to produce excellent results in standard commercial convection ovens at 240°C and above.",
          },
          {
            question: "Is staff training required?",
            answer: "Minimal training is required. We provide a live demonstration and simple cooking guidance to ensure your team can deliver a consistent, premium product.",
          },
          {
            question: "What is the recommended storage temperature?",
            answer: "Standard room temperature (ambient) is ideal. Avoid direct sunlight and extreme heat sources.",
          },
        ]}
      />

      <CTASection
        title="Experience the Technical Advantage"
        subtitle="Book a live tasting demo to see how our sourdough bases perform in your kitchen."
        ctaLabel="Book a Live Demo"
        ctaLink="/book-a-demo"
      />
    </main>
  );
}
