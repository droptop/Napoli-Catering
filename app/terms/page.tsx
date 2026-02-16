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
    <main className="py-24">
      <Container>
        <div className="max-w-3xl prose prose-zinc prose-red">
          <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 mb-8">
            Terms & Conditions
          </h1>
          <p className="text-zinc-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">1. Business-to-Business (B2B) Only</h2>
            <p className="text-zinc-600 leading-relaxed mb-4">
              All services and products provided by Napoli Catering Co. are intended for commercial use. By placing an order, you represent that you are acting as a business entity or a professional caterer.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">2. Pricing & Payments</h2>
            <p className="text-zinc-600 leading-relaxed mb-4">
              All prices are quoted in Euros and exclude VAT (21% or 9% where applicable in the Netherlands). Full payment is required for equipment orders prior to dispatch unless otherwise agreed in writing.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">3. Delivery & Risk</h2>
            <p className="text-zinc-600 leading-relaxed mb-4">
              Risk of loss or damage passes to the customer upon delivery. We strive to meet all estimated delivery dates but cannot be held liable for delays caused by third-party logistics or manufacturers.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">4. Commercial Warranty</h2>
            <p className="text-zinc-600 leading-relaxed mb-4">
              Our professional equipment comes with a 12-month parts-only warranty. Damage caused by improper installation, misuse, or lack of maintenance is not covered.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">5. Governing Law</h2>
            <p className="text-zinc-600 leading-relaxed mb-4">
              These terms are governed by the laws of the Netherlands. Any disputes will be subject to the exclusive jurisdiction of the Dutch courts.
            </p>
          </section>
        </div>
      </Container>
    </main>
  );
}
