'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { AnnouncementBar } from './AnnouncementBar';

const navigation = [
  { name: 'Pizza Bases', href: '/pizza-bases' },
  { name: 'Products', href: '/products' },
  { name: 'Industries', href: '/industries' },
  { name: 'Book a Demo', href: '/book-a-demo' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-black">
      <Container>
        <nav className="flex items-center justify-between py-4 border-b border-white/10 lg:border-none" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-3">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fa81fac9c3bae4b51ace81c3349c8dc9d%2F7cf744910c8344faa32768637df3ef98?format=webp&width=100"
                alt="Napoli Logo"
                className="h-7 w-auto"
              />
              <div className="flex flex-col leading-[0.9]">
                <span className="font-serif text-xl tracking-tight text-white uppercase font-light">
                  NAPOLI
                </span>
                <span className="font-sans text-[9px] tracking-[0.15em] text-[#c5a059] uppercase font-bold mt-1">
                  CATERING CO.
                </span>
              </div>
            </Link>
          </div>

          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-none p-2.5 text-white"
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
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-xs font-semibold uppercase tracking-widest leading-6 transition-all duration-300 relative py-1 ${
                    isActive
                      ? 'text-[#c5a059]'
                      : 'text-white/70 hover:text-[#c5a059]'
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#c5a059] transition-all duration-300" />
                  )}
                </Link>
              );
            })}
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
            <div className="space-y-1 pb-4 pt-2 border-t border-white/5 mt-2">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block rounded-none px-3 py-3 text-base font-semibold leading-7 transition-colors ${
                      isActive
                        ? 'text-[#c5a059] bg-white/5 border-l-2 border-[#c5a059] pl-4'
                        : 'text-white/90 hover:bg-white/10'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <div className="px-3 py-4">
                <Button href="/book-a-demo" variant="premium" className="w-full">
                  Book a Demo
                </Button>
              </div>
            </div>
          </div>
        )}
      </Container>

      <AnnouncementBar />
    </header>
  );
};
