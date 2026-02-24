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
                {
                  title: "What we bring",
                  desc: "A portable professional oven, our premium sourdough bases, and DOP ingredients.",
                  icon: (
                    <svg className="h-6 w-6 text-[#c5a059]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.99 7.99 0 0120 13a7.98 7.98 0 01-2.343 5.657z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.879 16.121A3 3 0 1012.015 11L11 14l.879 2.121z" />
                    </svg>
                  )
                },
                {
                  title: "What you’ll experience",
                  desc: "A technical walkthrough of the preparation, baking process, and a full sensory tasting.",
                  icon: (
                    <svg className="h-6 w-6 text-[#c5a059]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.618.309a2 2 0 01-1.789 0l-.618-.309a6 6 0 00-3.86-.517l-2.387.477a2 2 0 00-1.022.547V18a2 2 0 002 2h11a2 2 0 002-2v-2.572zM15 11V5a2 2 0 00-2-2H9a2 2 0 00-2 2v6" />
                    </svg>
                  )
                },
                {
                  title: "No obligation",
                  desc: "This is a technical demonstration for hospitality professionals. No pressure to buy on the day.",
                  icon: (
                    <svg className="h-6 w-6 text-[#c5a059]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.034 11.942 11.942 0 00-1.175 4.58c0 5.692 4.023 10.52 9.435 11.75a11.952 11.952 0 009.435-11.75c0-1.567-.302-3.063-.854-4.438z" />
                    </svg>
                  )
                }
              ].map((item, index) => (
                <div key={index} className="flex gap-6 items-start">
                  <div className="h-12 w-12 rounded-full bg-white/5 border-2 border-[#c5a059] flex items-center justify-center shrink-0 shadow-sm mt-[-4px]">
                    {item.icon}
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
