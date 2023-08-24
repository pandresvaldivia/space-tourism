import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { routeLoader$ } from "@builder.io/qwik-city";
import { NOT_FOUND_METADATA } from "@constants/metatag";
import { DestinationNotFound } from "@modules/destination/components/error/destination-not-found";
import { getTechnologyBySlug } from "@services/api/technology";
import { TechnologyView } from "@modules/technology/technology-view";

export const useTechnologyDetails = routeLoader$(async ({ params, status }) => {
  const { technology: slug } = params;
  const technology = await getTechnologyBySlug(slug);
  const technologyData = technology.TechnologyBySlug;

  if (!technologyData) {
    status(404);
  }

  return technologyData;
});

export default component$(() => {
  const technology = useTechnologyDetails();

  if (!technology.value) {
    // TODO: Add custom 404 page
    return <DestinationNotFound />;
  }

  return <TechnologyView technology={technology} />;
});

export const head: DocumentHead = ({ resolveValue }) => {
  const destination = resolveValue(useTechnologyDetails);

  if (!destination) {
    return NOT_FOUND_METADATA;
  }

  const { meta } = destination;
  const { title, description, image } = meta;
  const { url: thumbnail } = image;

  return {
    title: title,
    meta: [
      {
        name: "description",
        content: description,
      },
      {
        name: "og:title",
        content: title,
      },
      {
        name: "og:description",
        content: description,
      },
      {
        name: "og:image",
        content: thumbnail,
      },
    ],
  };
};
