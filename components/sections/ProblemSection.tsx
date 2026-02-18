import React from 'react';
import { Container } from '../ui/Container';

export const ProblemSection = () => {
  return (
    <section className="py-24 bg-zinc-50 border-y border-zinc-100">
      <Container>
        <div className="max-w-3xl">
          <h2 className="text-3xl font-serif font-light tracking-tight text-zinc-900 sm:text-4xl lg:text-5xl mb-12">
            Adding Pizza Shouldn’t Add Complexity
          </h2>
          <ul className="space-y-6">
            {[
              "Dough preparation requires skill",
              "Staff are already stretched",
              "Frozen bases compromise quality",
              "Authentic Neapolitan flavour is hard to replicate"
            ].map((bullet, index) => (
              <li key={index} className="flex items-start gap-4">
                <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-red-700 shrink-0" />
                <p className="text-xl text-zinc-700 font-light">{bullet}</p>
              </li>
            ))}
          </ul>
          <p className="mt-16 text-2xl text-zinc-900 font-serif font-light italic border-l-2 border-[#c5a059] pl-8">
            We remove the friction without compromising authenticity.
          </p>
        </div>
      </Container>
    </section>
  );
};
