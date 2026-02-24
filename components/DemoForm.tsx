'use client';

import React, { useState } from 'react';
import { Button } from './ui/Button';
import { trackEvent } from '@/lib/analytics';

export const DemoForm = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    
    // Track lead submission
    trackEvent('lead_submit', {
      form: 'demo_form',
    });

    // Simulate API call
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  if (status === 'success') {
    return (
      <div className="rounded-3xl bg-white/5 backdrop-blur-md p-10 text-center border border-[#c5a059]/30 shadow-sm">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#c5a059]/10 text-[#c5a059] mb-6">
          <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-serif font-light text-white mb-4 uppercase tracking-widest">Request Received</h3>
        <p className="text-zinc-400 font-light leading-relaxed">
          Thank you for your interest. A specialist from Napoli Catering Co. will contact you within 24 hours to schedule your live tasting demonstration.
        </p>
        <Button
          variant="outline"
          className="mt-8 border-white/10 text-white hover:bg-white/5 uppercase tracking-widest text-xs font-bold"
          onClick={() => setStatus('idle')}
        >
          Request another demo
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
      <div className="sm:col-span-2">
        <label htmlFor="business-name" className="block text-[10px] font-bold uppercase tracking-widest text-[#c5a059] mb-1">
          Business Name
        </label>
        <input
          type="text"
          name="business-name"
          id="business-name"
          required
          className="block w-full bg-transparent border-0 border-b border-white/10 py-2 text-white focus:ring-0 focus:outline-none focus:border-[#c5a059] transition-colors placeholder:text-zinc-600 font-light text-sm"
          placeholder="E.g. Amsterdam Sports Club"
        />
      </div>

      <div>
        <label htmlFor="location" className="block text-[10px] font-bold uppercase tracking-widest text-[#c5a059] mb-1">
          Address
        </label>
        <input
          type="text"
          name="location"
          id="location"
          required
          className="block w-full bg-transparent border-0 border-b border-white/10 py-2 text-white focus:ring-0 focus:outline-none focus:border-[#c5a059] transition-colors font-light text-sm"
        />
      </div>

      <div>
        <label htmlFor="industry" className="block text-[10px] font-bold uppercase tracking-widest text-[#c5a059] mb-1">
          Industry Type
        </label>
        <select
          id="industry"
          name="industry"
          className="block w-full bg-transparent border-0 border-b border-white/10 py-2 text-white focus:ring-0 focus:outline-none focus:border-[#c5a059] transition-colors font-light text-sm"
        >
          <option className="bg-zinc-900">Sports Club</option>
          <option className="bg-zinc-900">Catering Company</option>
          <option className="bg-zinc-900">Bar / Hospitality Venue</option>
          <option className="bg-zinc-900">Other</option>
        </select>
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="email" className="block text-[10px] font-bold uppercase tracking-widest text-[#c5a059] mb-1">
          Work Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          autoComplete="email"
          required
          className="block w-full bg-transparent border-0 border-b border-white/10 py-2 text-white focus:ring-0 focus:outline-none focus:border-[#c5a059] transition-colors font-light text-sm"
        />
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="contact-name" className="block text-[10px] font-bold uppercase tracking-widest text-[#c5a059] mb-1">
          Contact Name
        </label>
        <input
          type="text"
          name="contact-name"
          id="contact-name"
          required
          className="block w-full bg-transparent border-0 border-b border-white/10 py-2 text-white focus:ring-0 focus:outline-none focus:border-[#c5a059] transition-colors font-light text-sm"
        />
      </div>

      <div className="sm:col-span-2 mt-4">
        <label className="block text-[10px] font-bold uppercase tracking-widest text-[#c5a059] mb-4">
          Products of Interest
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { id: 'prod-bases', label: 'Sourdough Pizza Bases' },
            { id: 'prod-balls', label: 'Fresh Dough Balls' },
            { id: 'prod-ingredients', label: 'Italian Ingredients' },
            { id: 'prod-ovens', label: 'Professional Pizza Ovens' },
          ].map((product) => (
            <div key={product.id} className="flex items-center gap-3 group">
              <div className="relative flex items-center">
                <input
                  type="checkbox"
                  id={product.id}
                  name="products"
                  value={product.label}
                  className="peer h-5 w-5 appearance-none border border-white/10 rounded bg-white/5 checked:bg-[#c5a059] checked:border-[#c5a059] transition-all cursor-pointer focus:ring-0"
                />
                <svg
                  className="absolute h-3.5 w-3.5 text-zinc-950 pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity left-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={4}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <label
                htmlFor={product.id}
                className="text-sm font-light text-zinc-300 cursor-pointer group-hover:text-white transition-colors"
              >
                {product.label}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="sm:col-span-2 mt-8">
        <Button
          type="submit"
          disabled={status === 'loading'}
          variant="premium"
          className="w-full py-4 text-lg uppercase tracking-widest font-bold"
        >
          {status === 'loading' ? 'Processing...' : 'Book a Tasting Demo'}
        </Button>
        <p className="mt-4 text-center text-xs text-zinc-400 font-light">
          No obligation. We bring the equipment and ingredients to your location.
        </p>
      </div>
    </form>
  );
};
