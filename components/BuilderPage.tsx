'use client';
import React from 'react';

interface BuilderPageProps {
  content: any;
  model: string;
  fallback: React.ReactNode;
}

export const BuilderPage: React.FC<BuilderPageProps> = ({ content, fallback }) => {
  if (content) {
    return <div>{/* Builder content */}</div>;
  }
  return <>{fallback}</>;
};
