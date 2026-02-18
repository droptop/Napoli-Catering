import React from 'react';
import Image from 'next/image';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';

export const DemoSection = () => {
  return (
    <section className="py-24 sm:py-48 bg-zinc-950 text-white relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-1/2 z-0 bg-gradient-to-b from-zinc-950 via-zinc-950/40 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 z-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />

      <Container className="relative z-10">
        <div className="relative z-20 max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-4xl font-serif font-light tracking-tight sm:text-6xl mb-6">
            See It. Taste It. Decide.
          </h2>
          <p className="text-xl sm:text-2xl text-zinc-300 font-light leading-relaxed">
            We bring the oven. We prepare the pizza. <br className="hidden sm:block" />
            You experience the difference.
          </p>
        </div>
      </Container>

      <div className="relative z-10 w-full h-[500px] sm:h-[700px] overflow-hidden">
        <Image
          src="https://cdn.builder.io/api/v1/image/assets%2Fa81fac9c3bae4b51ace81c3349c8dc9d%2Fb058fcc307c9493e8c34df05a584e016?format=webp&width=1600&height=1200"
          alt="Live tasting demo with professional oven"
          fill
          className="object-cover"
        />
        {/* Subtle inner shadow/vignette for better integration */}
        <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,0.4)]" />
      </div>

      <Container className="relative z-10">
        <div className="relative z-20 max-w-5xl mx-auto mt-[-80px] sm:mt-[-120px]">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-left mb-16">
            {[
              { title: "On-site tasting", description: "Freshly baked in your kitchen or at your venue." },
              { title: "Cooking guidance", description: "Technical setup and oven temperature optimization." },
              { title: "Implementation support", description: "Advice on workflow and menu integration." }
            ].map((item, index) => (
              <div key={index} className="bg-zinc-900/90 backdrop-blur-md p-8 rounded-3xl border border-white/10 shadow-2xl transition-all duration-300 hover:bg-zinc-800/90 hover:border-white/20">
                <h3 className="text-lg font-bold text-[#c5a059] mb-4 uppercase tracking-widest">{item.title}</h3>
                <p className="text-zinc-400 text-sm font-light leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button href="/book-a-demo" size="lg" variant="premium">
              Book a Live Demo
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};
