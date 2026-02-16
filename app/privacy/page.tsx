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
    <main className="py-24">
      <Container>
        <div className="max-w-3xl prose prose-zinc prose-red">
          <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 mb-8">
            Privacy Policy
          </h1>
          <p className="text-zinc-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">1. Data Collection</h2>
            <p className="text-zinc-600 leading-relaxed mb-4">
              We collect information provided by you through our contact and quote forms, including business names, work emails, and catering requirements. This is used solely for the purpose of providing B2B services and communication.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">2. Use of Information</h2>
            <p className="text-zinc-600 leading-relaxed mb-4">
              Your business data is used to generate custom quotes, manage recurring orders, and provide technical support. We do not sell your data to third parties.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">3. Data Security</h2>
            <p className="text-zinc-600 leading-relaxed mb-4">
              We implement industry-standard security measures to protect your commercial information and order history.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">4. GDPR Compliance</h2>
            <p className="text-zinc-600 leading-relaxed mb-4">
              As a Dutch business, we comply with the General Data Protection Regulation (GDPR). You have the right to access, rectify, or request deletion of your personal data at any time.
            </p>
          </section>
        </div>
      </Container>
    </main>
  );
}
