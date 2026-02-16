import { Container } from "@/components/ui/Container";
import { FAQ } from "@/components/sections/FAQ";
import { CTASection } from "@/components/sections/CTASection";
import { getMetadata } from "@/lib/seo";

export const metadata = getMetadata({
  title: "Frequently Asked Questions",
  description: "Find answers to common questions about our products, delivery, B2B services, and commercial equipment support.",
  path: "/faq",
});

export default function FAQPage() {
  return (
    <main>
      <section className="py-24 bg-zinc-50 border-b border-zinc-100">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-6xl mb-8">
              Help Center
            </h1>
            <p className="text-xl text-zinc-600 leading-relaxed">
              Find quick answers to common questions about ordering, logistics, and technical support for your commercial kitchen.
            </p>
          </div>
        </Container>
      </section>

      <FAQ
        heading="Orders & Logistics"
        items={[
          {
            question: "What is your delivery range in the Netherlands?",
            answer: "We deliver to all provinces in the Netherlands. Our logistics network is optimized for both small parcel deliveries (tools) and palletized shipments (ovens and bulk ingredients).",
          },
          {
            question: "How do I setup a recurring order?",
            answer: "Recurring orders can be setup through our B2B account portal or by contacting your dedicated account manager. We offer weekly, bi-weekly, and monthly schedules.",
          },
          {
            question: "What are the lead times for oven orders?",
            answer: "In-stock ovens are typically delivered within 5-7 business days. Custom builds or bespoke finishes may have a lead time of 4-8 weeks depending on the manufacturer.",
          }
        ]}
      />

      <FAQ
        heading="Products & Technical"
        items={[
          {
            question: "Are your ovens certified for commercial use?",
            answer: "Yes, all our ovens meet the necessary CE certifications and safety standards required for commercial kitchen operations in Europe.",
          },
          {
            question: "Do you provide training on how to use the equipment?",
            answer: "We offer basic setup guidance and can arrange for professional training sessions with experienced pizzaiolos to help your staff get the best results from our equipment.",
          },
          {
            question: "What is the warranty period for commercial equipment?",
            answer: "Standard commercial warranty is 12 months for parts. We also offer extended maintenance contracts for our high-volume B2B customers.",
          }
        ]}
      />

      <CTASection
        title="Still have questions?"
        subtitle="Our team is available to provide detailed technical specifications and logistics advice."
        ctaLabel="Contact Support"
        ctaLink="/contact"
      />
    </main>
  );
}
