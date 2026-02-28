import React from 'react';
import { Container } from '../ui/Container';

export const AnnouncementBar = () => {
  return (
    <div className="w-full bg-[#7E161E] text-white py-2.5 border-b border-white/10">
      <Container>
        <div className="flex items-center justify-center gap-3 sm:gap-4 text-center">
          <span className="text-2xl sm:text-3xl" role="img" aria-label="Netherlands flag">
            🇳🇱
          </span>
          <div className="h-4 w-px bg-white/30" />
          <p className="text-sm sm:text-lg font-semibold tracking-tight leading-tight">
            Napoli Catering Co. — Uw authentieke Napolitaanse pizzaspecialist, leverend door heel Nederland.
          </p>
        </div>
      </Container>
    </div>
  );
};
