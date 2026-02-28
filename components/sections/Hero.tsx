import React from 'react';
import Image from 'next/image';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';

interface HeroProps {
  title: string;
  subtitle: string;
  primaryCtaLabel: string;
  primaryCtaLink: string;
  secondaryCtaLabel?: string;
  secondaryCtaLink?: string;
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
      {/* Premium Background: Wood Texture */}
      <div
        className="absolute inset-0 z-0 opacity-60 grayscale"
        style={{
          backgroundImage: `url('https://cdn.builder.io/api/v1/image/assets%2Fa81fac9c3bae4b51ace81c3349c8dc9d%2Fa6dc89c6e32041c6a517dcb956241527?format=webp&width=1600&height=1200')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      {/* Dark Vignette Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-zinc-950 via-zinc-950/40 to-transparent" />

      {/* Pizza Image: Nudged lower on mobile */}
      <div className="absolute right-0 top-[calc(18%+100px)] lg:top-1/2 -translate-y-1/2 translate-x-[45%] lg:translate-x-1/2 w-[28rem] lg:w-[52.8rem] h-[28rem] lg:h-[52.8rem] z-[1] pointer-events-none transition-all duration-1000 ease-out">
        <Image
          src="https://cdn.builder.io/api/v1/image/assets%2Fa81fac9c3bae4b51ace81c3349c8dc9d%2Fa2aa5fa664af411ab2253dbe5869151e?format=webp&width=1200&height=1200"
          alt="Our Pizza Base"
          fill
          className="object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.9)] opacity-80 sm:opacity-100"
          priority
        />
      </div>

      <Container className="relative z-10">
        <div className="max-w-3xl">
          <div className="flex gap-6 sm:gap-8 items-stretch mb-8">
            <div className="flex shrink-0">
              <div className="w-[2px] bg-[#008C45]" />
              <div className="w-[2px] bg-[#F4F5F0]" />
              <div className="w-[2px] bg-[#CD212A]" />
            </div>
            <h1 className="font-serif text-5xl font-light tracking-tight text-white sm:text-6xl lg:text-7xl leading-[1.05]">
              {title}
            </h1>
          </div>
          <div className="pl-[30px] sm:pl-[38px]">
            <p className="text-xl text-zinc-300 max-w-2xl leading-relaxed font-light">
              {subtitle}
            </p>
            <div className="mt-12 flex flex-wrap gap-4">
              <Button href={primaryCtaLink} size="lg" variant="premium">
                {primaryCtaLabel}
              </Button>
              {secondaryCtaLabel && secondaryCtaLink && (
                <Button href={secondaryCtaLink} variant="outline" size="lg" className="text-white border-zinc-700 hover:bg-zinc-800">
                  {secondaryCtaLabel}
                </Button>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
