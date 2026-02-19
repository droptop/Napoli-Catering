'use client';

import React from 'react';
import { BuilderComponent, builder } from '@builder.io/sdk-react-nextjs';
import { BUILDER_PUBLIC_API_KEY } from '@/lib/builder';

builder.init(BUILDER_PUBLIC_API_KEY);

interface BuilderPageProps {
  content: any;
  model: string;
  fallback: React.ReactNode;
}

export const BuilderPage: React.FC<BuilderPageProps> = ({ content, model, fallback }) => {
  // If we have content from Builder, render it
  if (content || builder.editingModel === model) {
    return <BuilderComponent content={content} model={model} />;
  }

  // Otherwise, render the hardcoded fallback
  return <>{fallback}</>;
};
