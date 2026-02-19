import { Container } from "@/components/ui/Container";
import { getMetadata } from "@/lib/seo";

export const metadata = getMetadata({
  title: "Terms & Conditions",
  description: "B2B terms of service for Napoli Catering Co. sales and equipment supply in the NL.",
  path: "/terms",
  noIndex: true,
});

export default function TermsPage() {
  return (
    <main className="bg-zinc-950 text-white min-h-screen py-24 pt-32 relative overflow-hidden">
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
      {/* Dark Overlay */}
      <div className="absolute inset-0 z-0 bg-zinc-950/60" />

      <Container className="relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-serif font-light tracking-tight text-white sm:text-6xl mb-8 uppercase tracking-widest leading-tight">
            Terms & Conditions
          </h1>
          <p className="text-[#c5a059] mb-12 font-light italic">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="space-y-16">
            <section>
              <div className="flex gap-6 items-stretch mb-6">
                <div className="flex shrink-0">
                  <div className="w-[2px] bg-[#008C45]" />
                  <div className="w-[2px] bg-[#F4F5F0]" />
                  <div className="w-[2px] bg-[#CD212A]" />
                </div>
                <h2 className="text-2xl font-serif font-light text-[#c5a059] uppercase tracking-widest">1. Business-to-Business (B2B) Only</h2>
              </div>
              <p className="text-white font-light leading-relaxed pl-8 sm:pl-12">
                All services and products provided by Napoli Catering Co. are intended for commercial use. By placing an order, you represent that you are acting as a business entity or a professional caterer.
              </p>
            </section>

            <section>
              <div className="flex gap-6 items-stretch mb-6">
                <div className="flex shrink-0">
                  <div className="w-[2px] bg-[#008C45]" />
                  <div className="w-[2px] bg-[#F4F5F0]" />
                  <div className="w-[2px] bg-[#CD212A]" />
                </div>
                <h2 className="text-2xl font-serif font-light text-[#c5a059] uppercase tracking-widest">2. Pricing & Payments</h2>
              </div>
              <p className="text-white font-light leading-relaxed pl-8 sm:pl-12">
                All prices are quoted in Euros and exclude VAT (21% or 9% where applicable in the Netherlands). Full payment is required for equipment orders prior to dispatch unless otherwise agreed in writing.
              </p>
            </section>

            <section>
              <div className="flex gap-6 items-stretch mb-6">
                <div className="flex shrink-0">
                  <div className="w-[2px] bg-[#008C45]" />
                  <div className="w-[2px] bg-[#F4F5F0]" />
                  <div className="w-[2px] bg-[#CD212A]" />
                </div>
                <h2 className="text-2xl font-serif font-light text-[#c5a059] uppercase tracking-widest">3. Delivery & Risk</h2>
              </div>
              <p className="text-white font-light leading-relaxed pl-8 sm:pl-12">
                Risk of loss or damage passes to the customer upon delivery. We strive to meet all estimated delivery dates but cannot be held liable for delays caused by third-party logistics or manufacturers.
              </p>
            </section>

            <section>
              <div className="flex gap-6 items-stretch mb-6">
                <div className="flex shrink-0">
                  <div className="w-[2px] bg-[#008C45]" />
                  <div className="w-[2px] bg-[#F4F5F0]" />
                  <div className="w-[2px] bg-[#CD212A]" />
                </div>
                <h2 className="text-2xl font-serif font-light text-[#c5a059] uppercase tracking-widest">4. Commercial Warranty</h2>
              </div>
              <p className="text-white font-light leading-relaxed pl-8 sm:pl-12">
                Our professional equipment comes with a 12-month parts-only warranty. Damage caused by improper installation, misuse, or lack of maintenance is not covered.
              </p>
            </section>

            <section>
              <div className="flex gap-6 items-stretch mb-6">
                <div className="flex shrink-0">
                  <div className="w-[2px] bg-[#008C45]" />
                  <div className="w-[2px] bg-[#F4F5F0]" />
                  <div className="w-[2px] bg-[#CD212A]" />
                </div>
                <h2 className="text-2xl font-serif font-light text-[#c5a059] uppercase tracking-widest">5. Governing Law</h2>
              </div>
              <p className="text-white font-light leading-relaxed pl-8 sm:pl-12">
                These terms are governed by the laws of the Netherlands. Any disputes will be subject to the exclusive jurisdiction of the Dutch courts.
              </p>
            </section>
          </div>
        </div>
      </Container>
    </main>
  );
}
