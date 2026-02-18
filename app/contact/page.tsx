import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/ContactForm";
import { getMetadata } from "@/lib/seo";

export const metadata = getMetadata({
  title: "Contact & Product Enquiries | Napoli Catering Co.",
  description: "Get in touch for technical product information, wholesale pricing, or general B2B enquiries about our Neapolitan sourdough bases.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main className="py-24 pt-32 relative overflow-hidden bg-zinc-950 text-white">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h1 className="text-4xl font-serif font-light tracking-tight text-white sm:text-6xl mb-8 uppercase tracking-widest leading-tight">
              Commercial Enquiries
            </h1>
            <p className="text-xl text-zinc-300 leading-relaxed mb-12 font-light">
              Whether you're looking for detailed technical specifications, wholesale pricing, or supply logistics for your venue, our team is ready to support your commercial requirements.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-[#c5a059] mb-2 border-b border-white/5 pb-2">Contact Details</h3>
                <ul className="text-white font-medium space-y-2">
                  <li className="flex items-center gap-3">
                    <span className="text-[#c5a059] text-xs uppercase tracking-widest font-bold">Phone:</span>
                    <span>0657.60.3128</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-[#c5a059] text-xs uppercase tracking-widest font-bold">Email:</span>
                    <span>sales@napolicateringco.nl</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-[#c5a059] text-xs uppercase tracking-widest font-bold">Website:</span>
                    <span>napolicateringco.nl</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-[#c5a059] mb-2 border-b border-white/5 pb-2">Operational Coverage</h3>
                <p className="text-white font-medium">Nationwide ambient delivery and support across the Netherlands.</p>
              </div>

              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-[#c5a059] mb-2 border-b border-white/5 pb-2">Business Support</h3>
                <p className="text-white font-medium text-sm italic">Monday — Friday: 09:00 — 18:00 (CET)</p>
                <p className="text-zinc-400 text-sm mt-1 font-light">We prioritise responses to registered hospitality businesses within 24 hours.</p>
              </div>

              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-[#c5a059] mb-2 border-b border-white/5 pb-2">Volume Accounts</h3>
                <p className="text-white font-medium text-sm">For recurring high-volume accounts, please specify your weekly base requirements.</p>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-md p-8 sm:p-12 rounded-3xl shadow-2xl border border-white/10">
            <h2 className="text-2xl font-serif font-light mb-8 text-[#c5a059] uppercase tracking-widest border-b border-white/5 pb-4">Enquiry Form</h2>
            <ContactForm />
          </div>
        </div>
      </Container>
    </main>
  );
}
