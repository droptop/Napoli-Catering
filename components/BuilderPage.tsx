'use client';
import React from 'react';
import { BuilderComponent } from '@builder.io/react';
import { BUILDER_PUBLIC_API_KEY } from '@/lib/builder';

interface BuilderPageProps {
  content: any;
  model: string;
  fallback: React.ReactNode;
}

export const BuilderPage: React.FC<BuilderPageProps> = ({ content, model, fallback }) => {
  if (content) {
    return <BuilderComponent content={content} model={model} apiKey={BUILDER_PUBLIC_API_KEY} />;
  }
  return <>{fallback}</>;
};
