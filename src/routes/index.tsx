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
      name: "og:title",
      content: "Space tourism",
    },
    {
      name: "og:description",
      content: DefaultMetadata.DESCRIPTION,
    },
    {
      name: "og:image",
      content: DefaultMetadata.IMAGE,
    },
  ],
};
