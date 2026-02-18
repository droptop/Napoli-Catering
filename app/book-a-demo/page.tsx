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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h1 className="text-4xl font-serif font-light tracking-tight text-white sm:text-6xl mb-8 uppercase tracking-widest leading-tight">
              Book a Live Demonstration
            </h1>
            <p className="text-xl text-zinc-300 leading-relaxed mb-12 font-light">
              Experience the quality and operational simplicity of our Neapolitan sourdough bases firsthand. We bring everything needed to deliver an authentic tasting in your own kitchen.
            </p>

            <div className="space-y-12">
              {[
                { title: "What we bring", desc: "A portable professional oven, our premium sourdough bases, and DOP ingredients." },
                { title: "What you’ll experience", desc: "A technical walkthrough of the preparation, baking process, and a full sensory tasting." },
                { title: "No obligation", desc: "This is a technical demonstration for hospitality professionals. No pressure to buy on the day." }
              ].map((item, index) => (
                <div key={index} className="flex gap-6 items-start">
                  <div className="h-12 w-12 rounded-full bg-white/5 border-2 border-[#c5a059] flex items-center justify-center shrink-0 shadow-sm mt-[-4px]">
                    <span className="text-[#c5a059] font-sans font-semibold text-xl">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-1">{item.title}</h3>
                    <p className="text-zinc-400 font-light leading-relaxed text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-md p-8 sm:p-12 rounded-3xl shadow-2xl border border-white/10">
            <h2 className="text-2xl font-serif font-light mb-8 text-[#c5a059] border-b border-white/5 pb-4 uppercase tracking-widest">Demo Request</h2>
            <DemoForm />
          </div>
        </div>
      </Container>
    </main>
  );
}
