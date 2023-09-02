import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { HomeView } from "@modules/home/home-view";
import { DefaultMetadata } from "@constants/metatag";

export default component$(() => {
  return <HomeView />;
});

export const head: DocumentHead = {
  title: DefaultMetadata.TITLE,
  meta: [
    {
      name: "description",
      content: DefaultMetadata.DESCRIPTION,
    },
    {
      property: "og:title",
      content: DefaultMetadata.TITLE,
    },
    {
      property: "og:description",
      content: DefaultMetadata.DESCRIPTION,
    },
    {
      property: "og:image",
      content: DefaultMetadata.IMAGE,
    },
    {
      property: "twitter:card",
      content: "summary_large_image",
    },
    {
      property: "twitter:title",
      content: DefaultMetadata.TITLE,
    },
    {
      property: "twitter:description",
      content: DefaultMetadata.DESCRIPTION,
    },
    {
      property: "twitter:image",
      content: DefaultMetadata.IMAGE,
    },
  ],
};
