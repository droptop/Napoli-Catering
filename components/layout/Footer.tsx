import React from 'react';
import Link from 'next/link';
import { Container } from '../ui/Container';

const navigation = {
  solutions: [
    { name: 'Pizza Bases', href: '/pizza-bases' },
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

          <div>
            <div className="w-fit">
              <div className="flex flex-col gap-[1px] mb-2">
                <div className="h-[1px] w-full bg-[#008C45]" />
                <div className="h-[1px] w-full bg-[#F4F5F0]" />
                <div className="h-[1px] w-full bg-[#CD212A]" />
              </div>
              <h3 className="text-xs font-semibold text-white uppercase tracking-widest">Solutions</h3>
            </div>
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

          <div>
            <div className="w-fit">
              <div className="flex flex-col gap-[1px] mb-2">
                <div className="h-[1px] w-full bg-[#008C45]" />
                <div className="h-[1px] w-full bg-[#F4F5F0]" />
                <div className="h-[1px] w-full bg-[#CD212A]" />
              </div>
              <h3 className="text-xs font-semibold text-white uppercase tracking-widest">Company</h3>
            </div>
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

          <div>
            <div className="w-fit">
              <div className="flex flex-col gap-[1px] mb-2">
                <div className="h-[1px] w-full bg-[#008C45]" />
                <div className="h-[1px] w-full bg-[#F4F5F0]" />
                <div className="h-[1px] w-full bg-[#CD212A]" />
              </div>
              <h3 className="text-xs font-semibold text-white uppercase tracking-widest">Legal</h3>
            </div>
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

          <div>
            <div className="w-fit">
              <div className="flex flex-col gap-[1px] mb-2">
                <div className="h-[1px] w-full bg-[#008C45]" />
                <div className="h-[1px] w-full bg-[#F4F5F0]" />
                <div className="h-[1px] w-full bg-[#CD212A]" />
              </div>
              <h3 className="text-xs font-semibold text-white uppercase tracking-widest">Contact</h3>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-zinc-500 font-light">
              <li>Phone: 0657.60.3128</li>
              <li>Email: sales@napolicateringco.nl</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-zinc-500">
            &copy; {new Date().getFullYear()} Napoli Catering Co. B.V. Registered in the Netherlands.
          </p>
          <p className="text-xs text-zinc-500">
            Proudly serving pizzerias and restaurants across the NL.
          </p>
        </div>
      </Container>
    </footer>
  );
};
