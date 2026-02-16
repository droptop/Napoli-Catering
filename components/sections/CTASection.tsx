import React from 'react';
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
        <div className="relative overflow-hidden rounded-3xl bg-zinc-950 px-8 py-20 text-center shadow-2xl sm:px-16">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(185,28,28,0.2),transparent_50%)]" />
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {title}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-zinc-300">
            {subtitle}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button href={ctaLink} size="lg">
              {ctaLabel}
            </Button>
            <Link href="/about" className="text-sm font-semibold leading-6 text-white hover:text-red-400 transition-colors">
              Learn about our process <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

// Add Link import
import Link from 'next/link';
