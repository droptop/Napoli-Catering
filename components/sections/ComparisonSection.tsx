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
        <div className="flex flex-col md:flex-row md:items-stretch md:justify-center gap-12 lg:gap-32">
          {/* Napoli Base */}
          <div className="flex-1 pl-8 sm:pl-12 lg:pl-20">
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

          {/* Italian Vertical Liner (Green/White/Red) */}
          <div className="hidden md:flex shrink-0 self-center h-48 w-[6px]">
            <div className="w-[2px] h-full bg-[#008C45]" />
            <div className="w-[2px] h-full bg-[#F4F5F0]" />
            <div className="w-[2px] h-full bg-[#CD212A]" />
          </div>

          {/* Standard Base */}
          <div className="flex-1">
            <h3 className="text-2xl font-serif font-light text-zinc-400 mb-8 uppercase tracking-widest">Standard Market Base</h3>
            <ul className="space-y-4">
              {[
                "Rapid yeast fermentation",
                "Preservatives used",
                "Industrial production",
                "Frozen storage required"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-white font-medium">
                  <svg className="h-5 w-5 text-[#c5a059]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M16 16s-1.5-2-4-2-4 2-4 2" />
                    <line x1="9" y1="9" x2="9.01" y2="9" />
                    <line x1="15" y1="9" x2="15.01" y2="9" />
                  </svg>
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
