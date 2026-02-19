import { fetchOneEntry } from "@builder.io/sdk-react";
import RenderBuilderContent from "../components/builder";

const BUILDER_API_KEY = "a81fac9c3bae4b51ace81c3349c8dc9d";

export default async function Page({ params }: { params: Promise<{ page?: string[] }> }) {
  const resolvedParams = await params;
  const urlPath = "/" + (resolvedParams?.page?.join("/") || "");

  const content = await fetchOneEntry({
    model: "page",
    apiKey: BUILDER_API_KEY,
    userAttributes: {
      urlPath,
    },
  });

  return <RenderBuilderContent content={content} />;
}
