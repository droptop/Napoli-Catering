import React from 'react';
import Image from 'next/image';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';

interface HeroProps {
  title: string;
  subtitle: string;
  primaryCtaLabel: string;
  primaryCtaLink: string;
  secondaryCtaLabel: string;
  secondaryCtaLink: string;
}

export const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  primaryCtaLabel,
  primaryCtaLink,
  secondaryCtaLabel,
  secondaryCtaLink,
}) => {
  return (
    <section className="relative overflow-hidden pt-32 pb-48 lg:pt-48 lg:pb-64 bg-zinc-950">
      {/* Premium Background: Repeatable Wood Texture */}
      <div
        className="absolute inset-0 z-0 opacity-60 grayscale"
        style={{
          backgroundImage: `url('https://cdn.builder.io/api/v1/image/assets%2Fa81fac9c3bae4b51ace81c3349c8dc9d%2Fa6dc89c6e32041c6a517dcb956241527?format=webp&width=800&height=1200')`,
          backgroundRepeat: 'repeat',
          backgroundSize: '400px'
        }}
      />
      {/* Dark Vignette Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-zinc-950 via-zinc-950/40 to-transparent" />

      <Container className="relative z-10">
        <div className="max-w-3xl">
          <h1 className="font-serif text-6xl font-light tracking-tight text-white sm:text-7xl lg:text-8xl leading-[1.05]">
            {title}
          </h1>
          <p className="mt-8 text-xl text-zinc-300 max-w-2xl leading-relaxed font-light">
            {subtitle}
          </p>
          <div className="mt-12 flex flex-wrap gap-4">
            <Button href={primaryCtaLink} size="lg" variant="premium">
              {primaryCtaLabel}
            </Button>
            <Button href={secondaryCtaLink} variant="outline" size="lg" className="text-white border-zinc-700 hover:bg-zinc-800">
              {secondaryCtaLabel}
            </Button>
          </div>

          <div className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm font-semibold text-zinc-400 uppercase tracking-widest">
            <span className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-[#c5a059]" />
              Fast delivery in NL
            </span>
            <span className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-[#c5a059]" />
              Business invoicing
            </span>
            <span className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-[#c5a059]" />
              Bulk orders
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
};
