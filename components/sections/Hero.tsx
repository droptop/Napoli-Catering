import React from 'react';
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
    <section className="relative overflow-hidden pt-24 pb-32 lg:pt-32 lg:pb-48">
      {/* Background Decorative Element */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_45%_at_50%_50%,rgba(185,28,28,0.05)_0%,transparent_100%)]" />
      
      <Container>
        <div className="max-w-4xl">
          <h1 className="text-5xl font-extrabold tracking-tight text-zinc-900 sm:text-7xl lg:text-8xl leading-[1.1]">
            {title}
          </h1>
          <p className="mt-8 text-xl text-zinc-600 max-w-2xl leading-relaxed">
            {subtitle}
          </p>
          <div className="mt-12 flex flex-wrap gap-4">
            <Button href={primaryCtaLink} size="lg">
              {primaryCtaLabel}
            </Button>
            <Button href={secondaryCtaLink} variant="outline" size="lg">
              {secondaryCtaLabel}
            </Button>
          </div>
          
          <div className="mt-16 flex items-center gap-x-8 text-sm font-semibold text-zinc-500">
            <span className="flex items-center gap-1">
              <svg className="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
              </svg>
              Fast delivery in NL
            </span>
            <span className="flex items-center gap-1">
              <svg className="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
              </svg>
              Business invoicing
            </span>
            <span className="flex items-center gap-1">
              <svg className="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
              </svg>
              Bulk orders
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
};
