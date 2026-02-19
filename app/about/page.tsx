import React from 'react';
import { Container } from "@/components/ui/Container";
import { ValueProps } from "@/components/sections/ValueProps";
import { CTASection } from "@/components/sections/CTASection";
import { getMetadata } from "@/lib/seo";

export const metadata = getMetadata({
  title: "About Napoli Catering Co. | Authentic Neapolitan Heritage",
  description: "Learn about our mission to bring authentic handmade sourdough pizza bases from Naples to Dutch professional kitchens.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <main className="bg-zinc-950 text-white">
      <section className="py-24 pt-32 relative overflow-hidden">
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
        {/* Dark Vignette Overlay */}
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-zinc-950 via-zinc-950/40 to-transparent" />

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="flex gap-6 sm:gap-8 items-stretch">
              <div className="flex shrink-0">
                <div className="w-[2px] bg-[#008C45]" />
                <div className="w-[2px] bg-[#F4F5F0]" />
                <div className="w-[2px] bg-[#CD212A]" />
              </div>
              <div>
                <h1 className="text-4xl font-serif font-light tracking-tight text-white sm:text-6xl mb-8 uppercase tracking-widest leading-tight">
                  Rooted in Napoli, serving the Netherlands.
                </h1>
                <p className="text-xl text-zinc-300 leading-relaxed font-light">
                  Napoli Catering Co. was founded to bridge the gap between ancient Italian tradition and the modern Dutch hospitality industry. We specialize in providing the foundations for authentic Neapolitan pizza.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fa81fac9c3bae4b51ace81c3349c8dc9d%2F989e54cd20a049c1b8d9eb6dbd31e358?format=webp&width=800&height=1200"
                alt="Napalese illustration"
                className="h-52 sm:h-64 md:h-80 w-auto opacity-80 transition-opacity hover:opacity-100"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Separator Bar */}
      <section className="relative py-8 bg-white overflow-hidden border-y border-zinc-200">
        <div
          className="absolute inset-0 z-0 opacity-10 grayscale"
          style={{
            backgroundImage: `url('https://cdn.builder.io/api/v1/image/assets%2Fa81fac9c3bae4b51ace81c3349c8dc9d%2Fa6dc89c6e32041c6a517dcb956241527?format=webp&width=1600&height=1200')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            filter: 'invert(1)'
          }}
        />
        <Container className="relative z-10">
          <p className="text-black text-center font-serif text-xl sm:text-2xl font-light italic tracking-wide">
            "Your one stop solution for Authentic Neapolitan Pizza"
          </p>
        </Container>
      </section>

      <section className="py-24 relative overflow-hidden bg-white/5 backdrop-blur-sm border-y border-white/5">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative flex items-center justify-center">
               <img
                 src="https://cdn.builder.io/api/v1/image/assets%2Fa81fac9c3bae4b51ace81c3349c8dc9d%2F1f3ff3a8cc6e49aba4388aae53e1217d?format=webp&width=800&height=1200"
                 alt="Naples Map"
                 className="max-w-[80%] h-auto"
               />
            </div>
            <div className="lg:border-l lg:border-[#c5a059] lg:pl-16">
              <h2 className="text-3xl font-serif font-light text-white mb-6 uppercase tracking-widest">Our Mission</h2>
              <p className="text-zinc-400 text-lg leading-relaxed mb-6 font-light">
                We believe that authenticity shouldn't be a luxury reserved for the few. Our mission is to empower professional kitchens across the NL to serve true Neapolitan sourdough pizza without the complexity of traditional dough preparation.
              </p>
              <p className="text-zinc-400 text-lg leading-relaxed font-light">
                By sourcing our bases directly from artisanal producers in <img src="https://cdn.builder.io/api/v1/image/assets%2Fa81fac9c3bae4b51ace81c3349c8dc9d%2F1f3ff3a8cc6e49aba4388aae53e1217d?format=webp&width=800&height=1200" alt="Naples" className="inline-block h-6 w-auto mx-1 align-middle" /> and managing a specialized ambient supply chain, we ensure every kitchen has access to heritage-grade ingredients.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-24 bg-zinc-900 border-y border-white/5">
        <Container>
          <div className="space-y-24">
            <div className="space-y-12">
              <h2 className="text-3xl font-serif font-light text-white mb-12 uppercase tracking-widest text-center">How we can help you:</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Dough Balls & Pizza Bases",
                    desc: "Fresh, high-quality Neapolitan & sourdough options for artisan-style pizzas.",
                    icon: (
                      <svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <circle cx="12" cy="12" r="9" strokeWidth="1.5" />
                        <path strokeLinecap="round" strokeWidth="1.5" d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6L5.6 18.4" strokeOpacity="0.3" />
                        <circle cx="8" cy="10" r="1.5" strokeWidth="1" />
                        <circle cx="15" cy="14" r="1" strokeWidth="1" />
                        <circle cx="12" cy="12" r="1" strokeWidth="1" />
                      </svg>
                    )
                  },
                  {
                    title: "Specialised Ovens",
                    desc: "State-of-the-art equipment designed for the perfect Neapolitan pizza bake.",
                    icon: (
                      <svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <rect x="3" y="5" width="18" height="14" rx="2" strokeWidth="1.5" />
                        <path strokeLinecap="round" strokeWidth="1.5" d="M7 15h10M7 12h10M3 9h18M6 18v1m12-1v1" />
                      </svg>
                    )
                  },
                  {
                    title: "Neapolitan Ingredients",
                    desc: "Full range of top-tier ingredients for an authentic Italian taste.",
                    icon: (
                      <svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        <circle cx="12" cy="14" r="3" strokeWidth="1.5" />
                      </svg>
                    )
                  },
                  {
                    title: "Premium Burger Buns",
                    desc: "High-quality buns for the perfect complement to your menu.",
                    icon: (
                      <svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 12h16M4 9c0-2.2 3.6-4 8-4s8 1.8 8 4v3H4V9zm0 6h16c0 2.2-3.6 4-8 4s-8-1.8-8-4v-3z" />
                      </svg>
                    )
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-6 transition-all duration-300 group">
                    <div className="h-[82px] w-[82px] rounded-full border-2 border-[#c5a059] flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform bg-[#c5a059]/5">
                      {React.isValidElement(item.icon) && (item.icon as any).type === 'img'
                        ? React.cloneElement(item.icon as React.ReactElement, { className: 'h-[41px] w-auto brightness-0 invert opacity-80 transition-opacity text-white' })
                        : React.cloneElement(item.icon as React.ReactElement, { className: 'h-[41px] w-[41px] text-white' })}
                    </div>
                    <div>
                      <h3 className="text-[#c5a059] font-bold text-sm uppercase tracking-widest mb-2">{item.title}</h3>
                      <p className="text-white font-light text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-24 border-t border-white/5">
              <h2 className="text-3xl font-serif font-light text-white mb-8 uppercase tracking-widest text-center">Complete Solutions</h2>
              <div className="max-w-4xl mx-auto text-center mb-16">
                <p className="text-zinc-400 font-light text-xl leading-relaxed italic">From dough to delivery, we've got you covered. Trusted by businesses, pizzerias, restaurants & catering companies.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    title: "Expert Support",
                    desc: "Helping you optimise your pizza-making process with technical guidance.",
                    icon: (
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets%2Fa81fac9c3bae4b51ace81c3349c8dc9d%2F5484db3bbfbe44769a46fab0490639d7?format=webp&width=800&height=1200"
                        alt="Expert Support"
                        className="h-[29px] w-auto brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity"
                        style={{ filter: 'sepia(100%) saturate(300%) brightness(70%) hue-rotate(5deg)' }}
                      />
                    )
                  },
                  {
                    title: "Reliable Delivery",
                    desc: "Fast & reliable logistics so your operations never miss a beat.",
                    icon: (
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8h4l3 3v5a1 1 0 01-1 1h-1m-6 0a2 2 0 11-4 0 2 2 0 014 0zm10 0a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    )
                  },
                  {
                    title: "Premium Ingredients",
                    desc: "Access to the highest grade products sourced directly for professional use.",
                    icon: (
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <circle cx="12" cy="8" r="6" strokeWidth={1.5} />
                        <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.11" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )
                  },
                  {
                    title: "State-of-the-Art Equipment",
                    desc: "High-heat performance ovens and tools built for durability and precision.",
                    icon: (
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <circle cx="12" cy="12" r="1.5" strokeWidth={1.5} />
                        <ellipse cx="12" cy="12" rx="10" ry="4" strokeWidth={1.5} transform="rotate(60 12 12)" />
                        <ellipse cx="12" cy="12" rx="10" ry="4" strokeWidth={1.5} transform="rotate(-60 12 12)" />
                        <ellipse cx="12" cy="12" rx="10" ry="4" strokeWidth={1.5} />
                      </svg>
                    )
                  }
                ].map((point, index) => (
                  <div key={index} className="flex flex-col items-center text-center gap-4">
                    <div className="h-[70px] w-[70px] rounded-full border border-[#c5a059] bg-[#c5a059]/10 flex items-center justify-center shrink-0 text-[#c5a059]">
                      {React.isValidElement(point.icon) && (point.icon as any).type === 'img'
                        ? React.cloneElement(point.icon as React.ReactElement, { className: 'h-[29px] w-auto brightness-0 invert opacity-80 transition-opacity' })
                        : React.cloneElement(point.icon as React.ReactElement, { className: 'h-[29px] w-[29px]' })}
                    </div>
                    <div>
                      <h4 className="font-bold text-white uppercase tracking-widest text-sm mb-2">{point.title}</h4>
                      <p className="text-zinc-400 font-light text-sm leading-relaxed">{point.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <ValueProps
        heading="Our Core Values"
        showSketchBackground
        items={[
          {
            title: "Authenticity",
            description: "No compromises on origin. Our bases are made in Naples using 400-year-old sourdough methods.",
            icon: (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            )
          },
          {
            title: "Simplicity",
            description: "Removing operational friction for hospitality managers through technical product solutions.",
            icon: (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            )
          },
          {
            title: "Integrity",
            description: "Clean labels. No preservatives. Pure sourdough and DOP ingredients.",
            icon: (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.034 11.942 11.942 0 00-1.175 4.58c0 5.692 4.023 10.52 9.435 11.75a11.952 11.952 0 009.435-11.75c0-1.567-.302-3.063-.854-4.438z" />
              </svg>
            )
          }
        ]}
      />

      <CTASection
        title="Ready to taste the difference?"
        subtitle="Experience our heritage sourdough bases firsthand with an on-site demonstration."
        ctaLabel="Book a Live Demo"
        ctaLink="/book-a-demo"
        showSketchBackground
      />
    </main>
  );
}
