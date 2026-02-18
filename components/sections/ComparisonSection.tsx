import React from 'react';
import { Container } from '../ui/Container';

export const ComparisonSection = () => {
  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden text-white">
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
        <h2 className="text-3xl font-serif font-light tracking-tight text-white sm:text-4xl text-center mb-16 uppercase tracking-widest">
          Not a Supermarket Base
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          {/* Napoli Base */}
          <div className="bg-white/5 backdrop-blur-sm p-10 rounded-3xl border border-[#c5a059]/30 shadow-sm">
            <h3 className="text-2xl font-serif font-light text-[#c5a059] mb-8 uppercase tracking-widest">Napoli Base</h3>
            <ul className="space-y-4">
              {[
                "Handmade in Naples",
                "True sourdough fermentation",
                "Preservative-free",
                "Authentic Neapolitan structure",
                "Superior digestibility"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-white font-medium">
                  <svg className="h-5 w-5 text-[#c5a059]" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.704 4.176a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Standard Base */}
          <div className="bg-white/5 backdrop-blur-sm p-10 rounded-3xl border border-white/10">
            <h3 className="text-2xl font-serif font-light text-zinc-400 mb-8 uppercase tracking-widest">Standard Market Base</h3>
            <ul className="space-y-4">
              {[
                "Rapid yeast fermentation",
                "Preservatives used",
                "Industrial production",
                "Frozen storage required"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-zinc-400 font-light">
                  <div className="h-1 w-3 bg-zinc-600 rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-12 text-center text-zinc-400 text-sm italic font-light">
          Our comparison is based on technical specifications and production methods.
        </p>
      </Container>
    </section>
  );
};
