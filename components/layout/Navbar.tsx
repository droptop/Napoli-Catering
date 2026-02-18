'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';

const navigation = [
  { name: 'Pizza Bases', href: '/pizza-bases' },
  { name: 'Industries', href: '/industries' },
  { name: 'Book a Demo', href: '/book-a-demo' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 border-b border-white/10"
      style={{
        backgroundImage: `url('https://cdn.builder.io/api/v1/image/assets%2Fa81fac9c3bae4b51ace81c3349c8dc9d%2F9df4bea3fa854026915b80c60ccba98b?format=webp')`,
        backgroundRepeat: 'repeat',
        backgroundSize: '300px' // Adjust size for a nice tiled look
      }}
    >
      <Container>
        <nav className="flex items-center justify-between py-4" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-3">
              <div className="relative h-10 w-10 overflow-hidden rounded-full border border-[#c5a059]/30 shadow-sm">
                <Image
                  src="https://cdn.builder.io/api/v1/image/assets%2Fa81fac9c3bae4b51ace81c3349c8dc9d%2F936526a7c48b486caffea9a56a0ec167?format=webp&width=800&height=1200"
                  alt="Napoli Catering Co. Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="font-serif text-xl tracking-tight text-white uppercase font-light">
                NAPOLI <span className="text-[#c5a059]">CATERING CO.</span>
              </span>
            </Link>
          </div>
          
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-zinc-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
          
          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-xs font-semibold uppercase tracking-widest leading-6 text-white/70 hover:text-[#c5a059] transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Button href="/book-a-demo" size="sm" variant="premium">
              Book a Demo
            </Button>
          </div>
        </nav>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden">
            <div className="space-y-1 pb-4 pt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-zinc-900 hover:bg-zinc-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-4">
                <Button href="/book-a-demo" className="w-full">
                  Book a Demo
                </Button>
              </div>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
};
