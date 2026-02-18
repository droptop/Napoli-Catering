import React from 'react';
import { Container } from '../ui/Container';

export const ProblemSection = () => {
  return (
    <section className="py-24 bg-white border-y border-zinc-100 relative overflow-hidden">
      <div
        className="absolute inset-0 z-0 opacity-[0.25] pointer-events-none"
        style={{
          backgroundImage: `url('https://cdn.builder.io/api/v1/image/assets%2Fa81fac9c3bae4b51ace81c3349c8dc9d%2F911c671c9bd5429ca0699a0004064868?format=webp&width=1600&height=1200')`,
          backgroundRepeat: 'repeat',
          backgroundSize: '800px'
        }}
      />
      <Container className="relative z-10">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-serif font-light tracking-tight text-zinc-900 sm:text-4xl lg:text-5xl mb-12 uppercase tracking-widest leading-tight">
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
                <div className="mt-2 h-1.5 w-1.5 rounded-full bg-[#c5a059] shrink-0" />
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
