import React from 'react';
import Image from 'next/image';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';

export const DemoSection = () => {
  return (
    <section className="py-24 bg-zinc-950 text-white relative overflow-hidden">
      {/* Background image placeholder - heritage/demo look */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://cdn.builder.io/api/v1/image/assets%2Fa81fac9c3bae4b51ace81c3349c8dc9d%2Fbcc909982e1e49609241be4fcdf9e20d?format=webp&width=1600&height=1200"
          alt="Napoli Catering Demo"
          fill
          className="object-cover opacity-30 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif font-light tracking-tight sm:text-6xl mb-8">
            See It. Taste It. Decide.
          </h2>
          <p className="text-2xl text-zinc-300 font-light mb-12 leading-relaxed">
            We bring the oven. We prepare the pizza. <br className="hidden sm:block" />
            You experience the difference.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16 text-left">
            {[
              { title: "On-site tasting", description: "Freshly baked in your kitchen or at your venue." },
              { title: "Cooking guidance", description: "Technical setup and oven temperature optimization." },
              { title: "Implementation support", description: "Advice on workflow and menu integration." }
            ].map((item, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
                <h3 className="text-lg font-bold text-[#c5a059] mb-2 uppercase tracking-widest">{item.title}</h3>
                <p className="text-zinc-400 text-sm font-light leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <Button href="/book-a-demo" size="lg" variant="premium">
            Book a Live Demo
          </Button>
        </div>
      </Container>
    </section>
  );
};
