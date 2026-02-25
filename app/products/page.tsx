import React from 'react';
import { Container } from '@/components/ui/Container';
import { WavyItalianSeparator } from '@/components/ui/WavyItalianSeparator';
import { CTASection } from '@/components/sections/CTASection';
import Link from 'next/link';

export default function ProductsPage() {
  return (
    <main className="bg-black text-white pt-32 pb-16">
      {/* Hero Section */}
      <section className="relative pb-24 text-center">
        <Container>
          <div className="flex flex-col items-center max-w-3xl mx-auto">
            <div className="flex h-10 w-[6px] gap-0 mb-8 mx-auto">
              <div className="w-[2px] h-full bg-[#008C45]" />
              <div className="w-[2px] h-full bg-[#F4F5F0]" />
              <div className="w-[2px] h-full bg-[#CD212A]" />
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-light tracking-tight mb-8 uppercase tracking-widest">
              Our Products
            </h1>
            <p className="text-zinc-400 text-lg md:text-xl font-light leading-relaxed mb-12">
              We provide a complete ecosystem for high-end Italian catering. From our signature sourdough bases to specialized kitchen equipment.
            </p>
          </div>
        </Container>
      </section>

      {/* Product Section 1: Dough Balls & Pizza Bases */}
      <section className="py-24 bg-zinc-950">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative group overflow-hidden rounded-t-[200px] rounded-b-[40px] lg:order-1 shadow-2xl">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fa81fac9c3bae4b51ace81c3349c8dc9d%2F128a681c0f3e4b33ab00b2f722d7843b?format=webp&width=800&height=1200"
                alt="Dough Balls"
                className="w-full h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="lg:order-2">
              <h2 className="text-3xl md:text-4xl font-serif font-light text-[#c5a059] uppercase tracking-widest mb-6">
                Dough Balls & Pizza Bases
              </h2>
              <p className="text-zinc-400 font-light leading-relaxed mb-8 text-lg">
                The foundation of every great pizza. Our sourdough dough balls and par-baked bases are crafted using traditional Neapolitan techniques, fermented for 24 hours for superior flavor and texture.
              </p>
              <div className="flex h-[2px] w-12 gap-0">
                <div className="flex-1 h-full bg-[#008C45]" />
                <div className="flex-1 h-full bg-[#F4F5F0]" />
                <div className="flex-1 h-full bg-[#CD212A]" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Product Section 2: Specialised Ovens */}
      <section className="py-24 bg-black">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative group overflow-hidden rounded-t-[200px] rounded-b-[40px] lg:order-2 shadow-2xl">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fa81fac9c3bae4b51ace81c3349c8dc9d%2F36d1957aee554a44809e2e3e632f4ea4?format=webp&width=800&height=1200"
                alt="Pizza Ovens"
                className="w-full h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="lg:order-1">
              <h2 className="text-3xl md:text-4xl font-serif font-light text-[#c5a059] uppercase tracking-widest mb-6">
                Specialised Ovens
              </h2>
              <p className="text-zinc-400 font-light leading-relaxed mb-8 text-lg">
                State-of-the-art equipment designed for the perfect Neapolitan pizza bake. Engineered to reach and maintain the high temperatures required for authentic leopard spotting and airy crusts.
              </p>
              <div className="flex h-[2px] w-12 gap-0">
                <div className="flex-1 h-full bg-[#008C45]" />
                <div className="flex-1 h-full bg-[#F4F5F0]" />
                <div className="flex-1 h-full bg-[#CD212A]" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Product Section 3: Neapolitan Roots */}
      <section className="py-24 bg-zinc-950">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative group overflow-hidden rounded-t-[200px] rounded-b-[40px] lg:order-1 shadow-2xl">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fa81fac9c3bae4b51ace81c3349c8dc9d%2Fb97ece0490a44c9980997f362fe7b2ab?format=webp&width=800&height=1200"
                alt="Naples Map"
                className="w-full h-[600px] object-cover scale-[2] object-center transition-transform duration-700 group-hover:scale-[2.1]"
              />
            </div>
            <div className="lg:order-2">
              <h2 className="text-3xl md:text-4xl font-serif font-light text-[#c5a059] uppercase tracking-widest mb-6">
                Neapolitan Roots
              </h2>
              <p className="text-zinc-400 font-light leading-relaxed mb-8 text-lg">
                Every product we supply is rooted in the tradition of Naples. We source directly from the heart of Italy to ensure your kitchen delivers an authentic experience.
              </p>
              <div className="flex h-[2px] w-12 gap-0">
                <div className="flex-1 h-full bg-[#008C45]" />
                <div className="flex-1 h-full bg-[#F4F5F0]" />
                <div className="flex-1 h-full bg-[#CD212A]" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <div className="bg-zinc-950 py-12">
        <WavyItalianSeparator />
      </div>

      <CTASection
        title="Ready to taste the difference?"
        subtitle="Contact our commercial team today for a live demo or request detailed product information."
        ctaLabel="Book a Tasting Demo"
        ctaLink="/book-a-demo"
        variant="flat"
      />
    </main>
  );
}
