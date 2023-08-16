import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { routeLoader$ } from "@builder.io/qwik-city";
import { DestinationView } from "@modules/destination/destination-view";
import { getDestinationBySlug } from "@services/api/destination";
import { NOT_FOUND_METADATA } from "@constants/metatag";
import { DestinationNotFound } from "@modules/destination/components/error/destination-not-found";

export const useDestinationDetails = routeLoader$(
  async ({ params, status }) => {
    const { destination: slug } = params;
    const destination = await getDestinationBySlug(slug);
    const destinationData = destination.DestinationBySlug;

    if (!destinationData) {
      status(404);
    }

    return destinationData;
  }
);

export default component$(() => {
  const destination = useDestinationDetails();

  if (!destination.value) {
    return <DestinationNotFound />;
  }

  return <DestinationView destination={destination} />;
});

export const head: DocumentHead = ({ resolveValue }) => {
  const destination = resolveValue(useDestinationDetails);

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
