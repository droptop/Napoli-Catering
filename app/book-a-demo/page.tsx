import { Container } from "@/components/ui/Container";
import { DemoForm } from "@/components/DemoForm";
import { getMetadata } from "@/lib/seo";

export const metadata = getMetadata({
  title: "Book a Live Tasting Demo | See It. Taste It. Decide.",
  description: "Request an on-site demonstration of our authentic Neapolitan sourdough pizza bases. We bring the oven and prepare the pizza at your venue.",
  path: "/book-a-demo",
});

export default function BookDemoPage() {
  return (
    <main className="py-24">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h1 className="text-4xl font-serif font-light tracking-tight text-zinc-900 sm:text-6xl mb-8">
              Book a Live Demonstration
            </h1>
            <p className="text-xl text-zinc-600 leading-relaxed mb-12 font-light">
              Experience the quality and operational simplicity of our Neapolitan sourdough bases firsthand. We bring everything needed to deliver an authentic tasting in your own kitchen.
            </p>
            
            <div className="space-y-12">
              {[
                { title: "What we bring", desc: "A portable professional oven, our premium sourdough bases, and DOP ingredients." },
                { title: "What you’ll experience", desc: "A technical walkthrough of the preparation, baking process, and a full sensory tasting." },
                { title: "No obligation", desc: "This is a technical demonstration for hospitality professionals. No pressure to buy on the day." }
              ].map((item, index) => (
                <div key={index} className="flex gap-6">
                  <div className="h-10 w-10 rounded-full bg-[#fcfaf7] border border-[#c5a059]/30 flex items-center justify-center shrink-0">
                    <span className="text-[#c5a059] font-serif italic text-lg">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-zinc-900 uppercase tracking-widest mb-2">{item.title}</h3>
                    <p className="text-zinc-500 font-light leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white p-8 sm:p-12 rounded-3xl shadow-2xl shadow-zinc-200/50 border border-zinc-100">
            <h2 className="text-2xl font-serif font-light mb-8 text-[#c5a059] border-b border-zinc-50 pb-4 uppercase tracking-widest">Demo Request</h2>
            <DemoForm />
          </div>
        </div>
      </Container>
    </main>
  );
}
