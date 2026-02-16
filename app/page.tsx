import { Hero } from "@/components/sections/Hero";
import { Partners } from "@/components/sections/Partners";
import { Categories } from "@/components/sections/Categories";
import { ValueProps } from "@/components/sections/ValueProps";
import { StepProcess } from "@/components/sections/StepProcess";
import { FAQ } from "@/components/sections/FAQ";
import { CTASection } from "@/components/sections/CTASection";
import { OrganizationJsonLd, LocalBusinessJsonLd } from "@/components/JsonLd";

export default function Home() {
  return (
    <main>
      <OrganizationJsonLd />
      <LocalBusinessJsonLd />
      
      <Hero
        title="Professional Neapolitan Catering Supply."
        subtitle="Your B2B partner for premium pizza ovens, authentic ingredients, and commercial catering equipment in the Netherlands."
        primaryCtaLabel="Request a Quote"
        primaryCtaLink="/contact"
        secondaryCtaLabel="View Products"
        secondaryCtaLink="/products"
      />
      
      <Partners heading="Trusted by pizzerias and restaurants across the NL" />
      
      <Categories
        heading="What we supply"
        categories={[
          {
            title: "Professional Ovens",
            description: "High-performance Neapolitan wood and gas ovens for commercial use.",
            href: "/products/ovens",
          },
          {
            title: "Ingredients & Flour",
            description: "Premium Italian flour, tomatoes, and toppings for the perfect dough.",
            href: "/products/ingredients",
          },
          {
            title: "Tools & Accessories",
            description: "Professional peels, cutters, and prep equipment.",
            href: "/products/tools",
          },
          {
            title: "Packaging",
            description: "Custom and wholesale pizza boxes and service items.",
            href: "/products/packaging",
          },
        ]}
      />
      
      <ValueProps
        heading="Why Napoli Catering Co."
        items={[
          {
            title: "Authentic Quality",
            description: "We source directly from Italian artisans to ensure your kitchen meets Neapolitan standards.",
          },
          {
            title: "Commercial Reliability",
            description: "Tested equipment designed for high-volume commercial environments.",
          },
          {
            title: "Local Support",
            description: "Dedicated support team based in the Netherlands for advice and setup.",
          },
          {
            title: "Bulk Savings",
            description: "Competitive B2B pricing and recurring order discounts for restaurants.",
          },
          {
            title: "Fast Delivery",
            description: "Efficient logistics across the NL to keep your business running smoothly.",
          },
        ]}
      />
      
      <StepProcess
        heading="How it works"
        steps={[
          {
            title: "Tell us your needs",
            description: "Submit a request or book a consultation for your catering project.",
          },
          {
            title: "We recommend",
            description: "Our experts suggest the best equipment and supply mix for your business.",
          },
          {
            title: "We deliver & support",
            description: "Professional delivery and ongoing supply of premium products.",
          },
        ]}
      />
      
      <FAQ
        heading="Frequently Asked Questions"
        items={[
          {
            question: "Do you deliver throughout the Netherlands?",
            answer: "Yes, we offer nationwide delivery across the Netherlands. Bulk orders are managed through our dedicated logistics network.",
          },
          {
            question: "Can I get a VAT invoice for my business?",
            answer: "Absolutely. All our sales are B2B and we provide full VAT invoices for all orders and services.",
          },
          {
            question: "Do you offer equipment installation?",
            answer: "We provide setup support and can recommend certified installers for our commercial oven range.",
          },
          {
            question: "What is the lead time for bulk ingredient orders?",
            answer: "Standard stock items are delivered within 2-3 business days. Recurring bulk orders can be scheduled weekly or monthly.",
          },
          {
            question: "Are your ovens suitable for mobile food trucks?",
            answer: "Yes, we have a specific range of lightweight yet high-performance ovens designed for mobile catering and food trucks.",
          },
        ]}
      />
      
      <CTASection
        title="Ready to elevate your catering business?"
        subtitle="Contact our commercial team today for a custom quote or a consultation on your equipment needs."
        ctaLabel="Get a Custom Quote"
        ctaLink="/contact"
      />
    </main>
  );
}
