import { Container } from "@/components/ui/Container";
import { getMetadata } from "@/lib/seo";

export const metadata = getMetadata({
  title: "Privacy Policy",
  description: "Our policy on how we handle your personal and business data.",
  path: "/privacy",
  noIndex: true,
});

export default function PrivacyPage() {
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
            Privacy Policy
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
                <h2 className="text-2xl font-serif font-light text-[#c5a059] uppercase tracking-widest">1. Data Collection</h2>
              </div>
              <p className="text-white font-light leading-relaxed pl-8 sm:pl-12">
                We collect information provided by you through our contact and quote forms, including business names, work emails, and catering requirements. This is used solely for the purpose of providing B2B services and communication.
              </p>
            </section>

            <section>
              <div className="flex gap-6 items-stretch mb-6">
                <div className="flex shrink-0">
                  <div className="w-[2px] bg-[#008C45]" />
                  <div className="w-[2px] bg-[#F4F5F0]" />
                  <div className="w-[2px] bg-[#CD212A]" />
                </div>
                <h2 className="text-2xl font-serif font-light text-[#c5a059] uppercase tracking-widest">2. Use of Information</h2>
              </div>
              <p className="text-white font-light leading-relaxed pl-8 sm:pl-12">
                Your business data is used to generate custom quotes, manage recurring orders, and provide technical support. We do not sell your data to third parties.
              </p>
            </section>

            <section>
              <div className="flex gap-6 items-stretch mb-6">
                <div className="flex shrink-0">
                  <div className="w-[2px] bg-[#008C45]" />
                  <div className="w-[2px] bg-[#F4F5F0]" />
                  <div className="w-[2px] bg-[#CD212A]" />
                </div>
                <h2 className="text-2xl font-serif font-light text-[#c5a059] uppercase tracking-widest">3. Data Security</h2>
              </div>
              <p className="text-white font-light leading-relaxed pl-8 sm:pl-12">
                We implement industry-standard security measures to protect your commercial information and order history.
              </p>
            </section>

            <section>
              <div className="flex gap-6 items-stretch mb-6">
                <div className="flex shrink-0">
                  <div className="w-[2px] bg-[#008C45]" />
                  <div className="w-[2px] bg-[#F4F5F0]" />
                  <div className="w-[2px] bg-[#CD212A]" />
                </div>
                <h2 className="text-2xl font-serif font-light text-[#c5a059] uppercase tracking-widest">4. GDPR Compliance</h2>
              </div>
              <p className="text-white font-light leading-relaxed pl-8 sm:pl-12">
                As a Dutch business, we comply with the General Data Protection Regulation (GDPR). You have the right to access, rectify, or request deletion of your personal data at any time.
              </p>
            </section>
          </div>
        </div>
      </Container>
    </main>
  );
}
