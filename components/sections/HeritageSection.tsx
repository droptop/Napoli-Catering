import React from 'react';
import { Container } from '../ui/Container';

export const HeritageSection = () => {
  return (
    <section className="py-32 bg-[#fcfaf7] overflow-hidden relative">
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none hidden sm:block"
        style={{
          backgroundImage: `url('https://cdn.builder.io/api/v1/image/assets%2Fa81fac9c3bae4b51ace81c3349c8dc9d%2F6c0a0cbecc0543e8b26034056854f013?format=webp&width=1600&height=1200')`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
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
            <div className="sm:hidden mt-8 flex justify-center opacity-40 grayscale-0">
               <img
                 src="https://cdn.builder.io/api/v1/image/assets%2Fa81fac9c3bae4b51ace81c3349c8dc9d%2F6c0a0cbecc0543e8b26034056854f013?format=webp&width=800&height=1200"
                 alt="Naples Map"
                 className="w-full max-w-xs h-auto"
               />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
