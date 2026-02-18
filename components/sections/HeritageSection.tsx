import React from 'react';
import { Container } from '../ui/Container';

export const HeritageSection = () => {
  return (
    <section className="py-32 bg-[#fcfaf7] overflow-hidden relative">
      <div className="absolute inset-0 z-0 opacity-[0.03] grayscale pointer-events-none"
        style={{
          backgroundImage: `url('https://cdn.builder.io/api/v1/image/assets%2Fa81fac9c3bae4b51ace81c3349c8dc9d%2Fa6dc89c6e32041c6a517dcb956241527?format=webp&width=800&height=1200')`,
          backgroundRepeat: 'repeat',
          backgroundSize: '400px'
        }}
      />
      
      <Container className="relative z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-serif font-light tracking-tight text-zinc-900 sm:text-5xl mb-12">
            Rooted in Naples
          </h2>
          <div className="space-y-8">
            <p className="text-xl text-zinc-700 leading-relaxed font-light italic pr-8 pl-8">
              For over 400 years, Naples has protected strict standards around fermentation, ingredients and preparation.
            </p>
            <p className="text-xl text-zinc-800 font-medium tracking-tight">
              Our bases are produced within that tradition.
            </p>
            <p className="mt-12 text-3xl font-serif font-light text-[#c5a059] italic pr-8 pl-8">
              Authenticity is origin, not marketing.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};
