import { Container } from "@/components/ui/Container";
import { Categories } from "@/components/sections/Categories";
import { CTASection } from "@/components/sections/CTASection";
import { Button } from "@/components/ui/Button";
import { getMetadata } from "@/lib/seo";

export const metadata = getMetadata({
  title: "Commercial Products & Supplies",
  description: "Explore our range of Neapolitan catering equipment, ovens, premium ingredients, and pizza accessories for B2B customers in the Netherlands.",
  path: "/products",
});

export default function ProductsPage() {
  return (
    <main>
      <section className="py-24 bg-zinc-50 border-b border-zinc-100">
        <Container>
          <div className="max-w-2xl">
            <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-6xl">
              Professional Products
            </h1>
            <p className="mt-6 text-xl text-zinc-600 leading-relaxed">
              We curate only the finest Neapolitan equipment and supplies. From artisanal ovens to bulk flour, every item is selected for commercial durability and authentic quality.
            </p>
          </div>
        </Container>
      </section>

      <Categories
        heading="Our Product Categories"
        categories={[
          {
            title: "Professional Ovens",
            description: "Stationary, mobile, and modular ovens for pizzerias and restaurants.",
            href: "/products/ovens",
          },
          {
            title: "Ingredients & Flour",
            description: "Authentic Neapolitan flour, San Marzano tomatoes, and oils.",
            href: "/products/ingredients",
          },
          {
            title: "Tools & Accessories",
            description: "High-quality peels, dough trays, and kitchen utensils.",
            href: "/products/tools",
          },
          {
            title: "Packaging",
            description: "Commercial pizza boxes, napkins, and service items for delivery.",
            href: "/products/packaging",
          },
        ]}
      />

      <section className="py-24 bg-zinc-50">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-zinc-900 mb-6">Bulk Orders & Recurring Supply</h2>
              <p className="text-zinc-600 text-lg mb-8 leading-relaxed">
                Running a busy kitchen requires a reliable supply chain. We offer recurring order management for ingredients and packaging, ensuring you never run out of the essentials.
              </p>
              <ul className="space-y-4 text-zinc-700 font-medium">
                <li className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-red-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                  </svg>
                  Scheduled weekly or monthly deliveries
                </li>
                <li className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-red-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                  </svg>
                  Custom volume-based pricing
                </li>
                <li className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-red-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                  </svg>
                  Dedicated B2B account manager
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-100">
              <h3 className="text-xl font-bold mb-4">Request a Wholesale Account</h3>
              <p className="text-zinc-600 mb-6 text-sm">Get access to professional pricing and bulk ordering features.</p>
              <Button href="/contact" className="w-full">Enquire Now</Button>
            </div>
          </div>
        </Container>
      </section>

      <CTASection
        title="Can't find a specific item?"
        subtitle="We work with a wide network of Italian suppliers. If you need a custom equipment solution, tell us your requirements."
        ctaLabel="Custom Inquiry"
        ctaLink="/contact"
      />
    </main>
  );
}
