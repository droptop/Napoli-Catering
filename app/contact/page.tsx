import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/ContactForm";
import { getMetadata } from "@/lib/seo";

export const metadata = getMetadata({
  title: "Contact & Request a Quote",
  description: "Get in touch with Napoli Catering Co. for B2B enquiries, quote requests, or consultations on pizza equipment and supply in the NL.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main className="py-24">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-6xl mb-8">
              Let's talk business.
            </h1>
            <p className="text-xl text-zinc-600 leading-relaxed mb-12">
              Whether you're starting a new pizzeria or optimizing an existing operation, our commercial team is ready to help with quotes, consultations, and supply scheduling.
            </p>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-2">Our Coverage</h3>
                <p className="text-zinc-900 font-medium">Nationwide delivery and support across the Netherlands.</p>
              </div>
              
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-2">Business Hours</h3>
                <p className="text-zinc-900 font-medium text-sm">Monday — Friday: 09:00 — 18:00 (CET)</p>
                <p className="text-zinc-500 text-sm mt-1">We respond to all B2B enquiries within 24 hours.</p>
              </div>

              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-2">Bulk Orders</h3>
                <p className="text-zinc-900 font-medium text-sm">For recurring wholesale orders, please specify your volume requirements in the form.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 sm:p-12 rounded-3xl shadow-xl shadow-zinc-200/50 border border-zinc-100">
            <h2 className="text-2xl font-bold mb-8">Request a Quote</h2>
            <ContactForm />
          </div>
        </div>
      </Container>
    </main>
  );
}
