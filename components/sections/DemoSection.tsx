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
              {
                title: "On-site tasting",
                description: "Freshly baked in your kitchen or at your venue.",
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                )
              },
              {
                title: "Cooking guidance",
                description: "Technical setup and oven temperature optimization.",
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                )
              },
              {
                title: "Implementation support",
                description: "Advice on workflow and menu integration.",
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                )
              }
            ].map((item, index) => (
              <div key={index} className="bg-zinc-900/90 backdrop-blur-md p-8 rounded-3xl border border-white/10 shadow-2xl transition-all duration-300 hover:bg-zinc-800/90 hover:border-white/20 group">
                <div className="h-12 w-12 rounded-2xl bg-[#c5a059]/10 flex items-center justify-center text-[#c5a059] mb-6 group-hover:scale-110 transition-transform">
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
