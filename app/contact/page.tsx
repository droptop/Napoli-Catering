import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/ContactForm";
import { getMetadata } from "@/lib/seo";

export const metadata = getMetadata({
  title: "Contact & Product Inquiries | Napoli Catering Co.",
  description: "Get in touch for technical product information, wholesale pricing, or general B2B inquiries about our Neapolitan sourdough bases.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main className="py-24">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h1 className="text-4xl font-serif font-light tracking-tight text-zinc-900 sm:text-6xl mb-8">
              Commercial Inquiries
            </h1>
            <p className="text-xl text-zinc-600 leading-relaxed mb-12 font-light">
              Whether you're looking for detailed technical specifications, wholesale pricing, or supply logistics for your venue, our team is ready to support your commercial requirements.
            </p>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-2 border-b border-zinc-50 pb-2">Operational Coverage</h3>
                <p className="text-zinc-900 font-medium">Nationwide ambient delivery and support across the Netherlands.</p>
              </div>
              
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-2 border-b border-zinc-50 pb-2">Business Support</h3>
                <p className="text-zinc-900 font-medium text-sm italic">Monday — Friday: 09:00 — 18:00 (CET)</p>
                <p className="text-zinc-500 text-sm mt-1 font-light">We prioritize responses to registered hospitality businesses within 24 hours.</p>
              </div>

              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-2 border-b border-zinc-50 pb-2">Volume Accounts</h3>
                <p className="text-zinc-900 font-medium text-sm">For recurring high-volume accounts, please specify your weekly base requirements.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 sm:p-12 rounded-3xl shadow-xl shadow-zinc-200/50 border border-zinc-100">
            <h2 className="text-2xl font-serif font-light mb-8 text-[#c5a059] uppercase tracking-widest">Enquiry Form</h2>
            <ContactForm />
          </div>
        </div>
      </Container>
    </main>
  );
}
