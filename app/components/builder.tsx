"use client";

import { Content, isPreviewing } from "@builder.io/sdk-react";

const BUILDER_API_KEY = "a81fac9c3bae4b51ace81c3349c8dc9d";

interface BuilderPageProps {
  content: any;
}

export default function RenderBuilderContent({ content }: BuilderPageProps) {
  if (content || isPreviewing()) {
    return <Content content={content} model="page" apiKey={BUILDER_API_KEY} />;
  }

  return <div>Page not found</div>;
}
