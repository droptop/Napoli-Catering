'use client';

import React, { useState } from 'react';
import { Button } from './ui/Button';
import { trackEvent } from '@/lib/analytics';

export const ContactForm = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    
    // Track lead submission
    trackEvent('lead_submit', {
      form: 'contact_form',
    });

    // Simulate API call
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  if (status === 'success') {
    return (
      <div className="rounded-2xl bg-zinc-50 p-8 text-center border border-zinc-100">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600 mb-4">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-zinc-900">Request Received</h3>
        <p className="mt-2 text-zinc-600">
          Thank you for your interest. A commercial specialist from Napoli Catering Co. will contact you within 24 hours.
        </p>
        <Button 
          variant="outline" 
          className="mt-6" 
          onClick={() => setStatus('idle')}
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
      <div>
        <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-zinc-900">
          First name
        </label>
        <div className="mt-2.5">
          <input
            type="text"
            name="first-name"
            id="first-name"
            autoComplete="given-name"
            required
            className="block w-full rounded-md border-0 px-3.5 py-2 text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div>
        <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-zinc-900">
          Last name
        </label>
        <div className="mt-2.5">
          <input
            type="text"
            name="last-name"
            id="last-name"
            autoComplete="family-name"
            required
            className="block w-full rounded-md border-0 px-3.5 py-2 text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="company" className="block text-sm font-semibold leading-6 text-zinc-900">
          Company / Business name
        </label>
        <div className="mt-2.5">
          <input
            type="text"
            name="company"
            id="company"
            autoComplete="organization"
            required
            className="block w-full rounded-md border-0 px-3.5 py-2 text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="email" className="block text-sm font-semibold leading-6 text-zinc-900">
          Work Email
        </label>
        <div className="mt-2.5">
          <input
            type="email"
            name="email"
            id="email"
            autoComplete="email"
            required
            className="block w-full rounded-md border-0 px-3.5 py-2 text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="message" className="block text-sm font-semibold leading-6 text-zinc-900">
          Tell us about your needs
        </label>
        <div className="mt-2.5">
          <textarea
            name="message"
            id="message"
            rows={4}
            placeholder="E.g. I need a quote for 2 commercial ovens and weekly flour supply."
            className="block w-full rounded-md border-0 px-3.5 py-2 text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
            defaultValue={''}
          />
        </div>
      </div>
      <div className="sm:col-span-2">
        <Button
          type="submit"
          disabled={status === 'loading'}
          className="w-full"
        >
          {status === 'loading' ? 'Sending...' : 'Request a Quote'}
        </Button>
      </div>
    </form>
  );
};
