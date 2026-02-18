import React from 'react';
import { Container } from '../ui/Container';

export const ComparisonSection = () => {
  return (
    <section className="py-24">
      <Container>
        <h2 className="text-3xl font-serif font-light tracking-tight text-zinc-900 sm:text-4xl text-center mb-16">
          Not a Supermarket Base
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          {/* Napoli Base */}
          <div className="bg-[#fcfaf7] p-10 rounded-3xl border border-[#c5a059]/20 shadow-sm">
            <h3 className="text-2xl font-serif font-light text-[#c5a059] mb-8 uppercase tracking-widest">Napoli Base</h3>
            <ul className="space-y-4">
              {[
                "Handmade in Naples",
                "True sourdough fermentation",
                "Preservative-free",
                "Authentic Neapolitan structure",
                "Superior digestibility"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-zinc-800 font-medium">
                  <svg className="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.704 4.176a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Standard Base */}
          <div className="bg-zinc-50 p-10 rounded-3xl border border-zinc-200">
            <h3 className="text-2xl font-serif font-light text-zinc-400 mb-8 uppercase tracking-widest">Standard Market Base</h3>
            <ul className="space-y-4">
              {[
                "Rapid yeast fermentation",
                "Preservatives used",
                "Industrial production",
                "Frozen storage required"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-zinc-500 font-light">
                  <div className="h-1 w-3 bg-zinc-300 rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-12 text-center text-zinc-500 text-sm italic font-light">
          Our comparison is based on technical specifications and production methods.
        </p>
      </Container>
    </section>
  );
};
