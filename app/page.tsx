import { Hero } from "@/components/sections/Hero";
import { Partners } from "@/components/sections/Partners";
import { Categories } from "@/components/sections/Categories";
import { ValueProps } from "@/components/sections/ValueProps";
import { StepProcess } from "@/components/sections/StepProcess";
import { UseCases } from "@/components/sections/UseCases";
import { Testimonials } from "@/components/sections/Testimonials";
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
        subtitle="The reliable B2B partner for premium pizza ovens, artisanal ingredients, and commercial catering equipment in the Netherlands."
        primaryCtaLabel="Request a Quote"
        primaryCtaLink="/contact"
        secondaryCtaLabel="View Products"
        secondaryCtaLink="/products"
      />
      
      <Partners heading="Trusted by leading restaurants and pizzerias across the NL" />
      
      <Categories
        heading="Commercial Product Range"
        categories={[
          {
            title: "Professional Ovens",
            description: "Stationary and mobile wood and gas ovens for commercial bakes.",
            href: "/products/ovens",
          },
          {
            title: "Ingredients & Flour",
            description: "Authentic Italian flour and DOP ingredients for professional kitchens.",
            href: "/products/ingredients",
          },
          {
            title: "Tools & Accessories",
            description: "Commercial-grade peels, prep tools, and kitchen essentials.",
            href: "/products/tools",
          },
          {
            title: "Bulk Packaging",
            description: "Professional pizza boxes and service items for high-volume operations.",
            href: "/products/packaging",
          },
        ]}
      />
      
      <ValueProps
        heading="The Napoli Catering Advantage"
        items={[
          {
            title: "Authentic Sourcing",
            description: "Direct relationships with Italian producers ensuring artisanal quality.",
          },
          {
            title: "B2B Reliability",
            description: "Consistent supply chains and commercial invoicing for Dutch businesses.",
          },
          {
            title: "Fast NL Delivery",
            description: "Efficient logistics network providing rapid delivery across the Netherlands.",
          },
          {
            title: "Expert Support",
            description: "Professional consultation on equipment setup and kitchen workflow.",
          },
          {
            title: "Wholesale Pricing",
            description: "Competitive B2B rates and volume-based discounts for bulk orders.",
          },
        ]}
      />
      
      <StepProcess
        heading="Our Process"
        steps={[
          {
            title: "Consultation",
            description: "Discuss your equipment needs or supply volume with our commercial team.",
          },
          {
            title: "Procurement",
            description: "We handle the sourcing and quality control of your selected products.",
          },
          {
            title: "Fulfilment",
            description: "Scheduled delivery and setup support for your commercial kitchen.",
          },
        ]}
      />
      
      <UseCases
        heading="Sector Solutions"
        useCases={[
          {
            title: "Artisanal Pizzerias",
            description: "Complete setup from professional wood-fired ovens to recurring flour supply.",
            href: "/industries/pizzerias",
          },
          {
            title: "Full-Service Restaurants",
            description: "Specialized equipment and premium ingredients for high-volume service.",
            href: "/industries/restaurants",
          },
          {
            title: "Mobile Food Trucks",
            description: "Lightweight, high-performance ovens designed for mobility and events.",
            href: "/industries/food-trucks",
          },
        ]}
      />
      
      <Testimonials
        heading="Client Feedback"
        testimonials={[
          {
            quote: "The oven delivery and setup were handled with extreme professionalism. The consistency of their flour supply has been a game-changer for our daily service.",
            author: "M. de Vries",
            role: "Owner",
            company: "Amsterdam Pizza Co.",
          },
          {
            quote: "Napoli Catering Co. is our one-stop shop for all Neapolitan supplies. Their B2B invoicing and reliable delivery in the NL make them an essential partner.",
            author: "J. Bakker",
            role: "Head Chef",
            company: "Trattoria Utrecht",
          },
        ]}
      />
      
      <FAQ
        heading="Frequently Asked Questions"
        items={[
          {
            question: "Do you deliver throughout the Netherlands?",
            answer: "Yes, we offer nationwide delivery across the Netherlands. Bulk pallet orders are managed through our dedicated commercial logistics network.",
          },
          {
            question: "Is business invoicing available?",
            answer: "Absolutely. All our sales are B2B, and we provide detailed VAT invoices for all equipment and recurring supply orders.",
          },
          {
            question: "Do you offer bulk order discounts?",
            answer: "Yes, we provide competitive wholesale pricing and volume-based discounts for recurring ingredient and packaging orders.",
          },
          {
            question: "Can you assist with kitchen setup?",
            answer: "We offer professional consultation on oven selection and kitchen workflow to ensure your equipment is optimized for commercial use.",
          },
          {
            question: "What are the lead times for custom equipment?",
            answer: "Standard in-stock items are delivered within 2-3 business days. Custom oven builds typically have a lead time of 4-6 weeks.",
          },
        ]}
      />
      
      <CTASection
        title="Ready to optimize your catering operations?"
        subtitle="Contact our commercial team today for a tailored quote or a consultation on your supply needs."
        ctaLabel="Request a Custom Quote"
        ctaLink="/contact"
      />
    </main>
  );
}
