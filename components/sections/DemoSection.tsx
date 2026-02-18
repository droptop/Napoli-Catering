import React from 'react';
import Image from 'next/image';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';

export const DemoSection = () => {
  return (
    <section className="py-24 sm:py-32 bg-zinc-950 text-white relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-1/2 z-0 bg-gradient-to-b from-zinc-950 via-zinc-950/40 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 z-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />

      <Container className="relative z-10">
        <div className="relative z-20 max-w-4xl mx-auto text-center mb-16 sm:mb-20">
          <h2 className="text-4xl font-serif font-light tracking-tight sm:text-6xl mb-6">
            See It<span className="text-[#008C45]">.</span> Taste It<span className="text-[#F4F5F0]">.</span> Decide<span className="text-[#CD212A]">.</span>
          </h2>
          <p className="text-xl sm:text-2xl text-zinc-300 font-light leading-relaxed">
            We bring the oven. We prepare the pizza. <br className="hidden sm:block" />
            You experience the difference.
          </p>
        </div>
      </Container>

      <div className="relative z-10 w-full h-[600px] sm:h-[800px] overflow-hidden">
        <Image
          src="https://cdn.builder.io/api/v1/image/assets%2Fa81fac9c3bae4b51ace81c3349c8dc9d%2Fb058fcc307c9493e8c34df05a584e016?format=webp&width=1600&height=1200"
          alt="Live tasting demo with professional oven"
          fill
          className="object-cover"
        />
        {/* Subtle inner shadow/vignette for better integration */}
        <div className="absolute inset-0 shadow-[inset_0_0_200px_rgba(0,0,0,0.5)]" />
      </div>

      <Container className="relative z-10">
        <div className="relative z-20 max-w-5xl mx-auto mt-[-120px] sm:mt-[-180px]">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-left mb-16">
            {[
              {
                title: "On-site tasting",
                description: "Freshly baked in your kitchen or at your venue.",
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <circle cx="12" cy="12" r="9" strokeWidth={1.5} />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 10h.01M15 10h.01" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 15s1.5 2 4 2 4-2 4-2" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 17c0 1 1 2 2 2s2-1 2-2" />
                  </svg>
                )
              },
              {
                title: "Cooking guidance",
                description: "Technical setup and oven temperature optimization.",
                icon: (
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Fa81fac9c3bae4b51ace81c3349c8dc9d%2F48c2a17073b54abfaec28a7c30352265?format=webp&width=800&height=1200"
                    alt="Cooking guidance"
                    className="h-8 w-auto brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity"
                    style={{ filter: 'sepia(100%) saturate(300%) brightness(70%) hue-rotate(5deg)' }}
                  />
                )
              },
              {
                title: "Implementation support",
                description: "Advice on workflow and menu integration.",
                icon: (
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Fa81fac9c3bae4b51ace81c3349c8dc9d%2Fbeeb5cb799ad4ac0bf86919d48f79e35?format=webp&width=800&height=1200"
                    alt="Implementation support"
                    className="h-8 w-auto brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity"
                    style={{ filter: 'sepia(100%) saturate(300%) brightness(70%) hue-rotate(5deg)' }}
                  />
                )
              }
            ].map((item, index) => (
              <div key={index} className="bg-zinc-900/90 backdrop-blur-md p-8 border border-white/10 shadow-2xl transition-all duration-300 hover:bg-zinc-800/90 hover:border-white/20 group">
                <div className="h-12 w-12 bg-[#c5a059]/10 flex items-center justify-center text-[#c5a059] mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
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
