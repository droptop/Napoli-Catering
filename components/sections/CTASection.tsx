import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';

interface CTASectionProps {
  title: string;
  subtitle: string;
  ctaLabel: string;
  ctaLink: string;
}

export const CTASection: React.FC<CTASectionProps> = ({
  title,
  subtitle,
  ctaLabel,
  ctaLink,
}) => {
  return (
    <section className="py-24">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-zinc-950 px-8 py-20 text-center shadow-2xl sm:px-16 border border-zinc-800">
          {/* Heritage Background */}
          <div className="absolute inset-0 -z-10 opacity-30 grayscale"
            style={{
              backgroundImage: `url('https://cdn.builder.io/api/v1/image/assets%2Fa81fac9c3bae4b51ace81c3349c8dc9d%2Fa6dc89c6e32041c6a517dcb956241527?format=webp&width=800&height=1200')`,
              backgroundRepeat: 'repeat',
              backgroundSize: '400px'
            }}
          />
          <div className="absolute inset-0 bg-zinc-950/60 -z-10" />

          <h2 className="mx-auto max-w-2xl text-3xl font-serif font-light tracking-tight text-white sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-zinc-400 font-light">
            {subtitle}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button href={ctaLink} size="lg" variant="premium">
              {ctaLabel}
            </Button>
            <Link href="/about" className="text-sm font-semibold leading-6 text-white hover:text-[#c5a059] transition-colors uppercase tracking-widest">
              Learn about our process <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};
