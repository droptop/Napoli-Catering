import React from 'react';
import Link from 'next/link';
import { Container } from '../ui/Container';

const navigation = {
  solutions: [
    { name: 'Pizza Bases', href: '/pizza-bases' },
    { name: 'Products', href: '/products' },
    { name: 'Industries', href: '/industries' },
    { name: 'Book a Demo', href: '/book-a-demo' },
  ],
  company: [
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'FAQ', href: '/faq' },
  ],
  legal: [
    { name: 'Privacy', href: '/privacy' },
    { name: 'Terms', href: '/terms' },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-zinc-950 text-white py-16" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <Container>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="font-serif text-xl tracking-tight text-white uppercase font-light">
              NAPOLI <span className="text-[#c5a059]">CATERING CO.</span>
            </Link>
            <p className="mt-4 text-sm text-zinc-500 leading-6 max-w-xs font-light italic">
              "Your one stop solution for Authentic Neapolitan Pizza"
            </p>
            <p className="mt-4 text-sm text-zinc-500 leading-6 max-w-xs font-light">
              Authentic Neapolitan Sourdough Pizza Bases handmade in Naples. Designed for professional kitchens and hospitality operators across the Netherlands.
            </p>
          </div>

          <div className="flex gap-4">
            <div className="flex shrink-0 w-[3px] py-1">
              <div className="w-[1px] h-full bg-[#008C45]" />
              <div className="w-[1px] h-full bg-[#F4F5F0]" />
              <div className="w-[1px] h-full bg-[#CD212A]" />
            </div>
            <div>
              <h3 className="text-xs font-semibold text-white uppercase tracking-widest">Solutions</h3>
              <ul className="mt-4 space-y-2">
                {navigation.solutions.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm text-zinc-500 hover:text-[#c5a059] transition-colors font-light">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex shrink-0 w-[3px] py-1">
              <div className="w-[1px] h-full bg-[#008C45]" />
              <div className="w-[1px] h-full bg-[#F4F5F0]" />
              <div className="w-[1px] h-full bg-[#CD212A]" />
            </div>
            <div>
              <h3 className="text-xs font-semibold text-white uppercase tracking-widest">Company</h3>
              <ul className="mt-4 space-y-2">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm text-zinc-500 hover:text-[#c5a059] transition-colors font-light">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex shrink-0 w-[3px] py-1">
              <div className="w-[1px] h-full bg-[#008C45]" />
              <div className="w-[1px] h-full bg-[#F4F5F0]" />
              <div className="w-[1px] h-full bg-[#CD212A]" />
            </div>
            <div>
              <h3 className="text-xs font-semibold text-white uppercase tracking-widest">Legal</h3>
              <ul className="mt-4 space-y-2">
                {navigation.legal.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm text-zinc-500 hover:text-[#c5a059] transition-colors font-light">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex shrink-0 w-[3px] py-1">
              <div className="w-[1px] h-full bg-[#008C45]" />
              <div className="w-[1px] h-full bg-[#F4F5F0]" />
              <div className="w-[1px] h-full bg-[#CD212A]" />
            </div>
            <div>
              <h3 className="text-xs font-semibold text-white uppercase tracking-widest">Contact</h3>
              <ul className="mt-4 space-y-3">
                <li className="flex items-center gap-3 text-sm text-zinc-500 font-light">
                  <svg className="h-4 w-4 text-[#c5a059] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:0657603128" className="hover:text-[#c5a059] transition-colors">0657.60.3128</a>
                </li>
                <li className="flex items-center gap-3 text-sm text-zinc-500 font-light">
                  <svg className="h-4 w-4 text-[#c5a059] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:sales@napolicateringco.nl" className="hover:text-[#c5a059] transition-colors">sales@napolicateringco.nl</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-zinc-500">
            &copy; {new Date().getFullYear()} Napoli Catering Co. B.V. Registered in the Netherlands.
          </p>
          <div className="order-first md:order-none">
            <Link
              href="https://www.tinkertorium.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] uppercase tracking-[0.2em] text-zinc-600 hover:text-[#c5a059] transition-colors font-bold"
            >
              Site by TINKERTORIUM
            </Link>
          </div>
          <p className="text-xs text-zinc-500">
            Proudly serving pizzerias and restaurants across the NL.
          </p>
        </div>
      </Container>
    </footer>
  );
};
