import React from 'react';
import { Container } from '../ui/Container';

export const AnnouncementBar = () => {
  return (
    <div className="w-full bg-[#AE1C28] text-white py-2.5 border-b border-white/10">
      <Container>
        <div className="flex items-center justify-center gap-3 sm:gap-4 text-center">
          <span className="text-xl" role="img" aria-label="Netherlands flag">
            🇳🇱
          </span>
          <div className="h-4 w-px bg-white/30" />
          <p className="text-sm sm:text-lg font-semibold tracking-tight leading-tight">
            Napoli Catering Co. levert door heel Nederland — <span className="font-medium opacity-90">wij zijn jouw lokale pizzaspecialist.</span>
          </p>
        </div>
      </Container>
    </div>
  );
};
