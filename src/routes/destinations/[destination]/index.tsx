import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { routeLoader$ } from "@builder.io/qwik-city";
import { DestinationView } from "@modules/destination/destination-view";
import { useDestinationProvider } from "@modules/destination/providers/destination";
import { getDestinationBySlug } from "~/core/services/api/destination";

export const useDestinationDetails = routeLoader$(async (event) => {
  const { destination: slug } = event.params;
  const destination = await getDestinationBySlug(slug);

  // TODO: Redirect to 404 if destination is not found

  return destination;
});

export default component$(() => {
  const destination = useDestinationDetails();

  useDestinationProvider(destination);

  const { errors, data } = destination.value;

  if (errors || !data) {
    return <div>Loading...</div>;
  }

  return <DestinationView />;
});

export const head: DocumentHead = ({ resolveValue }) => {
  const destination = resolveValue(useDestinationDetails);
  const { data, errors } = destination;

  if (errors || !data) return {};

  const { title, description, image } = data.DestinationBySlug.meta;
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
